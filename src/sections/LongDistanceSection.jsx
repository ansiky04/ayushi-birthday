import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Navigation, Moon, Stars } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';

export default function LongDistanceSection() {
  const { longDistance, myName, girlfriendName } = birthdayConfig;

  return (
    <section
      id="distance"
      className="relative min-h-[90vh] w-full py-24 px-4 sm:px-6 overflow-hidden z-20 flex items-center justify-center"
    >
      {/* Dreamy Ambient Cosmic Aura */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 bg-rose-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 bg-purple-600/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl w-full mx-auto text-center relative z-10">
        {/* Section Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-rose-400/30 text-rose-300 text-xs sm:text-sm font-medium tracking-wide mb-6"
        >
          <Navigation className="w-3.5 h-3.5 text-pink-400 animate-pulse" />
          <span>{longDistance.badge}</span>
          <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
        </motion.div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
        >
          Even Miles Can't Separate <span className="text-gradient-romantic">Our Hearts ❤️</span>
        </motion.h2>

        {/* Interactive Distance Visualizer: Two Glowing Hearts Connected by Glowing Constellation Line */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="my-10 relative max-w-2xl mx-auto glass-panel border border-rose-400/30 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl"
        >
          {/* Subtle Moon & Stars decoration in background */}
          <div className="absolute top-4 right-6 flex items-center gap-2 text-rose-300/40">
            <Moon className="w-5 h-5 text-amber-200/50" />
            <Stars className="w-4 h-4 text-pink-300/40" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4 relative py-4">
            {/* Heart 1: Ansik */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="flex flex-col items-center gap-2 z-10"
            >
              <div className="relative">
                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                    boxShadow: [
                      '0 0 15px rgba(244, 63, 94, 0.4)',
                      '0 0 30px rgba(244, 63, 94, 0.8)',
                      '0 0 15px rgba(244, 63, 94, 0.4)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-rose-600 to-pink-500 flex items-center justify-center shadow-xl border-2 border-white/40"
                >
                  <Heart className="w-8 h-8 sm:w-10 sm:h-10 fill-white text-white" />
                </motion.div>
                <span className="absolute -bottom-1 -right-1 px-2 py-0.5 rounded-full bg-rose-950 text-[10px] text-rose-200 border border-rose-400 font-semibold uppercase tracking-wider">
                  You
                </span>
              </div>
              <span className="font-serif text-lg font-bold text-white tracking-wide mt-1">
                {myName}
              </span>
              <span className="text-xs text-pink-200/70 font-sans">
                {longDistance.locationAnsik}
              </span>
            </motion.div>

            {/* Glowing Distance Line & Pulsing Energy Signal */}
            <div className="flex-1 w-full sm:w-auto flex flex-col items-center justify-center px-4 relative my-2 sm:my-0">
              {/* Connecting line */}
              <div className="w-full h-1 bg-gradient-to-r from-rose-500 via-pink-300 to-purple-500 rounded-full relative overflow-hidden shadow-[0_0_12px_rgba(244,63,94,0.8)]">
                {/* Moving light pulse */}
                <motion.div
                  animate={{
                    x: ['-100%', '200%']
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                  className="w-24 h-full bg-gradient-to-r from-transparent via-white to-transparent"
                />
              </div>

              {/* Infinite Love Badge */}
              <motion.div
                animate={{
                  y: [0, -4, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="mt-3 px-3 py-1 rounded-full bg-black/40 border border-pink-400/30 text-[11px] text-pink-200 font-medium flex items-center gap-1.5 shadow-md"
              >
                <Sparkles className="w-3 h-3 text-amber-300" />
                <span>Miles Apart, Never Apart at Heart</span>
              </motion.div>
            </div>

            {/* Heart 2: Ayushi */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="flex flex-col items-center gap-2 z-10"
            >
              <div className="relative">
                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                    boxShadow: [
                      '0 0 15px rgba(168, 85, 247, 0.4)',
                      '0 0 30px rgba(168, 85, 247, 0.8)',
                      '0 0 15px rgba(168, 85, 247, 0.4)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center shadow-xl border-2 border-white/40"
                >
                  <Heart className="w-8 h-8 sm:w-10 sm:h-10 fill-white text-white" />
                </motion.div>
                <span className="absolute -bottom-1 -right-1 px-2 py-0.5 rounded-full bg-purple-950 text-[10px] text-purple-200 border border-purple-400 font-semibold uppercase tracking-wider">
                  Princess
                </span>
              </div>
              <span className="font-serif text-lg font-bold text-white tracking-wide mt-1">
                {girlfriendName}
              </span>
              <span className="text-xs text-pink-200/70 font-sans">
                {longDistance.locationAyushi}
              </span>
            </motion.div>
          </div>

          {/* Long Distance Heartfelt Message */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="font-editorial italic text-base sm:text-xl md:text-2xl text-pink-100/90 leading-relaxed max-w-xl mx-auto">
              "{longDistance.message}"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
