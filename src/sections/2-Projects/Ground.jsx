import { MeshReflectorMaterial } from '@react-three/drei';
import React from 'react'

function Ground() {
  
  return (
    <mesh position={[0, -8.4, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[50, 50]} />
      <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={50}
            depthScale={1.2}
            minDepthThreshold={0.7}
            maxDepthThreshold={1.4}
            color="#111111"
            metalness={0.5}
            roughness={1}
          />
    </mesh>
  )
}

export default Ground;