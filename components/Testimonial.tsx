'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Quote } from 'lucide-react';

export default function Testimonial() {
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
        <div className="max-w-5xl mx-auto relative animate-on-scroll opacity-0-start">
          <div className="absolute -inset-2 bg-gradient-to-r from-deepViolet to-electricPurple rounded-[3rem] blur-xl opacity-20"></div>
          <div className="relative bg-white rounded-[3rem] p-12 md:p-20 shadow-premium">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-shrink-0 relative">
                <div className="absolute inset-0 bg-electricPurple blur-lg rounded-full opacity-40 animate-pulse"></div>
                <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-br from-deepViolet to-electricPurple relative z-10">
                  <Image
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80"
                    alt="Testimonial Avatar"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover rounded-full border-4 border-white"
                  />
                </div>
              </div>
              <div className="text-center md:text-left">
                <Quote className="w-10 h-10 text-electricPurple mb-6 mx-auto md:mx-0 fill-current opacity-20" />
                <blockquote className="font-display font-bold text-2xl md:text-3xl leading-relaxed text-slate-900 mb-8">
                  "Momint isn't just a platform; it's a new career path. I've sold moments for more
                  than I made in ad revenue all of last year."
                </blockquote>
                <div>
                  <h4 className="font-display font-bold text-xl text-slate-900 mb-1">Jessica Rose</h4>
                  <span className="text-electricPurple font-semibold">
                    Lifestyle Vlogger • 2.5M Subscribers
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

