import React, { useRef, useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    quote: "FlowAI transformed our content strategy. We now generate 10x more content while maintaining quality.",
    name: "Sarah Chen",
    role: "Marketing Director, TechFlow",
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=200&h=200&fit=crop&crop=faces",
    rotation: "-rotate-2"
  },
  {
    quote: "The AI automation saved us 20+ hours weekly. Our content performance increased by 300%.",
    name: "Marcus Rodriguez",
    role: "Content Lead, GrowthLab",
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&h=200&fit=crop&crop=faces",
    rotation: "rotate-1"
  },
  {
    quote: "Incredible ROI. FlowAI paid for itself within the first month of implementation.",
    name: "Emma Thompson",
    role: "Founder, Digital Ventures",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&fit=crop&crop=faces",
    rotation: "-rotate-1"
  },
  {
    quote: "From brief to published content in minutes — completely game-changing for our workflow.",
    name: "Alex Morgan",
    role: "Creative Director, Apex Studios",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&h=200&fit=crop&crop=faces",
    rotation: "rotate-2"
  },
  {
    quote: "The analytics and multi-channel distribution features are phenomenal. Best investment we made.",
    name: "Priya Patel",
    role: "Head of Marketing, InnovateCorp",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&h=200&fit=crop&crop=faces",
    rotation: "-rotate-3"
  }
];

export const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 540; // Card width + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="max-w-7xl sm:px-8 mx-auto px-6 py-24 relative z-10">
      {/* Header */}
      <div className="flex flex-col sm:px-0 gap-x-6 gap-y-2">
              <div className="flex flex-col justify-between mb-12" style={{ animation: 'fadeSlideIn 1s ease-out 0.1s both' }}>
       
          <h2 className="text-5xl leading-[0.9] md:text-6xl text-black tracking-tighter text-left font-geist font-medium mb-4">
            Why me?
          </h2>
            <p className="text-xl sm:text-2xl text-black/60 leading-relaxed max-w-3xl font-geist tracking-tighter font-medium">
         Think of it as an in-house talent, without hiring, contracts, or agency headaches. 
        </p>
  
        
      </div>

      <div className="grid grid-cols-3 gap-x-8 gap-y-12 border-t border-black/10 pt-12" style={{ animation: 'fadeSlideIn 1s ease-out 0.3s both' }}>
        <div className="space-y-2">
          <div className="text-2xl sm:text-3xl font-medium text-black font-geist tracking-tighter">30 Days</div>
          <p className="text-sm font-medium text-black/40 font-geist">Spend at least $2K and get warranty for 14 days after delivery.</p>
        </div>
        <div className="space-y-2">
          <div className="text-2xl sm:text-3xl font-medium text-black font-geist tracking-tighter">Always in the loop</div>
          <p className="text-sm font-medium text-black/40 font-geist">Get progress updates every 2 days via Loom.</p>
        </div>
        <div className="space-y-2">
          <div className="text-2xl sm:text-3xl font-medium text-black font-geist tracking-tighter">Direct communication</div>
          <p className="text-sm font-medium text-black/40 font-geist">No middleman, no outsource, just me.</p>
        </div>
      </div>
      </div>

      <div className="relative">
        <div className="relative overflow-hidden h-[360px] rounded-3xl -mx-4 sm:mx-0">
          {/* Edge fades */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-24 bg-gradient-to-r from-gray-100 to-transparent z-10"></div>
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-24 bg-gradient-to-l from-gray-100 to-transparent z-10"></div>

          {/* Rail */}
          <div 
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto scroll-smooth px-4 sm:px-6 absolute top-0 right-0 bottom-0 left-0 items-center hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <article 
                key={index}
                className={`min-w-[320px] sm:min-w-[520px] max-w-[640px] bg-white border border-neutral-200/70 rounded-[24px] p-8 text-neutral-900 transition-transform duration-300 hover:-translate-y-1 shadow-xl ${testimonial.rotation} snap-center`}
              >
                <p className="text-lg sm:text-xl md:text-2xl text-neutral-900 tracking-tighter font-geist font-medium">
                  "{testimonial.quote}"
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 rounded-xl object-cover" />
                  <div>
                    <div className="text-sm tracking-tight font-geist font-semibold">{testimonial.name}</div>
                    <div className="text-xs text-neutral-500 tracking-tight font-geist">{testimonial.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Controls */}
          <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3">
            <button 
              aria-label="Previous" 
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`hover:bg-neutral-200 transition-all inline-flex text-neutral-900 bg-white w-10 h-10 border-neutral-200 border rounded-full items-center justify-center ${!canScrollLeft ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer shadow-sm'}`}
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              aria-label="Next" 
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-10 h-10 rounded-full text-white bg-neutral-900 hover:bg-neutral-800 transition-all inline-flex items-center justify-center ${!canScrollRight ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer shadow-lg'}`}
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};