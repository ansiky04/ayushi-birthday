import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Heart, Sparkles, X, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { birthdayConfig } from '../config/birthdayConfig';

export default function LoveLetterSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [typedChars, setTypedChars] = useState(0);

  // Full text combining paragraphs for typewriter calculation
  const fullText = birthdayConfig.loveLetter.paragraphs.join('\n\n');

  useEffect(() => {
    if (isOpen) {
      setTypedChars(0);
      const totalLen = fullText.length;
      let current = 0;
      const interval = setInterval(() => {
        current += 3;
        setTypedChars(Math.min(current, totalLen));
        if (current >= totalLen) {
          clearInterval(interval);
        }
      }, 18);
      return () => clearInterval(interval);
    }
  }, [isOpen, fullText]);

  const handleOpenLetter = () => {
    setIsOpen(true);
    // Sweet heart-colored confetti burst
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.65 },
      colors: ['#f43f5e', '#fb7185', '#fda4af', '#e879f9', '#ffd1dc']
    });
  };

  return (
    <section
      id="letter"
      className="relative min-h-screen w-full py-24 px-4 sm:px-6 overflow-hidden z-20 flex items-center justify-center"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl w-full mx-auto text-center">
        {/* Section Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-rose-400/30 text-rose-300 text-xs sm:text-sm font-medium tracking-wide mb-4"
        >
          <Mail className="w-4 h-4 text-rose-400" />
          <span>Strictly For Your Eyes Only</span>
          <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4"
        >
          A Secret <span className="text-gradient-romantic">Love Letter 💌</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-editorial text-lg sm:text-2xl text-pink-200/90 max-w-xl mx-auto italic mb-10"
        >
          "{birthdayConfig.loveLetter.teaser}"
        </motion.p>

        {/* Closed Envelope Display (when letter is not yet opened) */}
        {!isOpen ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center"
          >
            {/* Realistic 3D Envelope */}
            <motion.div
              whileHover={{ scale: 1.03, y: -5 }}
              onClick={handleOpenLetter}
              className="relative w-72 sm:w-96 h-48 sm:h-64 bg-gradient-to-br from-[#2a133d] to-[#170824] rounded-2xl border-2 border-rose-400/40 shadow-2xl cursor-pointer p-4 flex flex-col items-center justify-center overflow-hidden group"
            >
              {/* Envelope Flap Triangle Graphic */}
              <div
                className="absolute top-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-[#3a1a52] to-[#250d37] border-b border-rose-400/30 transition-all duration-500 origin-top"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 50% 100%)'
                }}
              />

              {/* Envelope Inner Shadow Lines */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(244, 63, 94, 0.15) 0%, transparent 60%)'
                }}
              />

              {/* Red Wax Seal Button in Center */}
              <motion.div
                animate={{
                  scale: [1, 1.06, 1],
                  boxShadow: [
                    '0 0 15px rgba(225, 29, 72, 0.4)',
                    '0 0 25px rgba(225, 29, 72, 0.8)',
                    '0 0 15px rgba(225, 29, 72, 0.4)'
                  ]
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-rose-700 via-rose-600 to-red-500 flex items-center justify-center border-2 border-amber-300/40 shadow-xl group-hover:scale-110 transition-transform"
              >
                <Heart className="w-8 h-8 sm:w-10 sm:h-10 fill-white text-white drop-shadow" />
              </motion.div>

              <span className="relative z-10 text-xs sm:text-sm font-sans tracking-widest text-rose-200 mt-3 uppercase font-semibold">
                Tap Wax Seal To Open
              </span>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpenLetter}
              className="mt-8 px-8 py-3.5 rounded-full btn-romantic text-white font-semibold flex items-center gap-2 shadow-xl cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>{birthdayConfig.loveLetter.buttonText}</span>
              <Heart className="w-4 h-4 fill-white text-white" />
            </motion.button>
          </motion.div>
        ) : (
          /* Opened Vintage Letter Presentation */
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative max-w-2xl w-full mx-auto bg-[#fbf6ea] text-gray-900 rounded-3xl p-6 sm:p-12 shadow-2xl border-4 border-amber-200/80 text-left overflow-hidden"
            style={{
              boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7), inset 0 0 40px rgba(180, 83, 9, 0.08)'
            }}
          >
            {/* Vintage Paper Texture Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-amber-100/30 via-transparent to-amber-200/20 pointer-events-none" />

            {/* Close / Fold Back Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-amber-900/10 hover:bg-amber-900/20 text-gray-700 transition-colors"
              title="Close Letter"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Letter Date Stamp */}
            <div className="flex justify-between items-center border-b border-amber-900/15 pb-4 mb-6">
              <span className="font-serif italic text-xs sm:text-sm text-gray-600">
                {birthdayConfig.loveLetter.dateStamp}
              </span>
              <div className="flex items-center gap-1 text-rose-600">
                <Heart className="w-4 h-4 fill-rose-500" />
                <span className="text-xs uppercase font-sans font-semibold tracking-wider">
                  Handwritten With Love
                </span>
              </div>
            </div>

            {/* Salutation */}
            <h3 className="font-cursive text-3xl sm:text-4xl text-rose-700 mb-5">
              {birthdayConfig.loveLetter.salutation}
            </h3>

            {/* Letter Body with Typewriter Effect */}
            <div className="font-editorial text-base sm:text-xl text-gray-800 leading-relaxed space-y-4 whitespace-pre-line min-h-[220px]">
              {fullText.slice(0, typedChars)}
              {typedChars < fullText.length && (
                <span className="inline-block w-2 h-5 bg-rose-600 ml-1 animate-pulse" />
              )}
            </div>

            {/* Closing & Handwritten Signature */}
            <div className="mt-8 pt-6 border-t border-amber-900/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-serif italic text-sm text-gray-600">
                  {birthdayConfig.loveLetter.closing}
                </p>
                <p className="font-cursive text-3xl sm:text-4xl text-rose-800 mt-1">
                  {birthdayConfig.loveLetter.signature}
                </p>
              </div>

              {/* Re-fold Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 text-rose-700 border border-rose-200 text-xs sm:text-sm font-medium hover:bg-rose-100 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Fold Back Letter</span>
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
