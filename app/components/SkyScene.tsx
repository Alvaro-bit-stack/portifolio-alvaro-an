"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Cloud, Clouds, Float } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function SoftSun() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.position.y = 2 + Math.sin(t * 0.4) * 0.15;
  });
  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.8}>
      <mesh ref={ref} position={[3, 2, -8]}>
        <sphereGeometry args={[1.6, 64, 64]} />
        <meshBasicMaterial color="#fff2d6" />
      </mesh>
      <mesh position={[3, 2, -8.05]}>
        <sphereGeometry args={[2.3, 64, 64]} />
        <meshBasicMaterial color="#ffe0c2" transparent opacity={0.35} />
      </mesh>
      <mesh position={[3, 2, -8.1]}>
        <sphereGeometry args={[3.2, 64, 64]} />
        <meshBasicMaterial color="#ffd2b3" transparent opacity={0.18} />
      </mesh>
    </Float>
  );
}

function DriftingClouds() {
  const group = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.children.forEach((child, i) => {
      child.position.x += delta * (0.08 + (i % 3) * 0.04);
      if (child.position.x > 14) child.position.x = -14;
    });
  });
  return (
    <group ref={group}>
      <Clouds material={THREE.MeshBasicMaterial}>
        <Cloud
          seed={1}
          segments={40}
          bounds={[8, 2, 2]}
          volume={6}
          color="#ffffff"
          position={[-6, 1.5, -4]}
          opacity={0.85}
        />
        <Cloud
          seed={2}
          segments={30}
          bounds={[6, 1.5, 2]}
          volume={5}
          color="#ffeaf2"
          position={[2, -1, -3]}
          opacity={0.75}
        />
        <Cloud
          seed={3}
          segments={50}
          bounds={[10, 2.5, 2]}
          volume={8}
          color="#ffffff"
          position={[-2, 3, -6]}
          opacity={0.7}
        />
        <Cloud
          seed={4}
          segments={25}
          bounds={[5, 1.2, 1.5]}
          volume={4}
          color="#e7f3ff"
          position={[5, 0.5, -5]}
          opacity={0.8}
        />
        <Cloud
          seed={5}
          segments={20}
          bounds={[4, 1, 1.5]}
          volume={3}
          color="#ffffff"
          position={[-8, -2, -3]}
          opacity={0.65}
        />
      </Clouds>
    </group>
  );
}

export default function SkyScene() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 55 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[4, 4, 4]} intensity={0.6} color="#fff1da" />
        <Suspense fallback={null}>
          <SoftSun />
          <DriftingClouds />
        </Suspense>
      </Canvas>
    </div>
  );
}
