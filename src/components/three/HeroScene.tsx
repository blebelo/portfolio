'use client';

import { OrbitControls, Sphere, Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

function WireSphere() {
  return (
    <Sphere args={[1.35, 28, 28]}>
      <meshStandardMaterial wireframe color="#dbc491" emissive="#5f5032" emissiveIntensity={0.55} />
    </Sphere>
  );
}

export function HeroScene() {
  return (
    <div className="hero-scene-shell">
      <Canvas camera={{ position: [0, 0, 3.6] }}>
        <ambientLight intensity={0.65} />
        <directionalLight position={[2, 2, 2]} intensity={0.8} />
        <pointLight position={[-2.5, 1.4, 1.6]} intensity={0.7} color="#bda06b" />
        <WireSphere />
        <Stars radius={30} depth={22} count={1300} factor={1.8} saturation={0} fade speed={0.45} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.72} />
      </Canvas>
    </div>
  );
}
