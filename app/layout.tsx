import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "Evoc Labs – Scaling D2C with Technology",
  description:
    "Evoc Labs is a technology company building proprietary performance systems and software for D2C brand growth. Scale profitably with our data-driven tech and performance infrastructure.",
  keywords:
    "Evoc Labs, e-commerce software, growth technology, performance marketing systems, D2C growth tech, ad management software, performance infrastructure, e-commerce data systems",
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Evoc Labs – Scaling D2C with Technology",
    description:
      "We build proprietary performance systems and software to scale D2C brands profitably. Data-driven growth technology with zero guesswork.",
    url: "https://evoclabs.com/",
    images: ["https://i.postimg.cc/3wWLDB2q/Instagram-story-16.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evoc Labs – E-Commerce Technology & Growth",
    description:
      "Proprietary tech-driven performance systems for modern D2C brands. Built for profitability and scale.",
    images: ["https://i.postimg.cc/3wWLDB2q/Instagram-story-16.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-background text-text-main font-sans selection:bg-primary/30 selection:text-primary-hover`}
      >
        {children}
      </body>
    </html>
  );
}
