import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, PenTool, Check, Bookmark } from 'lucide-react';
import confetti from 'canvas-confetti';
import { birthdayConfig } from '../config/birthdayConfig';

export default function AnsikSpecialMessageSection() {
  const { specialMessageFromAnsik } = birthdayConfig;
  const [hasHugged, setHasHugged] = useState(false);

  const handleSendHug = (e) => {
    setHasHugged(true);
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 50,
      spread: 70,
      origin: { x, y },
      colors: ['#f43f5e', '#fb7185', '#fda4af', '#f472b6', '#e879f9']
    });
  };

  return (
    <section
      id="ansik-letter"
      className="relative min-h-[90vh] w-full py-24 px-4 sm:px-6 overflow-hidden z-20 flex items-center justify-center"
    >
      {/* Warm Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl w-full mx-auto text-center relative z-10">
        {/* Section Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-rose-400/30 text-rose-300 text-xs sm:text-sm font-medium tracking-wide mb-6"
        >
          <PenTool className="w-3.5 h-3.5 text-amber-300" />
          <span>{specialMessageFromAnsik.badge}</span>
          <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
        </motion.div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-10"
        >
          {specialMessageFromAnsik.title}
        </motion.h2>

        {/* Handwritten Styled Romantic Letter Card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-2xl w-full mx-auto bg-[#fffdf5] text-stone-900 rounded-3xl p-8 sm:p-14 shadow-2xl border-4 border-amber-200/80 text-left overflow-hidden"
          style={{
            boxShadow: '0 25px 60px -15px rgba(0,0,0,0.7), inset 0 0 50px rgba(217, 119, 6, 0.08)'
          }}
        >
          {/* Subtle Vintage Parchment Aesthetics */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100/40 rounded-bl-full pointer-events-none" />
          <div className="absolute -top-3 left-10 w-24 h-6 bg-rose-200/60 border border-rose-300/40 transform -rotate-2 rounded-sm shadow-sm" />

          {/* Letter Header */}
          <div className="flex justify-between items-center border-b border-stone-200 pb-4 mb-6">
            <span className="font-serif italic text-xs sm:text-sm text-stone-500">
              {specialMessageFromAnsik.dateStamp}
            </span>
            <span className="text-xs uppercase font-sans font-semibold tracking-wider text-rose-600 flex items-center gap-1">
              <Bookmark className="w-3.5 h-3.5" />
              Directly From Ansik's Soul
            </span>
          </div>

          {/* Letter Body */}
          <div className="space-y-4 font-editorial text-lg sm:text-2xl text-stone-800 leading-relaxed">
            {specialMessageFromAnsik.letterText.map((paragraph, idx) => {
              const isGreeting = idx === 0;
              const isClosing = idx === specialMessageFromAnsik.letterText.length - 1;

              if (isGreeting) {
                return (
                  <h3 key={idx} className="font-cursive text-3xl sm:text-4xl text-rose-700 pb-2">
                    {paragraph}
                  </h3>
                );
              }

              if (isClosing) {
                return (
                  <div key={idx} className="pt-6 border-t border-stone-200/80 mt-6">
                    <p className="font-cursive text-3xl sm:text-4xl text-rose-800 whitespace-pre-line leading-snug">
                      {paragraph}
                    </p>
                  </div>
                );
              }

              return (
                <p key={idx} className="italic text-stone-700">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Interactive Sweet Response Button */}
          <div className="mt-8 pt-4 flex justify-end">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSendHug}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all shadow-md ${
                hasHugged
                  ? 'bg-rose-100 text-rose-700 border border-rose-300'
                  : 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-rose-500/30'
              }`}
            >
              {hasHugged ? (
                <>
                  <Check className="w-4 h-4 text-rose-600" />
                  <span>Warm Hug Sent Back to Ansik! 🤗</span>
                </>
              ) : (
                <>
                  <Heart className="w-4 h-4 fill-white" />
                  <span>Send a Virtual Hug to Ansik ❤️</span>
                </>
              )}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
