import React from "react";

export const DesignSmarter: React.FC = () => {
  return (
    <section className="max-w-7xl sm:px-8 mx-auto px-6 py-24">
      <div
        className="flex flex-col justify-between mb-12"
        style={{ animation: "fadeSlideIn 1s ease-out 0.1s both" }}
      >
        <h2 className="text-5xl leading-[0.9] md:text-6xl text-black tracking-tighter text-left font-geist font-medium mb-4">
          Subscribe with benefits
        </h2>
        <p className="text-xl sm:text-2xl text-black/60 leading-relaxed max-w-3xl font-geist tracking-tighter font-medium">
          Think of it as an in-house talent, without hiring, contracts, or
          agency headaches.
        </p>
      </div>

      <div
        className="grid grid-cols-3 gap-x-8 gap-y-12 border-t border-black/10 pt-12"
        style={{ animation: "fadeSlideIn 1s ease-out 0.3s both" }}
      >
        <div className="space-y-2">
          <div className="text-2xl sm:text-3xl font-medium text-black font-geist tracking-tighter">
            30 Days
          </div>
          <p className="text-sm font-medium text-black/40 font-geist">
            Spend at least $2K and get warranty for 14 days after delivery.
          </p>
        </div>
        <div className="space-y-2">
          <div className="text-2xl sm:text-3xl font-medium text-black font-geist tracking-tighter">
            Always in the loop
          </div>
          <p className="text-sm font-medium text-black/40 font-geist">
            Get progress updates every 2 days via Loom.
          </p>
        </div>
        <div className="space-y-2">
          <div className="text-2xl sm:text-3xl font-medium text-black font-geist tracking-tighter">
            Direct communication
          </div>
          <p className="text-sm font-medium text-black/40 font-geist">
            No middleman, no outsource, just me.
          </p>
        </div>
      </div>
    </section>
  );
};
