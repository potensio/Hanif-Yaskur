"use client";
import React from "react";
import Image from "next/image";
import {
  BadgeCheck,
  Check,
  Mail,
  Phone,
  Send,
  Twitter,
  Linkedin,
  Dribbble,
  ArrowUp,
  ArrowRight,
  X,
} from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer
      id="contact"
      className="tracking-tighter w-full max-w-7xl sm:px-6 md:px-10 mx-auto pt-12 pr-4 pb-10 pl-4"
    >
      <div className="relative overflow-hidden bg-white border border-black/10 rounded-3xl">
        <div className="relative z-10 sm:p-12 md:p-16 pt-12 pb-8 px-6">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            {/* Left side */}
            <div className="flex flex-col max-w-lg">
              {/* Logo */}
              <Image
                src="/hanif-logo-with-text.png"
                height={80}
                width={96}
                alt="logo"
                className="max-h-20 mb-10"
              />
              <h1 className="text-5xl md:text-7xl font-medium mb-4 tracking-tighter">
                See if Hanif is the right fit for you{" "}
              </h1>
              <p className="text-lg sm:text-xl text-black/40 leading-relaxed max-w-3xl font-geist tracking-tighter font-medium">
                Schedule a quick, 15 minute guided tour through Designjoy.
              </p>
            </div>

            {/* Right side */}
            <div
              className="w-full max-w-sm p-6 md:p-8 bg-cover bg-center rounded-4xl shadow-[0_2.8px_2.2px_rgba(0,0,0,0.034),0_6.7px_5.3px_rgba(0,0,0,0.048),0_12.5px_10px_rgba(0,0,0,0.06),0_22.3px_17.9px_rgba(0,0,0,0.072),0_41.8px_33.4px_rgba(0,0,0,0.086),0_100px_80px_rgba(0,0,0,0.12)]"
              style={{ backgroundImage: "url(/contact-bg.png)" }}
            >
              <div className="flex flex-col gap-6">
                {" "}
                <Image
                  src="/hanif-photo.png"
                  height={80}
                  width={80}
                  alt="email icon"
                  className="h-full object-contain rounded-2xl border-3 border-white -rotate-2"
                />
                <p className="text-3xl md:text-4xl font-medium">
                  Book a 15-min <br /> intro call
                </p>
                <button className="h-12 md:h-14 text-white text-lg md:text-xl rounded-2xl bg-linear-to-br from-gray-700 to-gray-500 shadow-[inset_0_0_1.6em_-0.6em_rgb(75,85,99)]">
                  Book a call
                </button>
              </div>
              <div className="flex  justify-between items-center gap-4 leading-tight py-6">
                <Image
                  src="/email-icon.png"
                  height={24}
                  width={24}
                  alt="email icon"
                  className="size-6"
                />
                <div className="flex flex-col w-full">
                  <p className="text-sm text-black/40 font-geist">
                    Prefer email?
                  </p>
                  <p className="font-medium tracking-tight">
                    hanifyaskur@gmail.com
                  </p>
                </div>
                <button className="flex shrink-0 items-center justify-center bg-white rounded-full size-8 ">
                  <ArrowRight className="size-4" />
                </button>
              </div>
              <div className="mt-3 flex items-center gap-3 pt-6 border-t border-neutral-900/10 justify-center">
                <a
                  href="#"
                  aria-label="X"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/5 ring-1 ring-black/10 text-black/60 hover:text-black hover:bg-black/10 transition"
                >
                  <Twitter className="w-[16px] h-[16px]" />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/5 ring-1 ring-black/10 text-black/60 hover:text-black hover:bg-black/10 transition"
                >
                  <Linkedin className="w-[16px] h-[16px]" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-black/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-4 text-black/60 text-sm font-geist">
              <a href="#" className="hover:text-black transition font-geist">
                Privacy
              </a>
              <span className="hidden sm:block text-black/20 font-geist">
                •
              </span>
              <a href="#" className="hover:text-black transition font-geist">
                Terms
              </a>
              <span className="hidden sm:block text-black/20 font-geist">
                •
              </span>
              <a
                href="#"
                className="hover:text-black transition inline-flex items-center gap-1 font-geist"
              >
                Login
              </a>
            </div>
            <p className="text-black/60 text-sm font-geist">
              © <span className="font-geist">2025</span> Lio. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
