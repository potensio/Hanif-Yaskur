import React from 'react';
import { Sparkles, Check, ArrowRight } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="max-w-7xl sm:px-8 mx-auto px-6 py-16">
      
      {/* Section Header */}
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-5xl leading-[0.9] md:text-6xl text-black tracking-tighter font-geist font-medium">
          Hire with confidence
        </h2>
        <p className="text-xl sm:text-2xl text-black/60 leading-relaxed max-w-3xl mx-auto font-geist tracking-tighter font-medium">
          Not loving it after a week? Get 75% back, no questions asked.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Part-time (Light Card Style) */}
        <div className="overflow-hidden bg-white border border-black/10 rounded-[28px] relative shadow-sm flex flex-col h-full group hover:shadow-lg transition-shadow duration-300">
          <div className="p-4 flex flex-col h-full">
            {/* Inner Header Container with Shadow */}
            <div className="flex flex-col p-6 bg-gray-50 border border-black/5 rounded-2xl shadow-[0_2.8px_2.2px_rgba(0,0,0,0.034),0_6.7px_5.3px_rgba(0,0,0,0.048),0_12.5px_10px_rgba(0,0,0,0.06),0_22.3px_17.9px_rgba(0,0,0,0.072),0_41.8px_33.4px_rgba(0,0,0,0.086),0_100px_80px_rgba(0,0,0,0.12)] gap-4 items-start h-[180px]">
              <div className="space-y-1">
                <h3 className="text-2xl text-gray-900 font-geist font-light tracking-tighter">Part-time</h3>
                <p className="text-sm text-gray-600 font-geist">Perfect for maintenance and small updates.</p>
              </div>
              <div className="flex items-baseline gap-1 mt-auto">
                <span className="text-4xl text-gray-900 font-geist font-light tracking-tighter">$480</span>
                <span className="text-sm text-gray-600 font-geist">/month</span>
              </div>
            </div>

            <ul className="mt-8 space-y-4 px-2 flex-1">
              <li className="flex items-center gap-3 text-sm text-gray-700 font-geist">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                12 hours allocation
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700 font-geist">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                Pause & cancel anytime
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700 font-geist">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                Direct communication
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700 font-geist">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                2-day turnaround avg.
              </li>
            </ul>

            <a href="#contact" className="mt-8 w-full rounded-full bg-white border border-black/10 hover:bg-gray-50 px-6 py-4 text-sm font-medium text-black inline-flex items-center justify-between group/btn transition-colors active:scale-[0.98]">
              <span className="font-geist">Get Started</span>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 group-hover/btn:bg-gray-200 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>

        {/* Full-time (Dark Card Style - Enterprise look) */}
        <div className="overflow-hidden bg-neutral-900 border border-black/10 rounded-[28px] relative shadow-xl flex flex-col h-full text-white group hover:shadow-2xl hover:shadow-black/20 transition-shadow duration-300 transform lg:-translate-y-4 z-10">
          <div className="absolute top-4 right-4 z-10">
               <span className="bg-blue-500/20 text-blue-200 text-xs font-medium px-2.5 py-1 rounded-full border border-blue-500/20 font-geist">Most Popular</span>
          </div>
          <div className="p-4 flex flex-col h-full">
            
            <div className="flex flex-col p-6 bg-white/5 border border-white/10 rounded-2xl shadow-inner gap-4 items-start h-[180px]">
              <div className="space-y-1">
                <h3 className="text-2xl text-white font-geist font-light tracking-tighter">Full-time</h3>
                <p className="text-sm text-neutral-400 font-geist">Dedicated design support for your product.</p>
              </div>
              <div className="flex items-baseline gap-1 mt-auto">
                <span className="text-4xl text-white font-geist font-light tracking-tighter">$1,200</span>
                <span className="text-sm text-neutral-400 font-geist">/month</span>
              </div>
            </div>

            <ul className="mt-8 space-y-4 px-2 flex-1">
               <li className="flex items-center gap-3 text-sm text-neutral-200 font-geist">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                40 hours allocation
              </li>
              <li className="flex items-center gap-3 text-sm text-neutral-200 font-geist">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                Pause & cancel anytime
              </li>
              <li className="flex items-center gap-3 text-sm text-neutral-200 font-geist">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                Priority support
              </li>
              <li className="flex items-center gap-3 text-sm text-neutral-200 font-geist">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                Unlimited requests
              </li>
               <li className="flex items-center gap-3 text-sm text-neutral-200 font-geist">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                Real-time collaboration
              </li>
            </ul>

            <a href="#contact" className="mt-8 w-full rounded-full bg-white px-6 py-4 text-sm font-medium text-neutral-900 inline-flex items-center justify-between hover:bg-neutral-100 transition-colors active:scale-[0.98]">
              <span className="font-geist">Get Started Now</span>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200">
                 <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>

        {/* Project Based (Light Card Style) */}
        <div className="overflow-hidden bg-white border border-black/10 rounded-[28px] relative shadow-sm flex flex-col h-full group hover:shadow-lg transition-shadow duration-300">
          <div className="p-4 flex flex-col h-full">
            {/* Inner Header Container with Shadow */}
            <div className="flex flex-col p-6 bg-gray-50 border border-black/5 rounded-2xl shadow-[0_2.8px_2.2px_rgba(0,0,0,0.034),0_6.7px_5.3px_rgba(0,0,0,0.048),0_12.5px_10px_rgba(0,0,0,0.06),0_22.3px_17.9px_rgba(0,0,0,0.072),0_41.8px_33.4px_rgba(0,0,0,0.086),0_100px_80px_rgba(0,0,0,0.12)] gap-4 items-start h-[180px]">
              <div className="space-y-1">
                <h3 className="text-2xl text-gray-900 font-geist font-light tracking-tighter">Project</h3>
                <p className="text-sm text-gray-600 font-geist">Fixed scope, fixed price. For specific deliverables.</p>
              </div>
              <div className="flex items-baseline gap-1 mt-auto">
                <span className="text-sm text-gray-500 font-geist mb-1">from</span>
                <span className="text-4xl text-gray-900 font-geist font-light tracking-tighter">$1,600</span>
              </div>
            </div>

            <ul className="mt-8 space-y-4 px-2 flex-1">
              <li className="flex items-center gap-3 text-sm text-gray-700 font-geist">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                Fixed scope & timeline
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700 font-geist">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                One-off payment
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700 font-geist">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                Clear deliverables
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700 font-geist">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                Full IP ownership
              </li>
            </ul>

            <a href="#contact" className="mt-8 w-full rounded-full bg-white border border-black/10 hover:bg-gray-50 px-6 py-4 text-sm font-medium text-black inline-flex items-center justify-between group/btn transition-colors active:scale-[0.98]">
              <span className="font-geist">Get Started</span>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 group-hover/btn:bg-gray-200 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>

      </div>
      
       <div className="mt-12 text-center">
          <p className="text-sm text-black/40 font-geist">
            Prices in USD. VAT may apply. <a href="#contact" className="text-black/60 hover:text-black underline decoration-black/20 underline-offset-4 transition-colors">Contact for custom arrangements</a>
          </p>
        </div>
    </section>
  );
};