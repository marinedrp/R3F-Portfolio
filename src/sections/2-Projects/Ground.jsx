import { MeshReflectorMaterial } from '@react-three/drei';
import React from 'react'

function Ground() {
  
  return (
    <mesh position={[15, -0.8, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      {/* vertical scroll: x: x, y: -9, z: z */}
      <planeGeometry args={[65, 50]} />
      <MeshReflectorMaterial
            blur={[500, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={20}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.45}
            color="#111111"
            metalness={0.5}
            roughness={1}
          />
    </mesh>
  )
}

export default Ground;