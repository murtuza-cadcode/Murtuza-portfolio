import { de } from "./de";
import { en, type Dict } from "./en";

export type Locale = "en" | "de";
export const dicts: Record<Locale, Dict> = { en, de };

/** Render `**bold**` markup as <strong>. */
export const rich = (s: string) => s.split("**").map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part));

/** Site path for a locale: English lives at the root, German under /de. */
export const localePath = (locale: Locale, path: string) => (locale === "de" ? `/de${path === "/" ? "" : path}` : path);

/** Strip a leading /de so a pathname can be re-targeted at another locale. */
export const stripLocale = (pathname: string) => pathname.replace(/^\/de(?=\/|$)/, "") || "/";
