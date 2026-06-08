import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Romain Baudry",
  description: "Director, Editor, Content Creator & DJ",
  openGraph: {
    title: "Romain Baudry",
    description: "Director, Editor, Content Creator & DJ",
    url: "https://romainbaudry.fr",
    siteName: "Romain Baudry",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://romainbaudry.fr/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Romain Baudry",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Romain Baudry",
    description: "Director, Editor, Content Creator & DJ",
    images: ["https://romainbaudry.fr/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
