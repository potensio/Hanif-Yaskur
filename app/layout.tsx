import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hanif — Solo Product Engineer Using AI | MVP & SaaS Development",
  description:
    "Solo product engineer building with AI — team-level execution without agency overhead. I design, build, and launch MVPs and AI SaaS products end to end.",
  metadataBase: new URL("https://hanif.studio"),
  alternates: {
    canonical: "/",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  keywords: [
    "solo product engineer",
    "product engineer using AI",
    "AI-powered development",
    "build MVP without agency",
    "MVP development",
    "startup product engineer",
    "AI SaaS developer",
    "Next.js developer for startup",
    "AI integration developer",
    "end-to-end product development",
    "startup MVP builder",
    "AI-powered web applications",
  ],
  authors: [{ name: "Hanif" }],
  creator: "Hanif",
  openGraph: {
    title: "Hanif — Solo Product Engineer Using AI | MVP & SaaS Development",
    description:
      "Solo product engineer building with AI — team-level execution without agency overhead. I design, build, and launch MVPs and AI SaaS products end to end.",
    url: "https://hanif.studio",
    siteName: "Hanif Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hanif — Solo Product Engineer Using AI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hanif — Solo Product Engineer Using AI | MVP & SaaS Development",
    description:
      "Solo product engineer building with AI — team-level execution without agency overhead. I design, build, and launch MVPs and AI SaaS products end to end.",
    images: ["/og-image.png"],
    creator: "@hanifyaskur",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hanif",
    jobTitle: "Solo Product Engineer",
    url: "https://hanif.studio",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jakarta",
      addressCountry: "ID",
    },
    email: "hanifyaskur@gmail.com",
    sameAs: [
      "https://twitter.com/hanifyaskur",
      "https://linkedin.com/in/hanifyaskur",
    ],
    description:
      "Solo product engineer building with AI. Specializing in MVP development, AI SaaS applications, and end-to-end product development for startups.",
    knowsAbout: [
      "MVP Development",
      "AI SaaS Development",
      "AI-Powered Development",
      "Next.js Development",
      "Product Engineering",
      "Startup Development",
      "AI Integration",
      "Solo Development",
    ],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${GeistSans.variable} h-full bg-white`}
    >
      <head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="ba51c818-3c73-4afa-bb39-82e649946178"
        />
      </head>
      <body className="min-h-full min-w-[375px] max-w-[1600px] mx-auto antialiased selection:bg-black selection:text-white text-black bg-gray-100 font-inter">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
