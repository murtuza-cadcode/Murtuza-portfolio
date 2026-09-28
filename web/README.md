# Syed Murtuza Quadri — portfolio

Next.js rebuild of the original Squarespace site, exported as static files.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # writes the static site to ./out
```

Deploy by uploading `out/` to any static host (Netlify, Cloudflare Pages, GitHub Pages), or import this folder into Vercel.

## Editing

- Page content lives in `app/<page>/page.tsx` (home is `app/page.tsx`); header in `components/Header.tsx`, footer in `components/Footer.tsx`.
- Each page is a stack of `<Section>`s. Inside, every `<Block m="…" d="…">` is placed on the layout grid: `m` is its grid-area on mobile (8 columns), `d` on desktop (24 columns), written `rowStart/colStart/rowEnd/colEnd`. Column 1 and the last column are the page margins.
- Media: `<Img>`, `<Video>` (silent loop), `<Button>`, `<Rule>`, `<Shape>`, `<Accordion>` in `components/blocks.tsx`.
- Files: images in `public/images`, videos in `public/videos`, PDFs in `public/s` (served at `/s/…`, same URLs as before).
- Colors, fonts, and the type scale are CSS variables at the top of `app/globals.css`.
