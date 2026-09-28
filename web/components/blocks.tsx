import type { ReactNode } from "react";
import { url } from "./url";

type MediaProps = {
  src: string;
  alt?: string;
  /** "contain" shows the whole image; "cover" crops to fill the block. */
  fit?: "contain" | "cover";
  /** object-position, e.g. "50% 50%". */
  position?: string;
  radius?: string;
  href?: string;
  /** Crop to the largest centered circle. */
  circle?: boolean;
};

export function Img({ src, alt = "", fit = "cover", position, radius, href, circle }: MediaProps) {
  const img = <img src={url(src)} alt={alt} loading="lazy" decoding="async" style={{ objectFit: fit, objectPosition: position }} />;
  return (
    <div className={circle ? "media circle" : "media"} style={{ borderRadius: radius }}>
      {href ? <a href={url(href)}>{img}</a> : img}
    </div>
  );
}

/** Silent looping clip in a player box of the given aspect ratio, centered in the block. */
export function Video({ src, poster, aspect, fit = "contain", position, radius }: MediaProps & { poster?: string; aspect: string }) {
  return (
    <div className="media" style={{ borderRadius: radius, height: "auto", aspectRatio: aspect }}>
      <video src={url(src)} poster={poster && url(poster)} autoPlay muted loop playsInline preload="metadata" style={{ objectFit: fit, objectPosition: position }} />
    </div>
  );
}

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary";
  /** Stretch to fill the whole block. */
  fill?: boolean;
  newTab?: boolean;
  children: ReactNode;
};

export function Button({ href, variant = "primary", fill, newTab, children }: ButtonProps) {
  return (
    <div className="btn-wrap" style={fill ? { height: "100%" } : undefined}>
      <a
        className={`btn ${variant}${fill ? " fill" : ""}`}
        href={url(href)}
        {...(newTab && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {children}
      </a>
    </div>
  );
}

export function Rule() {
  return <hr className="rule" />;
}

export function Shape({ fill }: { fill: string }) {
  return <div className="shape" style={{ background: fill }} />;
}

/** One item open at a time, via the native exclusive <details name> group. */
export function Accordion({ name, items }: { name: string; items: { title: string; body: ReactNode }[] }) {
  return (
    <div className="accordion">
      {items.map((item) => (
        <details key={item.title} name={name}>
          <summary className="small">
            <span>{item.title}</span>
            <span className="plus" aria-hidden />
          </summary>
          <div className="body text small">{item.body}</div>
        </details>
      ))}
    </div>
  );
}
