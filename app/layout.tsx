import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Momint | Collect Your Favorite Moments",
  description: "The premier marketplace for creators to mint, sell, and preserve their legacy. Join the next evolution of the creator economy.",
  keywords: ["NFT", "creator economy", "digital assets", "blockchain", "moments", "collectibles"],
  authors: [{ name: "Momint" }],
  creator: "Momint",
  publisher: "Momint",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://momint.com",
    title: "Momint | Collect Your Favorite Moments",
    description: "The premier marketplace for creators to mint, sell, and preserve their legacy. Join the next evolution of the creator economy.",
    siteName: "Momint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Momint | Collect Your Favorite Moments",
    description: "The premier marketplace for creators to mint, sell, and preserve their legacy. Join the next evolution of the creator economy.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} bg-surface text-slate-800 font-sans antialiased overflow-x-hidden selection-purple`}>
        {children}
      </body>
    </html>
  );
}

