import { Twitter, Instagram, Disc, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-premiumDark text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6 group cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-deepViolet font-display font-bold text-xl group-hover:rotate-12 transition-transform">
                M
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">Momint</span>
            </div>
            <p className="text-purple-200/80 text-sm leading-relaxed mb-8 max-w-xs">
              The premiere marketplace for influencer legacies. Built on Ethereum, designed for
              permanence.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-electricPurple transition-all hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-electricPurple transition-all hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-electricPurple transition-all hover:scale-110"
              >
                <Disc className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Marketplace</h4>
            <ul className="space-y-4 text-sm text-purple-200/80">
              <li>
                <a href="#" className="hover:text-white transition-colors nav-link inline-block">
                  Explore Drops
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors nav-link inline-block">
                  Top Collectors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors nav-link inline-block">
                  Trending Now
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-purple-200/80">
              <li>
                <a href="#" className="hover:text-white transition-colors nav-link inline-block">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors nav-link inline-block">
                  Partners & API
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors nav-link inline-block">
                  Blog & News
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Stay Updated</h4>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-purple-300/50 focus:outline-none focus:border-electricPurple w-full transition-colors focus:bg-white/10"
              />
              <button className="bg-electricPurple hover:bg-electricPurple/90 px-5 py-3 rounded-xl text-white transition-colors btn-interactive flex-shrink-0">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-purple-300/60">
          <p>&copy; 2023 Momint Inc. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

