'use client';

import { useEffect, useRef } from 'react';
import { TrendingDown, HeartCrack } from 'lucide-react';

export default function ProblemGrid() {
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
    <section className="py-32" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-on-scroll opacity-0-start max-w-3xl mx-auto">
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-slate-900 mb-6 tracking-tight">
            The Creator Economy is <span className="text-electricPurple">Broken.</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Algorithms change, but ownership is forever. We're bridging the gap between fleeting
            engagement and lasting financial value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Influencer Pain */}
          <div className="bg-white p-10 rounded-[2.5rem] shadow-premium hover:shadow-premium-hover premium-hover-card group animate-on-scroll opacity-0-start relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-red-50/50 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110"></div>
            <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform">
              <TrendingDown className="text-red-500 w-7 h-7" />
            </div>
            <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">For Creators</h3>
            <p className="text-slate-600 leading-relaxed mb-8 text-lg">
              Reliance on ad revenue and changing algorithms makes income unstable. Your best moments
              generate millions of views but zero long-term equity.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-semibold">
                Unstable Income
              </span>
              <span className="px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-semibold">
                No Ownership
              </span>
            </div>
          </div>

          {/* Fan Pain */}
          <div
            className="bg-white p-10 rounded-[2.5rem] shadow-premium hover:shadow-premium-hover premium-hover-card group relative overflow-hidden animate-on-scroll opacity-0-start"
            style={{ animationDelay: '200ms' }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-50/50 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110"></div>
            <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform">
              <HeartCrack className="text-deepViolet w-7 h-7" />
            </div>
            <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">For Fans</h3>
            <p className="text-slate-600 leading-relaxed mb-8 text-lg">
              Liking and commenting feels empty. You support creators for years but have nothing to
              show for it. You want to be part of their journey, not just a statistic.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-1.5 bg-purple-50 text-deepViolet rounded-full text-sm font-semibold">
                Passive Viewing
              </span>
              <span className="px-4 py-1.5 bg-purple-50 text-deepViolet rounded-full text-sm font-semibold">
                Zero ROI
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

