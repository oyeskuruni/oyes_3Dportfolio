import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const HolographicCore = () => {
  const outerMeshRef = useRef();
  const innerSphereRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const groupRef = useRef();

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;

    // Smooth cursor follow with lerp
    if (groupRef.current) {
      const targetX = state.pointer.x * 0.45;
      const targetY = state.pointer.y * 0.45;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -targetY, 0.05);
    }

    // Outer wireframe geometric rotation
    if (outerMeshRef.current) {
      outerMeshRef.current.rotation.x += delta * 0.25;
      outerMeshRef.current.rotation.y += delta * 0.35;
    }

    // Inner glowing core pulsation
    if (innerSphereRef.current) {
      const scale = 1 + Math.sin(t * 2.5) * 0.08;
      innerSphereRef.current.scale.set(scale, scale, scale);
    }

    // Orbiting data rings
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.5;
      ring1Ref.current.rotation.z = t * 0.3;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = -t * 0.4;
      ring2Ref.current.rotation.z = Math.sin(t * 0.5) * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Outer Icosahedron Wireframe */}
      <mesh ref={outerMeshRef}>
        <icosahedronGeometry args={[1.3, 1]} />
        <meshStandardMaterial
          color="#06B6D4"
          emissive="#0891B2"
          emissiveIntensity={0.6}
          wireframe
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Inner Glowing Core Data Sphere */}
      <mesh ref={innerSphereRef}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial
          color="#38BDF8"
          emissive="#0284C7"
          emissiveIntensity={0.9}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Primary Orbit Ring */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[1.8, 0.02, 16, 100]} />
        <meshStandardMaterial
          color="#818CF8"
          emissive="#6366F1"
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* Secondary Angular Ring */}
      <mesh ref={ring2Ref} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.0, 0.015, 16, 100]} />
        <meshStandardMaterial
          color="#10B981"
          emissive="#059669"
          emissiveIntensity={0.7}
        />
      </mesh>

      {/* Ambient point light at core for local glow */}
      <pointLight color="#38BDF8" intensity={2} distance={6} />
    </group>
  );
};
