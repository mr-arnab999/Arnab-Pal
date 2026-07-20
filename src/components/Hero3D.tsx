import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Sphere, Icosahedron, Float, Environment, Sparkles, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const TechCore = () => {
  const coreRef = useRef<THREE.Mesh>(null);
  const ringRef1 = useRef<THREE.Group>(null);
  const ringRef2 = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime * 0.4;
    if (coreRef.current) {
      coreRef.current.rotation.x = t * 0.2;
      coreRef.current.rotation.y = t * 0.3;
    }
    if (ringRef1.current) {
      ringRef1.current.rotation.z = t * 0.2;
      ringRef1.current.rotation.y = t * 0.1;
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.x = t * 0.15;
      ringRef2.current.rotation.y = t * -0.2;
    }
  });

  return (
    <group>
      {/* Central Data Core */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <Icosahedron args={[1.5, 1]} ref={coreRef}>
          <meshStandardMaterial color="#06b6d4" wireframe opacity={0.25} transparent />
        </Icosahedron>
        
        {/* Inner solid brain */}
        <Sphere args={[0.8, 32, 32]}>
          <MeshDistortMaterial
            color="#0f172a"
            emissive="#3b82f6"
            emissiveIntensity={0.8}
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
      </Float>

      {/* Orbiting Data Nodes - Ring 1 */}
      <group ref={ringRef1}>
        {[...Array(6)].map((_, i) => {
          const angle = (i / 6) * Math.PI * 2;
          const radius = 3.5;
          return (
            <Box
              key={`ring1-${i}`}
              args={[0.3, 0.3, 0.3]}
              position={[Math.cos(angle) * radius, Math.sin(angle) * radius, 0]}
            >
              <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.8} wireframe={i % 2 === 0} />
            </Box>
          );
        })}
      </group>

      {/* Orbiting Data Nodes - Ring 2 */}
      <group ref={ringRef2}>
        {[...Array(4)].map((_, i) => {
          const angle = (i / 4) * Math.PI * 2;
          const radius = 5;
          return (
            <Box
              key={`ring2-${i}`}
              args={[0.4, 0.4, 0.4]}
              position={[Math.cos(angle) * radius, 0, Math.sin(angle) * radius]}
            >
              <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.6} wireframe={i % 2 !== 0} />
            </Box>
          );
        })}
      </group>
    </group>
  );
};

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 opacity-25 pointer-events-none mix-blend-screen will-change-transform">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 1.5]} performance={{ min: 0.5 }}>
        <fog attach="fog" args={['#030712', 5, 15]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={2} color="#06b6d4" />
        <directionalLight position={[-10, -10, -10]} intensity={1} color="#3b82f6" />
        
        <TechCore />
        <Sparkles count={200} scale={12} size={2} speed={0.4} opacity={0.5} color="#06b6d4" />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
