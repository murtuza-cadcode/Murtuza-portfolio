"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { dicts, localePath, type Locale } from "@/i18n";
import { LocaleSwitcher } from "./LocaleSwitcher";

const NAV = [
  { href: "/workexperience", key: "work" },
  { href: "/extracurricular", key: "extra" },
  { href: "/projects", key: "projects" },
  { href: "/hobbies", key: "hobbies" },
] as const;
const LINKEDIN = "https://www.linkedin.com/in/syed-murtuza-quadri/";
const RESUME = "https://drive.google.com/file/d/1uZ-SuKcYBw3EExx6OpNwvVB3XBQzYD67/view?usp=sharing";

export function Header({ locale }: { locale: Locale }) {
  const t = dicts[locale].common;
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const links = NAV.map(({ href, key }) => {
    const to = localePath(locale, href);
    return (
      <Link key={href} href={to} aria-current={pathname === to ? "page" : undefined}>
        {t.nav[key]}
      </Link>
    );
  });

  return (
    <header className={open ? "header open" : "header"}>
      <div className="header-inner">
        <button className="burger" aria-label={open ? t.closeMenu : t.openMenu} aria-expanded={open} onClick={() => setOpen(!open)}>
          <span />
          <span />
        </button>
        <Link href={localePath(locale, "/")} className="site-title">
          SYED
        </Link>
        <nav className="nav">{links}</nav>
        <div className="actions">
          <LocaleSwitcher locale={locale} pathname={pathname} label={t.language} />
          <a className="social" href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a className="btn primary resume" href={RESUME} target="_blank" rel="noopener noreferrer">
            {t.resume}
          </a>
        </div>
      </div>
      <nav className="menu" aria-hidden={!open}>
        {links}
        <LocaleSwitcher locale={locale} pathname={pathname} label={t.language} inline />
        <a className="btn" href={RESUME} target="_blank" rel="noopener noreferrer">
          {t.resume}
        </a>
      </nav>
    </header>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="13.4 13.4 37.2 37.2" aria-hidden>
      <path d="M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z" />
    </svg>
  );
}
