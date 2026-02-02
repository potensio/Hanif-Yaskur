import Image from "next/image";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturedWork } from "@/components/FeaturedWork";
import { Capabilities } from "@/components/Capabilities";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <link rel="canonical" href="https://hanif.studio" />
      <div className="min-h-screen relative bg-gray-100">
        {/* Hero Background */}
        <div className="absolute top-0 w-full z-0 h-[1000px] blur-3xl overflow-hidden">
          <Image
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/55089b0e-fd30-4b07-881c-69dd9c26979b_3840w.jpg"
            alt="Background"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="relative z-10">
          <Header />
          <main>
            <Hero />
            <FeaturedWork />
            <section id="about">
              <About />
            </section>
            <Capabilities />
            <Testimonials />
            <section id="pricing">
              <Pricing />
            </section>
            <FAQ />
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}
