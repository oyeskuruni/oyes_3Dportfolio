import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { personalInfo } from '../../data/portfolioData';
import { useCursor } from '../../context/CursorContext';

const CenterpieceNucleus = () => {
  const outerTorusRef = useRef();
  const innerSphereRef = useRef();
  const dataRingsRef = useRef();
  const mainGroupRef = useRef();

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;

    // Responsive pointer tilt
    if (mainGroupRef.current) {
      const targetY = state.pointer.x * 0.45;
      const targetX = -state.pointer.y * 0.35;
      mainGroupRef.current.rotation.y = THREE.MathUtils.lerp(mainGroupRef.current.rotation.y, targetY, 0.06);
      mainGroupRef.current.rotation.x = THREE.MathUtils.lerp(mainGroupRef.current.rotation.x, targetX, 0.06);
    }

    // Outer intricate Torus Knot geometry (Tech & Code structure)
    if (outerTorusRef.current) {
      outerTorusRef.current.rotation.x = t * 0.2;
      outerTorusRef.current.rotation.y = t * 0.3;
    }

    // Inner Glowing Data Sphere (Analytics Core)
    if (innerSphereRef.current) {
      const pulse = 1 + Math.sin(t * 3) * 0.08;
      innerSphereRef.current.scale.set(pulse, pulse, pulse);
    }

    // Orbiting rings
    if (dataRingsRef.current) {
      dataRingsRef.current.rotation.z = t * 0.4;
      dataRingsRef.current.rotation.x = Math.sin(t * 0.5) * 0.5;
    }
  });

  return (
    <group ref={mainGroupRef}>
      {/* Outer Torus Knot: Code & Technology */}
      <mesh ref={outerTorusRef}>
        <torusKnotGeometry args={[1.1, 0.28, 90, 16, 2, 3]} />
        <meshStandardMaterial
          color="#06B6D4"
          emissive="#0891B2"
          emissiveIntensity={0.5}
          wireframe
          transparent
          opacity={0.65}
        />
      </mesh>

      {/* Inner Glowing Core: Analytics & Intelligence */}
      <mesh ref={innerSphereRef}>
        <sphereGeometry args={[0.65, 32, 32]} />
        <meshStandardMaterial
          color="#38BDF8"
          emissive="#0284C7"
          emissiveIntensity={0.85}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Gyroscopic Telemetry Rings */}
      <group ref={dataRingsRef}>
        <mesh>
          <torusGeometry args={[1.75, 0.02, 16, 80]} />
          <meshBasicMaterial color="#818CF8" transparent opacity={0.7} />
        </mesh>
        <mesh rotation={[Math.PI / 2.5, 0, 0]}>
          <torusGeometry args={[1.9, 0.015, 16, 80]} />
          <meshBasicMaterial color="#10B981" transparent opacity={0.6} />
        </mesh>
      </group>

      <pointLight color="#38BDF8" intensity={2} distance={6} />
    </group>
  );
};

const OrbitingBadge = ({ badge, index, total }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const { setCursor, resetCursor } = useCursor();

  // Position mathematically in orbital circle around centerpiece
  const angle = (index / total) * Math.PI * 2;
  const radius = 2.7;
  const initialX = Math.cos(angle) * radius;
  const initialY = Math.sin(angle) * 1.5;
  const initialZ = Math.sin(angle) * 0.8;

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime * 0.6 + index;

    // Harmonic 3D oscillation
    meshRef.current.position.x = initialX + Math.sin(t) * 0.2;
    meshRef.current.position.y = initialY + Math.cos(t * 1.2) * 0.15;
    meshRef.current.position.z = initialZ + Math.sin(t * 0.8) * 0.15;

    meshRef.current.rotation.y += 0.01;
  });

  const handleScrollToTarget = () => {
    const target = document.getElementById(badge.id === 'shopify' ? 'services' : 'skills');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <group ref={meshRef} position={[initialX, initialY, initialZ]}>
      {/* 3D Diamond Node */}
      <mesh
        onPointerOver={() => {
          setHovered(true);
          setCursor('3d', 'CLICK');
        }}
        onPointerOut={() => {
          setHovered(false);
          resetCursor();
        }}
        onClick={handleScrollToTarget}
        scale={hovered ? 1.35 : 1}
      >
        <octahedronGeometry args={[0.22, 0]} />
        <meshStandardMaterial
          color={badge.color}
          emissive={badge.color}
          emissiveIntensity={hovered ? 1.2 : 0.6}
        />
      </mesh>

      {/* HTML Overlay Tag */}
      <Html center distanceFactor={7.5} position={[0, 0.35, 0]} className="pointer-events-auto select-none">
        <div
          onClick={handleScrollToTarget}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`cursor-pointer transition-all duration-300 transform ${
            hovered ? 'scale-110 -translate-y-1' : 'scale-100'
          }`}
          style={{ width: hovered ? '190px' : '140px' }}
        >
          <div
            className="px-3 py-2 rounded-xl backdrop-blur-xl border text-left shadow-2xl transition-all duration-300"
            style={{
              backgroundColor: 'rgba(11, 17, 32, 0.85)',
              borderColor: hovered ? badge.color : 'rgba(255, 255, 255, 0.12)',
              boxShadow: hovered ? `0 10px 25px -5px ${badge.color}50` : '0 4px 15px -3px rgba(0,0,0,0.5)'
            }}
          >
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: badge.color }} />
              <span className="font-mono font-bold text-xs" style={{ color: badge.color }}>
                {badge.name}
              </span>
            </div>
            <p className="text-[11px] font-semibold text-slate-100 mt-0.5 truncate">
              {badge.label}
            </p>
            {hovered && (
              <div className="mt-1 pt-1 border-t border-slate-700/60 text-[9px] font-mono text-cyan-300">
                {badge.desc}
              </div>
            )}
          </div>
        </div>
      </Html>
    </group>
  );
};

export const HeroScene3D = () => {
  const [cameraZ, setCameraZ] = useState(6.8);

  useEffect(() => {
    const handleResize = () => {
      setCameraZ(window.innerWidth < 768 ? 8.5 : 6.8);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full h-[540px] sm:h-[620px] lg:h-[680px] relative">
      <Canvas
        camera={{ position: [0, 0, cameraZ], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <ambientLight intensity={0.75} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} color="#38BDF8" />
        <directionalLight position={[-10, -10, -5]} intensity={0.8} color="#A855F7" />

        <CenterpieceNucleus />

        {personalInfo.floatingBadges.map((badge, idx) => (
          <OrbitingBadge
            key={badge.id}
            badge={badge}
            index={idx}
            total={personalInfo.floatingBadges.length}
          />
        ))}
      </Canvas>
    </div>
  );
};
