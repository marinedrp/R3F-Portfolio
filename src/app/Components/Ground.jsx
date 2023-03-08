import { MeshReflectorMaterial } from '@react-three/drei';

function Ground() {
  
  return (
    <mesh position={[15, -0.8, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      {/* vertical scroll: x: x, y: -9, z: z */}
      <planeGeometry args={[65, 50]} />
      <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={500}
            mixBlur={1}
            mixStrength={10}
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