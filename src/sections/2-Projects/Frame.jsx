import * as THREE from 'three'
import { useSpring, animated } from '@react-spring/three'
import { Image, Text, useCursor } from "@react-three/drei";
import React, { useRef, useState } from "react";

function Frame(props, q = new THREE.Quaternion(), p = new THREE.Vector3()) {
  const GOLDENRATIO = 1.61803398875;

  // Change the color of the frame
  const frame = useRef();
  const [hovered, setHovered] = useState(false);
  useCursor(hovered)
  const { color } = useSpring({color: hovered ? 'aquamarine' : 'white'})

  // Set the text near the frame
  const text = "Text";

  // Set the image in the frame (example)
  const image = useRef();
  const imagePath = "../../../boat.png";





  return (
    <group {...props}>
      <mesh scale={[1, GOLDENRATIO, 0.05]} onPointerOver={(e) => (e.stopPropagation(), setHovered(true))} onPointerOut={() => setHovered(false)}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color={"#151515"}
          metalness={0.5}
          roughness={0.5}
          envMapIntensity={2}
        />
        <mesh
          ref={frame}
          raycast={() => null}
          scale={[0.9, 0.93, 0.9]}
          position={[0, 0, 0.2]}
        >
          <boxGeometry />
          <animated.meshBasicMaterial color={color} toneMapped={false} fog={false} />
        </mesh>
        <Image scale={0.85} raycast={() => null} ref={image} position={[0, 0, 0.7]} url={imagePath} />
      </mesh>

      <Text
        maxWidth={0.1}
        anchorX="left"
        anchorY="top"
        position={[0.55, 0.8, 0]}
        fontSize={0.2}
      >
        {text}
      </Text>
    </group>
  );
}

export default Frame;
