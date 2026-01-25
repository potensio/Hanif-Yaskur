import React from "react";
import { Check, ArrowRight } from "lucide-react";

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="max-w-7xl sm:px-8 mx-auto px-6 py-16">
      {/* Section Header */}
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-5xl leading-[0.9] md:text-6xl text-black tracking-tighter font-geist font-medium">
          Simple, flexible pricing
        </h2>
        <p className="text-xl sm:text-2xl text-black/60 leading-relaxed max-w-3xl mx-auto font-geist tracking-tighter font-medium">
          Pay only for what you need. No subscriptions, no commitments.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-4xl mx-auto">
        {/* Hourly (Light Card Style) */}
        <div className="overflow-hidden bg-white border border-black/10 rounded-[28px] relative shadow-sm flex flex-col h-full group hover:shadow-lg transition-shadow duration-300">
          <div className="p-4 flex flex-col h-full">
            {/* Inner Header Container with Shadow */}
            <div className="flex flex-col p-6 bg-gray-50 border border-black/5 rounded-2xl shadow-[0_2.8px_2.2px_rgba(0,0,0,0.034),0_6.7px_5.3px_rgba(0,0,0,0.048),0_12.5px_10px_rgba(0,0,0,0.06),0_22.3px_17.9px_rgba(0,0,0,0.072),0_41.8px_33.4px_rgba(0,0,0,0.086),0_100px_80px_rgba(0,0,0,0.12)] gap-4 items-start h-[180px]">
              <div className="space-y-1">
                <h3 className="text-2xl text-gray-900 font-geist font-light tracking-tighter">
                  Hourly
                </h3>
                <p className="text-sm text-gray-600 font-geist">
                  Perfect for small tasks, bug fixes, or ongoing support.
                </p>
              </div>
              <div className="flex items-baseline gap-1 mt-auto">
                <span className="text-4xl text-gray-900 font-geist font-light tracking-tighter">
                  $30
                </span>
                <span className="text-sm text-gray-600 font-geist">/hour</span>
              </div>
            </div>

            <ul className="mt-8 space-y-4 px-2 flex-1">
              <li className="flex items-center gap-3 text-base text-gray-700 font-geist">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                Pay only for time worked
              </li>
              <li className="flex items-center gap-3 text-base text-gray-700 font-geist">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                No minimum commitment
              </li>
              <li className="flex items-center gap-3 text-base text-gray-700 font-geist">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                Transparent time tracking
              </li>
              <li className="flex items-center gap-3 text-base text-gray-700 font-geist">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                Flexible scheduling
              </li>
            </ul>

            <a
              href="https://cal.com/hanifyaskur/intro-call"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full rounded-full bg-white border border-black/10 hover:bg-gray-50 px-6 py-4 text-base font-medium text-black inline-flex items-center justify-between group/btn transition-colors active:scale-[0.98]"
            >
              <span className="font-geist">Let's talk</span>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 group-hover/btn:bg-gray-200 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>

        {/* Project Based (Dark Card Style) */}
        <div className="overflow-hidden bg-neutral-900 border border-black/10 rounded-[28px] relative shadow-xl flex flex-col h-full text-white group hover:shadow-2xl hover:shadow-black/20 transition-shadow duration-300">
          <div className="absolute top-4 right-4 z-10">
            <span className="bg-blue-500/20 text-blue-200 text-xs font-medium px-2.5 py-1 rounded-full border border-blue-500/20 font-geist">
              Best Value
            </span>
          </div>
          <div className="p-4 flex flex-col h-full">
            <div className="flex flex-col p-6 bg-white/5 border border-white/10 rounded-2xl shadow-inner gap-4 items-start h-[180px]">
              <div className="space-y-1">
                <h3 className="text-2xl text-white font-geist font-light tracking-tighter">
                  One-Off Project
                </h3>
                <p className="text-base text-neutral-400 font-geist">
                  Fixed scope, fixed price. For complete projects.
                </p>
              </div>
              <div className="flex items-baseline gap-1 mt-auto">
                <span className="text-base text-neutral-400 font-geist mb-1">
                  from
                </span>
                <span className="text-4xl text-white font-geist font-light tracking-tighter">
                  $2,000
                </span>
              </div>
            </div>

            <ul className="mt-8 space-y-4 px-2 flex-1">
              <li className="flex items-center gap-3 text-base text-neutral-200 font-geist">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                Fixed scope & timeline
              </li>
              <li className="flex items-center gap-3 text-base text-neutral-200 font-geist">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                One-time payment
              </li>
              <li className="flex items-center gap-3 text-base text-neutral-200 font-geist">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                Clear deliverables
              </li>
              <li className="flex items-center gap-3 text-base text-neutral-200 font-geist">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                Full IP ownership
              </li>
              <li className="flex items-center gap-3 text-base text-neutral-200 font-geist">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                Post-launch support
              </li>
            </ul>

            <a
              href="https://cal.com/hanifyaskur/intro-call"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full rounded-full bg-neutral-800 px-6 py-4 text-base font-medium text-white inline-flex items-center justify-between hover:bg-neutral-700 transition-colors active:scale-[0.98] shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
            >
              <span className="font-geist">Kickoff My Project</span>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-neutral-900">
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-black/40 font-geist">
          Prices in USD. VAT may apply.{" "}
          <a
            href="#contact"
            className="text-black/60 hover:text-black underline decoration-black/20 underline-offset-4 transition-colors"
          >
            Contact for custom arrangements
          </a>
        </p>
      </div>
    </section>
  );
};
