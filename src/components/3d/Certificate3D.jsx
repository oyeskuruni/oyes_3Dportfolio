import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { ga4Certification } from '../../data/portfolioData';
import { useCursor } from '../../context/CursorContext';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

const FloatingCertificateMesh = ({ onClick }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const { setCursor, resetCursor } = useCursor();

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;

    // Harmonic floating bob
    meshRef.current.position.y = Math.sin(t * 1.2) * 0.12;

    // Pointer tilt reaction
    const targetY = (state.pointer.x * 0.35);
    const targetX = (-state.pointer.y * 0.35);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetY, 0.08);
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetX, 0.08);
  });

  return (
    <group
      ref={meshRef}
      onClick={onClick}
      onPointerOver={() => {
        setHovered(true);
        setCursor('3d', 'VERIFY');
      }}
      onPointerOut={() => {
        setHovered(false);
        resetCursor();
      }}
      scale={hovered ? 1.08 : 1}
      className="cursor-pointer"
    >
      {/* Outer Certificate Gold / Amber Frame */}
      <mesh position={[0, 0, -0.05]}>
        <boxGeometry args={[4.2, 2.7, 0.1]} />
        <meshStandardMaterial
          color="#D97706"
          metalness={0.9}
          roughness={0.2}
          emissive="#F59E0B"
          emissiveIntensity={0.25}
        />
      </mesh>

      {/* Inner Certificate Parchment / Glass Plate */}
      <mesh position={[0, 0, 0.02]}>
        <boxGeometry args={[4.0, 2.5, 0.06]} />
        <meshStandardMaterial
          color="#0F172A"
          roughness={0.3}
          metalness={0.4}
        />
      </mesh>

      {/* HTML Interactive Certificate Face Overlay */}
      <Html
        center
        distanceFactor={6}
        position={[0, 0, 0.08]}
        className="pointer-events-auto select-none"
      >
        <div
          onClick={onClick}
          className="w-[340px] sm:w-[380px] p-5 rounded-2xl bg-slate-950/90 border border-amber-500/40 text-left shadow-2xl backdrop-blur-md cursor-pointer hover:border-amber-400 transition-all duration-300"
        >
          {/* Header watermark */}
          <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2.5">
            <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold">
              <Award className="w-5 h-5 text-amber-400" />
              <span>GOOGLE SKILLSHOP ACCREDITATION</span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Active
            </span>
          </div>

          <h4 className="text-lg sm:text-xl font-extrabold text-white font-heading leading-tight mb-1">
            Google Analytics 4
          </h4>
          <p className="text-xs text-amber-300 font-mono mb-3">
            Individual Qualification Certification
          </p>

          <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-2 mb-3">
            Validates advanced expertise in GA4 setup, custom event pipelines, BigQuery export, measurement protocol, and cross-channel attribution.
          </p>

          <div className="flex items-center justify-between text-[10px] font-mono pt-2 border-t border-slate-800/80">
            <span className="text-slate-400">ID: {ga4Certification.credentialId}</span>
            <span className="text-amber-400 font-bold hover:underline">Click to Inspect &gt;</span>
          </div>
        </div>
      </Html>

      {/* Ambient glowing spotlight onto certificate */}
      <pointLight position={[0, 0, 2]} intensity={1.5} color="#F59E0B" distance={5} />
    </group>
  );
};

export const Certificate3D = ({ onInspect }) => {
  return (
    <div className="w-full h-[320px] sm:h-[380px] relative">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 42 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#F59E0B" />
        <directionalLight position={[-5, -5, -3]} intensity={0.5} color="#38BDF8" />

        <FloatingCertificateMesh onClick={onInspect} />
      </Canvas>
    </div>
  );
};
