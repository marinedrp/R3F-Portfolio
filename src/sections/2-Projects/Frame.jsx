import { Image, Text, useCursor } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import React, { useRef, useState } from "react";

function Frame(props) {
  const GOLDENRATIO = 1.61803398875;

  const image = useRef()
  const frame = useRef();

  const [hovered, setHovered] = useState(false);
  useCursor(hovered)
  useFrame((state, delta) => {
    easing.dampC(frame.current.material.color, hovered ? 'orange' : 'blue', 0.2, delta)
  })


  const text = "Text";
  const imagePath = "../../../public/boat.png";

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
          <meshBasicMaterial toneMapped={false} fog={false} />
        </mesh>
        {/* <Image raycast={() => null} ref={image} position={[0, 0, 0.7]} url={imagePath} /> */}
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
