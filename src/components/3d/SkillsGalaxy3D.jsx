import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { coreSkills } from '../../data/portfolioData';
import { useCursor } from '../../context/CursorContext';

// Map 11 skills onto 3D constellation coordinates
const skillCoords = [
  [-2.2, 1.4, 0.4],   // GA4
  [-0.8, 1.8, -0.2],  // GTM
  [-2.5, -0.2, 0.5],  // sGTM
  [-1.2, -1.5, 0.2],  // Google Ads
  [0.2, -1.7, -0.3],  // Conversion Tracking
  [1.6, -1.2, 0.4],   // Ecommerce Tracking
  [-0.2, 0.3, 0.6],   // Data Layer (Central Hub)
  [2.4, -0.1, 0.3],   // WordPress
  [1.1, 1.6, -0.4],   // Shopify
  [2.1, 1.2, 0.5],    // WooCommerce
  [0.6, 0.8, 0.8],    // React & Modern Web
];

const SkillsNetwork = ({ activeSkillId, onSelectSkill }) => {
  const groupRef = useRef();
  const { setCursor, resetCursor } = useCursor();

  // Create connecting lines between skills
  const linePositions = useMemo(() => {
    const points = [];
    coreSkills.forEach((skill, i) => {
      const from = skillCoords[i];
      if (!skill.connections) return;

      skill.connections.forEach(connId => {
        const targetIdx = coreSkills.findIndex(s => s.id === connId);
        if (targetIdx !== -1 && targetIdx > i) {
          const to = skillCoords[targetIdx];
          points.push(from[0], from[1], from[2]);
          points.push(to[0], to[1], to[2]);
        }
      });
    });
    return new Float32Array(points);
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    // Slow gentle idle rotation
    groupRef.current.rotation.y += delta * 0.08;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
  });

  return (
    <group ref={groupRef}>
      {/* Dynamic Connecting Constellation Lines */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#38BDF8"
          transparent
          opacity={0.35}
          linewidth={1}
        />
      </lineSegments>

      {/* 11 Interactive 3D Skill Nodes */}
      {coreSkills.map((skill, idx) => {
        const pos = skillCoords[idx];
        const isSelected = activeSkillId === skill.id;

        return (
          <SkillNode
            key={skill.id}
            skill={skill}
            position={pos}
            isSelected={isSelected}
            onSelect={() => onSelectSkill(skill.id)}
            setCursor={setCursor}
            resetCursor={resetCursor}
          />
        );
      })}
    </group>
  );
};

const SkillNode = ({ skill, position, isSelected, onSelect, setCursor, resetCursor }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime * 1.5;
    if (isSelected || hovered) {
      meshRef.current.rotation.y += 0.04;
      meshRef.current.rotation.z += 0.02;
    }
  });

  const active = isSelected || hovered;

  return (
    <group position={position}>
      {/* 3D Polyhedron Node */}
      <mesh
        ref={meshRef}
        onClick={onSelect}
        onPointerOver={() => {
          setHovered(true);
          setCursor('3d', 'INSPECT');
        }}
        onPointerOut={() => {
          setHovered(false);
          resetCursor();
        }}
        scale={active ? 1.6 : 1}
      >
        <dodecahedronGeometry args={[0.18, 0]} />
        <meshStandardMaterial
          color={skill.color}
          emissive={skill.color}
          emissiveIntensity={active ? 1.4 : 0.5}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Halo pulse ring when active */}
      {active && (
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.26, 0.32, 24]} />
          <meshBasicMaterial color={skill.color} transparent opacity={0.7} side={THREE.DoubleSide} />
        </mesh>
      )}

      {/* Crisp HTML Skill Label */}
      <Html
        center
        distanceFactor={7.5}
        position={[0, 0.38, 0]}
        className="pointer-events-auto select-none"
      >
        <div
          onClick={onSelect}
          className={`cursor-pointer transition-all duration-300 transform ${
            active ? 'scale-110 -translate-y-1' : 'scale-95 opacity-80 hover:opacity-100'
          }`}
        >
          <div
            className="px-2.5 py-1.5 rounded-xl backdrop-blur-xl border text-center shadow-xl transition-all"
            style={{
              backgroundColor: 'rgba(11, 17, 32, 0.9)',
              borderColor: active ? skill.color : 'rgba(255, 255, 255, 0.15)',
              boxShadow: active ? `0 8px 20px -4px ${skill.color}60` : '0 2px 10px rgba(0,0,0,0.5)'
            }}
          >
            <span className="font-mono font-bold text-[11px] block truncate" style={{ color: skill.color }}>
              {skill.name}
            </span>
            <span className="text-[9px] font-mono text-slate-400">
              {skill.level}% Proficiency
            </span>
          </div>
        </div>
      </Html>
    </group>
  );
};

export const SkillsGalaxy3D = ({ activeSkillId, onSelectSkill }) => {
  return (
    <div className="w-full h-[420px] sm:h-[480px] relative">
      <Canvas
        camera={{ position: [0, 0, 5.8], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#38BDF8" />
        <pointLight position={[-5, -5, -5]} intensity={1} color="#818CF8" />

        <SkillsNetwork activeSkillId={activeSkillId} onSelectSkill={onSelectSkill} />
      </Canvas>
    </div>
  );
};
