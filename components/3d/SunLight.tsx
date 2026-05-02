'use client'

import { useRef, useEffect } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import type { DirectionalLight } from 'three'
import * as THREE from 'three'

export function SunLight() {
  const lightRef = useRef<DirectionalLight>(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const { size } = useThree()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = {
        x: (e.clientX / size.width) * 2 - 1,
        y: -(e.clientY / size.height) * 2 + 1,
      }
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [size])

  useFrame(() => {
    if (lightRef.current) {
      const targetX = mousePos.current.x * 4
      const targetY = 4 + mousePos.current.y * 2
      lightRef.current.position.x = THREE.MathUtils.lerp(lightRef.current.position.x, targetX, 0.04)
      lightRef.current.position.y = THREE.MathUtils.lerp(lightRef.current.position.y, targetY, 0.04)
    }
  })

  return (
    <>
      <ambientLight intensity={0.8} color="#FFF5E6" />
      <directionalLight
        ref={lightRef}
        position={[3, 5, 4]}
        intensity={2.2}
        color="#FFD580"
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={0.1}
        shadow-camera-far={20}
        shadow-camera-left={-5}
        shadow-camera-right={5}
        shadow-camera-top={5}
        shadow-camera-bottom={-5}
        shadow-bias={-0.001}
      />
      <directionalLight position={[-3, 3, -2]} intensity={0.4} color="#B0D0FF" />
      <hemisphereLight args={['#87CEEB', '#E8F4E8', 0.5]} />
    </>
  )
}
