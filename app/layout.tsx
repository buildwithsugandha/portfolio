import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sugandh Sharma | Network & Cloud DevOps Engineer | SRE Enthusiast",
  description:
    "Sugandh Sharma – Network Engineer transitioning into Cloud, DevOps, and Site Reliability Engineering. Skilled in AWS, Azure, Kubernetes, Terraform, and automation. Based in India.",
  keywords: [
    "Sugandh Sharma",
    "Network Engineer",
    "DevOps Engineer",
    "Cloud Engineer",
    "SRE",
    "Site Reliability Engineering",
    "AWS",
    "Azure",
    "Kubernetes",
    "Terraform",
    "India",
  ],
  authors: [{ name: "Sugandh Sharma" }],
  creator: "Sugandh Sharma",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sugandhsharma.dev",
    title: "Sugandh Sharma | Network & Cloud DevOps Engineer",
    description:
      "Network Engineer transitioning to Cloud, DevOps, and SRE. Building reliable, automated infrastructure at scale.",
    siteName: "Sugandh Sharma Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sugandh Sharma – DevOps & SRE Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sugandh Sharma | DevOps & SRE Engineer",
    description:
      "Network Engineer transitioning to Cloud, DevOps, and SRE. Building reliable, automated infrastructure at scale.",
    images: ["/og-image.png"],
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://sugandhsharma.dev" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans bg-dark-950 text-white antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
