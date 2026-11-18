# ❤️ A Dreamy Romantic Birthday Surprise For My Princess

> A cinematic, luxurious, interactive digital birthday gift crafted with love.

---

## ✨ Features & Highlights

1. **Immersive Welcome Screen:**
   - Full-screen starry night sky with animated twinkling stars and shooting stars.
   - Dreamy pink and lavender atmospheric glows and floating rose petals.
   - Interactive `"OPEN YOUR SURPRISE ✨"` button that initiates a cinematic entrance and plays background music on visitor interaction.

2. **Personalized Birthday Countdown / Hero:**
   - Real-time countdown timer (Days, Hours, Minutes, Seconds) with luxury glassmorphic cards.
   - If the birthday date is today or has passed, it automatically transitions to a grand celebration mode with celebratory confetti!

3. **Our Memories – Polaroid Photo Gallery:**
   - Polaroid-style cards with realistic washi tape, romantic tilts, and subtle drop shadows.
   - Click-to-expand full-screen Lightbox modal with next/previous photo navigation and romantic date captions.
   - Mobile swipe-friendly grid.

4. **Reasons Why You Are Special:**
   - 6 beautifully animated 3D cards with luxury glowing borders and custom Lucide icons.
   - Smooth hover micro-interactions celebrating her smile, kindness, adorable habits, and heart.

5. **A Secret Love Letter 💌:**
   - Handcrafted 3D animated envelope with a glowing red wax seal.
   - Unfolds into a vintage parchment letter with a realistic typewriter text reveal effect and floating hearts.

6. **Interactive Birthday Cake 🎂:**
   - Multi-tier celebratory cake with dripping royal icing and glowing candles.
   - `"BLOW THE CANDLES ❤️"` button that puts out candle flames with rising smoke puffs, launches a multi-angle confetti explosion, and reveals sweet wishes. Includes a `"Relight Candles"` button to blow them again!

7. **Rose Garden Surprise 🌹:**
   - Lush garden with interactive blooming roses.
   - Clicking each rose reveals a unique secret romantic love note and tracks collected roses in her bouquet.

8. **Floating Music Player 🎵:**
   - Floating music controls with play/pause, animated sound wave visualizer, volume slider, and track info.
   - Built-in Web Audio API romantic melody synthesizer fallback in case the local audio file is missing or blocked by browser policies.

9. **Final Cinematic Surprise ❤️:**
   - Fullscreen celestial finale with a giant pulsing interactive 3D heart.
   - Clicking the heart shoots bursts of hearts and tracks total love sent.

10. **Extra Polish:**
    - Custom romantic sparkle cursor on desktop (automatically disabled on touch devices).
    - Top scroll progress bar with a glowing heart at the tip.
    - Floating interactive surprise hearts on the side that pop up sweet whispered compliments when tapped.
    - 100% mobile-first responsive design.

---

## 🚀 Quick Start Guide

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally in Development Mode
```bash
npm run dev
```
Open your browser and navigate to:
```
http://localhost:3000
```

### 3. Build for Production
```bash
npm run build
```
The optimized production files will be generated in the `dist/` directory.

---

## 🎨 How to Personalize Everything (Single Config File)

All personalization is centralized in one easy-to-edit file:
📁 **`src/config/birthdayConfig.js`**

Open `src/config/birthdayConfig.js` in your editor to customize:

### 1. Names and Nicknames
```javascript
girlfriendName: "Her Name",      // e.g., "Sneha", "Sophia", "Priya"
myName: "Your Name",             // e.g., "Aman", "Alex"
nickname: "My Princess",         // e.g., "My Princess", "Angel", "My Love"
```

### 2. Birthday Date
```javascript
birthdayDate: "2026-11-19T00:00:00",  // Format: YYYY-MM-DD or YYYY-MM-DDTHH:mm:ss
birthdayDateDisplay: "November 19th",
```
* **Future date**: Displays an animated real-time countdown timer.
* **Today or past date**: Automatically displays the celebration mode with party poppers and confetti!

### 3. Adding Your Real Photos
Place your photos in the folder:
📁 `public/assets/photos/`

Then update the gallery array in `src/config/birthdayConfig.js`:
```javascript
gallery: [
  {
    id: 1,
    image: "/assets/photos/your-photo-1.jpg",
    caption: "Our First Magical Date",
    date: "A day I will treasure forever ☕✨",
    rotation: "-3deg"
  },
  // Add up to 6 or more photos!
]
```

### 4. Customizing the Secret Love Letter
Edit `loveLetter.paragraphs` in `src/config/birthdayConfig.js` to write your own heartfelt message.

### 5. Adding Your Favorite Romantic Song
Place your MP3 audio file at:
📁 `public/assets/music/birthday-song.mp3`

If no audio file is provided, the website automatically plays a gentle synthesized romantic chime melody using the Web Audio API.

### 6. Customizing the Reasons She is Special
Edit the `reasons` array in `src/config/birthdayConfig.js` to add your own personal memories and reasons.

---

## 📱 Mobile & Responsive Testing

The website has been designed mobile-first and tested on:
- Small phone screens (iPhone SE, Android 375px width)
- Modern smartphones (iPhone 14/15/16 Pro, Samsung Galaxy)
- Tablets (iPad, Galaxy Tab)
- Laptops and Ultra-wide desktops

---

## 🌐 Deploying Online (Free & Easy)

You can share this surprise with your girlfriend anywhere in the world by deploying it:

### Option A: Vercel (Recommended)
1. Push this project to GitHub.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Select your repository and click **Deploy**. Your custom link will be live in 30 seconds!

### Option B: Netlify
1. Run `npm run build` locally.
2. Drag and drop the `dist` folder into [Netlify Drop](https://app.netlify.com/drop).

---

Made with ❤️ and endless love.
