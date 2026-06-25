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

const BASE_URL = "https://portfolio-sigma-three-ja7phcdxpl.vercel.app";

export const metadata: Metadata = {
  title: "Sugandha Vashishtha | Cloud & Site Reliability Engineer",
  description:
    "Cloud and Site Reliability Engineer with 9+ years of experience in AWS, Azure, incident management, SRE, infrastructure automation, and enterprise cloud operations. Based in Noida, India.",
  keywords: [
    "Sugandha Vashishtha",
    "Cloud Engineer",
    "Site Reliability Engineer",
    "SRE",
    "DevOps Engineer",
    "AWS",
    "Azure",
    "Infrastructure Engineer",
    "Kubernetes",
    "Terraform",
    "Dynatrace",
    "Incident Management",
    "Noida",
    "India",
    "Tech Mahindra",
  ],
  authors: [{ name: "Sugandha Vashishtha" }],
  creator: "Sugandha Vashishtha",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    title: "Sugandha Vashishtha | Cloud & Site Reliability Engineer",
    description:
      "9+ years of experience in cloud operations, SRE, AWS, Azure, and enterprise infrastructure. AWS Certified Solutions Architect & Cloud Practitioner.",
    siteName: "Sugandha Vashishtha Portfolio",
    images: [
      {
        url: `${BASE_URL}/og-image.svg`,
        width: 1200,
        height: 630,
        alt: "Sugandha Vashishtha – Cloud & SRE Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sugandha Vashishtha | Cloud & SRE Engineer",
    description:
      "9+ years in cloud operations, SRE, AWS, Azure, and enterprise infrastructure. Open to Cloud, DevOps, and SRE opportunities.",
    images: [`${BASE_URL}/og-image.svg`],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sugandha Vashishtha",
  jobTitle: "Cloud & Site Reliability Engineer",
  url: BASE_URL,
  sameAs: [
    "https://linkedin.com/in/sugandha-vashishtha",
    "https://github.com/buildwithsugandha",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Noida",
    addressCountry: "IN",
  },
  knowsAbout: [
    "AWS",
    "Microsoft Azure",
    "Site Reliability Engineering",
    "Cloud Infrastructure",
    "Incident Management",
    "Kubernetes",
    "Terraform",
    "Dynatrace",
  ],
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
        <link rel="canonical" href={BASE_URL} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
