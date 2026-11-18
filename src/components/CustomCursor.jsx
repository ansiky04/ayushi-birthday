import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia('(pointer: fine)').matches) {
      setIsTouchDevice(false);
    } else {
      return;
    }

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over clickable element
      const target = e.target;
      const isClickable =
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('cursor-pointer');
      setIsPointer(!!isClickable);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;
    let frameId;
    const follow = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18,
      }));
      frameId = requestAnimationFrame(follow);
    };
    frameId = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(frameId);
  }, [position, isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Glow Follower Ring */}
      <div
        className="fixed rounded-full transition-all duration-75 ease-out transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
          width: isPointer ? '44px' : '30px',
          height: isPointer ? '44px' : '30px',
          border: '1.5px solid rgba(244, 63, 94, 0.6)',
          backgroundColor: isPointer ? 'rgba(244, 63, 94, 0.15)' : 'rgba(251, 113, 133, 0.08)',
          boxShadow: '0 0 15px rgba(244, 63, 94, 0.4)',
        }}
      />
      {/* Inner Pinpoint Sparkle Dot */}
      <div
        className="fixed rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isPointer ? '10px' : '6px',
          height: isPointer ? '10px' : '6px',
          backgroundColor: isPointer ? '#f43f5e' : '#fff',
          boxShadow: '0 0 8px #f43f5e',
          transition: 'width 0.2s, height 0.2s, background-color 0.2s',
        }}
      />
    </div>
  );
}
