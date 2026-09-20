import React, { useRef } from 'react';
import gsap from 'gsap';

export const MagneticButton = ({
  children,
  className = "",
  strength = 0.35,
  onClick,
  href,
  target,
  rel,
  ...props
}) => {
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * strength;
    const y = (clientY - (top + height / 2)) * strength;

    gsap.to(buttonRef.current, {
      x: x,
      y: y,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1.2, 0.4)"
    });
  };

  const Component = href ? 'a' : 'button';

  return (
    <Component
      ref={buttonRef}
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-flex items-center justify-center transition-shadow duration-300 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};
