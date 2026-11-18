import React from 'react';
import { motion } from 'framer-motion';
import {
  Smile,
  Sun,
  Sparkles,
  HeartHandshake,
  PartyPopper,
  Crown,
  Heart
} from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';

const iconMap = {
  Smile,
  Sun,
  Sparkles,
  HeartHandshake,
  PartyPopper,
  Crown,
};

export default function ReasonsSection() {
  return (
    <section
      id="reasons"
      className="relative min-h-screen w-full py-24 px-4 sm:px-6 overflow-hidden z-20"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-rose-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-rose-400/30 text-rose-300 text-xs sm:text-sm font-medium tracking-wide mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Why You Mean The World To Me</span>
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4"
          >
            Reasons Why <span className="text-gradient-romantic">You Are Special ✨</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-editorial text-lg sm:text-xl text-pink-200/80 max-w-xl mx-auto italic"
          >
            "There are millions of reasons, but here are six that make my heart skip a beat every day."
          </motion.p>
        </div>

        {/* 6 Reasons Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {birthdayConfig.reasons.map((reason, index) => {
            const IconComponent = iconMap[reason.icon] || Heart;

            return (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between group cursor-default"
              >
                {/* Background Glow accent */}
                <div
                  className="absolute -top-10 -right-10 w-36 h-36 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"
                  style={{ backgroundColor: reason.accent }}
                />

                {/* Card Top: Numbering & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-6"
                      style={{
                        background: `linear-gradient(135deg, ${reason.accent}33, ${reason.accent}88)`,
                        border: `1px solid ${reason.accent}66`,
                        boxShadow: `0 10px 25px -5px ${reason.accent}44`,
                      }}
                    >
                      <IconComponent
                        className="w-7 h-7 text-white"
                        style={{ filter: `drop-shadow(0 0 6px ${reason.accent})` }}
                      />
                    </div>

                    <span className="font-serif text-3xl font-black text-white/20 group-hover:text-white/40 transition-colors">
                      {String(reason.id).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-rose-200 transition-colors">
                    {reason.title}
                  </h3>

                  <p className="font-sans text-sm sm:text-base text-pink-100/75 leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                {/* Subtle bottom decorative line */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-pink-300/60 font-sans">
                  <span>Forever & Always</span>
                  <Heart className="w-3.5 h-3.5 fill-rose-500/40 text-rose-500/40 group-hover:fill-rose-500 group-hover:text-rose-500 transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
