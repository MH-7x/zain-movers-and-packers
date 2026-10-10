import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";

import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyMobileBar from "@/components/layout/StickyMobileBar";
import WhatsAppFloat from "@/components/shared/WhatsAppFloat";
import { generateLocalBusinessSchema, jsonLdProps } from "@/lib/Schema";
import { MetadataTemplate } from "@/lib/MetadataTemplate";
import { Metadata } from "next";
import GTM from "../components/GTM";

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

export const metadata: Metadata = {
  applicationName: "Zain Movers and Packers",
  robots: {
    "max-image-preview": "large",
    follow: true,
    googleBot: {
      notranslate: true,
      "max-image-preview": "large",
      index: true,
      follow: true,
    },
    index: true,
    notranslate: true,
  },
  icons: {
    icon: [
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/icons/apple-touch-icon.png",
    shortcut: "/icons/favicon-32x32.png",
  },
};

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
        <GTM />
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
