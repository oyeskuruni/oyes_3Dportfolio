import React, { useRef, useState } from 'react';
import { useCursor } from '../../context/CursorContext';

export const TiltCard3D = ({
  children,
  className = "",
  maxTilt = 12,
  glare = true,
  scale = 1.02,
  cursorType = "card",
  cursorText = "",
  onClick,
  ...props
}) => {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)"
  });
  const [glareStyle, setGlareStyle] = useState({ opacity: 0 });
  const { setCursor, resetCursor } = useCursor();

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`,
      transition: "transform 0.1s ease-out"
    });

    if (glare) {
      setGlareStyle({
        opacity: 0.35,
        transform: `translate(${x}px, ${y}px) -translate(-50%, -50%)`,
        background: `radial-gradient(circle 240px at ${x}px ${y}px, rgba(255,255,255,0.18), transparent 70%)`
      });
    }
  };

  const handleMouseEnter = () => {
    if (cursorType) setCursor(cursorType, cursorText);
  };

  const handleMouseLeave = () => {
    resetCursor();
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
    });
    if (glare) {
      setGlareStyle({ opacity: 0 });
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transformStyle: 'preserve-3d',
        ...style
      }}
      className={`relative will-change-transform ${className}`}
      {...props}
    >
      {children}

      {/* Interactive Glare Overlay */}
      {glare && (
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl overflow-hidden transition-opacity duration-300"
          style={glareStyle}
        />
      )}
    </div>
  );
};
