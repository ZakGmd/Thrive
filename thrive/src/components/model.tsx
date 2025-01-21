import { useGLTF } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from 'three'
import { useFrame } from "@react-three/fiber"

export default function Model() {
    const { nodes, scene } = useGLTF('/iphone.glb')
    const modelRef = useRef<THREE.Group>(null)


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