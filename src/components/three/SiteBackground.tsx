'use client';

import { Float, Sparkles, Stars } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import type { Group } from 'three';

function OrbitCluster() {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const elapsed = state.clock.getElapsedTime();
    groupRef.current.rotation.y = elapsed * 0.08;
    groupRef.current.rotation.x = Math.sin(elapsed * 0.24) * 0.06;
  });

  return (
    <group ref={groupRef}>
      <Float speed={0.85} rotationIntensity={0.38} floatIntensity={0.6}>
        <mesh position={[2.25, 0.8, -1.3]}>
          <icosahedronGeometry args={[1.04, 1]} />
          <meshStandardMaterial wireframe color="#d8bc85" transparent opacity={0.76} />
        </mesh>
      </Float>

      <Float speed={0.95} rotationIntensity={0.35} floatIntensity={0.56}>
        <mesh position={[-2, -1, -0.7]}>
          <torusKnotGeometry args={[0.62, 0.18, 150, 24]} />
          <meshStandardMaterial wireframe color="#7a96bc" transparent opacity={0.52} />
        </mesh>
      </Float>
    </group>
  );
}

export function SiteBackground() {
  return (
    <div className="site-background" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5.6], fov: 50 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true }}
        style={{ pointerEvents: 'none' }}
      >
        <ambientLight intensity={0.58} />
        <directionalLight position={[2.5, 2, 2]} intensity={0.88} color="#dec58f" />
        <pointLight position={[-4, -1.6, 1.5]} intensity={0.75} color="#7397c4" />
        <OrbitCluster />
        <Sparkles count={70} scale={[10, 6, 6]} size={1.4} speed={0.18} color="#f0ddba" />
        <Stars radius={90} depth={42} count={1800} factor={1.8} saturation={0} fade speed={0.3} />
      </Canvas>
    </div>
  );
}
