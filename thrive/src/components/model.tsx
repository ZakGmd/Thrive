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
        position={[-0.3, 0.01, 0.32]}
        rotation={screenMesh.rotation}
        
      >
        <div ref={htmlRef} style={{ width: '411.8px', height: '892px' }}>
           <div className='h-full w-full flex flex-col items-start bg-gradient-to-b from-transparent from-[30%] to-[#F27500]/10  rounded-[48px] overflow-hidden font-inter'>
             <div className='flex items-center justify-between  pt-3 w-full'>
                <div className=' max-w-[20px] pl-5 w-full text-[14px] text-white contrast-150'>22:10</div>
                <div className='w-[120px] ml-[11px] mt-1 h-[37.5px] rounded-full bg-black/5 '></div>
                <div className='flex items-center gap-2 pr-5'>
                    <img src="signal.svg" alt="" />
                    <img src="wi-fi.svg" alt="" />
                    <img src="battery.svg" alt="" />
                </div>
             </div>
             <div className='pt-2'>
               
             </div>
           </div>
        </div>
      </Html>
    </group>
  )
}

useGLTF.preload('/iphone.glb')