import * as THREE from 'three'
import { useSpring, animated } from '@react-spring/three'
import { Image, Text, useCursor } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber';
import React, { useEffect, useRef, useState } from "react";
import { Vector3 } from 'three';

function Frame(props, q = new THREE.Quaternion(), p = new THREE.Vector3()) {
  const GOLDENRATIO = 1.61803398875;

  const image = useRef();
  const frame = useRef();


  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  useCursor(hovered)
  const { color } = useSpring({color: hovered ? 'aquamarine' : 'white'})

  const text = "Text";
  const imagePath = "../../../boat.png";

  const { camera } = useThree()


  return (
    <group {...props}>
      <mesh scale={[1, GOLDENRATIO, 0.05]} onClick={() => setClicked(!clicked)} onPointerOver={(e) => (e.stopPropagation(), setHovered(true))} onPointerOut={() => setHovered(false)}>
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
