'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Mesh, Group } from 'three'

export function SolarHouse() {
  const groupRef = useRef<Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.08
    }
  })

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* Foundation */}
      <mesh position={[0, -0.05, 0]} receiveShadow castShadow>
        <boxGeometry args={[3.2, 0.1, 2.4]} />
        <meshStandardMaterial color="#E8E4DC" roughness={0.8} />
      </mesh>

      {/* Main walls */}
      <mesh position={[0, 0.6, 0]} receiveShadow castShadow>
        <boxGeometry args={[3.0, 1.2, 2.2]} />
        <meshStandardMaterial color="#F5F0E8" roughness={0.6} metalness={0.05} />
      </mesh>

      {/* Front wall with door cutout (decorative) */}
      <mesh position={[0, 0.3, 1.11]} receiveShadow castShadow>
        <boxGeometry args={[2.98, 0.65, 0.02]} />
        <meshStandardMaterial color="#F5F0E8" roughness={0.6} />
      </mesh>

      {/* Door */}
      <mesh position={[0, 0.18, 1.12]} castShadow>
        <boxGeometry args={[0.5, 0.9, 0.03]} />
        <meshStandardMaterial color="#8B6B4A" roughness={0.7} />
      </mesh>

      {/* Windows - front */}
      {[-0.9, 0.9].map((x, i) => (
        <group key={i} position={[x, 0.65, 1.12]}>
          <mesh castShadow>
            <boxGeometry args={[0.6, 0.5, 0.03]} />
            <meshStandardMaterial color="#BAD8F7" roughness={0.1} metalness={0.3} transparent opacity={0.8} />
          </mesh>
          {/* Window frame */}
          <mesh>
            <boxGeometry args={[0.65, 0.55, 0.025]} />
            <meshStandardMaterial color="#E8D8C8" roughness={0.5} />
          </mesh>
        </group>
      ))}

      {/* Windows - side */}
      {[-1.51, 1.51].map((z, i) => (
        <mesh key={`side-win-${i}`} position={[0, 0.65, z === -1.51 ? -0.7 : -0.7]} castShadow>
          {/* intentionally skipping side windows for simplicity */}
        </mesh>
      ))}

      {/* Garage */}
      <mesh position={[1.1, 0.35, 1.12]} castShadow>
        <boxGeometry args={[0.75, 0.7, 0.03]} />
        <meshStandardMaterial color="#D4C4B4" roughness={0.6} />
      </mesh>

      {/* Roof — gable */}
      <mesh position={[0, 1.5, 0]} castShadow receiveShadow>
        <coneGeometry args={[2.2, 0.9, 4]} />
        <meshStandardMaterial color="#B87333" roughness={0.7} metalness={0.1} />
      </mesh>

      {/* Roof ridge detail */}
      <mesh position={[0, 1.85, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>
        <boxGeometry args={[0.15, 0.1, 2.8]} />
        <meshStandardMaterial color="#9B6027" roughness={0.8} />
      </mesh>

      {/* Chimney */}
      <mesh position={[0.8, 1.6, -0.3]} castShadow>
        <boxGeometry args={[0.25, 0.55, 0.25]} />
        <meshStandardMaterial color="#C4775A" roughness={0.9} />
      </mesh>

      {/* Ground shadow plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#E8F4E8" roughness={1} transparent opacity={0.6} />
      </mesh>

      {/* Small shrubs */}
      {[[-1.4, 0, 1.1], [1.4, 0, 1.1], [-1.4, 0, -1.0], [1.4, 0, -1.0]].map(([x, y, z], i) => (
        <mesh key={`shrub-${i}`} position={[x as number, y as number + 0.15, z as number]} castShadow>
          <sphereGeometry args={[0.18, 8, 8]} />
          <meshStandardMaterial color={i % 2 === 0 ? '#5C8B5C' : '#4A7C4A'} roughness={0.9} />
        </mesh>
      ))}
    </group>
  )
}
