import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Heart, Sparkles, PartyPopper, Clock, Gift } from 'lucide-react';
import confetti from 'canvas-confetti';
import { birthdayConfig } from '../config/birthdayConfig';

export default function HeroCountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPastOrToday: false
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const target = new Date(birthdayConfig.birthdayDate).getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isPastOrToday: true
        });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
          isPastOrToday: false
        });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const triggerCelebrationConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#f43f5e', '#ec4899', '#a855f7', '#fbbf24', '#ffffff']
    });
  };

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <section
      id="countdown"
      className="relative min-h-screen w-full flex items-center justify-center px-4 py-24 overflow-hidden z-20"
    >
      {/* Soft Romantic Glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-rose-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl w-full mx-auto text-center">
        {/* Section Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-rose-400/40 text-rose-300 text-xs sm:text-sm font-medium tracking-wide mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>{birthdayConfig.hero.tagline}</span>
          <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
        </motion.div>

        {/* Main Hero Birthday Typography */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-black text-white leading-tight mb-4"
        >
          {birthdayConfig.hero.title}{' '}
          <span className="text-gradient-romantic block sm:inline font-cursive font-normal text-5xl sm:text-7xl md:text-8xl">
            {birthdayConfig.girlfriendName} ❤️
          </span>
        </motion.h2>

        {/* Date Display Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex items-center justify-center gap-2 text-rose-200/90 font-medium text-sm sm:text-base mb-8"
        >
          <Calendar className="w-4 h-4 text-rose-400" />
          <span>Special Date: {birthdayConfig.birthdayDateDisplay}</span>
        </motion.div>

        {/* Celebration Text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-editorial text-lg sm:text-2xl text-pink-100/90 max-w-2xl mx-auto leading-relaxed mb-12 italic"
        >
          "{birthdayConfig.hero.celebrationText}"
        </motion.p>

        {/* Conditional Rendering: Countdown vs Today/Past Celebration */}
        {!timeLeft.isPastOrToday ? (
          /* Live Countdown Cards */
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center gap-2 text-pink-300 text-sm tracking-wider uppercase mb-5 font-semibold">
              <Clock className="w-4 h-4 text-pink-400 animate-spin-slow" />
              <span>{birthdayConfig.hero.countdownLabel}</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 w-full max-w-2xl px-2">
              {timeUnits.map((unit, index) => (
                <motion.div
                  key={unit.label}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="glass-card rounded-2xl p-4 sm:p-6 text-center border border-pink-400/30 relative overflow-hidden group shadow-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-rose-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="font-serif text-3xl sm:text-5xl font-extrabold text-white block tracking-tight group-hover:text-rose-200 transition-colors">
                    {String(unit.value).padStart(2, '0')}
                  </span>
                  <span className="text-[11px] sm:text-xs uppercase tracking-widest text-pink-300/80 font-medium mt-1 block">
                    {unit.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          /* Today/Celebration Display Mode */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-panel border-2 border-rose-500/50 rounded-3xl p-8 sm:p-12 max-w-2xl mx-auto shadow-2xl relative overflow-hidden"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-tr from-amber-400 to-rose-500 flex items-center justify-center shadow-lg shadow-rose-500/40">
              <PartyPopper className="w-8 h-8 text-white animate-bounce" />
            </div>

            <h3 className="font-serif text-2xl sm:text-4xl font-extrabold text-white mb-3">
              🎉 IT'S YOUR SPECIAL DAY! 🎉
            </h3>

            <p className="font-serif italic text-base sm:text-xl text-rose-200 leading-relaxed mb-6">
              Today is 100% about you, my love! Let's celebrate every single second of your existence.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={triggerCelebrationConfetti}
              className="px-8 py-3.5 rounded-full btn-romantic text-white font-semibold flex items-center gap-2 mx-auto shadow-xl cursor-pointer"
            >
              <Gift className="w-5 h-5" />
              <span>Celebrate With Confetti! 🎊</span>
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
