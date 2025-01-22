import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, AccumulativeShadows, RandomizedLight } from '@react-three/drei'
import Model from './model'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

gsap.registerPlugin(useGSAP)


export default function Scene() {
  return (
    <div className="h-[100vh] w-full">
      <Canvas
        shadows
        camera={{ position: [0, 2, 10], fov: 45 }}
        gl={{ 
          preserveDrawingBuffer: true,
          antialias: true,
          
        }}
      >
        <Suspense fallback={null}>
          <color attach="background" args={['#0a0a0a']} />
          
          <group position={[0, -1, 0]}>
            <Model />
          </group>

          

       
          
          <directionalLight
            position={[0, 4, 5]}
            intensity={10}
            
          />
          <ambientLight intensity={10} />
          <OrbitControls 
            enableZoom={true}
         
          />
        </Suspense>
      </Canvas>
    </div>
  )
}