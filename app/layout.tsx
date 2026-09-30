import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";

import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyMobileBar from "@/components/layout/StickyMobileBar";
import WhatsAppFloat from "@/components/shared/WhatsAppFloat";
import { generateLocalBusinessSchema, jsonLdProps } from "@/lib/Schema";
import { MetadataTemplate } from "@/lib/MetadataTemplate";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  preload: true,
});

const fontSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  preload: true,
});

export const metadata = MetadataTemplate({
  title:
    "Movers and Packers in Dubai | Zain Movers – Licensed & Trusted",
  desc: "Zain Movers and Packers — professional moving services in Dubai. Licensed company, 10+ years experience, no hidden charges. Call +971-55-4495331 for a free quote.",
  path: "/",
  image: {
    path: "/zain-movers-and-packers.jpg",
    alt: "Zain Movers and Packers crew loading a closed moving truck in Dubai",
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body
        className={`${fontSans.variable} ${fontSerif.variable} ${fontSans.className} flex min-h-screen flex-col bg-background text-foreground antialiased`}
      >
        <script {...jsonLdProps(generateLocalBusinessSchema())} />
        <TopBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <StickyMobileBar />
      </body>
    </html>
  );
}
