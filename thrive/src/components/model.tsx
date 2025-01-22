import React, { useEffect, useRef } from 'react'
import { useGLTF, Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Model() {
  const { nodes, scene } = useGLTF('/iphone.glb')
  const screenMesh = nodes.defaultMaterial_12 as THREE.Mesh
  console.log(nodes)
  
  const htmlRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
   
    const screenMesh = nodes.defaultMaterial_12 as THREE.Mesh
    const borders = nodes.defaultMaterial_1 as THREE.Mesh
    borders.material = new THREE.MeshBasicMaterial({color: "#F27500" })
    screenMesh.material = new THREE.MeshBasicMaterial({ color: '#0a0a0a' })
  }, [nodes])


  return (
    <group position={[0,2, 3]} scale={[2, 2, 2]}>
      <primitive object={scene} />
      <Html
        transform
        distanceFactor={7}
        position={[-0.3, 0.01, 0.32]}
        rotation={screenMesh.rotation}
        
      >
        <div ref={htmlRef} style={{ width: '411.8px', height: '892px' }}>
           <div className='h-full w-full flex flex-col items-start bg-gradient-to-b from-transparent from-[60%] to-[#F27500]/5  rounded-[48px] overflow-hidden font-inter'>
             <div className='flex items-center justify-between  pt-3 w-full'>
                <div className=' max-w-[20px] pl-5 w-full text-[14px] text-white contrast-150'>22:10</div>
                <div className='w-[120px] ml-[11px] mt-1 h-[37.5px] rounded-full bg-black/5 '></div>
                <div className='flex items-center gap-2 pr-5'>
                    <img src="signal.svg" alt="" />
                    <img src="wi-fi.svg" alt="" />
                    <img src="battery.svg" alt="" />
                </div>
             </div>
             <div className='flex flex-col items-center w-full mt-10 '>
                <div className='flex flex-col items-center gap-3 text-center text-white   '>
                    <div className='flex items-center justify-center px-3 py-1  bg-[#f275001a] backdrop-contrast-200 rounded-3xl text-center backdrop-blur-3xl   '>
                        <div className=' text-[16px] leading-5 text-balance '>Thrive</div>
                    </div>
                    <div className='text-4xl bg-clip-text  text-transparent bg-gradient-to-r from-white  from-[2%] to-[#F27500] to-[95%] contrast-200'>Welcome to your daily <br />Mindfulness</div>
                </div>
                <div className='relative -z-30 rounded-full mt-5 bg-center bg-cover opacity-90 ml-3 w-[380px] h-[500px]'
                    style={{backgroundImage: "url('wallpaper5.jpg')"}}
                >
                  
                </div>
                <div className='flex flex-col items-center -mt-8 w-full gap-2 px-5 '>
                    <div className=' w-full py-2 bg-[#F27500]/90 text-center text-white rounded-3xl hover:bg-[#F27500] transition-all duration-200 cursor-pointer '>Get Started</div>
                    <div className=' w-full py-2 border border-[#F27500] text-center text-white rounded-3xl hover:bg-[#F27500]/10 transition-all duration-200 cursor-pointer '>Log in</div>
                    <div className='text-white pt-2 tracking-[-0.12px] text-[14px] text-center font-light'>By creating account or logging in , you agree to our <br /> <span className=' underline text-[#F27500] '>Terms & Conditions</span> and <span className=' underline text-[#F27500] '>Privacy Policy</span></div>
                </div>
                
               
             </div>
           </div>
        </div>
      </Html>
    </group>
  )
}

useGLTF.preload('/iphone.glb')