import React from "react";
import Image from "next/image";
import {
  Activity,
  ShieldCheck,
  Network,
  Flame,
  Diamond,
  Cpu,
  Code2,
} from "lucide-react";

export const IntelligentSystems: React.FC = () => {
  return (
    <section className="bg-[#111] py-24 relative overflow-hidden">
      {/* Subtle background gradient to add depth */}
      <div className="absolute inset-0 bg-linear-to-b from-neutral-900 to-black pointer-events-none" />

      <div className="z-10 flex flex-col md:px-8 h-full max-w-7xl mx-auto pt-16 px-6 pb-16 relative gap-10 justify-center">
        <div className="max-w-3xl">
          <h2 className="sm:text-5xl lg:text-6xl text-4xl font-medium text-white tracking-tight font-geist drop-shadow-xl">
            Intelligent systems. Proven results.
          </h2>
          <p className="sm:text-lg leading-relaxed text-base text-white/85 max-w-2xl mt-5 font-geist">
            Deploy AI solutions with complete confidence through advanced
            monitoring, human oversight, and transparent performance
            metrics—built for enterprise scale.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Analytics Card */}
          <div className="rounded-3xl border border-white/10 bg-black/60 p-6 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.18em] text-white/60 font-geist">
                Performance metrics
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-1 text-[10px] text-white/70 ring-1 ring-white/10 font-geist">
                <Activity className="h-3 w-3" /> Active
              </span>
            </div>

            <p className="mt-4 text-lg leading-relaxed text-white/90 font-geist">
              Enterprise AI adoption increased by{" "}
              <span className="text-emerald-400">84%</span> this year
            </p>

            <div className="mt-6">
              <div className="relative h-24 w-full rounded-lg bg-linear-to-b from-white/3 to-transparent">
                <div className="absolute inset-x-0 bottom-6 h-[2px] bg-white/10"></div>
                <div className="absolute left-1/2 bottom-6 h-2 w-2 -translate-x-1/2 rounded-full bg-sky-400 shadow-[0_0_0_4px_rgba(56,189,248,0.15)]"></div>
                <div className="absolute inset-x-0 top-4 flex justify-between px-2 text-[10px] text-white/50 font-geist">
                  <span>2025</span>
                  <span>2024</span>
                  <span>2023</span>
                  <span>2022</span>
                  <span>2021</span>
                </div>
              </div>
              <div className="mt-5">
                <div className="text-4xl font-medium tracking-tight text-white font-geist">
                  $45B
                </div>
                <div className="text-sm text-white/60 font-geist">
                  Market Value
                </div>
              </div>
            </div>
          </div>

          {/* Face Detection Card */}
          <div className="rounded-3xl border border-white/10 bg-black/60 p-2 backdrop-blur-xl">
            <div className="relative overflow-hidden rounded-2xl bg-white/5">
              <Image
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/993d5154-c104-4507-8c0a-55364d2a948c_800w.jpg"
                alt="Identity verification"
                width={800}
                height={640}
                className="h-56 w-full object-cover sm:h-64"
              />
              <div className="absolute inset-0 bg-[radial-gradient(60%_30%_at_50%_55%,rgba(163,230,53,0.25),transparent)]"></div>

              {/* Scan overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-1 w-3/4 rounded bg-lime-400 shadow-[0_0_30px_rgba(132,204,22,0.45)]"></div>
              </div>

              {/* Grid lines */}
              <div className="pointer-events-none absolute inset-0 grid grid-cols-6 grid-rows-6">
                <div className="col-span-6 row-span-6 bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-size-[16.666%_100%,100%_16.666%]"></div>
              </div>

              <div className="absolute left-4 top-4 rounded-md bg-black/60 px-2 py-1 text-xs text-white/85 ring-1 ring-white/10 font-geist">
                Match confirmed
              </div>

              <div className="p-4">
                <div className="mt-2 text-base font-medium text-white/90 font-geist">
                  Smart Recognition
                </div>
                <div className="text-sm text-white/60 font-geist">
                  Advanced Processing
                </div>
              </div>
            </div>
          </div>

          {/* Success Metrics Card */}
          <div className="rounded-3xl border border-white/10 bg-black/60 p-6 backdrop-blur-xl">
            <p className="text-lg leading-relaxed text-white/90 font-geist">
              Achieving <span className="text-lime-400">92%</span> accuracy
              rate, our platform delivers consistent enterprise-grade
              performance.
            </p>

            <div className="mt-6">
              <div className="text-sm text-white/70 font-geist">
                Performance Overview
              </div>

              <div className="mt-4 space-y-4">
                {/* Succeed */}
                <div>
                  <div className="flex items-baseline justify-between font-geist">
                    <span className="text-sm text-white/80">Completed</span>
                    <span className="text-base text-white/90">78%</span>
                  </div>
                  <div className="mt-2 h-3 w-full rounded-full bg-white/10">
                    <div className="h-3 w-[78%] rounded-full bg-linear-to-r from-emerald-400 to-emerald-500"></div>
                  </div>
                </div>

                {/* In Progress */}
                <div>
                  <div className="flex items-baseline justify-between font-geist">
                    <span className="text-sm text-white/80">Processing</span>
                    <span className="text-base text-white/90">14%</span>
                  </div>
                  <div className="mt-2 h-3 w-full rounded-full bg-white/10">
                    <div className="h-3 w-[14%] rounded-full bg-linear-to-r from-sky-400 to-blue-500"></div>
                  </div>
                </div>

                {/* Failed */}
                <div>
                  <div className="flex items-baseline justify-between font-geist">
                    <span className="text-sm text-white/80">Pending</span>
                    <span className="text-base text-white/90">8%</span>
                  </div>
                  <div className="mt-2 h-3 w-full rounded-full bg-white/10">
                    <div className="relative h-3 w-[8%] overflow-hidden rounded-full bg-white/10">
                      <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.2)_0_6px,rgba(255,255,255,0.05)_6px_12px)]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3 text-xs text-white/60 font-geist">
              <ShieldCheck className="h-4 w-4 text-white/70" />
              Quality-assured workflows
            </div>
          </div>
        </div>

        {/* Logo row */}
        <div className="flex flex-wrap text-white/50 mt-4 gap-x-8 gap-y-4 items-center font-geist">
          <span className="inline-flex items-center gap-2 text-sm">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
              <Network className="h-3.5 w-3.5" />
            </span>
            TechFlow
          </span>
          <span className="inline-flex items-center gap-2 text-sm">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
              <Flame className="h-3.5 w-3.5" />
            </span>
            InnovateLab
          </span>
          <span className="inline-flex items-center gap-2 text-sm">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
              <Diamond className="h-3.5 w-3.5" />
            </span>
            DataCraft
          </span>
          <span className="inline-flex items-center gap-2 text-sm">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
              <Cpu className="h-3.5 w-3.5" />
            </span>
            CloudMind
          </span>
          <span className="inline-flex items-center gap-2 text-sm">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
              <Code2 className="h-3.5 w-3.5" />
            </span>
            DevCore
          </span>
        </div>
      </div>
    </section>
  );
};
