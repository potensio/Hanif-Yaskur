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
  title: "Hanif — Full-Stack Product Engineer | MVP & AI SaaS Development",
  description:
    "Build your MVP with a Jakarta-based full-stack product engineer. Specializing in AI SaaS development, Next.js, and end-to-end product development for startups.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://yourdomain.com",
  ),
  keywords: [
    "build MVP",
    "MVP development",
    "startup product engineer",
    "Next.js developer for startup",
    "AI SaaS developer",
    "hire product engineer",
    "full-stack developer Jakarta",
    "AI integration developer",
    "product development engineer",
    "end-to-end product development",
    "startup MVP builder",
    "AI-powered web applications",
  ],
  authors: [{ name: "Hanif" }],
  creator: "Hanif",
  openGraph: {
    title: "Hanif — Full-Stack Product Engineer | MVP & AI SaaS Development",
    description:
      "Build your MVP with a Jakarta-based product engineer. Specializing in AI SaaS development, Next.js, and end-to-end product development for startups.",
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://yourdomain.com",
    siteName: "Hanif Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hanif — Full-Stack Product Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hanif — Full-Stack Product Engineer | MVP & AI SaaS Development",
    description:
      "Build your MVP with a Jakarta-based product engineer. Specializing in AI SaaS development, Next.js, and end-to-end product development for startups.",
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
    jobTitle: "Full-Stack Product Engineer",
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://yourdomain.com",
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
      "Full-stack Product Engineer based in Jakarta. Specializing in MVP development, AI SaaS applications, and Next.js development for startups.",
    knowsAbout: [
      "MVP Development",
      "AI SaaS Development",
      "Full-Stack Development",
      "Next.js Development",
      "Product Engineering",
      "Startup Development",
      "AI Integration",
    ],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${GeistSans.variable} h-full bg-white`}
    >
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
