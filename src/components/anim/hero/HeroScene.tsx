"use client";
/**
 * WebGL particle hero: a slowly-rotating point-cloud globe wrapped in an
 * ambient particle field — a "From UAE to the World" trade-network motif.
 * All motion is ref-mutation inside useFrame (never setState) per R3F rules.
 * Only transform/rotation animates; additive blending gives the glow.
 */
import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

/** Even points on a unit sphere (Fibonacci lattice). */
function fibonacciSphere(count: number, radius: number): Float32Array {
  const pts = new Float32Array(count * 3);
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = golden * i;
    pts[i * 3] = Math.cos(theta) * r * radius;
    pts[i * 3 + 1] = y * radius;
    pts[i * 3 + 2] = Math.sin(theta) * r * radius;
  }
  return pts;
}

/** Random points in a spherical shell (ambient dust). */
function sphericalCloud(count: number, min: number, max: number): Float32Array {
  const pts = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    const r = min + Math.random() * (max - min);
    pts[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    pts[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    pts[i * 3 + 2] = r * Math.cos(phi);
  }
  return pts;
}

function Globe() {
  const group = useRef<THREE.Group>(null);
  const globe = useMemo(() => fibonacciSphere(2600, 2), []);
  const dust = useMemo(() => sphericalCloud(900, 2.6, 5.2), []);
  // Window-level pointer: R3F's state.pointer only fires over the Canvas, but
  // the hero text/buttons sit above it and swallow those events. Track the
  // whole window so the globe follows the cursor anywhere over the hero.
  const ptr = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      ptr.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      ptr.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame((_state, delta) => {
    const g = group.current;
    if (!g) return;
    const p = ptr.current;
    // steady drift + pronounced mouse-follow tilt (interactive)
    g.rotation.y += delta * 0.05;
    const tiltX = -p.y * 0.5;
    const tiltZ = p.x * 0.25;
    g.rotation.x += (tiltX - g.rotation.x) * 0.05;
    g.rotation.z += (tiltZ - g.rotation.z) * 0.05;
    // slight breathing scale toward cursor distance from centre
    const d = Math.min(1, Math.hypot(p.x, p.y));
    const s = 1 + d * 0.06;
    g.scale.x += (s - g.scale.x) * 0.06;
    g.scale.y = g.scale.z = g.scale.x;
  });

  return (
    <group ref={group}>
      <Points positions={globe} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#dbe6f3"
          size={0.018}
          sizeAttenuation
          depthWrite={false}
          opacity={0.85}
        />
      </Points>
      <Points positions={dust} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#f97316"
          size={0.03}
          sizeAttenuation
          depthWrite={false}
          opacity={0.7}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
      style={{ position: "absolute", inset: 0 }}
    >
      <Globe />
    </Canvas>
  );
}
