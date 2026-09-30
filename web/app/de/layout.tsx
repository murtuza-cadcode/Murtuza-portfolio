import type { Metadata } from "next";
import { Shell } from "@/components/Shell";
import { dicts } from "@/i18n";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.syedmurtuzaquadri.com"),
  title: { default: "SYED", template: "%s — SYED" },
  description: dicts.de.meta.description,
  openGraph: { images: "/images/bmw.jpg" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Shell locale="de">{children}</Shell>;
}
