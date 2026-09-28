import type { Metadata } from "next";
import { Manrope, Poppins } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const heading = Manrope({ subsets: ["latin"], weight: ["500"], variable: "--font-heading" });
const body = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"], style: ["normal", "italic"], variable: "--font-body" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.syedmurtuzaquadri.com"),
  title: { default: "SYED", template: "%s — SYED" },
  description: "Syed Murtuza Quadri — mechanical engineer specializing in automotive and robotics applications.",
  openGraph: { images: "/images/bmw.jpg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`} data-scroll-behavior="smooth">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
