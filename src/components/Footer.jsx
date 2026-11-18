import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp, Sparkles } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-4 sm:px-6 border-t border-rose-500/20 glass-panel z-20 overflow-hidden text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-6">
        {/* Back to top button */}
        <motion.button
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="p-3 rounded-full bg-rose-500/20 hover:bg-rose-500/30 border border-rose-400/40 text-rose-200 transition-all shadow-lg flex items-center justify-center cursor-pointer group"
          title="Back to Top"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
        </motion.button>

        {/* Love Credit Line */}
        <div className="flex flex-col items-center gap-2">
          <p className="font-serif text-base sm:text-lg text-rose-100 flex items-center justify-center gap-2 flex-wrap">
            <span>Crafted with endless love for</span>
            <span className="font-bold text-rose-300 font-cursive text-2xl sm:text-3xl">
              {birthdayConfig.girlfriendName}
            </span>
            <span>by</span>
            <span className="font-semibold text-pink-200">{birthdayConfig.myName}</span>
            <Heart className="w-4 h-4 fill-rose-500 text-rose-500 animate-pulse" />
          </p>

          <p className="text-xs text-pink-300/60 font-sans tracking-wider uppercase">
            A Dreamy Digital Keepsake • {birthdayConfig.birthdayDateDisplay}
          </p>
        </div>
      </div>
    </footer>
  );
}
