'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  AdditiveBlending,
  Color,
  InstancedMesh,
  Mesh,
  Object3D,
  RingGeometry,
  Vector2
} from 'three';

const TRAIL_COUNT = 12;
const IDLE_FADE_MS = 900;
const SIZE_CAP_FACTOR = 0.35;

function LiquidCursorTrail() {
  const { size, viewport } = useThree();
  const trailRef = useRef<InstancedMesh>(null);
  const coreFillRef = useRef<Mesh>(null);
  const coreOutlineRef = useRef<Mesh<RingGeometry>>(null);
  const rippleRef = useRef<Mesh>(null);

  const pointerPx = useRef(new Vector2(-1000, -1000));
  const pointerWorld = useRef(new Vector2(0, 0));
  const targetWorld = useRef(new Vector2(0, 0));
  const headWorld = useRef(new Vector2(0, 0));
  const previousHead = useRef(new Vector2(0, 0));

  const velocity = useRef(0);
  const visibility = useRef(0);
  const active = useRef(false);
  const pressed = useRef(false);
  const clickPulse = useRef(0);
  const lastMoveAt = useRef(0);

  const points = useMemo(
    () => Array.from({ length: TRAIL_COUNT }, () => new Vector2(0, 0)),
    []
  );
  const dummy = useMemo(() => new Object3D(), []);

  useEffect(() => {
    const onPointerMove = (event: PointerEvent) => {
      pointerPx.current.set(event.clientX, event.clientY);
      active.current = true;
      lastMoveAt.current = performance.now();
    };
    const onPointerLeave = () => {
      active.current = false;
    };
    const onPointerDown = () => {
      pressed.current = true;
      clickPulse.current = 1;
    };
    const onPointerUp = () => {
      pressed.current = false;
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerleave', onPointerLeave);
    window.addEventListener('blur', onPointerLeave);
    window.addEventListener('pointerdown', onPointerDown, { passive: true });
    window.addEventListener('pointerup', onPointerUp, { passive: true });

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerleave', onPointerLeave);
      window.removeEventListener('blur', onPointerLeave);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointerup', onPointerUp);
    };
  }, []);

  useEffect(() => {
    if (!trailRef.current) return;

    const startColor = new Color('#e7d3a9');
    const endColor = new Color('#8e7444');

    for (let i = 0; i < TRAIL_COUNT; i += 1) {
      const ratio = i / (TRAIL_COUNT - 1);
      trailRef.current.setColorAt(i, startColor.clone().lerp(endColor, ratio));
    }

    if (trailRef.current.instanceColor) {
      trailRef.current.instanceColor.needsUpdate = true;
    }
  }, []);

  useFrame((state, delta) => {
    const followFactor = 1 - Math.exp(-delta * 9);

    if (active.current) {
      const x = (pointerPx.current.x / size.width - 0.5) * viewport.width;
      const y = -(pointerPx.current.y / size.height - 0.5) * viewport.height;
      targetWorld.current.set(x, y);
    }

    pointerWorld.current.lerp(targetWorld.current, active.current ? followFactor : followFactor * 0.45);
    headWorld.current.copy(active.current ? targetWorld.current : pointerWorld.current);

    points[0].lerp(pointerWorld.current, 0.42);
    for (let i = 1; i < TRAIL_COUNT; i += 1) {
      const drag = 0.24 - Math.min(i * 0.006, 0.1);
      points[i].lerp(points[i - 1], drag);
    }

    const headDistance = headWorld.current.distanceTo(previousHead.current);
    velocity.current += (headDistance - velocity.current) * 0.2;
    previousHead.current.copy(headWorld.current);
    clickPulse.current *= Math.exp(-delta * 12);

    const idleFade = Math.max(0, 1 - (performance.now() - lastMoveAt.current) / IDLE_FADE_MS);
    const targetVisibility = active.current ? idleFade * 0.78 : 0;
    visibility.current += (targetVisibility - visibility.current) * 0.16;
    const pressure = pressed.current ? 1.08 : 1;

    if (trailRef.current) {
      for (let i = 0; i < TRAIL_COUNT; i += 1) {
        const ratio = i / (TRAIL_COUNT - 1);
        const wave =
          Math.sin(state.clock.elapsedTime * 9 - i * 0.6) *
          (0.008 + velocity.current * 0.14) *
          (1 - ratio);
        const stretch = 1 + velocity.current * 5 * (1 - ratio);
        const radius =
          (0.1 * (1 - ratio) + 0.018) * pressure * visibility.current * SIZE_CAP_FACTOR;

        dummy.position.set(points[i].x + wave, points[i].y + wave * 0.55, 0);
        dummy.scale.set(radius * stretch, radius / stretch, 1);
        dummy.rotation.z = wave * 2.2;
        dummy.updateMatrix();
        trailRef.current.setMatrixAt(i, dummy.matrix);
      }

      trailRef.current.instanceMatrix.needsUpdate = true;
    }

    const pulse = 0.07 + Math.sin(state.clock.elapsedTime * 7) * 0.01;
    const headScale =
      (0.07 + velocity.current * 2.6 + pulse) *
      pressure *
      visibility.current *
      SIZE_CAP_FACTOR;

    if (coreFillRef.current) {
      coreFillRef.current.position.set(headWorld.current.x, headWorld.current.y, 0.04);
      coreFillRef.current.scale.setScalar(headScale * (0.72 + clickPulse.current * 0.08));
    }

    if (coreOutlineRef.current) {
      coreOutlineRef.current.position.set(headWorld.current.x, headWorld.current.y, 0.05);
      coreOutlineRef.current.scale.setScalar(headScale * (1 + clickPulse.current * 0.1));
    }

    if (rippleRef.current) {
      const rippleScale =
        (0.22 + Math.sin(state.clock.elapsedTime * 3.6) * 0.03 + velocity.current * 1.8 + clickPulse.current * 0.25) *
        visibility.current *
        SIZE_CAP_FACTOR;
      rippleRef.current.position.set(headWorld.current.x, headWorld.current.y, 0.01);
      rippleRef.current.scale.setScalar(rippleScale);
    }
  });

  return (
    <>
      <instancedMesh ref={trailRef} args={[undefined, undefined, TRAIL_COUNT]} renderOrder={50}>
        <circleGeometry args={[1, 28]} />
        <meshBasicMaterial
          transparent
          opacity={0.14}
          depthWrite={false}
          blending={AdditiveBlending}
          toneMapped={false}
        />
      </instancedMesh>
      <mesh ref={rippleRef} renderOrder={55}>
        <ringGeometry args={[0.78, 1, 48]} />
        <meshBasicMaterial
          color="#d8bc85"
          transparent
          opacity={0.06}
          depthWrite={false}
          blending={AdditiveBlending}
          toneMapped={false}
        />
      </mesh>
      <mesh ref={coreFillRef} renderOrder={65}>
        <circleGeometry args={[1, 42]} />
        <meshBasicMaterial
          color="#0a0f18"
          transparent
          opacity={0.94}
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>
      <mesh ref={coreOutlineRef} renderOrder={66}>
        <ringGeometry args={[0.82, 1, 42]} />
        <meshBasicMaterial
          color="#d8bc85"
          transparent
          opacity={0.95}
          depthWrite={false}
          blending={AdditiveBlending}
          toneMapped={false}
        />
      </mesh>
    </>
  );
}

export function WaterCursor() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const pointerQuery = window.matchMedia('(pointer: fine)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleChange = () => {
      setEnabled(pointerQuery.matches && !motionQuery.matches);
    };

    handleChange();
    pointerQuery.addEventListener('change', handleChange);
    motionQuery.addEventListener('change', handleChange);

    return () => {
      pointerQuery.removeEventListener('change', handleChange);
      motionQuery.removeEventListener('change', handleChange);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('custom-cursor-enabled', enabled);
    return () => {
      document.body.classList.remove('custom-cursor-enabled');
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <div className="water-cursor-layer" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 1.25]}
        gl={{ antialias: true, alpha: true }}
        style={{ pointerEvents: 'none' }}
      >
        <LiquidCursorTrail />
      </Canvas>
    </div>
  );
}
