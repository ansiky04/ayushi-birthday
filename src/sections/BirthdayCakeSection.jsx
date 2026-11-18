import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Flame, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { birthdayConfig } from '../config/birthdayConfig';

export default function BirthdayCakeSection() {
  const [candlesBlown, setCandlesBlown] = useState(false);

  const handleBlowCandles = () => {
    setCandlesBlown(true);

    // Multi-stage confetti celebration cannon
    const end = Date.now() + 2.5 * 1000;
    const colors = ['#f43f5e', '#ec4899', '#a855f7', '#fbbf24', '#ffffff', '#fb7185'];

    (function frame() {
      confetti({
        particleCount: 7,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 7,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  const handleRelight = () => {
    setCandlesBlown(false);
  };

  return (
    <section
      id="cake"
      className="relative min-h-screen w-full py-24 px-4 sm:px-6 overflow-hidden z-20 flex items-center justify-center"
    >
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-rose-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl w-full mx-auto text-center">
        {/* Section Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-rose-400/30 text-rose-300 text-xs sm:text-sm font-medium tracking-wide mb-4"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>A Magical Wish For You</span>
          <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4"
        >
          {birthdayConfig.cake.heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-editorial text-lg sm:text-2xl text-pink-200/90 max-w-xl mx-auto italic mb-10"
        >
          "{birthdayConfig.cake.instruction}"
        </motion.p>

        {/* Handcrafted Multi-Tier Birthday Cake Container */}
        <div className="relative max-w-md w-full mx-auto my-6 flex flex-col items-center">
          {/* Cake Illustration */}
          <div className="relative w-72 sm:w-80 h-72 sm:h-80 flex flex-col items-center justify-end select-none">
            {/* Candles Row */}
            <div className="flex justify-center items-end gap-5 mb-0.5 z-10">
              {[1, 2, 3].map((candleIndex) => (
                <div key={candleIndex} className="flex flex-col items-center relative">
                  {/* Candle Flame / Smoke */}
                  <AnimatePresence>
                    {!candlesBlown ? (
                      <motion.div
                        key="flame"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="candle-flame w-4 h-6 mb-1 rounded-full bg-gradient-to-t from-orange-500 via-amber-300 to-yellow-100 flex items-center justify-center shadow-lg"
                      >
                        <div className="w-1.5 h-2 rounded-full bg-white blur-[0.5px]" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="smoke"
                        className="smoke-puff w-3 h-5 mb-1 bg-white/40 rounded-full blur-[1px]"
                      />
                    )}
                  </AnimatePresence>

                  {/* Candle Wick */}
                  <div className="w-0.5 h-2 bg-gray-700" />

                  {/* Candle Stick */}
                  <div
                    className="w-3.5 h-12 rounded-t-sm shadow-md"
                    style={{
                      background:
                        candleIndex % 2 === 0
                          ? 'repeating-linear-gradient(45deg, #f43f5e, #f43f5e 4px, #fff 4px, #fff 8px)'
                          : 'repeating-linear-gradient(-45deg, #a855f7, #a855f7 4px, #fff 4px, #fff 8px)',
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Top Tier */}
            <div className="relative w-40 sm:w-44 h-16 rounded-t-2xl bg-gradient-to-r from-rose-300 via-pink-200 to-rose-300 shadow-md border-b-2 border-rose-400/40 flex flex-col justify-between overflow-hidden">
              {/* Dripping Frosting */}
              <div
                className="w-full h-5 bg-white rounded-b-xl opacity-90 shadow-sm"
                style={{
                  clipPath:
                    'polygon(0 0, 100% 0, 100% 60%, 85% 100%, 70% 50%, 50% 90%, 30% 40%, 15% 100%, 0 60%)',
                }}
              />
              {/* Strawberries / Pearls */}
              <div className="flex justify-around items-center px-2 pb-1">
                {[1, 2, 3, 4].map((p) => (
                  <span
                    key={p}
                    className="w-2.5 h-2.5 rounded-full bg-rose-500 shadow-sm inline-block"
                  />
                ))}
              </div>
            </div>

            {/* Middle Tier */}
            <div className="relative w-52 sm:w-60 h-20 rounded-t-2xl bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 shadow-lg border-b-2 border-purple-400/40 flex flex-col justify-between overflow-hidden">
              {/* Cream Icing */}
              <div
                className="w-full h-6 bg-white rounded-b-xl opacity-90 shadow-sm"
                style={{
                  clipPath:
                    'polygon(0 0, 100% 0, 100% 70%, 88% 100%, 75% 45%, 60% 95%, 45% 40%, 30% 100%, 15% 55%, 0 70%)',
                }}
              />
              <div className="flex justify-around items-center px-4 pb-2">
                {[1, 2, 3, 4, 5].map((p) => (
                  <Heart
                    key={p}
                    className="w-3.5 h-3.5 text-rose-500 fill-rose-500 opacity-80"
                  />
                ))}
              </div>
            </div>

            {/* Base Tier */}
            <div className="relative w-64 sm:w-72 h-24 rounded-t-2xl bg-gradient-to-r from-rose-400 via-pink-400 to-rose-400 shadow-2xl flex flex-col justify-between overflow-hidden">
              {/* White Royal Icing */}
              <div
                className="w-full h-7 bg-white rounded-b-xl opacity-95 shadow-md"
                style={{
                  clipPath:
                    'polygon(0 0, 100% 0, 100% 65%, 90% 100%, 80% 50%, 68% 95%, 55% 40%, 42% 100%, 30% 45%, 18% 90%, 8% 50%, 0 70%)',
                }}
              />
              <div className="flex justify-around items-center px-5 pb-3">
                {[1, 2, 3, 4, 5, 6].map((p) => (
                  <span
                    key={p}
                    className="w-3 h-3 rounded-full bg-amber-200 border border-amber-300 shadow-sm inline-block"
                  />
                ))}
              </div>
            </div>

            {/* Cake Stand / Plate */}
            <div className="w-72 sm:w-80 h-4 bg-gradient-to-r from-amber-100 via-white to-amber-100 rounded-full shadow-2xl border border-amber-200/50" />
            <div className="w-40 sm:w-48 h-3 bg-gradient-to-r from-amber-200 via-white to-amber-200 rounded-b-xl shadow-lg" />
          </div>

          {/* Action Button & Celebration Messages */}
          <div className="mt-8 flex flex-col items-center gap-4">
            {!candlesBlown ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleBlowCandles}
                className="px-8 py-4 rounded-full btn-romantic text-white font-semibold text-base sm:text-lg flex items-center gap-3 shadow-2xl cursor-pointer"
              >
                <Flame className="w-5 h-5 text-amber-300 animate-pulse" />
                <span>{birthdayConfig.cake.blowButtonText}</span>
                <Heart className="w-5 h-5 fill-white text-white" />
              </motion.button>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-4"
              >
                {/* Wish Granted Card */}
                <div className="glass-panel border-2 border-rose-400/50 rounded-3xl p-6 sm:p-8 max-w-lg shadow-2xl">
                  <p className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                    {birthdayConfig.cake.blownSuccessMessage}
                  </p>
                  <p className="font-editorial italic text-lg sm:text-xl text-rose-200">
                    "{birthdayConfig.cake.secondaryCelebrationMessage}"
                  </p>
                </div>

                {/* Relight button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleRelight}
                  className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-pink-200 text-sm font-medium flex items-center gap-2 transition-all cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>{birthdayConfig.cake.relightButtonText}</span>
                </motion.button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
