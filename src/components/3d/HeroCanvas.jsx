import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { ParticleField } from './ParticleField';
import { HolographicCore } from './HolographicCore';
import { FloatingBadges3D } from './FloatingBadges3D';

// Fallback loader for canvas suspense
const CanvasLoader = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="flex flex-col items-center gap-3">
      <div className="w-12 h-12 rounded-full border-2 border-cyan-500/30 border-t-cyan-400 animate-spin" />
      <span className="text-xs font-mono text-cyan-400/80 tracking-widest uppercase">
        Initializing 3D Core...
      </span>
    </div>
  </div>
);

// Fallback for non-WebGL environments
const Fallback2D = () => (
  <div className="w-full h-full flex items-center justify-center p-8">
    <div className="relative w-72 h-72 rounded-full bg-gradient-to-tr from-cyan-500/20 via-indigo-500/10 to-emerald-500/20 animate-pulse flex items-center justify-center border border-cyan-500/30">
      <div className="w-48 h-48 rounded-full border border-indigo-500/40 animate-spin" style={{ animationDuration: '15s' }} />
      <div className="absolute font-mono text-cyan-400 text-sm font-bold text-center">
        OYES KURUNI<br />
        <span className="text-xs text-slate-400 font-normal">DATA & CODE MATRIX</span>
      </div>
    </div>
  </div>
);

export const HeroCanvas = () => {
  const [hasWebGL, setHasWebGL] = useState(true);
  const [cameraZ, setCameraZ] = useState(7);

  useEffect(() => {
    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }

    // Responsive camera adjust
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCameraZ(8.5); // Mobile camera back up
      } else {
        setCameraZ(6.8);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!hasWebGL) {
    return <Fallback2D />;
  }

  return (
    <div className="w-full h-[550px] sm:h-[620px] lg:h-[700px] relative">
      <Suspense fallback={<CanvasLoader />}>
        <Canvas
          camera={{ position: [0, 0, cameraZ], fov: 45 }}
          dpr={[1, 2]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance'
          }}
          className="w-full h-full cursor-grab active:cursor-grabbing"
        >
          {/* Lighting */}
          <ambientLight intensity={0.7} />
          <directionalLight position={[10, 10, 5]} intensity={1.2} color="#38BDF8" />
          <directionalLight position={[-10, -10, -5]} intensity={0.8} color="#A855F7" />
          <pointLight position={[0, 0, 0]} intensity={1.5} color="#06B6D4" distance={8} />

          {/* 3D Scene Components */}
          <ParticleField count={1100} />
          <HolographicCore />
          <FloatingBadges3D />
        </Canvas>
      </Suspense>

      {/* Subtle bottom fade to blend with next section */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
    </div>
  );
};
