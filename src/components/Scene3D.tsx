import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Simple Starfield Component
function Starfield() {
  const points = useRef<THREE.Points>(null);
  const starCount = 2000;

  const stars = useMemo(() => {
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);
    
    for (let i = 0; i < starCount; i++) {
      // Create a realistic star distribution
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
      
      // Vary star brightness and color slightly
      const brightness = Math.random() * 0.5 + 0.5;
      colors[i * 3] = brightness; // R
      colors[i * 3 + 1] = brightness; // G
      colors[i * 3 + 2] = brightness * 1.2; // B (slightly blue tint)
    }
    
    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x = state.clock.elapsedTime * 0.0001;
      points.current.rotation.y = state.clock.elapsedTime * 0.0002;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={starCount}
          array={stars.positions}
          itemSize={3}
          args={[stars.positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          count={starCount}
          array={stars.colors}
          itemSize={3}
          args={[stars.colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.8} 
        vertexColors 
        transparent 
        opacity={0.8}
        sizeAttenuation={true}
      />
    </points>
  );
}

// Simple Ambient Lighting
function SceneLighting() {
  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={0.05} 
        color="#ffffff" 
      />
    </>
  );
}

export default function Scene3D() {
  return (
    <>
      <SceneLighting />
      <Starfield />
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        autoRotate 
        autoRotateSpeed={0.02}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  );
}