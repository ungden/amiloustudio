import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ToastContainer } from "@/components/ui/Toast";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://amiloustudio.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AMILOU STUDIO | Modern Minimalist Fashion",
    template: "%s | AMILOU STUDIO",
  },
  description:
    "Discover AMILOU STUDIO — modern minimalist fashion designed for longevity. Shop women's, men's clothing and accessories inspired by architecture and contemporary art.",
  keywords: ["fashion", "minimalist", "modern", "clothing", "women", "men", "sustainable"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "AMILOU STUDIO",
    title: "AMILOU STUDIO | Modern Minimalist Fashion",
    description:
      "Modern minimalist fashion designed for longevity. Inspired by architecture and contemporary art.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AMILOU STUDIO",
    description: "Modern minimalist fashion designed for longevity.",
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
        className={`${inter.variable} antialiased bg-background text-foreground flex flex-col min-h-screen`}
      >
        {/* Skip to content for keyboard a11y */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-brand focus:border focus:border-brand"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-grow pt-[92px]">
          {children}
        </main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
