'use client';

import { OrbitControls, Sphere, Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

function WireSphere() {
  return (
    <Sphere args={[1.35, 28, 28]}>
      <meshStandardMaterial wireframe color="#f5f5f5" />
    </Sphere>
  );
}

export function HeroScene() {
  return (
    <div style={{ height: 420, border: '1px solid #2a2a2a', borderRadius: 12, overflow: 'hidden', background: '#070707' }}>
      <Canvas camera={{ position: [0, 0, 3.5] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 2]} />
        <WireSphere />
        <Stars radius={30} depth={20} count={1000} factor={1.5} saturation={0} fade speed={0.4} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
    </div>
  );
}
