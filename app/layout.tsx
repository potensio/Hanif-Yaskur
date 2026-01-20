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
  title: "Hanif — Product Engineer",
  description:
    "Portfolio of Hanif, a product engineer specializing in intelligent systems and user-centered design.",
  metadataBase: new URL("https://yourdomain.com"),
  openGraph: {
    title: "Lio — Product Designer",
    description:
      "Portfolio of Lio, a product designer specializing in intelligent systems and user-centered design.",
    url: "https://yourdomain.com",
    siteName: "Lio Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lio Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lio — Product Designer",
    description:
      "Portfolio of Lio, a product designer specializing in intelligent systems and user-centered design.",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Lio",
    jobTitle: "Product Designer",
    url: "https://yourdomain.com",
    sameAs: [
      "https://twitter.com/yourhandle",
      "https://linkedin.com/in/yourprofile",
    ],
    description:
      "Product designer specializing in intelligent systems and user-centered design.",
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${GeistSans.variable} h-full bg-white`}
    >
      <body className="min-h-full max-w-[1536px] mx-auto antialiased selection:bg-black selection:text-white text-black bg-gray-100 font-inter">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
