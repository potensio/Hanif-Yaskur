import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedWork } from './components/FeaturedWork';
import { WorkShowcase } from './components/WorkShowcase';
import { Capabilities } from './components/Capabilities';
import { DesignSmarter } from './components/DesignSmarter';
import { IntelligentSystems } from './components/IntelligentSystems';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { About } from './components/About';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen relative bg-gray-100">
       <div 
        className="absolute top-0 w-full z-0 h-[1000px] blur-3xl bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/55089b0e-fd30-4b07-881c-69dd9c26979b_3840w.jpg")',
        }}
      />
      
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <FeaturedWork />
          <WorkShowcase />
           <About />
          <Capabilities />
          <Testimonials />
          <Pricing />
         
        </main>
        <Footer />
      </div>
    </div>
  );
}