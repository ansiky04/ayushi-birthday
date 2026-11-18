import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { birthdayConfig } from '../config/birthdayConfig';

export default function FinalSurpriseSection() {
  const [loveCount, setLoveCount] = useState(0);
  const { finalSurprise, girlfriendName, myName } = birthdayConfig;

  const handleHeartClick = (e) => {
    setLoveCount((prev) => prev + 1);

    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 40,
      spread: 80,
      origin: { x, y },
      colors: ['#f43f5e', '#fb7185', '#ec4899', '#ffd1dc', '#ffffff']
    });
  };

  return (
    <section
      id="final"
      className="relative min-h-screen w-full py-28 px-4 sm:px-6 overflow-hidden z-20 flex items-center justify-center"
    >
      {/* Majestic Celestial Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-rose-600/20 via-pink-500/20 to-purple-600/30 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl w-full mx-auto text-center relative z-10">
        {/* Section Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-panel border border-rose-400/40 text-rose-300 text-xs sm:text-sm font-medium tracking-widest uppercase mb-6 shadow-lg shadow-rose-500/20"
        >
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>{finalSurprise.badge}</span>
          <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-black text-white leading-tight mb-4"
        >
          <span className="text-gradient-romantic block drop-shadow-lg">
            {finalSurprise.heading}
          </span>
        </motion.h2>

        {/* Prominent Long Distance Promises requested in Item 5 */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-amber-200 drop-shadow mb-2">
            "{finalSurprise.subheadingPromise}"
          </p>
          <p className="font-editorial italic text-lg sm:text-xl text-pink-200">
            "{finalSurprise.subheadingComfort}"
          </p>
        </motion.div>

        {/* Emotionally Engaging Message Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="glass-panel border border-rose-400/30 rounded-3xl p-8 sm:p-14 max-w-3xl mx-auto shadow-2xl relative overflow-hidden mb-12"
        >
          <div className="font-editorial text-lg sm:text-2xl md:text-3xl text-pink-100/95 leading-relaxed space-y-5 italic">
            {finalSurprise.lines.map((line, idx) => (
              <p
                key={idx}
                className={
                  line.includes('I LOVE YOU')
                    ? 'font-serif not-italic text-2xl sm:text-4xl font-extrabold text-gradient-romantic tracking-wider pt-2'
                    : ''
                }
              >
                {line}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Cinematic Animation: Two Hearts Coming Together */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center my-8"
        >
          {/* Two Hearts coming together animation */}
          <div className="flex items-center justify-center relative mb-4">
            {/* Heart 1: Ansik moving right */}
            <motion.div
              animate={{
                x: [-24, 0, -24],
                scale: [1, 1.1, 1],
                rotate: [-10, 0, -10]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-rose-600 to-pink-500 flex items-center justify-center shadow-lg shadow-rose-500/40 z-10 border border-white/40"
            >
              <Heart className="w-8 h-8 fill-white text-white" />
            </motion.div>

            {/* Sparkle burst at union */}
            <motion.div
              animate={{
                scale: [0.5, 1.3, 0.5],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute z-20 pointer-events-none"
            >
              <Sparkles className="w-8 h-8 text-amber-300 drop-shadow-[0_0_8px_#f59e0b]" />
            </motion.div>

            {/* Heart 2: Ayushi moving left */}
            <motion.div
              animate={{
                x: [24, 0, 24],
                scale: [1, 1.1, 1],
                rotate: [10, 0, 10]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/40 z-10 border border-white/40 -ml-2"
            >
              <Heart className="w-8 h-8 fill-white text-white" />
            </motion.div>
          </div>

          {/* Interactive Tap Heart Button */}
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.88 }}
            animate={{
              scale: [1, 1.08, 1],
              filter: [
                'drop-shadow(0 0 15px rgba(244, 63, 94, 0.6))',
                'drop-shadow(0 0 35px rgba(244, 63, 94, 0.9))',
                'drop-shadow(0 0 15px rgba(244, 63, 94, 0.6))',
              ],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            onClick={handleHeartClick}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-rose-600 via-pink-500 to-red-500 flex items-center justify-center text-white shadow-2xl cursor-pointer group relative mt-3"
            title="Tap to send love across the distance!"
          >
            <Heart className="w-10 h-10 sm:w-14 sm:h-14 fill-white text-white drop-shadow-md group-hover:scale-110 transition-transform" />
            <span className="absolute inset-0 rounded-full border-2 border-rose-400 animate-ping opacity-30 pointer-events-none" />
          </motion.button>

          <p className="font-sans text-xs sm:text-sm text-pink-200/80 mt-4 font-medium flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>{finalSurprise.interactiveHeartPrompt}</span>
          </p>

          {loveCount > 0 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="mt-3 px-4 py-1.5 rounded-full bg-rose-500/25 border border-rose-400/40 text-rose-200 text-xs font-semibold"
            >
              Love Sent Across the Distance: {loveCount} ❤️
            </motion.div>
          )}
        </motion.div>

        {/* End Signature */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="font-cursive text-3xl sm:text-5xl text-rose-300 mt-10"
        >
          {finalSurprise.signoff}
        </motion.p>
      </div>
    </section>
  );
}
