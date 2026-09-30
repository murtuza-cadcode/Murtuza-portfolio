"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { localePath, stripLocale, type Locale } from "@/i18n";

const LANGS: { code: Locale; name: string }[] = [
  { code: "en", name: "English" },
  { code: "de", name: "Deutsch" },
];

function Flag({ code }: { code: Locale }) {
  return (
    <svg className="flag" viewBox="0 0 24 16" aria-hidden>
      {code === "de" ? (
        <>
          <rect width="24" height="5.34" fill="#000" />
          <rect y="5.33" width="24" height="5.34" fill="#d00" />
          <rect y="10.66" width="24" height="5.34" fill="#ffce00" />
        </>
      ) : (
        <>
          <rect width="24" height="16" fill="#012169" />
          <path d="M0 0l24 16M24 0L0 16" stroke="#fff" strokeWidth="3.2" />
          <path d="M0 0l24 16M24 0L0 16" stroke="#c8102e" strokeWidth="1.2" />
          <path d="M12 0v16M0 8h24" stroke="#fff" strokeWidth="5.2" />
          <path d="M12 0v16M0 8h24" stroke="#c8102e" strokeWidth="3" />
        </>
      )}
    </svg>
  );
}

/** `inline` lists both languages as pills (mobile menu); otherwise a flag dropdown. */
export function LocaleSwitcher({ locale, pathname, label, inline }: { locale: Locale; pathname: string; label: string; inline?: boolean }) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent | KeyboardEvent) => {
      if (e instanceof KeyboardEvent ? e.key === "Escape" : !root.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", close);
    };
  }, [open]);

  const options = LANGS.map(({ code, name }) => (
    <Link
      key={code}
      className="lang-opt"
      href={localePath(code, stripLocale(pathname))}
      hrefLang={code}
      lang={code}
      aria-current={code === locale ? "true" : undefined}
      onClick={() => setOpen(false)}
    >
      <Flag code={code} />
      <span>{inline ? code.toUpperCase() : name}</span>
    </Link>
  ));

  if (inline) return <div className="lang-row" role="group" aria-label={label}>{options}</div>;

  return (
    <div className="lang-switch" ref={root}>
      <button className="lang-btn" aria-label={label} aria-haspopup="true" aria-expanded={open} onClick={() => setOpen(!open)}>
        <Flag code={locale} />
        <span>{locale.toUpperCase()}</span>
        <svg className="chev" viewBox="0 0 10 6" aria-hidden><path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.3" /></svg>
      </button>
      {open && <div className="lang-menu">{options}</div>}
    </div>
  );
}
