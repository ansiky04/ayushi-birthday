import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight === 0) return;
      const scroll = `${(totalScroll / windowHeight) * 100}`;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1.5 z-50 pointer-events-none bg-white/5">
      <div
        className="h-full bg-gradient-to-r from-rose-500 via-pink-400 to-purple-500 transition-all duration-75 relative"
        style={{ width: `${scrollProgress}%` }}
      >
        {/* Glowing tip with mini heart */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 flex items-center justify-center">
          <Heart className="w-3.5 h-3.5 fill-rose-400 text-rose-300 filter drop-shadow-[0_0_8px_rgba(244,63,94,0.9)] animate-pulse" />
        </div>
      </div>
    </div>
  );
}
