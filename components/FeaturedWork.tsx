import React from "react";
import Image from "next/image";

const originalItems = [
  {
    src: "https://framerusercontent.com/images/evU67uSZvL2kO6Z6ZGKdBeximSk.png?scale-down-to=512",
    type: "landscape",
  },
  {
    src: "https://framerusercontent.com/images/tA7B9RI0y99pir7CKtvpH5uAdug.png?scale-down-to=512",
    type: "landscape",
  },
  {
    src: "https://framerusercontent.com/images/jVDl5HO0z4gyoEYfe0rwDf1ur58.png",
    type: "portrait",
  },
  {
    src: "https://framerusercontent.com/images/aRoulX1aLKEfQd1DOFY4Ar3DgA.png?scale-down-to=512",
    type: "landscape",
  },
  {
    src: "https://framerusercontent.com/images/bss2LIEllxXdIcD6Lb553GxIik.png?scale-down-to=512",
    type: "landscape",
  },
  {
    src: "https://framerusercontent.com/images/odWeSe2QUlwRjdsQ61D5Q0gZX6c.png?scale-down-to=1024",
    type: "portrait",
  },
  {
    src: "https://framerusercontent.com/images/oUG1LmhwhjU0XdKdnVrLf5AmoC0.png?scale-down-to=512",
    type: "landscape",
  },
  {
    src: "https://framerusercontent.com/images/tIPzcpCesqeVPRb38ZNGOJLKGI.png?scale-down-to=512",
    type: "landscape",
  },
  {
    src: "https://framerusercontent.com/images/NiFJCDg94sN8rHw0ulZKwXTlHic.png",
    type: "portrait",
  },
  {
    src: "https://framerusercontent.com/images/NRpw9EoNtgJi2kVSPioWqFXIL3M.png?scale-down-to=512",
    type: "landscape",
  },
  {
    src: "https://framerusercontent.com/images/ImUQs4uyswhIxTXNWyBllppgk.png?scale-down-to=512",
    type: "landscape",
  },
  {
    src: "https://framerusercontent.com/images/Jxpx5B5BHGyK7RNPztjPTBqyZ8.png?scale-down-to=1024",
    type: "portrait",
  },
  {
    src: "https://framerusercontent.com/images/nQWDD26enQ4GXB5fuHb0YIqQ.png?scale-down-to=512",
    type: "landscape",
  },
  {
    src: "https://framerusercontent.com/images/t0OLz4A2rRj5WVgX8GLaUdMkOdI.png?scale-down-to=1024",
    type: "portrait",
  },
  {
    src: "https://framerusercontent.com/images/JjdtqoiJI9DUoGIJz3sGo0S1oU.png?scale-down-to=512",
    type: "landscape",
  },
  {
    src: "https://framerusercontent.com/images/1nDXaTm3DiO0VOT0d0hTrzdqcLg.png?scale-down-to=1024",
    type: "portrait",
  },
  {
    src: "https://framerusercontent.com/images/7N7nlw0OKvZQYrAqG2sWCwCpBQI.png?scale-down-to=1024",
    type: "portrait",
  },
];

// Duplicate items to ensure smooth infinite loop coverage (360 degrees)
const items = [...originalItems, ...originalItems];

export const FeaturedWork: React.FC = () => {
  return (
    <section id="work" className="overflow-hidden">
      <div className="max-w-7xl sm:px-8 mx-auto px-6">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-4xl lg:text-5xl text-black mb-4 font-geist tracking-tighter font-medium">
            Featured Work
          </h2>
          <p className="text-lg sm:text-2xl text-black/40 leading-relaxed max-w-3xl font-geist tracking-tighter font-medium">
            A mix of real-world and personal projects — from ideas to working
            products.
          </p>
        </div>
      </div>

      <div className="relative w-full h-[560px]">
        <style>{`
          @keyframes spin-slow {
            from { transform: translateX(-50%) rotate(0deg); }
            to { transform: translateX(-50%) rotate(360deg); }
          }
          .animate-spin-wheel {
            animation: spin-slow 120s linear infinite;
            will-change: transform;
          }
          .wheel-origin {
            /* Negative Y puts the pivot high above, creating a concave 'bowl' shape (Smile U) */
            transform-origin: 50% -2800px; 
          }
          @media (min-width: 768px) {
            .wheel-origin {
               transform-origin: 50% -3200px;
            }
          }
        `}</style>

        {/* 
           Top position adjusted so the bottom of the curve sits in the middle-ish, 
           allowing the sides to rise up and fill the top gap.
        */}
        <div className="absolute left-1/2 top-[10%] w-full h-full max-w-none wheel-origin animate-spin-wheel">
          <div className="absolute left-0 top-0 w-full h-full wheel-origin">
            {items.map((item, i) => {
              const angle = i * (360 / items.length);
              return (
                <div
                  key={i}
                  className="absolute left-1/2 top-0 wheel-origin group"
                  style={{
                    transform: `translateX(-50%) rotate(${angle}deg)`,
                    zIndex: i,
                  }}
                >
                  {/* Increased width for images */}
                  <div
                    className="relative rounded-xl overflow-hidden shadow-lg border border-white/40 bg-white ring-1 ring-black/5 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
                    style={{
                      width: item.type === "landscape" ? "420px" : "200px",
                    }}
                  >
                    <Image
                      src={item.src}
                      alt="Work showcase"
                      width={item.type === "landscape" ? 420 : 200}
                      height={item.type === "landscape" ? 315 : 400}
                      className="w-full h-auto object-cover block"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Gradient overlays to smooth edges */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-100 to-transparent pointer-events-none" />
      </div>
    </section>
  );
};
