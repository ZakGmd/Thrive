import { useGLTF } from "@react-three/drei"
import { useEffect, useRef } from "react"
import * as THREE from 'three'
import { useFrame } from "@react-three/fiber"

export default function Model() {
    const { nodes, scene } = useGLTF('/iphone.glb')
    const modelRef = useRef<THREE.Group>(null)
   
    console.log({nodes})
    useEffect(()=>{
        if (nodes.defaultMaterial_12) {
            (nodes.defaultMaterial_12 as THREE.Mesh).material = new THREE.MeshPhysicalMaterial({
                color: new THREE.Color('#f59e0b'),
                transparent: true,
                opacity: 1,
                metalness: 0.9,
                roughness: 0.1,
                
            })
        }
    })
    return (
        <group
            ref={modelRef}
            position={[0, 2, 3]}

            scale={[2, 2, 2]} 
        >
            <primitive 
                object={scene}
                castShadow
                receiveShadow 
            />
        </group>
    )
}

useGLTF.preload('/iphone.glb')