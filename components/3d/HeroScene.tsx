'use client'

import { Suspense, useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import { motion } from 'framer-motion'
import { SolarHouse } from './SolarHouse'
import { SolarPanels } from './SolarPanels'
import { SunLight } from './SunLight'
import { Zap, Clock, MapPin } from 'lucide-react'

function Scene({ scrollProgress }: { scrollProgress: number }) {
  const controlsRef = useRef(null)

  return (
    <>
      <SunLight />
      <ContactShadows
        position={[0, -0.59, 0]}
        opacity={0.4}
        scale={10}
        blur={2}
        far={6}
        color="#4A4A6A"
      />
      <SolarHouse />
      <SolarPanels scrollProgress={scrollProgress} />
      <OrbitControls
        ref={controlsRef}
        enablePan={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.4}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2.2}
        target={[0, 0.5, 0]}
      />
      {/* Sky gradient via background */}
      <color attach="background" args={['#F0F7FF']} />
      <fog attach="fog" args={['#EEF5FF', 12, 30]} />
    </>
  )
}

function CanvasSkeleton() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-[#EEF5FF] to-[#F0F7FF] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
        <p className="text-sm text-text-secondary font-medium">Loading 3D scene...</p>
      </div>
    </div>
  )
}

const badges = [
  {
    icon: Zap,
    value: '10,000+',
    label: 'Designs Delivered',
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/20',
    delay: 0.2,
    position: 'top-4 left-4 md:top-8 md:left-8',
  },
  {
    icon: Clock,
    value: '6-Hour',
    label: 'Average TAT',
    color: 'text-accent',
    bg: 'bg-accent/10',
    border: 'border-accent/20',
    delay: 0.4,
    position: 'top-4 right-4 md:top-8 md:right-8',
  },
  {
    icon: MapPin,
    value: 'All 50',
    label: 'US States Covered',
    color: 'text-secondary',
    bg: 'bg-secondary/10',
    border: 'border-secondary/20',
    delay: 0.6,
    position: 'bottom-4 left-1/2 -translate-x-1/2',
  },
]

export function HeroScene() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current
      if (!container) return
      const rect = container.getBoundingClientRect()
      const progress = Math.max(0, Math.min(1, -rect.top / (rect.height * 0.8)))
      setScrollProgress(progress)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={containerRef} className="relative w-full h-[70vh] md:h-[75vh] min-h-[500px] max-h-[800px]">
      <Suspense fallback={<CanvasSkeleton />}>
        <Canvas
          shadows
          camera={{ position: [4, 3, 6], fov: 45, near: 0.1, far: 100 }}
          dpr={[1, 1.5]}
          performance={{ min: 0.5 }}
          aria-label="3D visualization of a solar-powered house"
          role="img"
        >
          <Scene scrollProgress={scrollProgress} />
        </Canvas>
      </Suspense>

      {/* Floating stat badges */}
      {badges.map(({ icon: Icon, value, label, color, bg, border, delay, position }) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay }}
          className={`absolute ${position} z-10`}
        >
          <div
            className={`glass-card flex items-center gap-3 px-4 py-3 rounded-2xl border ${border} shadow-lg`}
          >
            <div className={`w-9 h-9 ${bg} rounded-xl flex items-center justify-center shrink-0`}>
              <Icon className={`w-5 h-5 ${color}`} />
            </div>
            <div>
              <p className={`font-heading font-bold text-lg leading-none ${color}`}>{value}</p>
              <p className="text-xs text-text-secondary mt-0.5">{label}</p>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-xs text-text-secondary font-medium">Scroll to install panels</span>
        <div className="w-5 h-8 rounded-full border-2 border-text-secondary/30 flex items-start justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 rounded-full bg-text-secondary/40"
          />
        </div>
      </motion.div>
    </div>
  )
}
