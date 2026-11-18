import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, ImagePlus, ZoomIn, Flower2, Stars } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';
import Lightbox from '../components/Lightbox';

export default function PhotoGallerySection() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const [missingImages, setMissingImages] = useState({});

  const { gallery, galleryHeading } = birthdayConfig;

  const handlePrev = () => {
    setSelectedPhotoIndex((prev) =>
      prev === 0 ? gallery.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedPhotoIndex((prev) =>
      prev === gallery.length - 1 ? 0 : prev + 1
    );
  };

  const handleImageError = (id) => {
    setMissingImages((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  return (
    <section
      id="gallery"
      className="relative min-h-screen w-full py-28 px-4 sm:px-6 overflow-hidden z-20"
    >
      {/* Soft Pink & Romantic Ambient Backdrops */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-rose-500/15 rounded-full blur-[150px] pointer-events-none" />

      {/* Floating decorative elements */}
      <div className="absolute top-12 left-8 text-rose-300/30 animate-pulse pointer-events-none hidden sm:block">
        <Flower2 className="w-8 h-8" />
      </div>
      <div className="absolute top-20 right-12 text-pink-300/30 animate-pulse pointer-events-none hidden sm:block">
        <Sparkles className="w-7 h-7" />
      </div>

      <div className="max-w-6xl w-full mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-panel border border-rose-400/40 text-rose-300 text-xs sm:text-sm font-medium tracking-wide mb-5 shadow-lg shadow-rose-500/10"
          >
            <Flower2 className="w-4 h-4 text-rose-400" />
            <span className="font-semibold uppercase tracking-wider">A Glimpse of Perfection</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-5 leading-tight"
          >
            {galleryHeading.title.split(',')[0]}, <br className="hidden sm:inline" />
            <span className="text-gradient-romantic">
              {galleryHeading.title.split(',')[1] || "You're My Favourite Part Of It."}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-editorial text-lg sm:text-2xl text-pink-200/90 max-w-2xl mx-auto italic"
          >
            "{galleryHeading.subtitle}"
          </motion.p>
        </div>

        {/* Polaroid Scrapbook Photo Grid - 6 Dedicated Slots */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {gallery.map((photo, index) => {
            const isMissing = missingImages[photo.id];

            return (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex justify-center"
              >
                <div
                  onClick={() => setSelectedPhotoIndex(index)}
                  style={{ transform: `rotate(${photo.rotation || '0deg'})` }}
                  className="polaroid-card w-full max-w-sm cursor-pointer group select-none relative bg-[#fffdfa] rounded-lg p-3 sm:p-4 pb-6 sm:pb-7 transition-all duration-500 shadow-[0_15px_35px_rgba(0,0,0,0.35),0_0_25px_rgba(244,63,94,0.18)] hover:shadow-[0_25px_50px_rgba(244,63,94,0.35),0_0_30px_rgba(251,113,133,0.3)] hover:-translate-y-2 hover:scale-[1.02]"
                >
                  {/* Polaroid Tape Accent with subtle rose hue */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-rose-200/80 border border-rose-300/60 rounded-sm shadow-sm backdrop-blur-sm z-10" />

                  {/* Corner Flower Decor on hover */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-90 transition-opacity z-10 text-rose-400">
                    <Flower2 className="w-4 h-4 fill-rose-300/40" />
                  </div>

                  {/* Inner Photo Frame */}
                  <div className="relative aspect-[4/5] rounded bg-gradient-to-br from-[#2a133d] to-[#180927] overflow-hidden shadow-inner flex items-center justify-center border border-rose-100">
                    {!isMissing ? (
                      <>
                        <img
                          src={photo.image}
                          alt={photo.caption}
                          onError={() => handleImageError(photo.id)}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          loading="lazy"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="px-4 py-2 rounded-full bg-white/95 text-rose-600 shadow-xl transform scale-90 group-hover:scale-100 transition-transform font-serif font-semibold text-xs sm:text-sm flex items-center gap-1.5">
                            <ZoomIn className="w-4 h-4 text-rose-500" />
                            <span>View Ayushi ❤️</span>
                          </span>
                        </div>
                      </>
                    ) : (
                      /* Elegant Fallback Placeholder */
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#251036] via-[#35154d] to-[#1e0a2d] relative overflow-hidden">
                        {/* Ambient glow in placeholder */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/20 to-pink-500/10 pointer-events-none" />

                        <div className="w-16 h-16 rounded-full bg-rose-500/20 border border-rose-400/50 flex items-center justify-center mb-3 shadow-lg shadow-rose-500/20 group-hover:scale-110 transition-transform">
                          <Heart className="w-8 h-8 fill-rose-400 text-rose-300 animate-pulse" />
                        </div>

                        <span className="font-serif font-bold text-white text-base sm:text-lg tracking-wide drop-shadow mb-1">
                          Add Ayushi's Photo Here
                        </span>

                        <span className="text-[11px] text-pink-200/80 font-mono tracking-wider bg-black/40 px-2.5 py-1 rounded-full border border-pink-400/30 mt-2">
                          ayushi-{photo.id}.jpg
                        </span>

                        <span className="text-[10px] text-rose-300/70 mt-3 font-sans italic">
                          Click to preview slot
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Polaroid Handwritten Caption */}
                  <div className="pt-3.5 text-center">
                    <p className="font-serif text-base sm:text-lg font-bold text-stone-900 leading-snug group-hover:text-rose-600 transition-colors">
                      {photo.caption}
                    </p>
                    <div className="flex items-center justify-center gap-1.5 text-stone-500 text-xs mt-1 font-sans">
                      <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
                      <span>Dedicated to Ayushi</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedPhotoIndex !== null && (
        <Lightbox
          photo={gallery[selectedPhotoIndex]}
          isMissing={missingImages[gallery[selectedPhotoIndex].id]}
          onClose={() => setSelectedPhotoIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  );
}
