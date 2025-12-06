'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Gem } from 'lucide-react';

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="py-32 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 animate-on-scroll opacity-0-start">
          <div>
            <h2 className="font-display font-extrabold text-4xl text-slate-900 mb-3 tracking-tight">
              Trending Moments
            </h2>
            <p className="text-lg text-slate-500">Fresh from the timeline to the blockchain.</p>
          </div>

          {/* Filters */}
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-4 w-full md:w-auto">
            <button className="px-6 py-2.5 rounded-full bg-deepViolet text-white font-semibold text-sm whitespace-nowrap shadow-md shadow-deepViolet/20 btn-interactive">
              All
            </button>
            <button className="px-6 py-2.5 rounded-full bg-white text-slate-600 font-semibold text-sm whitespace-nowrap hover:bg-slate-50 transition-colors shadow-sm btn-interactive">
              Gaming
            </button>
            <button className="px-6 py-2.5 rounded-full bg-white text-slate-600 font-semibold text-sm whitespace-nowrap hover:bg-slate-50 transition-colors shadow-sm btn-interactive">
              Lifestyle
            </button>
            <button className="px-6 py-2.5 rounded-full bg-white text-slate-600 font-semibold text-sm whitespace-nowrap hover:bg-slate-50 transition-colors shadow-sm btn-interactive">
              Comedy
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          className="flex gap-8 overflow-x-auto no-scrollbar pb-16 snap-x snap-mandatory animate-on-scroll opacity-0-start"
          style={{ animationDelay: '200ms' }}
        >
          {/* NFT Card 1 */}
          <div className="min-w-[320px] md:min-w-[360px] bg-white rounded-[2rem] p-4 shadow-premium hover:shadow-premium-hover premium-hover-card snap-center group cursor-pointer">
            <div className="relative overflow-hidden rounded-[1.5rem] mb-5 aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80"
                alt="NFT"
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-deepViolet shadow-sm">
                #Gaming
              </div>
            </div>
            <div className="px-2 pb-2">
              <h3 className="font-display font-bold text-xl text-slate-900 mb-2">Victory Royale Clip</h3>
              <div className="flex items-center gap-2.5 mb-5">
                <Image
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                  alt="Creator"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full bg-slate-100 shadow-sm"
                />
                <span className="text-sm text-slate-600 font-medium">@ninja_clones</span>
              </div>
              <div className="flex justify-between items-center pt-4">
                <div>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1">
                    Price
                  </p>
                  <p className="text-xl font-display font-bold text-electricPurple flex items-center gap-1.5">
                    <Gem className="w-5 h-5" /> 1.5 ETH
                  </p>
                </div>
                <button className="btn-interactive px-6 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-bold shadow-md">
                  Bid Now
                </button>
              </div>
            </div>
          </div>

          {/* NFT Card 2 */}
          <div className="min-w-[320px] md:min-w-[360px] bg-white rounded-[2rem] p-4 shadow-premium hover:shadow-premium-hover premium-hover-card snap-center group cursor-pointer">
            <div className="relative overflow-hidden rounded-[1.5rem] mb-5 aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=600&q=80"
                alt="NFT"
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-deepViolet shadow-sm">
                #Music
              </div>
            </div>
            <div className="px-2 pb-2">
              <h3 className="font-display font-bold text-xl text-slate-900 mb-2">Backstage Access</h3>
              <div className="flex items-center gap-2.5 mb-5">
                <Image
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Annie"
                  alt="Creator"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full bg-slate-100 shadow-sm"
                />
                <span className="text-sm text-slate-600 font-medium">@annie_sings</span>
              </div>
              <div className="flex justify-between items-center pt-4">
                <div>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1">
                    Price
                  </p>
                  <p className="text-xl font-display font-bold text-electricPurple flex items-center gap-1.5">
                    <Gem className="w-5 h-5" /> 3.2 ETH
                  </p>
                </div>
                <button className="btn-interactive px-6 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-bold shadow-md">
                  Bid Now
                </button>
              </div>
            </div>
          </div>

          {/* NFT Card 3 */}
          <div className="min-w-[320px] md:min-w-[360px] bg-white rounded-[2rem] p-4 shadow-premium hover:shadow-premium-hover premium-hover-card snap-center group cursor-pointer">
            <div className="relative overflow-hidden rounded-[1.5rem] mb-5 aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=600&q=80"
                alt="NFT"
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-deepViolet shadow-sm">
                #Photography
              </div>
            </div>
            <div className="px-2 pb-2">
              <h3 className="font-display font-bold text-xl text-slate-900 mb-2">Golden Hour #42</h3>
              <div className="flex items-center gap-2.5 mb-5">
                <Image
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Robert"
                  alt="Creator"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full bg-slate-100 shadow-sm"
                />
                <span className="text-sm text-slate-600 font-medium">@lens_master</span>
              </div>
              <div className="flex justify-between items-center pt-4">
                <div>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1">
                    Price
                  </p>
                  <p className="text-xl font-display font-bold text-electricPurple flex items-center gap-1.5">
                    <Gem className="w-5 h-5" /> 0.5 ETH
                  </p>
                </div>
                <button className="btn-interactive px-6 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-bold shadow-md">
                  Bid Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

