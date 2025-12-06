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

      {/* Animated Background Orbs */}
      <div className="blur-orb w-[600px] h-[600px] bg-electricPurple/30 top-[-200px] left-[-200px] animate-pulse z-0"></div>
      <div className="blur-orb w-[500px] h-[500px] bg-pink-500/20 bottom-[-100px] right-[-200px] animate-float-delayed z-0"></div>

      <div className="container mx-auto px-6 relative z-10 pt-32 pb-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Hero Text */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md mb-8 animate-float">
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
            <button className="btn-interactive flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 text-white font-semibold hover:bg-white/10 backdrop-blur-sm group">
              <PlayCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Manifesto
            </button>
          </div>
        </div>

        {/* Hero Visual (Orbiting Cards) */}
        <div className="relative h-[600px] hidden lg:flex items-center justify-center perspective-1000">
          {/* Center Glow */}
          <div className="absolute w-80 h-80 bg-electricPurple/30 rounded-full blur-[120px] animate-pulse"></div>

          {/* Orbit Container */}
          <div className="relative w-[550px] h-[550px] animate-[spin_80s_linear_infinite]">
            {/* Card 1 */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-16 animate-[spin_80s_linear_infinite_reverse]">
              <div className="glass-card p-3 rounded-2xl w-52 hover:scale-105 transition-transform duration-500 shadow-2xl cursor-pointer group">
                <Image
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80"
                  alt="NFT"
                  width={208}
                  height={176}
                  className="w-full h-44 object-cover rounded-xl mb-3 group-hover:brightness-110 transition-all"
                />
                <div className="flex justify-between items-center px-1">
                  <span className="text-xs font-semibold text-white/80">@neon_dream</span>
                  <span className="text-xs font-bold text-electricPurple">1.5 ETH</span>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="absolute bottom-12 right-0 transform animate-[spin_80s_linear_infinite_reverse]">
              <div className="glass-card p-3 rounded-2xl w-48 hover:scale-105 transition-transform duration-500 shadow-2xl cursor-pointer group">
                <Image
                  src="https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?auto=format&fit=crop&w=400&q=80"
                  alt="NFT"
                  width={192}
                  height={144}
                  className="w-full h-36 object-cover rounded-xl mb-3 group-hover:brightness-110 transition-all"
                />
                <div className="flex justify-between items-center px-1">
                  <span className="text-xs font-semibold text-white/80">@cyber_punk</span>
                  <span className="text-xs font-bold text-electricPurple">2.1 ETH</span>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="absolute bottom-12 left-0 transform animate-[spin_80s_linear_infinite_reverse]">
              <div className="glass-card p-3 rounded-2xl w-50 hover:scale-105 transition-transform duration-500 shadow-2xl cursor-pointer group">
                <Image
                  src="https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=400&q=80"
                  alt="NFT"
                  width={200}
                  height={160}
                  className="w-full h-40 object-cover rounded-xl mb-3 group-hover:brightness-110 transition-all"
                />
                <div className="flex justify-between items-center px-1">
                  <span className="text-xs font-semibold text-white/80">@future_bass</span>
                  <span className="text-xs font-bold text-electricPurple">0.9 ETH</span>
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
              className="glass-card bg-white/5 p-4 rounded-[2rem] w-80 shadow-[0_0_60px_rgba(139,92,246,0.3)] backdrop-blur-2xl card-3d cursor-pointer group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-5">
                <Image
                  src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=600&q=80"
                  alt="Featured NFT"
                  width={320}
                  height={320}
                  className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span> Live Auction
                </div>
              </div>
              <div className="px-2">
                <h3 className="text-white font-display font-bold text-2xl mb-2">Ethereal Glitch #04</h3>
                <div className="flex justify-between items-end">
                  <div className="flex items-center gap-2">
                    <Image
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                      alt="Creator"
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-full bg-white/10 p-0.5"
                    />
                    <span className="text-sm font-medium text-purple-100/80">@digital_dreamer</span>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-purple-200 uppercase tracking-widest font-bold mb-1">
                      Current Bid
                    </p>
                    <p className="text-2xl font-display font-bold text-white">4.2 ETH</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Gradient Fade into content */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-surface to-transparent z-10 pointer-events-none"></div>
    </header>
  );
}

