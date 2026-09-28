/** Prefix site-root paths with the deploy base path (e.g. "/Murtuza-portfolio" on GitHub Pages). */
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const url = (path: string) => (path.startsWith("/") ? base + path : path);
