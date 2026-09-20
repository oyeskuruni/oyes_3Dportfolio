import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const ParticleField = ({ count = 1200 }) => {
  const pointsRef = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const palette = [
      new THREE.Color('#06B6D4'), // Cyan
      new THREE.Color('#6366F1'), // Indigo
      new THREE.Color('#10B981'), // Emerald
      new THREE.Color('#F59E0B'), // Amber
      new THREE.Color('#38BDF8'), // Sky
    ];

    for (let i = 0; i < count; i++) {
      // Spread in a spherical/cylindrical cloud around the center
      const r = THREE.MathUtils.randFloat(2.5, 9);
      const theta = THREE.MathUtils.randFloat(0, Math.PI * 2);
      const phi = THREE.MathUtils.randFloat(-Math.PI * 0.4, Math.PI * 0.4);

      pos[i * 3] = r * Math.cos(phi) * Math.sin(theta);
      pos[i * 3 + 1] = r * Math.sin(phi);
      pos[i * 3 + 2] = r * Math.cos(phi) * Math.cos(theta);

      const color = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }

    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.04;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.08;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        vertexColors
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
};
