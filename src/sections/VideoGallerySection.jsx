import React, { useState, useEffect, useRef, memo } from 'react';
import { Film, Heart, Sparkles, Video, Volume2, VolumeX, Maximize2, Loader2 } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';

// Isolated, memoized Video Card component to prevent re-renders of other cards
const VideoCard = memo(function VideoCard({ vid, onVideoError }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleSound = (e) => {
    e.stopPropagation();
    const vidEl = videoRef.current;
    if (!vidEl) return;
    const nextState = !vidEl.muted;
    vidEl.muted = nextState;
    setIsMuted(nextState);
  };

  const handleFullscreen = (e) => {
    e.stopPropagation();
    const vidEl = videoRef.current;
    if (!vidEl) return;
    if (vidEl.requestFullscreen) {
      vidEl.requestFullscreen();
    } else if (vidEl.webkitRequestFullscreen) {
      vidEl.webkitRequestFullscreen();
    }
  };

  return (
    <div
      className="relative rounded-2xl p-2.5 sm:p-3 bg-[#160c24] border border-rose-400/30 hover:border-pink-400/60 shadow-xl overflow-hidden flex flex-col justify-between transition-colors duration-300"
      style={{
        transform: 'translateZ(0)',
        willChange: 'transform',
        contain: 'paint',
      }}
    >
      {/* Video Container with fixed aspect ratio */}
      <div
        className="relative aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden bg-black flex items-center justify-center border border-white/5"
        style={{
          transform: 'translateZ(0)',
          willChange: 'transform',
        }}
      >
        {/* Loading Spinner Indicator */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#140a20] z-0">
            <Loader2 className="w-7 h-7 text-rose-400 animate-spin opacity-70" />
          </div>
        )}

        {/* Lightweight, Hardware-Accelerated Video Tag */}
        <video
          ref={videoRef}
          src={vid.videoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={() => setIsLoaded(true)}
          onCanPlay={() => setIsLoaded(true)}
          onError={() => onVideoError(vid.id)}
          className={`w-full h-full object-contain rounded-xl transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            transform: 'translateZ(0)',
            willChange: 'transform',
            backfaceVisibility: 'hidden',
          }}
        />

        {/* Top Control Bar */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10 pointer-events-auto">
          {/* Status Badge */}
          <div className="px-2.5 py-0.5 rounded-full bg-black/60 border border-white/10 text-[10px] text-pink-200 font-medium flex items-center gap-1.5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
            <span>Ayushi Live</span>
          </div>

          {/* Quick Sound & Fullscreen Controls */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={toggleSound}
              className="p-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/10 transition-colors shadow-sm"
              title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
              aria-label="Toggle Sound"
            >
              {isMuted ? (
                <VolumeX className="w-3.5 h-3.5 text-white/70" />
              ) : (
                <Volume2 className="w-3.5 h-3.5 text-rose-300" />
              )}
            </button>

            <button
              onClick={handleFullscreen}
              className="p-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/10 transition-colors shadow-sm"
              title="Fullscreen"
              aria-label="Open Fullscreen"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Caption Footer */}
      <div className="pt-3 px-1.5 pb-0.5 flex items-center justify-between">
        <div className="flex flex-col">
          <h3 className="font-serif text-base sm:text-lg font-bold text-white tracking-wide flex items-center gap-1.5">
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500 shrink-0" />
            <span>{vid.caption}</span>
          </h3>
          <span className="text-[11px] text-pink-300/70 font-sans mt-0.5">
            Ayushi • {vid.date}
          </span>
        </div>

        <span className="px-2.5 py-0.5 rounded-full bg-rose-500/15 border border-rose-400/25 text-rose-200 text-[11px] font-semibold uppercase tracking-wider">
          {vid.tag}
        </span>
      </div>
    </div>
  );
});

export default function VideoGallerySection() {
  const { videos, videoHeading } = birthdayConfig;
  const [missingVideos, setMissingVideos] = useState({});
  const sectionRef = useRef(null);

  const handleVideoError = (id) => {
    setMissingVideos((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  // Section Observer: when user scrolls away from the section, pause all videos
  // When user returns, resume all videos simultaneously
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const videoElements = section.querySelectorAll('video');
          if (entry.isIntersecting) {
            videoElements.forEach((vid) => {
              if (vid.paused) {
                const playPromise = vid.play();
                if (playPromise !== undefined) {
                  playPromise.catch(() => {});
                }
              }
            });
          } else {
            videoElements.forEach((vid) => {
              if (!vid.paused) {
                vid.pause();
              }
            });
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(section);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="videos"
      className="relative min-h-screen w-full py-28 px-4 sm:px-6 overflow-hidden z-20"
      style={{
        contentVisibility: 'auto',
        containIntrinsicSize: '900px',
      }}
    >
      <div className="max-w-6xl w-full mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-panel border border-rose-400/40 text-rose-300 text-xs sm:text-sm font-medium tracking-wide mb-5 shadow-lg shadow-purple-500/10">
            <Film className="w-4 h-4 text-pink-400 animate-pulse" />
            <span className="font-semibold uppercase tracking-wider">{videoHeading.badge}</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-5 leading-tight">
            Little Moments of{' '}
            <span className="text-gradient-romantic">Ayushi 🎥❤️</span>
          </h2>

          <p className="font-editorial text-lg sm:text-2xl text-pink-200/90 max-w-2xl mx-auto italic">
            "{videoHeading.subtitle}"
          </p>
        </div>

        {/* High-Performance 2x2 Grid (Desktop) / Clean Stack (Mobile) */}
        {/* All four videos autoplay simultaneously without UI bottlenecks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {videos.map((vid) => (
            <VideoCard
              key={vid.id}
              vid={vid}
              onVideoError={handleVideoError}
            />
          ))}
        </div>

        {/* Helpful Footnote */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-pink-200/70 italic flex items-center justify-center gap-2 max-w-lg mx-auto">
            <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
            <span>Hardware-accelerated simultaneous playback optimized for smooth viewing.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
