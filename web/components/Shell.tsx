import { Manrope, Poppins } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import type { Locale } from "@/i18n";
import "@/app/globals.css";

const heading = Manrope({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-heading" });
const body = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"], style: ["normal", "italic"], variable: "--font-body" });

export function Shell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <html lang={locale} className={`${heading.variable} ${body.variable}`} data-scroll-behavior="smooth">
      <body>
        <Header locale={locale} />
        <main>{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
