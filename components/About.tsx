import React from "react";

export const About: React.FC = () => {
  return (
    <section id="about" className="max-w-7xl sm:px-8 mx-auto px-6">
      <div className="py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="md:col-span-3">
            <h2 className="text-2xl tracking-tight font-medium text-neutral-900/40 font-geist">
              About me
            </h2>
          </div>
          <div className="md:col-span-9">
            <p className="text-3xl md:text-[40px] leading-tight font-geist tracking-tighter font-medium">
              I’m a Jakarta-based full-stack Product Engineer building products
              end to end. I combine solid engineering knowledge with AI where it
              actually works — one experienced engineer, zero layers, direct
              collaboration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
