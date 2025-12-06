'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { PlayCircle } from 'lucide-react';

export default function Hero() {
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cardContainer = cardContainerRef.current;
    const card = cardRef.current;

    if (!cardContainer || !card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const xAxis = (window.innerWidth / 2 - e.pageX) / 30;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 30;
      card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    };

    const handleMouseEnter = () => {
      card.style.transition = 'none';
    };

    const handleMouseLeave = () => {
      card.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
      card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    };

    cardContainer.addEventListener('mousemove', handleMouseMove);
    cardContainer.addEventListener('mouseenter', handleMouseEnter);
    cardContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cardContainer.removeEventListener('mousemove', handleMouseMove);
      cardContainer.removeEventListener('mouseenter', handleMouseEnter);
      cardContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <header className="relative min-h-screen flex items-center overflow-hidden bg-deepViolet">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0b2e] via-[#2E1065] to-[#4c1d95] z-0"></div>
      {/* Additional depth gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-deepViolet/50 via-transparent to-transparent z-0"></div>

      {/* Animated Background Orbs */}
      <div className="blur-orb w-[600px] h-[600px] bg-electricPurple/30 top-[-200px] left-[-200px] animate-pulse z-0"></div>
      <div className="blur-orb w-[500px] h-[500px] bg-pink-500/20 bottom-[-100px] right-[-200px] animate-float-delayed z-0"></div>

      <div className="container mx-auto px-6 relative z-10 pt-32 pb-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Hero Text */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 mb-8 animate-float">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]"></span>
            <span className="text-sm font-semibold text-white/90 tracking-wide uppercase">
              Genesis Drop Live
            </span>
          </div>
          <h1 className="font-display font-bold text-5xl md:text-7xl leading-tight text-white mb-6 tracking-tight">
            Turn Viral Moments into{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electricPurple to-pink-400">
              Digital Assets.
            </span>
          </h1>
          <p className="text-xl text-purple-100/90 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
            The premier marketplace for creators to mint, sell, and preserve their legacy. Join the
            next evolution of the creator economy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="btn-interactive bg-white text-deepViolet px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-white/10">
              Start Collecting
            </button>
            <button className="btn-interactive flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 text-white font-semibold hover:bg-white/10 group">
              <PlayCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Manifesto
            </button>
          </div>
        </div>

        {/* Hero Visual (Orbiting Cards) */}
        <div className="relative h-[600px] hidden lg:flex items-center justify-center perspective-1000">
          {/* Center Glow */}
          <div className="absolute w-80 h-80 bg-electricPurple/20 rounded-full animate-pulse"></div>

          {/* Orbit Container */}
          <div className="relative w-[550px] h-[550px] animate-[spin_80s_linear_infinite]">
            {/* Card 1 */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-16 animate-[spin_80s_linear_infinite_reverse]">
              <div className="bg-gradient-to-br from-deepViolet/35 via-[#3d1a7a]/30 to-[#5a2a9a]/25 border border-white/10 p-3 rounded-2xl w-52 hover:scale-105 transition-transform duration-500 shadow-[0_8px_24px_rgba(0,0,0,0.25)] cursor-pointer group">
                <Image
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80"
                  alt="NFT"
                  width={208}
                  height={176}
                  className="w-full h-44 object-cover rounded-xl mb-3 group-hover:brightness-110 transition-all"
                />
                <div className="flex justify-between items-center px-1">
                  <span className="text-xs font-semibold text-white/90">@neon_dream</span>
                  <span className="text-xs font-bold text-electricPurple drop-shadow-sm">1.5 ETH</span>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="absolute bottom-12 right-0 transform animate-[spin_80s_linear_infinite_reverse]">
              <div className="bg-gradient-to-br from-deepViolet/35 via-[#3d1a7a]/30 to-[#5a2a9a]/25 border border-white/10 p-3 rounded-2xl w-48 hover:scale-105 transition-transform duration-500 shadow-[0_8px_24px_rgba(0,0,0,0.25)] cursor-pointer group">
                <Image
                  src="https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?auto=format&fit=crop&w=400&q=80"
                  alt="NFT"
                  width={192}
                  height={144}
                  className="w-full h-36 object-cover rounded-xl mb-3 group-hover:brightness-110 transition-all"
                />
                <div className="flex justify-between items-center px-1">
                  <span className="text-xs font-semibold text-white/90">@cyber_punk</span>
                  <span className="text-xs font-bold text-electricPurple drop-shadow-sm">2.1 ETH</span>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="absolute bottom-12 left-0 transform animate-[spin_80s_linear_infinite_reverse]">
              <div className="bg-gradient-to-br from-deepViolet/35 via-[#3d1a7a]/30 to-[#5a2a9a]/25 border border-white/10 p-3 rounded-2xl w-50 hover:scale-105 transition-transform duration-500 shadow-[0_8px_24px_rgba(0,0,0,0.25)] cursor-pointer group">
                <Image
                  src="https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=400&q=80"
                  alt="NFT"
                  width={200}
                  height={160}
                  className="w-full h-40 object-cover rounded-xl mb-3 group-hover:brightness-110 transition-all"
                />
                <div className="flex justify-between items-center px-1">
                  <span className="text-xs font-semibold text-white/90">@future_bass</span>
                  <span className="text-xs font-bold text-electricPurple drop-shadow-sm">0.9 ETH</span>
                </div>
              </div>
            </div>
          </div>

          {/* Central Main Card (Static Float) */}
          <div
            ref={cardContainerRef}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 animate-float card-3d-container"
          >
            <div
              ref={cardRef}
              className="relative bg-gradient-to-br from-deepViolet/40 via-[#3d1a7a]/35 to-[#5a2a9a]/30 border border-white/10 p-5 rounded-3xl w-80 shadow-[0_8px_32px_rgba(0,0,0,0.2),0_0_60px_rgba(139,92,246,0.15)] card-3d cursor-pointer group overflow-hidden"
            >
              {/* Subtle inner glow that matches background */}
              <div className="absolute inset-0 bg-gradient-to-br from-electricPurple/15 via-transparent to-pink-500/10 pointer-events-none"></div>
              
              <div className="relative overflow-hidden rounded-2xl mb-5">
                <Image
                  src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=600&q=80"
                  alt="Featured NFT"
                  width={320}
                  height={320}
                  className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500/85 to-red-600/85 px-4 py-2 rounded-full text-xs font-bold text-white flex items-center gap-1.5 shadow-lg border border-white/20">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span> Live Auction
                </div>
              </div>
              <div className="relative px-2 pb-1">
                <h3 className="text-white font-display font-bold text-2xl mb-4 drop-shadow-lg">Ethereal Glitch #04</h3>
                <div className="flex justify-between items-end gap-4">
                  <div className="flex items-center gap-2.5 min-w-0 flex-1">
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-electricPurple/40 to-pink-400/40 rounded-full opacity-60"></div>
                      <Image
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                        alt="Creator"
                        width={36}
                        height={36}
                        className="relative w-9 h-9 rounded-full bg-white/20 p-0.5 border border-white/30"
                      />
                    </div>
                    <span className="text-sm font-medium text-purple-100 truncate">@digital_dreamer</span>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-[11px] text-purple-200/90 uppercase tracking-wider font-semibold mb-1.5">
                      Current Bid
                    </p>
                    <div className="flex items-baseline gap-1.5">
                      <p className="text-2xl font-display font-bold text-white drop-shadow-md">4.2</p>
                      <span className="text-sm font-semibold text-purple-200/80">ETH</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Gradient Fade into content */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-surface via-surface/80 to-transparent z-10 pointer-events-none"></div>
    </header>
  );
}

