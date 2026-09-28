#!/usr/bin/env python3
"""Mirror the Squarespace site into ./src as a self-hosted static site.

Usage: python3 mirror.py            (re-run any time the Squarespace site changes)
Serve:  python3 -m http.server -d src 8000
"""
import os, re, sys, urllib.parse, urllib.request
from concurrent.futures import ThreadPoolExecutor

SITE = "https://eagle-clavichord-jmrx.squarespace.com"
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "src")
CDN_HOSTS = [
    "assets.squarespace.com", "definitions.sqspcdn.com", "static1.squarespace.com",
    "images.squarespace-cdn.com", "file.squarespace-cdn.com",
]
EXTRA = [l.strip() for l in open(os.path.join(os.path.dirname(OUT), "extra-urls.txt"))
         if l.strip() and not l.startswith("#")] if os.path.exists(os.path.join(os.path.dirname(OUT), "extra-urls.txt")) else []
VIDEO_HOST = "video.squarespace-cdn.com"  # HLS; rewritten like the rest, fetched by mirror_video()
HOST_RE = "|".join(re.escape(h) for h in CDN_HOSTS + [VIDEO_HOST])
CDN_URL = re.compile(r'(?:https?:)?//(' + HOST_RE + r')(/[^"\'\s)<>\\&]*)')
UA = {"User-Agent": "Mozilla/5.0 (Macintosh) AppleWebKit/537.36 Chrome/128 Safari/537.36"}


def fetch(url):
    with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60) as r:
        return r.read()


def local_path(host, path):
    """assets/<host>/<decoded path>, query dropped (static hosts ignore it)."""
    p = urllib.parse.unquote(path.split("?")[0].split("#")[0])
    if p.endswith("/"):
        p += "index"
    return os.path.join("assets", host, p.lstrip("/"))


todo = {}  # local path -> remote url
videos = set()  # /content/v1/<site>/<video id>


def save(rel, data):
    dest = os.path.join(OUT, rel)
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    with open(dest, "wb" if isinstance(data, bytes) else "w") as f:
        f.write(data)


def mirror_video(vpath):
    """Copy one HLS video (best video rendition + audio) with relative URIs.
    Segments stay AES-encrypted; the key file is copied alongside so players decrypt as before."""
    base = f"https://{VIDEO_HOST}{vpath}"
    rel = f"assets/{VIDEO_HOST}{vpath}"
    master = fetch(base + "/playlist.m3u8").decode()
    save(rel + "/thumbnail", fetch(base + "/thumbnail"))
    variants = re.findall(r'#EXT-X-STREAM-INF:[^\n]*RESOLUTION=(\d+)x(\d+)[^\n]*\n(\S+)', master)
    best = max(variants, key=lambda v: int(v[0]) * int(v[1]))
    head = [l for l in master.splitlines() if l.startswith(("#EXTM3U", "#EXT-X-VERSION", "#EXT-X-MEDIA"))]
    inf = re.search(r'#EXT-X-STREAM-INF:[^\n]*\n' + re.escape(best[2]), master).group(0).splitlines()[0]
    media_urls = [best[2]] + re.findall(r'URI="([^"]+\.m3u8[^"]*)"', master)

    def local_name(url):  # ':' in names breaks relative URL parsing
        return url.split("?")[0].rsplit("/", 1)[1].replace(":", "x")

    for url in media_urls:
        pl = fetch(url).decode()
        for u in set(re.findall(r'https://[^"\s]*/key/[^"\s]*', pl)):
            save(f"{rel}/key/{local_name(u)}", fetch(u))
            pl = pl.replace(u, "../key/" + local_name(u))
        # Split byte-range segments into their own files so no host needs HTTP Range support.
        blobs, lines, rng, off = {}, [], None, 0
        for line in pl.splitlines():
            if line.startswith("#EXT-X-BYTERANGE:"):
                n, _, o = line.split(":", 1)[1].partition("@")
                rng = (int(n), int(o) if o else off)
                continue
            if line.startswith("https://"):
                if line not in blobs:
                    blobs[line] = fetch(line)
                data = blobs[line]
                if rng:
                    data, off = data[rng[1]:rng[1] + rng[0]], rng[1] + rng[0]
                    rng = None
                line = f"{local_name(line)}-{len(lines)}.ts"
                save(f"{rel}/segments/{line}", data)
            lines.append(line)
        save(f"{rel}/segments/{local_name(url)}", "\n".join(lines) + "\n")
    out = "\n".join(head + [inf, "segments/" + local_name(best[2])]) + "\n"
    for u in media_urls[1:]:
        out = out.replace(u, "segments/" + local_name(u))
    save(rel + "/playlist.m3u8", out)


def collect(text):
    for m in CDN_URL.finditer(text):
        host, path = m.group(1), m.group(2).replace("&amp;", "&")
        if host == VIDEO_HOST:
            vid = re.match(r"(/content/v1/[^/]+/[^/]+)/", path)
            if vid:
                videos.add(vid.group(1))
            continue
        lp = local_path(host, path)
        if lp in todo:
            continue
        base = f"https://{host}{path.split('?')[0].split('#')[0]}"
        # Cap huge original uploads at 2500px; Squarespace resizes server side.
        if host == "images.squarespace-cdn.com" and not re.search(r"\.(gif|svg)$", base, re.I):
            base += "?format=2500w"
        todo[lp] = base


