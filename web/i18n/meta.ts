import type { Metadata } from "next";
import { dicts, localePath, type Locale } from "./index";

type Page = keyof (typeof dicts)["en"]["meta"]["titles"];
const PATHS: Record<Page, string> = { home: "/", work: "/workexperience", extra: "/extracurricular", projects: "/projects", hobbies: "/hobbies" };

/** Per-page metadata with hreflang alternates. Home keeps the bare site title; the layout template adds the suffix elsewhere. */
export function pageMeta(locale: Locale, page: Page): Metadata {
  const path = PATHS[page];
  return {
    ...(page === "home" ? {} : { title: dicts[locale].meta.titles[page] }),
    alternates: {
      canonical: localePath(locale, path),
      languages: { en: localePath("en", path), de: localePath("de", path) },
    },
  };
}
