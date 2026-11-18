import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Volume2, VolumeX, Menu, X, Sparkles } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';

export default function Navbar({ isMusicPlaying, setIsMusicPlaying }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Countdown', href: '#countdown' },
    { label: 'Our Love', href: '#distance' },
    { label: 'Photos', href: '#gallery' },
    { label: 'Videos', href: '#videos' },
    { label: 'Why You', href: '#reasons' },
    { label: 'From Ansik', href: '#ansik-letter' },
    { label: 'Love Letter', href: '#letter' },
    { label: 'Cake', href: '#cake' },
    { label: 'Roses', href: '#roses' },
    { label: 'Surprise', href: '#final' },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-3 sm:top-5 left-0 right-0 z-40 transition-all duration-300 px-3 sm:px-6 flex justify-center`}
    >
      <nav
        className={`w-full max-w-5xl rounded-full transition-all duration-300 flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 ${
          isScrolled
            ? 'glass-panel shadow-2xl border-rose-500/30'
            : 'bg-black/30 backdrop-blur-md border border-white/10'
        }`}
      >
        {/* Brand / Logo */}
        <a
          href="#top"
          className="flex items-center gap-2 group cursor-pointer focus:outline-none"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-rose-500 to-pink-400 flex items-center justify-center shadow-md shadow-rose-500/30 group-hover:scale-105 transition-transform">
            <Heart className="w-4 h-4 fill-white text-white group-hover:scale-110 transition-transform" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-sm sm:text-base font-bold text-rose-100 tracking-wide flex items-center gap-1">
              For {birthdayConfig.girlfriendName}
              <Sparkles className="w-3 h-3 text-amber-300 inline" />
            </span>
            <span className="text-[10px] text-pink-300/80 hidden sm:block tracking-widest uppercase">
              {birthdayConfig.brandText}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="px-2.5 py-1.5 rounded-full text-xs font-medium text-pink-100/80 hover:text-white hover:bg-white/10 transition-all"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Quick Actions (Sound Toggle & Mobile Menu) */}
        <div className="flex items-center gap-2">
          {/* Quick Sound Toggle Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMusicPlaying(!isMusicPlaying)}
            className={`p-2 rounded-full border transition-all ${
              isMusicPlaying
                ? 'bg-rose-500/30 border-rose-400 text-rose-200 shadow-md shadow-rose-500/20'
                : 'bg-white/5 border-white/10 text-white/60 hover:text-white'
            }`}
            title={isMusicPlaying ? 'Turn Music Off' : 'Turn Music On'}
          >
            {isMusicPlaying ? (
              <Volume2 className="w-4 h-4 text-pink-300 animate-pulse" />
            ) : (
              <VolumeX className="w-4 h-4 text-white/50" />
            )}
          </motion.button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed top-20 left-4 right-4 z-50 glass-panel border border-rose-500/30 rounded-3xl p-5 shadow-2xl backdrop-blur-2xl"
          >
            <div className="flex flex-col gap-1.5 max-h-[75vh] overflow-y-auto">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-2.5 rounded-2xl text-rose-100 hover:text-white hover:bg-rose-500/20 text-sm font-medium transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <Heart className="w-3.5 h-3.5 text-rose-400 opacity-60" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
