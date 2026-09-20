import React, { useEffect, useState, useRef } from 'react';
import { useCursor } from '../../context/CursorContext';

export const CustomCursor = () => {
  const { cursorType, cursorText } = useCursor();
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Position references for smooth lerp
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Check if touch device or reduced motion
    const touch = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 1024;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (touch || reducedMotion) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      // Instantly position small dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Smooth RAF loop for lagging outer ring
    let animationFrameId;
    const animateRing = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }
      animationFrameId = requestAnimationFrame(animateRing);
    };

    animationFrameId = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [visible]);

  if (isTouchDevice) return null;

  // Compute ring dimensions and styling based on cursorType
  const isHovered = cursorType === 'hover';
  const is3D = cursorType === '3d';
  const isCard = cursorType === 'card';
  const isDrag = cursorType === 'drag';

  let ringClass = "w-9 h-9 border border-cyan-400/60";
  if (isHovered) ringClass = "w-14 h-14 bg-cyan-500/15 border-cyan-400 scale-125";
  if (is3D) ringClass = "w-20 h-20 bg-indigo-500/20 border-indigo-400/80 backdrop-blur-[2px]";
  if (isCard) ringClass = "w-16 h-16 bg-cyan-400/10 border-cyan-400/80 backdrop-blur-[2px]";
  if (isDrag) ringClass = "w-16 h-16 bg-emerald-500/20 border-emerald-400/80";

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-50 transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* Central Precision Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400"
        style={{ willChange: 'transform' }}
      />

      {/* Smooth Lagging Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 transition-[width,height,border-color,background-color] duration-300 ${ringClass}`}
        style={{
          willChange: 'transform',
          marginLeft: 0,
          marginTop: 0,
          transform: 'translate3d(-100px, -100px, 0)'
        }}
      >
        {cursorText && (
          <span className="text-[10px] font-mono font-bold tracking-wider text-cyan-300 uppercase select-none animate-pulse">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
};
