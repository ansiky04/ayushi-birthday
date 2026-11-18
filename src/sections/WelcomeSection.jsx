import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, ChevronDown, Music } from 'lucide-react';
import confetti from 'canvas-confetti';
import { birthdayConfig } from '../config/birthdayConfig';

export default function WelcomeSection({ onOpenSurprise, isMusicPlaying, setIsMusicPlaying }) {
  const handleOpen = () => {
    // Grand welcoming confetti shower
    confetti({
      particleCount: 70,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#f43f5e', '#fb7185', '#f472b6', '#d8b4fe', '#fef08a'],
      scalar: 1.1
    });

    // Start music on explicit interaction if not already playing
    if (!isMusicPlaying) {
      setIsMusicPlaying(true);
    }

    onOpenSurprise();
  };

  return (
    <section
      id="top"
      className="relative min-h-screen w-full flex items-center justify-center px-4 py-20 overflow-hidden z-20"
    >
      {/* Dreamy Ambient Gradient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-gradient-to-tr from-pink-600/25 via-rose-500/20 to-purple-600/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-rose-500/20 rounded-full blur-[90px] pointer-events-none" />

      {/* Main Content Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-3xl w-full mx-auto text-center glass-panel border border-rose-400/30 rounded-3xl p-6 sm:p-12 shadow-2xl backdrop-blur-2xl"
      >
        {/* Decorative Top Floating Crown / Sparkle */}
        <motion.div
          animate={{
            y: [0, -8, 0],
            rotate: [0, 4, -4, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 rounded-full bg-gradient-to-tr from-rose-500 via-pink-400 to-amber-300 p-0.5 shadow-xl shadow-rose-500/30 flex items-center justify-center"
        >
          <div className="w-full h-full rounded-full bg-[#180b2a] flex items-center justify-center">
            <Heart className="w-8 h-8 sm:w-10 sm:h-10 fill-rose-500 text-rose-400 animate-pulse" />
          </div>
        </motion.div>

        {/* Greeting Whisper */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-cursive text-2xl sm:text-3xl md:text-4xl text-rose-300 mb-2"
        >
          {birthdayConfig.welcome.greeting}
        </motion.p>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xs sm:text-sm uppercase tracking-[0.25em] text-pink-200/80 mb-5 font-sans"
        >
          {birthdayConfig.welcome.subtext}
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight drop-shadow-md"
        >
          <span className="text-gradient-romantic block">
            {birthdayConfig.welcome.mainHeading}
          </span>
        </motion.h1>

        {/* Subtitle Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="font-editorial italic text-base sm:text-xl md:text-2xl text-pink-100/90 max-w-xl mx-auto leading-relaxed mb-10"
        >
          "{birthdayConfig.welcome.subtitle}"
        </motion.p>

        {/* Interactive CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleOpen}
            className="w-full sm:w-auto px-8 py-4 rounded-full btn-romantic text-white font-semibold text-base sm:text-lg flex items-center justify-center gap-3 shadow-xl cursor-pointer group"
          >
            <Sparkles className="w-5 h-5 text-amber-300 group-hover:rotate-12 transition-transform" />
            <span>{birthdayConfig.welcome.buttonText}</span>
            <Heart className="w-5 h-5 fill-white text-white group-hover:scale-125 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Music hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-6 text-xs text-pink-300/70 flex items-center justify-center gap-1.5"
        >
          <Music className="w-3.5 h-3.5 text-rose-400" />
          <span>Includes romantic background melody (sound enabled upon opening)</span>
        </motion.p>

        {/* Bouncing Scroll Down Prompt */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="mt-8 flex justify-center"
        >
          <ChevronDown className="w-6 h-6 text-rose-300/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
