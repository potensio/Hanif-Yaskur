import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found — Hanif Studio",
  description: "The page you're looking for doesn't exist.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen relative bg-gray-100">
      <div className="relative z-10">
        <Header />
        <main className="max-w-7xl mx-auto px-6 sm:px-8 py-20 md:py-32">
          <div className="text-center">
            <h1 className="text-7xl md:text-9xl font-medium mb-4 tracking-tighter text-black/20">
              404
            </h1>
            <h2 className="text-3xl md:text-5xl font-medium mb-6 tracking-tighter">
              Page Not Found
            </h2>
            <p className="text-xl text-black/60 font-geist mb-8 max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-white ring-white/10 ring-1 rounded-2xl font-geist transition hover:opacity-85"
              style={{
                background:
                  "linear-gradient(135deg, rgb(55, 65, 81) 0%, rgb(107, 114, 128) 100%)",
                boxShadow: "rgb(75, 85, 99) 0px 0px 1.6em -0.6em inset",
                height: "2.8em",
                padding: "0.35em 1.2em",
                letterSpacing: "0.05em",
              }}
            >
              Back to Home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
