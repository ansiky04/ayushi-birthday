import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Check, Flower2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { birthdayConfig } from '../config/birthdayConfig';

export default function RoseGardenSection() {
  const [pluckedRoses, setPluckedRoses] = useState([]);
  const [activeNote, setActiveNote] = useState(null);

  const handlePluckRose = (index) => {
    if (!pluckedRoses.includes(index)) {
      setPluckedRoses([...pluckedRoses, index]);
    }

    const note =
      birthdayConfig.secretRoseNotes[index % birthdayConfig.secretRoseNotes.length];
    setActiveNote({ index, text: note });

    // Mini rose petal confetti
    confetti({
      particleCount: 25,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#e11d48', '#f43f5e', '#fb7185', '#fda4af']
    });

    // If all roses plucked, grand celebration
    if (pluckedRoses.length + (pluckedRoses.includes(index) ? 0 : 1) === 8) {
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 100,
          origin: { y: 0.5 },
          colors: ['#e11d48', '#f43f5e', '#fda4af', '#fbbf24']
        });
      }, 500);
    }
  };

  return (
    <section
      id="roses"
      className="relative min-h-screen w-full py-24 px-4 sm:px-6 overflow-hidden z-20 flex items-center justify-center"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-600/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl w-full mx-auto text-center">
        {/* Section Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-rose-400/30 text-rose-300 text-xs sm:text-sm font-medium tracking-wide mb-4"
        >
          <Flower2 className="w-4 h-4 text-rose-400" />
          <span>{birthdayConfig.roseGarden.badge}</span>
          <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6"
        >
          A Rose Garden <span className="text-gradient-romantic">For You 🌹</span>
        </motion.h2>

        {/* The Quote from prompt */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-6 sm:p-10 max-w-3xl mx-auto mb-10 border border-rose-400/30 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute -top-6 -left-6 text-7xl font-serif text-rose-500/20 select-none">
            “
          </div>
          <p className="font-editorial italic text-lg sm:text-2xl md:text-3xl text-white leading-relaxed px-4">
            "{birthdayConfig.roseGarden.quote}"
          </p>
          <div className="absolute -bottom-10 -right-4 text-7xl font-serif text-rose-500/20 select-none">
            ”
          </div>
        </motion.div>

        {/* Subtext instruction & Bouquet Counter */}
        <div className="mb-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-pink-200/80">
          <p className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>{birthdayConfig.roseGarden.subtext}</span>
          </p>
          <div className="px-4 py-1.5 rounded-full bg-rose-500/20 border border-rose-400/30 text-rose-200 font-semibold text-xs tracking-wider uppercase">
            Bouquet: {pluckedRoses.length} / 8 Roses
          </div>
        </div>

        {/* Interactive Roses Garden Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => {
            const isPlucked = pluckedRoses.includes(index);

            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handlePluckRose(index)}
                className={`relative rounded-2xl p-5 cursor-pointer transition-all duration-300 flex flex-col items-center justify-center border shadow-xl ${
                  isPlucked
                    ? 'glass-panel border-rose-400/60 bg-rose-950/40 shadow-rose-500/20'
                    : 'glass-card border-pink-400/20 hover:border-rose-400/40'
                }`}
              >
                {/* Plucked Checkmark Badge */}
                {isPlucked && (
                  <span className="absolute top-2 right-2 w-5 h-5 rounded-full bg-rose-500 flex items-center justify-center text-white text-[10px] shadow">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                )}

                {/* Animated Blooming Rose SVG */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 mb-2 flex items-center justify-center">
                  <svg
                    viewBox="0 0 100 100"
                    className={`w-full h-full transition-transform duration-500 ${
                      isPlucked ? 'scale-110 filter drop-shadow-[0_0_12px_#f43f5e]' : 'hover:scale-105'
                    }`}
                  >
                    {/* Stem & Leaves */}
                    <path
                      d="M50,60 Q52,85 50,95"
                      stroke="#059669"
                      strokeWidth="4"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d="M50,75 Q35,70 32,80 Q45,82 50,75"
                      fill="#10b981"
                      opacity="0.9"
                    />
                    <path
                      d="M50,70 Q65,65 68,75 Q55,77 50,70"
                      fill="#10b981"
                      opacity="0.9"
                    />

                    {/* Rose Petals Layering */}
                    <circle cx="50" cy="45" r="28" fill="#9f1239" />
                    <circle cx="50" cy="45" r="23" fill="#be123c" />
                    <circle cx="50" cy="45" r="18" fill="#e11d48" />
                    <circle cx="50" cy="45" r="13" fill="#f43f5e" />
                    <circle cx="50" cy="45" r="7" fill="#fb7185" />
                    <path
                      d="M45,42 Q50,38 55,42 Q50,48 45,42"
                      fill="#fff"
                      opacity="0.6"
                    />
                  </svg>
                </div>

                <span className="text-xs font-serif font-bold text-rose-200">
                  Rose #{index + 1}
                </span>
                <span className="text-[10px] text-pink-300/60 mt-0.5">
                  {isPlucked ? 'Secret Note Read' : 'Tap to pluck'}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Revealed Secret Note Modal / Toast */}
        <AnimatePresence>
          {activeNote && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-8 glass-panel border border-rose-400/50 rounded-2xl p-5 max-w-lg mx-auto shadow-2xl relative"
            >
              <div className="flex items-center justify-between mb-2 pb-2 border-b border-white/10">
                <span className="text-xs uppercase font-sans font-semibold tracking-wider text-rose-300 flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                  Rose #{activeNote.index + 1} Secret Note
                </span>
                <button
                  onClick={() => setActiveNote(null)}
                  className="text-xs text-white/60 hover:text-white"
                >
                  Dismiss
                </button>
              </div>
              <p className="font-editorial italic text-lg sm:text-xl text-white">
                "{activeNote.text}"
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
