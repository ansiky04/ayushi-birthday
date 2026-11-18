import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Heart, Calendar, Sparkles, ImagePlus } from 'lucide-react';

export default function Lightbox({ photo, isMissing, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (!photo) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 shadow-lg"
          aria-label="Close photo view"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Previous Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all z-50 shadow-lg hover:scale-110 active:scale-95"
          aria-label="Previous photo"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all z-50 shadow-lg hover:scale-110 active:scale-95"
          aria-label="Next photo"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Modal Content - Premium Polaroid Expanded Frame */}
        <motion.div
          initial={{ scale: 0.85, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.85, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative max-w-lg w-full bg-[#fffdfa] rounded-xl p-3.5 sm:p-5 shadow-[0_25px_60px_rgba(0,0,0,0.6),0_0_40px_rgba(244,63,94,0.3)] overflow-hidden border border-rose-200/60"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Polaroid Tape Accent */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-rose-200/90 border border-rose-300/60 transform rotate-1 shadow-sm rounded-sm" />

          {/* Photo Frame */}
          <div className="w-full aspect-[4/5] rounded-lg overflow-hidden bg-gradient-to-br from-[#200d33] to-[#12051d] shadow-inner flex items-center justify-center border border-rose-100/50">
            {!isMissing ? (
              <img
                src={photo.image}
                alt={photo.caption}
                className="w-full h-full object-cover select-none"
              />
            ) : (
              <div className="flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#2a113d] via-[#3d1859] to-[#1d092b] w-full h-full">
                <div className="w-20 h-20 rounded-full bg-rose-500/20 border-2 border-rose-400/60 flex items-center justify-center mb-4 shadow-xl shadow-rose-500/30">
                  <Heart className="w-10 h-10 fill-rose-400 text-rose-300 animate-pulse" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-white mb-2">
                  Add Ayushi's Photo Here
                </h4>
                <p className="font-sans text-xs text-rose-200/80 mb-3 max-w-xs">
                  Place Ayushi's real individual picture at:
                </p>
                <code className="text-xs font-mono text-amber-200 bg-black/50 px-3 py-1.5 rounded-lg border border-rose-400/40">
                  public/assets/photos/ayushi-{photo.id}.jpg
                </code>
              </div>
            )}
          </div>

          {/* Polaroid Caption Area */}
          <div className="pt-4 pb-2 text-center">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 tracking-wide flex items-center justify-center gap-2">
              <Heart className="w-4 h-4 fill-rose-500 text-rose-500 shrink-0" />
              <span>{photo.caption}</span>
              <Heart className="w-4 h-4 fill-rose-500 text-rose-500 shrink-0" />
            </h3>
            <p className="font-sans text-xs sm:text-sm text-gray-500 mt-1 flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-rose-500" />
              <span>Dedicated Exclusively to Ayushi • Slot #{photo.id}</span>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
