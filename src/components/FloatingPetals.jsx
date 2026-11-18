import React, { useEffect, useRef } from 'react';

export default function FloatingPetals({ count = 25 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initPetals();
    };

    window.addEventListener('resize', handleResize);

    const petalColors = [
      'rgba(244, 63, 94, 0.45)',  // Rose
      'rgba(251, 113, 133, 0.4)', // Soft pink
      'rgba(244, 114, 182, 0.35)', // Blush
      'rgba(225, 29, 72, 0.5)',   // Deep rose
      'rgba(192, 132, 252, 0.3)'  // Soft lavender
    ];

    let petals = [];

    const initPetals = () => {
      petals = [];
      const total = Math.min(count, Math.floor(width / 35));
      for (let i = 0; i < total; i++) {
        petals.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 12 + 8,
          speedY: Math.random() * 0.9 + 0.4,
          speedX: Math.random() * 0.6 - 0.3,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
          swaySpeed: Math.random() * 0.02 + 0.01,
          swayAngle: Math.random() * Math.PI * 2,
          swayDistance: Math.random() * 1.5 + 0.5,
          color: petalColors[Math.floor(Math.random() * petalColors.length)]
        });
      }
    };

    initPetals();

    const drawPetal = (x, y, size, rotation, color) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.fillStyle = color;
      ctx.beginPath();
      // Draw organic rose petal shape
      ctx.moveTo(0, -size);
      ctx.bezierCurveTo(size * 0.8, -size * 0.8, size * 0.9, size * 0.4, 0, size);
      ctx.bezierCurveTo(-size * 0.9, size * 0.4, -size * 0.8, -size * 0.8, 0, -size);
      ctx.fill();
      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];
        p.swayAngle += p.swaySpeed;
        p.x += Math.sin(p.swayAngle) * p.swayDistance + p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        drawPetal(p.x, p.y, p.size, p.rotation, p.color);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 opacity-70"
      style={{ width: '100%', height: '100%' }}
    />
  );
}
