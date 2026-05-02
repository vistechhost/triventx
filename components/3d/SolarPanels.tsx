'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import * as THREE from 'three'

interface PanelProps {
  position: [number, number, number]
  rotation: [number, number, number]
  targetY: number
  startY: number
  progress: number
}

function Panel({ position, rotation, targetY, startY, progress }: PanelProps) {
  const y = THREE.MathUtils.lerp(startY, targetY, progress)
  const opacity = THREE.MathUtils.lerp(0.3, 1, progress)

  return (
    <group position={[position[0], y, position[2]]} rotation={rotation}>
      {/* Panel frame */}
      <mesh castShadow>
        <boxGeometry args={[0.5, 0.02, 0.38]} />
        <meshStandardMaterial color="#2A3A5A" roughness={0.3} metalness={0.6} />
      </mesh>
      {/* Solar cells */}
      <mesh position={[0, 0.012, 0]} castShadow>
        <boxGeometry args={[0.46, 0.01, 0.34]} />
        <meshStandardMaterial
          color="#1A2744"
          roughness={0.1}
          metalness={0.8}
          transparent
          opacity={opacity}
        />
      </mesh>
      {/* Cell grid lines */}
      {[-0.15, -0.05, 0.05, 0.15].map((x, i) => (
        <mesh key={`vline-${i}`} position={[x, 0.018, 0]}>
          <boxGeometry args={[0.005, 0.005, 0.34]} />
          <meshStandardMaterial color="#3A4B6A" metalness={0.5} />
        </mesh>
      ))}
      {[-0.12, 0, 0.12].map((z, i) => (
        <mesh key={`hline-${i}`} position={[0, 0.018, z]}>
          <boxGeometry args={[0.46, 0.005, 0.005]} />
          <meshStandardMaterial color="#3A4B6A" metalness={0.5} />
        </mesh>
      ))}
      {/* Sheen overlay */}
      <mesh position={[0, 0.02, 0]}>
        <boxGeometry args={[0.46, 0.002, 0.34]} />
        <meshStandardMaterial
          color="#4466CC"
          transparent
          opacity={0.15}
          roughness={0}
          metalness={1}
        />
      </mesh>
    </group>
  )
}

export function SolarPanels({ scrollProgress = 0 }: { scrollProgress?: number }) {
  // 8 panels arranged in 2 rows × 4 cols on the roof slope
  const panelPositions: [number, number, number][] = [
    [-0.6, 0, -0.3],
    [-0.1, 0, -0.3],
    [0.4, 0, -0.3],
    [0.9, 0, -0.3],
    [-0.6, 0, 0.15],
    [-0.1, 0, 0.15],
    [0.4, 0, 0.15],
    [0.9, 0, 0.15],
  ]

  const roofRotation: [number, number, number] = [-Math.PI / 8, 0, 0]
  const roofBaseY = 1.28
  const startY = 3.5

  // Stagger each panel slightly for a cascade effect
  const panels = panelPositions.map((pos, i) => ({
    position: pos,
    rotation: roofRotation,
    targetY: roofBaseY,
    startY,
    progress: Math.max(0, Math.min(1, (scrollProgress - i * 0.05) * 2)),
  }))

  return (
    <group>
      {panels.map((panel, i) => (
        <Panel key={i} {...panel} />
      ))}
    </group>
  )
}
