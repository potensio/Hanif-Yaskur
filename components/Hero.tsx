import React from "react";
import { ArrowRight } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="max-w-7xl sm:px-8 mx-auto px-6">
      <div className="sm:py-20 lg:py-28 pt-14 pb-14">
        <h1 className="text-5xl lg:text-7xl text-black font-geist tracking-tighter font-medium">
          I’m Hanif, a full-stack Product Engineer
          <span className="text-3xl mt-4 lg:mt-0 lg:text-7xl block text-black/40 font-geist tracking-tighter">
            From idea to live product — I design, build, and launch your product
            end to end.
          </span>
        </h1>

        <div className="flex gap-3 mt-10 items-center">
          <a
            href="#about"
            className="group inline-flex items-center gap-2 transition relative overflow-hidden text-sm font-medium text-white ring-white/10 ring-1 rounded-2xl font-geist"
            style={{
              background:
                "linear-gradient(135deg, rgb(55, 65, 81) 0%, rgb(107, 114, 128) 100%)",
              boxShadow: "rgb(75, 85, 99) 0px 0px 1.6em -0.6em inset",
              height: "2.8em",
              padding: "0.35em 3.3em 0.35em 1.2em",
              letterSpacing: "0.05em",
            }}
          >
            Get Started Now
            <span
              className="absolute right-[0.3em] flex items-center justify-center h-[2.2em] w-[2.2em] transition-all duration-300 group-hover:w-[calc(100%-0.6em)] active:scale-95 bg-white rounded-[0.7em]"
              style={{ boxShadow: "0.1em 0.1em 0.6em 0.2em #4b5563" }}
            >
              <ArrowRight className="w-[1.1em] h-[1.1em] text-[#4b5563] transition-transform duration-300 group-hover:translate-x-[0.1em]" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
