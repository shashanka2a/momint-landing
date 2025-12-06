'use client';

import { useEffect, useRef } from 'react';

export default function HowItWorks() {
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
    <section className="py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24 animate-on-scroll opacity-0-start">
          <span className="text-electricPurple font-bold tracking-widest uppercase text-sm mb-3 block">
            The Process
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight text-slate-900">
            Minting a Legacy
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Step 1 */}
          <div
            className="bg-white p-10 rounded-[2.5rem] text-center relative group premium-hover-card shadow-premium hover:shadow-premium-hover animate-on-scroll opacity-0-start"
            style={{ animationDelay: '100ms' }}
          >
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-deepViolet to-electricPurple p-0.5 shadow-xl shadow-electricPurple/20 group-hover:rotate-12 transition-transform duration-500">
                <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                  <span className="text-3xl font-display font-bold text-deepViolet">1</span>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-display font-bold mb-4 text-slate-900">Capture</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Creators select their most viral, sentimental, or iconic moments from existing social
                platforms.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div
            className="bg-white p-10 rounded-[2.5rem] text-center relative group premium-hover-card shadow-premium hover:shadow-premium-hover animate-on-scroll opacity-0-start"
            style={{ animationDelay: '200ms' }}
          >
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-deepViolet to-electricPurple p-0.5 shadow-xl shadow-electricPurple/20 group-hover:rotate-12 transition-transform duration-500">
                <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                  <span className="text-3xl font-display font-bold text-deepViolet">2</span>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-display font-bold mb-4 text-slate-900">Mint</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                The moment is minted as a unique NFT with exclusive perks, unlockable content, or
                royalties attached.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div
            className="bg-white p-10 rounded-[2.5rem] text-center relative group premium-hover-card shadow-premium hover:shadow-premium-hover animate-on-scroll opacity-0-start"
            style={{ animationDelay: '300ms' }}
          >
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-deepViolet to-electricPurple p-0.5 shadow-xl shadow-electricPurple/20 animate-pulse-glow group-hover:rotate-12 transition-transform duration-500">
                <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                  <span className="text-3xl font-display font-bold text-deepViolet">3</span>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-display font-bold mb-4 text-slate-900">Collect</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Fans buy, trade, and showcase these moments. Ownership grants access to the creator's
                inner circle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

