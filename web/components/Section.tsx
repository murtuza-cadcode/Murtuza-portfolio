import type { CSSProperties, ReactNode } from "react";
import { url } from "./url";

type Theme = "default" | "white" | "light" | "light-bold" | "dark";

type Divider = {
  /** Edge shape in a 0..1 box spanning the full width and the divider height. */
  path: string;
  /** Height of the divider band, e.g. "6vw". */
  height: string;
  /** Stroke thickness in px. */
  stroke: number;
  /** Background of the following section, painted below the edge. */
  nextBg: string;
};

type Props = {
  id?: string;
  theme?: Theme;
  /** min-height in vh; padding scales with it (Squarespace: pad = minHeight / 10 in vmax). */
  minH?: number;
  /** Top-aligned section with no min-height (content starts right below the top edge). */
  top?: boolean;
  /** First section on the page: pushes content below the fixed header. */
  first?: boolean;
  bgImage?: { src: string; position?: string };
  divider?: Divider;
  /** Grid rows on mobile / desktop. */
  rows: { m: number; d: number };
  gap?: number;
  rowScale?: number;
  children: ReactNode;
};

export function Section({ id, theme = "default", minH = 33, top, first, bgImage, divider, rows, gap = 11, rowScale = 0.0215, children }: Props) {
  const style = {
    "--min-h": top ? "0" : `${minH}vh`,
    "--pad": `${minH / 10}vmax`,
    ...(divider && { "--dh": divider.height }),
  } as CSSProperties;
  const grid = { "--rows-m": rows.m, "--rows-d": rows.d, "--gap": `${gap}px`, "--row-scale": rowScale } as CSSProperties;

  return (
    <section
      id={id}
      className={["section", `theme-${theme}`, top && "top", first && "first", divider && "has-divider"].filter(Boolean).join(" ")}
      style={style}
    >
      {bgImage && (
        <div className="section-bg">
          <img src={url(bgImage.src)} alt="" style={{ objectPosition: bgImage.position }} />
        </div>
      )}
      <div className="content">
        <div className="grid" style={grid}>
          {children}
        </div>
      </div>
      {divider && (
        <svg className="divider" viewBox="0 0 1 1" preserveAspectRatio="none" aria-hidden>
          <path d={`${divider.path} L3,1.02 L-2,1.02 Z`} fill={divider.nextBg} />
          <path className="stroke" d={divider.path} strokeWidth={divider.stroke} />
        </svg>
      )}
    </section>
  );
}

type BlockProps = {
  /** grid-area on mobile / desktop, e.g. "1/2/3/10". */
  m: string;
  d: string;
  z?: number;
  /** Vertical alignment within the area on mobile / desktop. */
  jm?: "flex-start" | "center" | "flex-end";
  jd?: "flex-start" | "center" | "flex-end";
  className?: string;
  children: ReactNode;
};

export function Block({ m, d, z, jm, jd, className, children }: BlockProps) {
  const style = { "--m": m, "--d": d, "--z": z, "--jm": jm, "--jd": jd } as CSSProperties;
  return (
    <div className={className ? `block ${className}` : "block"} style={style}>
      {children}
    </div>
  );
}
