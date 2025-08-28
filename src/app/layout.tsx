import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MDX Editor & Viewer - Complete Guide",
  description:
    "Learn how to build a complete MDX editor and viewer with Next.js. Comprehensive tutorial covering MDX concepts, plugins, and practical implementation.",
  keywords: [
    "MDX",
    "MDX Editor",
    "Next.js",
    "React",
    "Markdown",
    "Technical Writing",
    "Blog Development",
    "Content Management",
  ],
  authors: [{ name: "Mohamad Haqnegahdar" }],
  creator: "Mohamad Haqnegahdar",
  openGraph: {
    title: "MDX Editor & Viewer - Complete Guide",
    description:
      "Build a complete MDX editor and viewer with Next.js. Learn core concepts, plugins, and implementation.",
    type: "article",
    locale: "en_US",
    siteName: "MDX Tutorial",
  },
  twitter: {
    card: "summary_large_image",
    title: "MDX Editor & Viewer - Complete Guide",
    description:
      "Build a complete MDX editor and viewer with Next.js. Learn core concepts, plugins, and implementation.",
    creator: "@mhaqnegahdar",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
