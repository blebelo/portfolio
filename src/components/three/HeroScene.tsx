'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function Orb() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += delta * 0.35;
    meshRef.current.rotation.x += delta * 0.1;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.5} floatIntensity={0.8}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.2, 16]} />
        <MeshDistortMaterial color="#ffffff" roughness={0.2} metalness={0.7} distort={0.3} speed={1.8} wireframe />
      </mesh>
    </Float>
  );
}

export function HeroScene() {
  return (
    <div className="scene" aria-label="Three.js hero visualization">
      <Canvas camera={{ position: [0, 0, 4.3], fov: 45 }}>
        <ambientLight intensity={0.35} />
        <directionalLight position={[2, 2, 2]} intensity={1.2} />
        <Orb />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.7} />
      </Canvas>
    </div>
  );
}
