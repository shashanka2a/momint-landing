'use client';

import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed z-50 py-4 left-1/2 -translate-x-1/2 transition-all duration-500 ${
        isScrolled
          ? 'dynamic-island py-2'
          : 'static-navbar py-4 bg-transparent'
      }`}
    >
      <div className="w-full px-6 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-deepViolet to-electricPurple flex items-center justify-center text-white font-display font-bold text-xl shadow-lg group-hover:scale-105 transition-transform duration-300">
            M
          </div>
          <span
            className={`font-display font-bold text-2xl tracking-tight transition-colors duration-300 ${
              isScrolled ? 'nav-logo-scrolled' : 'text-white'
            }`}
          >
            Momint
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#"
            className={`nav-link font-medium text-sm transition-colors duration-300 ${
              isScrolled
                ? 'nav-text-scrolled hover:text-deepViolet'
                : 'text-white/90 hover:text-white'
            }`}
          >
            Drops
          </a>
          <a
            href="#"
            className={`nav-link font-medium text-sm transition-colors duration-300 ${
              isScrolled
                ? 'nav-text-scrolled hover:text-deepViolet'
                : 'text-white/90 hover:text-white'
            }`}
          >
            Creators
          </a>
          <a
            href="#"
            className={`nav-link font-medium text-sm transition-colors duration-300 ${
              isScrolled
                ? 'nav-text-scrolled hover:text-deepViolet'
                : 'text-white/90 hover:text-white'
            }`}
          >
            Community
          </a>
        </div>

        {/* Action Button */}
        <button
          className={`btn-interactive px-6 py-2.5 rounded-full font-semibold shadow-lg text-sm transition-all duration-300 border border-transparent ${
            isScrolled
              ? 'bg-deepViolet text-white'
              : 'bg-white text-deepViolet'
          }`}
        >
          Connect Wallet
        </button>
      </div>
    </nav>
  );
}

