import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

const FloatingPrisms = ({ count = 24, isDark = true }) => {
  const groupRef = useRef();

  const prisms = useMemo(() => {
    const items = [];
    const colors = isDark
      ? ['#06B6D4', '#6366F1', '#10B981', '#F59E0B', '#38BDF8']
      : ['#0284C7', '#4F46E5', '#059669', '#D97706', '#0284C7'];

    for (let i = 0; i < count; i++) {
      items.push({
        position: [
          THREE.MathUtils.randFloatSpread(20),
          THREE.MathUtils.randFloatSpread(35),
          THREE.MathUtils.randFloat(-8, -1)
        ],
        rotation: [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        ],
        scale: THREE.MathUtils.randFloat(0.18, 0.45),
        speed: THREE.MathUtils.randFloat(0.2, 0.7),
        color: colors[i % colors.length]
      });
    }
    return items;
  }, [count, isDark]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const scrollY = window.scrollY || 0;
    const normalizedScroll = scrollY * 0.001;

    // Smooth subtle camera/group parallax based on scroll & pointer
    groupRef.current.position.y = normalizedScroll * 1.5;
    groupRef.current.rotation.y = state.pointer.x * 0.08;
    groupRef.current.rotation.x = -state.pointer.y * 0.08;

    groupRef.current.children.forEach((child, i) => {
      const p = prisms[i];
      child.rotation.x += delta * p.speed * 0.4;
      child.rotation.y += delta * p.speed * 0.5;
    });
  });

  return (
    <group ref={groupRef}>
      {prisms.map((p, i) => (
        <mesh key={i} position={p.position} rotation={p.rotation} scale={p.scale}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color={p.color}
            emissive={p.color}
            emissiveIntensity={isDark ? 0.4 : 0.2}
            wireframe
            transparent
            opacity={isDark ? 0.35 : 0.2}
          />
        </mesh>
      ))}
    </group>
  );
};

const AmbientDust = ({ count = 600, isDark = true }) => {
  const pointsRef = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const baseColor = new THREE.Color(isDark ? '#38BDF8' : '#0284C7');
    const altColor = new THREE.Color(isDark ? '#818CF8' : '#4F46E5');

    for (let i = 0; i < count; i++) {
      pos[i * 3] = THREE.MathUtils.randFloatSpread(25);
      pos[i * 3 + 1] = THREE.MathUtils.randFloatSpread(40);
      pos[i * 3 + 2] = THREE.MathUtils.randFloat(-10, 2);

      const c = Math.random() > 0.5 ? baseColor : altColor;
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }

    return [pos, col];
  }, [count, isDark]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={isDark ? 0.6 : 0.35}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
};

export const GlobalCanvas3D = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [hasWebGL, setHasWebGL] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!hasWebGL) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        dpr={isMobile ? [1, 1] : [1, 1.5]}
        gl={{
          antialias: !isMobile,
          alpha: true,
          powerPreference: 'high-performance'
        }}
        className="w-full h-full"
      >
        <ambientLight intensity={isDark ? 0.6 : 0.9} />
        <pointLight position={[5, 10, 5]} intensity={1.5} color={isDark ? "#38BDF8" : "#0284C7"} />
        <pointLight position={[-5, -10, -5]} intensity={1} color={isDark ? "#818CF8" : "#4F46E5"} />

        <FloatingPrisms count={isMobile ? 12 : 28} isDark={isDark} />
        <AmbientDust count={isMobile ? 300 : 700} isDark={isDark} />
      </Canvas>
    </div>
  );
};
