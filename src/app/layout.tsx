import "./globals.css";
import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.grantgouldmedia.com"),

  title: {
    default: "Grant Gould Media",
    template: "%s | Grant Gould Media",
  },

  description:
    "Story-driven media for communities, businesses, and real stories near Granville, New York and nearby Vermont.",

  keywords: [
    "Grant Gould Media",
    "Grant Gould",
    "Granville NY media",
    "Granville New York media",
    "Vermont media services",
    "drone visuals",
    "drone video",
    "short-form content",
    "promotional videos",
    "local business media",
    "community storytelling",
    "documentary-style media",
    "Granville Stories",
    "Grant You a Story",
  ],

  authors: [{ name: "Grant Gould" }],
  creator: "Grant Gould",
  publisher: "Grant Gould Media",

  openGraph: {
    title: "Grant Gould Media",
    description:
      "Story-driven media for communities, businesses, and real stories near Granville, New York and nearby Vermont.",
    url: "https://www.grantgouldmedia.com",
    siteName: "Grant Gould Media",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Grant Gould Media",
    description:
      "Story-driven media for communities, businesses, and real stories near Granville, New York and nearby Vermont.",
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${plusJakarta.variable} bg-charcoal-900 text-white antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}