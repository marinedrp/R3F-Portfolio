import * as THREE from "three";
import { Decal, RoundedBox, useDepthBuffer, useTexture } from "@react-three/drei";
import React, { useRef } from "react";
import MovingSpot from "./MovingSpot";

const boxMaterial = new THREE.MeshStandardMaterial({
  color: "#666",
  metalness: 1,
  roughness: 0.3,
});

const smallBox = new THREE.BoxGeometry(0.5, 0.5, 0.3);

function Podium() {
    const box1 = useRef()
    const depthBuffer = useDepthBuffer({ frames: 1 })
    const [github, linkedIn, email] = useTexture(['../../../github.png', '../../../linkedin.png', '../../../email.png'])

  return (
    <>
      <group position={[40.25, -0.3, 2.5]}>
      <MovingSpot color="blue" position={[3, 3, 2]} />
      <MovingSpot color="rgb(85, 0, 85)" position={[1, 3, 1]} />
        <mesh material={boxMaterial}>
          <boxGeometry args={[0.5, 1, 0.3]} />
          <RoundedBox 
            position={[0, 0.7, 0]}
            args={[0.4, 0.4, 0.1]}
            radius={0.05}
            smoothness={4}
          >
            <meshStandardMaterial metalness={1} roughness={0.5} color="white" />
            <Decal position={[0, 0, 0]} rotation={[0, 0, 0]} scale={0.25} map={linkedIn} map-anisotropy={16} />
          </RoundedBox>
        </mesh>
        <mesh 
          position={[0, -0.25, 0.3]}
          material={boxMaterial}
          geometry={smallBox}
        >
          <RoundedBox 
            position={[0, 0.45, 0]}
            args={[0.4, 0.4, 0.1]}
            radius={0.05}
            smoothness={4}
          >
            <meshStandardMaterial metalness={1} roughness={0.5} color="white" />
            <Decal position={[0, 0, 0]} rotation={[0, 0, 0]} scale={0.25} map={github} map-anisotropy={16} />
          </RoundedBox>
        </mesh>
        <mesh
          position={[0.5, -0.25, 0]}
          material={boxMaterial}
          geometry={smallBox}
          
        >
          <RoundedBox 
          ref={box1}
            position={[0, 0.45, 0]}
            args={[0.4, 0.4, 0.1]}
            radius={0.05}
            smoothness={4}
          >
            <meshStandardMaterial metalness={1} roughness={0.5} color="white" />
            <Decal mesh={box1} position={[0, 0, 0]} rotation={[0, 0, 0]} scale={0.25} map={email} />
          </RoundedBox>
          
        </mesh>
      </group>
    </>
  );
}

export default Podium;