def rewrite_html(html):
    html = CDN_URL.sub(lambda m: "assets/" + m.group(1) + m.group(2), html)
    # internal links: /page -> page.html, / -> index.html, /s/file.pdf -> s/file.pdf
    def link(m):
        attr, path = m.group(1), m.group(2)
        if path.startswith("/s/"):
            return f'{attr}="{path[1:]}"'
        slug, _, frag = path.partition("#")
        slug = slug.strip("/")
        target = (slug + ".html") if slug else "index.html"
        return f'{attr}="{target}{"#" + frag if frag else ""}"'
    own = r'(?:https?:)?//(?:www\.syedmurtuzaquadri\.com|' + re.escape(SITE.split("//")[1]) + ')'
    html = re.sub(r'<a([^>]*) href="' + own + r'/?', r'<a\1 href="/', html)  # own-domain links -> root-relative
    return re.sub(r'(href)="(/(?!/)[^"]*)"', link, html)


def main():
    os.makedirs(OUT, exist_ok=True)
    pages, seen = ["/"], {"/"}
    files = set()
    while pages:
        page = pages.pop()
        html = fetch(SITE + page).decode("utf-8")
        for href in re.findall(r'href="(/(?!/)[^"#?]*)', html):
            if href.startswith("/s/"):
                files.add(href)
            elif href not in seen and href not in ("/cart",) and not href.startswith("/account"):
                seen.add(href); pages.append(href)
        collect(html)
        name = (page.strip("/") or "index") + ".html"
        with open(os.path.join(OUT, name), "w", encoding="utf-8") as f:
            f.write(rewrite_html(html))
        print("page", page, "->", name)

    for f in files:
        todo[f.lstrip("/")] = SITE + f
    for u in EXTRA:
        collect(u)

    done = set()
    while True:
        batch = [lp for lp in todo if lp not in done]
        if not batch:
            break

        def dl(lp):
            dest = os.path.join(OUT, lp)
            if not os.path.exists(dest):
                try:
                    data = fetch(todo[lp])
                except Exception as e:
                    try:  # format param unsupported for some files: fall back to raw
                        data = fetch(todo[lp].split("?")[0])
                    except Exception:
                        print("FAIL", todo[lp], e, file=sys.stderr)
                        return
                os.makedirs(os.path.dirname(dest), exist_ok=True)
                with open(dest, "wb") as f:
                    f.write(data)
            if lp.endswith(".js"):  # webpack runtime hardcodes the CDN as chunk base; pages all sit at root
                js = open(dest, encoding="utf-8", errors="surrogateescape").read()
                new = js.replace('"https://assets.squarespace.com/universal/', '"assets/assets.squarespace.com/universal/')
                # video player: absolute playlist URL, and resolve our relative playlist paths before it
                # hands the playlist to hls.js as a blob: URL (relative paths can't resolve against blob:)
                new = new.replace('B(l.alexandriaUrl,"playlist.m3u8")',
                                  'new URL(B(l.alexandriaUrl,"playlist.m3u8"),document.baseURI).href')
                new = new.replace('return new Blob([e.data],{type:"text/plain"})',
                                  'return new Blob([String(e.data).replace(/(URI=")?(segments\\/[^"\\s]+)/g,'
                                  'function(m,q,p){return(q||"")+new URL(p,e.request.responseURL).href})],{type:"text/plain"})')
                # template bundle lazy-loads section dividers, backgrounds, lightbox... grab every visitor chunk
                m = re.search(r'"scripts/"\+\((\{[^}]*\})\[e\]\|\|e\)\+"\."\+(\{[^}]*\})\[e\]\+"\.js"', js)
                if m:
                    names = dict(re.findall(r'(\d+):"([^"]+)"', m.group(1)))
                    root = todo[lp].split("/scripts/")[0]
                    for cid, h in re.findall(r'(\d+):"([^"]+)"', m.group(2)):
                        if "editor" not in names.get(cid, ""):
                            collect(f"{root}/scripts/{names.get(cid, cid)}.{h}.js")
                if new != js:
                    open(dest, "w", encoding="utf-8", errors="surrogateescape").write(new)
            if lp.endswith(".css"):  # pull fonts/images referenced by CSS, point them local
                css = open(dest, encoding="utf-8", errors="replace").read()
                collect(css)
                rel = os.path.relpath(os.path.join(OUT, "assets"), os.path.dirname(dest))
                new = CDN_URL.sub(lambda m: f"{rel}/{m.group(1)}{m.group(2)}", css)
                if new != css:
                    open(dest, "w", encoding="utf-8").write(new)

        with ThreadPoolExecutor(16) as ex:
            list(ex.map(dl, batch))
        done.update(batch)
    for v in videos:
        mirror_video(v)
    print(f"{len(seen)} pages, {len(done)} assets, {len(videos)} videos -> {OUT}")


if __name__ == "__main__":
    main()
