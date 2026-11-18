import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, X } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ClickableSurpriseHeart({ compliments = [] }) {
  const [activeMessage, setActiveMessage] = useState(null);

  const handleClick = (e, position) => {
    // Mini heart confetti
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 20,
      spread: 60,
      origin: { x, y },
      colors: ['#f43f5e', '#fb7185', '#fda4af', '#f472b6', '#e879f9'],
      shapes: ['circle'],
      scalar: 0.8
    });

    const randomMsg =
      compliments[Math.floor(Math.random() * compliments.length)] ||
      "You are the most precious person in my world! ❤️";
    setActiveMessage(randomMsg);
  };

  return (
    <>
      {/* Interactive floating heart buttons scattered at sides */}
      <div className="fixed right-4 bottom-24 z-30 flex flex-col gap-3 pointer-events-auto">
        <motion.button
          whileHover={{ scale: 1.15, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            y: [0, -8, 0],
            boxShadow: [
              '0 0 10px rgba(244, 63, 94, 0.4)',
              '0 0 25px rgba(244, 63, 94, 0.8)',
              '0 0 10px rgba(244, 63, 94, 0.4)'
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          onClick={(e) => handleClick(e, 'right')}
          className="group relative p-3 rounded-full bg-gradient-to-tr from-rose-600 via-pink-500 to-purple-600 text-white shadow-xl border border-white/30 backdrop-blur-md cursor-pointer"
          title="Tap for a surprise love note! ❤️"
        >
          <Heart className="w-5 h-5 fill-white text-white animate-pulse" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
          </span>
          {/* Tooltip */}
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-lg bg-black/80 text-rose-200 text-xs font-sans whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg border border-rose-500/30">
            Tap me for love! ✨
          </span>
        </motion.button>
      </div>

      {/* Sweet surprise modal / toast */}
      <AnimatePresence>
        {activeMessage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setActiveMessage(null)}
          >
            <motion.div
              initial={{ scale: 0.7, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.7, y: 30, opacity: 0 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className="relative max-w-sm w-full p-6 rounded-3xl glass-panel border border-rose-400/40 text-center shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Background ambient light */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-rose-500/30 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/30 rounded-full blur-2xl pointer-events-none" />

              <button
                onClick={() => setActiveMessage(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-tr from-rose-500 to-pink-400 flex items-center justify-center shadow-lg shadow-rose-500/40">
                <Sparkles className="w-7 h-7 text-white animate-spin-slow" />
              </div>

              <h4 className="font-serif text-lg font-semibold text-rose-200 mb-2">
                A Little Whisper For You
              </h4>

              <p className="font-serif italic text-lg sm:text-xl text-white leading-relaxed mb-5 px-2">
                "{activeMessage}"
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveMessage(null)}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-rose-500 to-pink-600 text-white font-medium text-sm shadow-md hover:shadow-rose-500/50 transition-shadow"
              >
                Aww, Thank You! 🥰
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
