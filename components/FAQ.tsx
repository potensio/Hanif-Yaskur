"use client";

import React from "react";
import { Plus, Minus } from "lucide-react";

export const FAQ: React.FC = () => {
  return (
    <section className="max-w-7xl sm:px-8 mx-auto px-6 py-24">
      <div className="text-center mb-12">
        <h2 className="text-5xl sm:text-6xl text-black font-medium tracking-tight leading-[0.9] font-geist mb-4">
          Frequently asked questions
        </h2>
        <p className="text-xl sm:text-2xl text-black/60 leading-relaxed max-w-2xl mx-auto font-geist tracking-tight font-medium">
          Everything you need to know about working with me
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-linear-to-b from-gray-50 to-gray-100 rounded-2xl ring-1 ring-black/5 overflow-hidden shadow-sm">
          {/* Q1 */}
          <details className="group open:bg-white/50">
            <summary className="list-none cursor-pointer [&::-webkit-details-marker]:hidden">
              <div className="flex items-center gap-4 justify-between border-b border-black/5 p-4 sm:p-5">
                <div className="flex-1 min-w-0">
                  <p className="text-black text-lg sm:text-xl font-medium tracking-tight font-geist">
                    What kind of projects do you build?
                  </p>
                </div>
                <div className="shrink-0 h-8 w-8 rounded-full bg-black/5 ring-1 ring-black/10 flex items-center justify-center text-black transition-colors group-hover:bg-black/10">
                  <Plus className="w-4 h-4 group-open:hidden" />
                  <Minus className="w-4 h-4 hidden group-open:block" />
                </div>
              </div>
            </summary>
            <div className="p-4 sm:p-6 animate-in slide-in-from-top-2 duration-200">
              <p className="text-black/70 text-sm sm:text-base max-w-[90ch] font-geist">
                I build web applications, mobile apps (iOS & Android), Chrome
                extensions, and backend systems for startups, small businesses,
                and entrepreneurs. Whether you need an MVP, a customer portal,
                workflow automation, or API integrations—I can help bring it to
                life.
              </p>
            </div>
          </details>

          {/* Q2 */}
          <details className="group">
            <summary className="list-none cursor-pointer [&::-webkit-details-marker]:hidden">
              <div className="flex items-center gap-4 justify-between border-t border-b border-black/5 p-4 sm:p-5">
                <div className="flex-1 min-w-0">
                  <p className="text-black text-lg sm:text-xl font-medium tracking-tight font-geist">
                    Who will I be working with?
                  </p>
                </div>
                <div className="shrink-0 h-8 w-8 rounded-full bg-black/5 ring-1 ring-black/10 flex items-center justify-center text-black transition-colors group-hover:bg-black/10">
                  <Plus className="w-4 h-4 group-open:hidden" />
                  <Minus className="w-4 h-4 hidden group-open:block" />
                </div>
              </div>
            </summary>
            <div className="p-4 sm:p-6 animate-in slide-in-from-top-2 duration-200">
              <p className="text-black/70 text-sm sm:text-base max-w-[90ch] font-geist">
                Just me! You'll work directly with the developer (that's me)
                from start to finish. No middlemen, no outsourcing, and no
                miscommunication—just clear, direct collaboration.
              </p>
            </div>
          </details>

          {/* Q3 */}
          <details className="group">
            <summary className="list-none cursor-pointer [&::-webkit-details-marker]:hidden">
              <div className="flex items-center gap-4 justify-between border-t border-b border-black/5 p-4 sm:p-5">
                <div className="flex-1 min-w-0">
                  <p className="text-black text-lg sm:text-xl font-medium tracking-tight font-geist">
                    How does your pricing work?
                  </p>
                </div>
                <div className="shrink-0 h-8 w-8 rounded-full bg-black/5 ring-1 ring-black/10 flex items-center justify-center text-black transition-colors group-hover:bg-black/10">
                  <Plus className="w-4 h-4 group-open:hidden" />
                  <Minus className="w-4 h-4 hidden group-open:block" />
                </div>
              </div>
            </summary>
            <div className="p-4 sm:p-6 animate-in slide-in-from-top-2 duration-200">
              <p className="text-black/70 text-sm sm:text-base max-w-[90ch] font-geist">
                I offer both hourly ($30/hr) and one-off project pricing
                (starting from $2,000). Hourly is great for small tasks or
                ongoing work; project-based is best for complete projects with
                defined scopes. Every project comes with transparent estimates
                and no hidden fees.
              </p>
            </div>
          </details>

          {/* Q4 */}
          <details className="group">
            <summary className="list-none cursor-pointer [&::-webkit-details-marker]:hidden">
              <div className="flex items-center gap-4 justify-between border-t border-b border-black/5 p-4 sm:p-5">
                <div className="flex-1 min-w-0">
                  <p className="text-black text-lg sm:text-xl font-medium tracking-tight font-geist">
                    What's your process like?
                  </p>
                </div>
                <div className="shrink-0 h-8 w-8 rounded-full bg-black/5 ring-1 ring-black/10 flex items-center justify-center text-black transition-colors group-hover:bg-black/10">
                  <Plus className="w-4 h-4 group-open:hidden" />
                  <Minus className="w-4 h-4 hidden group-open:block" />
                </div>
              </div>
            </summary>
            <div className="p-4 sm:p-6 animate-in slide-in-from-top-2 duration-200">
              <p className="text-black/70 text-sm sm:text-base max-w-[90ch] font-geist">
                After an intro call to discuss your needs, I'll propose a plan
                and timeline. You'll get progress updates every 2 days (via Loom
                or email), and I'm always available for direct communication. No
                middlemen—just you and me.
              </p>
            </div>
          </details>

          {/* Q5 */}
          <details className="group">
            <summary className="list-none cursor-pointer [&::-webkit-details-marker]:hidden">
              <div className="flex items-center gap-4 justify-between border-t border-b border-black/5 p-4 sm:p-5">
                <div className="flex-1 min-w-0">
                  <p className="text-black text-lg sm:text-xl font-medium tracking-tight font-geist">
                    Do you offer any guarantees?
                  </p>
                </div>
                <div className="shrink-0 h-8 w-8 rounded-full bg-black/5 ring-1 ring-black/10 flex items-center justify-center text-black transition-colors group-hover:bg-black/10">
                  <Plus className="w-4 h-4 group-open:hidden" />
                  <Minus className="w-4 h-4 hidden group-open:block" />
                </div>
              </div>
            </summary>
            <div className="p-4 sm:p-6 animate-in slide-in-from-top-2 duration-200">
              <p className="text-black/70 text-sm sm:text-base max-w-[90ch] font-geist">
                Yes! For projects over $1K, I offer a 14-day (or 30 days for
                projects over $2K) warranty after delivery. If you find any
                issues or need tweaks, I'll fix them at no extra cost during
                this period.
              </p>
            </div>
          </details>

          {/* Q6 */}
          <details className="group">
            <summary className="list-none cursor-pointer [&::-webkit-details-marker]:hidden">
              <div className="flex items-center gap-4 justify-between border-t border-b border-black/5 p-4 sm:p-5">
                <div className="flex-1 min-w-0">
                  <p className="text-black text-lg sm:text-xl font-medium tracking-tight font-geist">
                    How do I get started?
                  </p>
                </div>
                <div className="shrink-0 h-8 w-8 rounded-full bg-black/5 ring-1 ring-black/10 flex items-center justify-center text-black transition-colors group-hover:bg-black/10">
                  <Plus className="w-4 h-4 group-open:hidden" />
                  <Minus className="w-4 h-4 hidden group-open:block" />
                </div>
              </div>
            </summary>
            <div className="p-4 sm:p-6 animate-in slide-in-from-top-2 duration-200">
              <p className="text-black/70 text-sm sm:text-base max-w-[90ch] font-geist">
                Just book an intro call or send me an email through the contact
                section. We'll discuss your goals and see if we're a good fit!
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};
