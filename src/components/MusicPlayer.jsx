import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Music, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';

export default function MusicPlayer({ isMusicPlaying, setIsMusicPlaying }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isUsingFallback, setIsUsingFallback] = useState(false);

  const audioRef = useRef(null);
  const synthContextRef = useRef(null);
  const synthIntervalRef = useRef(null);

  // Initialize Web Audio API Fallback Synthesizer
  const startRomanticSynth = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      if (!synthContextRef.current) {
        synthContextRef.current = new AudioContext();
      }
      if (synthContextRef.current.state === 'suspended') {
        synthContextRef.current.resume();
      }

      setIsUsingFallback(true);

      // Romantic music box notes (Happy Birthday / Romantic Chords)
      const notes = [
        261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25
      ];
      const chords = [
        [329.63, 392.00, 523.25], // C major
        [293.66, 349.23, 440.00], // D minor
        [329.63, 392.00, 493.88], // E minor
        [349.23, 440.00, 523.25], // F major
      ];

      let chordIndex = 0;
      let noteIndex = 0;

      const playTone = (freq, duration, delay = 0) => {
        if (!synthContextRef.current) return;
        const ctx = synthContextRef.current;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + delay);

        const currentVol = isMuted ? 0 : volume * 0.15;
        gain.gain.setValueAtTime(0.001, ctx.currentTime + delay);
        gain.gain.exponentialRampToValueAtTime(currentVol, ctx.currentTime + delay + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + delay + duration);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + delay);
        osc.stop(ctx.currentTime + delay + duration);
      };

      // Play soft arpeggios
      clearInterval(synthIntervalRef.current);
      synthIntervalRef.current = setInterval(() => {
        const chord = chords[chordIndex % chords.length];
        const freq = chord[noteIndex % chord.length];
        playTone(freq, 1.8);

        noteIndex++;
        if (noteIndex >= chord.length) {
          noteIndex = 0;
          chordIndex++;
        }
      }, 500);
    } catch (e) {
      console.warn("Synth fallback unavailable", e);
    }
  };

  const stopRomanticSynth = () => {
    clearInterval(synthIntervalRef.current);
    if (synthContextRef.current && synthContextRef.current.state === 'running') {
      synthContextRef.current.suspend();
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMusicPlaying) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.log("Audio autoplay prevented or file loading issue, using romantic synth fallback:", err);
          startRomanticSynth();
        });
      }
    } else {
      audio.pause();
      stopRomanticSynth();
    }
  }, [isMusicPlaying]);

  const togglePlay = () => {
    setIsMusicPlaying(!isMusicPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleAudioError = () => {
    setHasError(true);
    if (isMusicPlaying) {
      startRomanticSynth();
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={birthdayConfig.music.audioSrc}
        loop
        preload="auto"
        onError={handleAudioError}
      />

      <div className="fixed bottom-5 left-5 z-40">
        <motion.div
          layout
          className="glass-panel border border-pink-400/30 rounded-2xl p-2.5 sm:p-3 shadow-2xl backdrop-blur-xl flex flex-col gap-2 max-w-[280px] sm:max-w-[320px] text-white"
        >
          {/* Top Bar: Play/Pause, Title, Visualizer, Expand Button */}
          <div className="flex items-center gap-3">
            {/* Play/Pause Circle Button */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={togglePlay}
              className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all ${
                isMusicPlaying
                  ? 'bg-gradient-to-r from-rose-500 to-pink-500 shadow-rose-500/40 text-white'
                  : 'bg-white/10 hover:bg-white/20 text-rose-300'
              }`}
              title={isMusicPlaying ? 'Pause Melody' : 'Play Romantic Melody'}
            >
              {isMusicPlaying ? (
                <Pause className="w-4 h-4 fill-white" />
              ) : (
                <Play className="w-4 h-4 fill-current ml-0.5" />
              )}
            </motion.button>

            {/* Track Info */}
            <div
              className="flex-1 min-w-0 cursor-pointer"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <div className="flex items-center gap-1.5">
                <Music className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                <p className="text-xs font-semibold text-rose-100 truncate">
                  {birthdayConfig.music.trackTitle}
                </p>
              </div>
              <p className="text-[10px] text-pink-300/70 truncate">
                {isUsingFallback ? 'Dreamy Melody Box ✨' : birthdayConfig.music.artist}
              </p>
            </div>

            {/* Sound Wave Visualizer Bars */}
            <div
              className="flex items-end gap-0.5 h-5 px-1 cursor-pointer"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {[1, 2, 3, 4].map((bar) => (
                <motion.span
                  key={bar}
                  animate={
                    isMusicPlaying
                      ? {
                          height: ['4px', `${12 + (bar % 3) * 6}px`, '6px'],
                        }
                      : { height: '3px' }
                  }
                  transition={{
                    duration: 0.6 + bar * 0.15,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                  }}
                  className="w-1 bg-gradient-to-t from-rose-500 to-pink-300 rounded-full inline-block"
                />
              ))}
            </div>

            {/* Collapse / Expand Caret */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 rounded-lg hover:bg-white/10 text-white/60 hover:text-white transition-colors"
              title={isExpanded ? 'Minimize Player' : 'Audio Controls'}
            >
              {isExpanded ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronUp className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Expanded Drawer: Volume Slider & Status */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="pt-2 border-t border-white/10 flex flex-col gap-2 overflow-hidden"
              >
                {/* Volume Row */}
                <div className="flex items-center gap-2 px-1">
                  <button
                    onClick={toggleMute}
                    className="text-pink-300 hover:text-white transition-colors"
                  >
                    {isMuted || volume === 0 ? (
                      <VolumeX className="w-4 h-4" />
                    ) : (
                      <Volume2 className="w-4 h-4" />
                    )}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={isMuted ? 0 : volume}
                    onChange={(e) => {
                      setVolume(parseFloat(e.target.value));
                      if (isMuted) setIsMuted(false);
                    }}
                    className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-rose-500"
                  />
                  <span className="text-[10px] text-pink-200/80 w-6 text-right">
                    {isMuted ? '0%' : `${Math.round(volume * 100)}%`}
                  </span>
                </div>

                {hasError && (
                  <p className="text-[10px] text-rose-300/80 italic flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-300 shrink-0" />
                    Playing synthesized romantic chime box
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
}
