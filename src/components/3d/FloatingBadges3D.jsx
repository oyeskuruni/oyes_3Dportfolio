import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

const badgesData = [
  {
    id: "ga4",
    name: "GA4",
    fullName: "Google Analytics 4",
    metric: "Server-Side & Client",
    subtext: "E-comm & Custom Dimensions",
    color: "#F59E0B",
    glowColor: "rgba(245, 158, 11, 0.4)",
    basePos: [2.6, 1.4, 0.5],
    speed: 1.2,
    offset: 0
  },
  {
    id: "gtm",
    name: "GTM",
    fullName: "Google Tag Manager",
    metric: "Cloud Run & SS-GTM",
    subtext: "DataLayer Orchestration",
    color: "#3B82F6",
    glowColor: "rgba(59, 130, 246, 0.4)",
    basePos: [-2.7, 1.2, 0.8],
    speed: 1.1,
    offset: 1.5
  },
  {
    id: "meta",
    name: "Meta CAPI",
    fullName: "Conversions API",
    metric: "9.7/10 Match Quality",
    subtext: "Deduplication & Signals",
    color: "#06B6D4",
    glowColor: "rgba(6, 182, 212, 0.4)",
    basePos: [-2.4, -1.5, 0.6],
    speed: 0.9,
    offset: 2.8
  },
  {
    id: "ads",
    name: "Google Ads",
    fullName: "Enhanced Conversions",
    metric: "Lead & Value Bidding",
    subtext: "Cross-Device Attribution",
    color: "#EF4444",
    glowColor: "rgba(239, 68, 68, 0.4)",
    basePos: [2.5, -1.3, 0.7],
    speed: 1.3,
    offset: 4.1
  },
  {
    id: "shopify",
    name: "Shopify",
    fullName: "Headless E-commerce",
    metric: "Liquid & Storefront API",
    subtext: "Sub-Second Checkout Flow",
    color: "#10B981",
    glowColor: "rgba(16, 185, 129, 0.4)",
    basePos: [0, 2.3, -0.4],
    speed: 1.0,
    offset: 5.2
  }
];

const SingleBadgeNode = ({ item }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime * item.speed + item.offset;
    
    // Gentle 3D floating harmonic oscillation
    meshRef.current.position.x = item.basePos[0] + Math.sin(t * 0.7) * 0.18;
    meshRef.current.position.y = item.basePos[1] + Math.cos(t * 0.9) * 0.15;
    meshRef.current.position.z = item.basePos[2] + Math.sin(t * 0.5) * 0.12;

    meshRef.current.rotation.x = Math.sin(t * 0.6) * 0.2;
    meshRef.current.rotation.y += 0.01;
  });

  const scrollToTarget = () => {
    const target = document.getElementById(
      item.id === "ga4" || item.id === "gtm" ? "analytics" :
      item.id === "shopify" ? "projects" : "services"
    );
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <group ref={meshRef} position={item.basePos}>
      {/* 3D Glowing Anchor Node Mesh */}
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={scrollToTarget}
        scale={hovered ? 1.35 : 1.0}
      >
        <octahedronGeometry args={[0.22, 0]} />
        <meshStandardMaterial
          color={item.color}
          emissive={item.color}
          emissiveIntensity={hovered ? 1.2 : 0.6}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Halo beacon ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.28, 0.32, 24]} />
        <meshBasicMaterial
          color={item.color}
          transparent
          opacity={hovered ? 0.8 : 0.35}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Interactive HTML Card overlay */}
      <Html
        center
        distanceFactor={7.5}
        position={[0, 0.38, 0]}
        className="pointer-events-auto select-none"
      >
        <div
          onClick={scrollToTarget}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`cursor-pointer transition-all duration-300 transform ${
            hovered ? 'scale-110 -translate-y-1' : 'scale-100'
          }`}
          style={{ width: hovered ? '200px' : '150px' }}
        >
          <div
            className="px-3 py-2 rounded-xl backdrop-blur-xl border text-left shadow-xl transition-colors duration-300"
            style={{
              backgroundColor: 'rgba(11, 17, 32, 0.82)',
              borderColor: hovered ? item.color : 'rgba(255, 255, 255, 0.12)',
              boxShadow: hovered ? `0 10px 25px -5px ${item.glowColor}` : '0 4px 15px -3px rgba(0,0,0,0.5)'
            }}
          >
            <div className="flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full animate-ping"
                style={{ backgroundColor: item.color }}
              />
              <span
                className="font-mono font-bold text-xs tracking-wider"
                style={{ color: item.color }}
              >
                {item.name}
              </span>
            </div>

            <p className="text-[11px] font-semibold text-slate-100 mt-1 truncate">
              {item.fullName}
            </p>

            {hovered ? (
              <div className="mt-1.5 pt-1.5 border-t border-slate-700/60 text-[10px]">
                <div className="text-cyan-400 font-mono font-medium">{item.metric}</div>
                <div className="text-slate-400 text-[9px] truncate">{item.subtext}</div>
              </div>
            ) : (
              <p className="text-[9px] text-slate-400 font-mono truncate mt-0.5">
                {item.metric}
              </p>
            )}
          </div>
        </div>
      </Html>
    </group>
  );
};

export const FloatingBadges3D = () => {
  return (
    <group>
      {badgesData.map((item) => (
        <SingleBadgeNode key={item.id} item={item} />
      ))}
    </group>
  );
};
