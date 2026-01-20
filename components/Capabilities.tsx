import React from "react";
import Image from "next/image";
import { Sparkles, Plus, Minus, ArrowRight } from "lucide-react";

export const Capabilities: React.FC = () => {
  return (
    <section className="max-w-7xl sm:px-8 mx-auto px-6 py-24">
      <div className="relative overflow-hidden rounded-[32px] bg-white border border-black/10 shadow-2xl">
        <div className="relative z-10 px-5 py-5 sm:p-12">
          <div className="flex items-start justify-between mb-8 sm:mb-12">
            <div className="flex items-center gap-2 text-black/80 text-xs font-geist">
              <Sparkles className="w-3.5 h-3.5" />
              <span>What we do</span>
            </div>
            <h2 className="text-3xl md:text-5xl text-black font-medium tracking-tight leading-[0.9] font-geist">
              Capabilities.
            </h2>
          </div>

          <div className="bg-linear-to-b from-neutral-700 to-neutral-900 rounded-2xl ring-1 ring-white/10 overflow-hidden shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
            {/* 001 */}
            <details className="group open:bg-white/5" open>
              <summary className="list-none cursor-pointer [&::-webkit-details-marker]:hidden">
                <div className="flex items-center gap-4 justify-between border-b border-white/10 p-4 sm:p-5">
                  <div className="text-white/50 text-base font-geist">
                    (001)
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-xl font-medium tracking-tight font-geist">
                      Web Application
                    </p>
                  </div>
                  <div className="shrink-0 h-8 w-8 rounded-full bg-white/10 ring-1 ring-white/15 flex items-center justify-center text-white transition-colors group-hover:bg-white/20">
                    <Plus className="w-4 h-4 group-open:hidden" />
                    <Minus className="w-4 h-4 hidden group-open:block" />
                  </div>
                </div>
              </summary>
              <div className="p-4 sm:p-6 animate-in slide-in-from-top-2 duration-200">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-7 flex items-start gap-4">
                    <div className="shrink-0 h-14 w-20 rounded-xl overflow-hidden ring-1 ring-white/20 bg-white/10">
                      <Image
                        src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1d73ea37-684c-4cd9-97fd-02bf2d7528d4_320w.jpg"
                        alt="Product dev"
                        width={80}
                        height={56}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-white text-xl font-medium tracking-tight font-geist">
                        From spec to shipping
                      </h3>
                      <p className="text-neutral-300 text-sm mt-1 font-geist">
                        Architecture, data, APIs, and slick UIs. We own delivery
                        and keep velocity high with tight CI/CD.
                      </p>
                    </div>
                  </div>
                  <div className="lg:col-span-5">
                    <p className="text-white/80 text-xs font-geist">Toolbox</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-flex items-center rounded-full bg-white text-neutral-900 text-xs px-2.5 py-1 font-geist">
                        TypeScript
                      </span>
                      <span className="inline-flex items-center rounded-full bg-white text-neutral-900 text-xs px-2.5 py-1 font-geist">
                        React
                      </span>
                      <span className="inline-flex items-center rounded-full bg-white text-neutral-900 text-xs px-2.5 py-1 font-geist">
                        Node
                      </span>
                      <span className="inline-flex items-center rounded-full bg-white text-neutral-900 text-xs px-2.5 py-1 font-geist">
                        Postgres
                      </span>
                      <span className="inline-flex items-center rounded-full bg-white text-neutral-900 text-xs px-2.5 py-1 font-geist">
                        GraphQL
                      </span>
                      <span className="inline-flex items-center rounded-full bg-white/80 text-neutral-900 text-xs px-2.5 py-1 font-geist">
                        + more
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-xl bg-blue-500 text-white px-4 py-2.5 text-sm font-medium shadow-sm hover:bg-blue-400 transition font-geist"
                  >
                    Get started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </details>

            {/* 002 */}
            <details className="group">
              <summary className="list-none cursor-pointer [&::-webkit-details-marker]:hidden">
                <div className="flex items-center gap-4 justify-between border-t border-b border-white/10 p-4 sm:p-5">
                  <div className="text-white/50 text-base font-geist">
                    (002)
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-xl font-medium tracking-tight font-geist">
                      Mobile Application
                    </p>
                  </div>
                  <div className="shrink-0 h-8 w-8 rounded-full bg-white/10 ring-1 ring-white/15 flex items-center justify-center text-white transition-colors group-hover:bg-white/20">
                    <Plus className="w-4 h-4 group-open:hidden" />
                    <Minus className="w-4 h-4 hidden group-open:block" />
                  </div>
                </div>
              </summary>
              <div className="p-4 sm:p-6 animate-in slide-in-from-top-2 duration-200">
                <p className="text-neutral-300 text-sm max-w-[90ch] font-geist">
                  Design systems, accessibility, animations, and Lighthouse 95+.
                  We build maintainable interfaces that feel instant.
                </p>
              </div>
            </details>

            {/* 003 */}
            <details className="group">
              <summary className="list-none cursor-pointer [&::-webkit-details-marker]:hidden">
                <div className="flex items-center gap-4 justify-between border-t border-b border-white/10 p-4 sm:p-5">
                  <div className="text-white/50 text-base font-geist">
                    (003)
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-xl font-medium tracking-tight font-geist">
                      Chrome Extension
                    </p>
                  </div>
                  <div className="shrink-0 h-8 w-8 rounded-full bg-white/10 ring-1 ring-white/15 flex items-center justify-center text-white transition-colors group-hover:bg-white/20">
                    <Plus className="w-4 h-4 group-open:hidden" />
                    <Minus className="w-4 h-4 hidden group-open:block" />
                  </div>
                </div>
              </summary>
              <div className="p-4 sm:p-6 animate-in slide-in-from-top-2 duration-200">
                <p className="text-neutral-300 text-sm max-w-[90ch] font-geist">
                  Retrieval, function calling, evals, and production monitoring.
                  We make AI useful, reliable, and fast.
                </p>
              </div>
            </details>

            {/* 004 */}
            <details className="group">
              <summary className="list-none cursor-pointer [&::-webkit-details-marker]:hidden">
                <div className="flex items-center gap-4 justify-between border-t border-white/10 p-4 sm:p-5">
                  <div className="text-white/50 text-base font-geist">
                    (004)
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-xl font-medium tracking-tight font-geist">
                      Integration, Micro Service, etc
                    </p>
                  </div>
                  <div className="shrink-0 h-8 w-8 rounded-full bg-white/10 ring-1 ring-white/15 flex items-center justify-center text-white transition-colors group-hover:bg-white/20">
                    <Plus className="w-4 h-4 group-open:hidden" />
                    <Minus className="w-4 h-4 hidden group-open:block" />
                  </div>
                </div>
              </summary>
              <div className="p-4 sm:p-6 animate-in slide-in-from-top-2 duration-200">
                <p className="text-neutral-300 text-sm max-w-[90ch] font-geist">
                  Infra-as-code, observability, and autoscaling across clouds.
                  Zero-downtime releases and strong security posture.
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
};
