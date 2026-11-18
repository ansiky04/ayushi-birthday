import React, { useState } from 'react';
import StarrySky from './components/StarrySky';
import FloatingPetals from './components/FloatingPetals';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import MusicPlayer from './components/MusicPlayer';
import ClickableSurpriseHeart from './components/ClickableSurpriseHeart';
import Footer from './components/Footer';

// Sections
import WelcomeSection from './sections/WelcomeSection';
import HeroCountdownSection from './sections/HeroCountdownSection';
import LongDistanceSection from './sections/LongDistanceSection';
import PhotoGallerySection from './sections/PhotoGallerySection';
import VideoGallerySection from './sections/VideoGallerySection';
import ReasonsSection from './sections/ReasonsSection';
import AnsikSpecialMessageSection from './sections/AnsikSpecialMessageSection';
import LoveLetterSection from './sections/LoveLetterSection';
import BirthdayCakeSection from './sections/BirthdayCakeSection';
import RoseGardenSection from './sections/RoseGardenSection';
import FinalSurpriseSection from './sections/FinalSurpriseSection';

import { birthdayConfig } from './config/birthdayConfig';

export default function App() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const handleOpenSurprise = () => {
    const countdownEl = document.getElementById('countdown');
    if (countdownEl) {
      countdownEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0d0718] text-[#fffaf5] font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Dynamic Starry Sky Background Layer */}
      <StarrySky density={100} />

      {/* Organic Floating Rose Petals Layer */}
      <FloatingPetals count={24} />

      {/* Desktop Custom Romantic Cursor */}
      <CustomCursor />

      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Floating Glassmorphic Navigation */}
      <Navbar
        isMusicPlaying={isMusicPlaying}
        setIsMusicPlaying={setIsMusicPlaying}
      />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        {/* 1. Immersive Welcome Section */}
        <WelcomeSection
          onOpenSurprise={handleOpenSurprise}
          isMusicPlaying={isMusicPlaying}
          setIsMusicPlaying={setIsMusicPlaying}
        />

        {/* 2. Birthday Countdown / Hero Celebration */}
        <HeroCountdownSection />

        {/* 3. Even Miles Can't Separate Our Hearts (Long Distance Love Section) */}
        <LongDistanceSection />

        {/* 4. Polaroid Photo Gallery Dedicated 100% to Ayushi Alone */}
        <PhotoGallerySection />

        {/* 5. Video Memories: Little Moments of My Favourite Girl 🎥❤️ */}
        <VideoGallerySection />

        {/* 6. Reasons Why Ayushi is Special */}
        <ReasonsSection />

        {/* 7. Special Handwritten Letter: From Your Ansik, With Love */}
        <AnsikSpecialMessageSection />

        {/* 8. Secret Love Letter Envelope */}
        <LoveLetterSection />

        {/* 9. Interactive Birthday Cake */}
        <BirthdayCakeSection />

        {/* 10. Rose Garden Surprise */}
        <RoseGardenSection />

        {/* 11. Final Cinematic Surprise: Two Hearts Coming Together */}
        <FinalSurpriseSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Interactive Surprise Heart Buttons */}
      <ClickableSurpriseHeart
        compliments={birthdayConfig.floatingCompliments}
      />

      {/* Floating Music Player with Sound Visualizer */}
      <MusicPlayer
        isMusicPlaying={isMusicPlaying}
        setIsMusicPlaying={setIsMusicPlaying}
      />
    </div>
  );
}
