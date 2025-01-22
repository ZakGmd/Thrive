import React, { useEffect, useRef } from 'react'
import { useGLTF, Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Model() {
  const { nodes, scene } = useGLTF('/iphone.glb')
  const screenMesh = nodes.defaultMaterial_12 as THREE.Mesh
  
  const htmlRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
   
    const screenMesh = nodes.defaultMaterial_12 as THREE.Mesh
    screenMesh.material = new THREE.MeshBasicMaterial({ color: '#0a0a0a' })
  }, [nodes])


  return (
    <group position={[0, 2, 3]} scale={[2, 2, 2]}>
      <primitive object={scene} />
      <Html
        transform
        distanceFactor={7}
        position={[-0.3, -0.13, 0.25]}
        rotation={screenMesh.rotation}
        
      >
        <div ref={htmlRef} style={{ width: '409px', height: '902px' }}>
           <div className='h-full w-full flex flex-col items-start  rounded-[48px] overflow-hidden font-inter'>
             <div className='flex items-center justify-between text-white pt-3 w-full'>
                <div className=' max-w-[20px] pl-5 w-full'>22:10</div>
                <div className='w-[120px] ml-[11px] mt-1 h-[37.5px] rounded-full bg-black/5 '></div>
                <div>ssss</div>
             </div>
             <div className='pt-2'>
                <img src='wallpaper1.jpg' />
             </div>
           </div>
        </div>
      </Html>
    </group>
  )
}

useGLTF.preload('/iphone.glb')