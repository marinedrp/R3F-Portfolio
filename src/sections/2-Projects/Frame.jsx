import * as THREE from "three";
import { useSpring, animated } from "@react-spring/three";
import { Html, Image, Text, useCursor } from "@react-three/drei";
import React, { useRef, useState } from "react";
import { useThree } from "react-three-fiber";

function Frame(props, q = new THREE.Quaternion(), p = new THREE.Vector3()) {
  const GOLDENRATIO = 1.61803398875;
  const { gl } = useThree();

  // Change the color of the frame
  const frame = useRef();
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);
  const { color } = useSpring({ color: hovered ? 'orange' : 'white' });

  return (
    <group {...props}>
      <mesh
        scale={[props.size, GOLDENRATIO, 0.05]}
        onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[1, 1.1, 1]} />
        <meshStandardMaterial
          color={"#151515"}
          metalness={0.5}
          roughness={0.5}
          envMapIntensity={2}
        />


        <mesh
          ref={frame}
          raycast={() => null}
          scale={[0.9, 1, 0.9]}
          position={[0, 0, 0.1]}
        >
          <boxGeometry />
          <animated.meshBasicMaterial
            color={color}
            toneMapped={false}
            fog={false}
          />
        </mesh>
        {props.isHTML ? (
    <Html
    className="content"
      position={[0, 0, 0.8]}
      scale={[0.1, 0.1, 0.1]}
      occlude="blending"
      transform
      portal={{ current: gl.domElement.parentNode }}
    >
      <div className="wrapper">
      <iframe width={780} height={900} title="embed" src={props.contentPath} />
      </div>
    </Html>
  ) : (
    <Image
    toneMapped={false}
    scale={[0.8, 0.9, 0.8]}
      raycast={() => null}
      position={[0, 0, 0.7]}
      url={props.contentPath}
    />
  )}
      </mesh>

      <Text
        maxWidth={0.4}
        anchorX="left"
        anchorY="top"
        position={[props.textPosition, 0.85, 0]}
        fontSize={0.035}
      >
        {props.text}
      </Text>
    </group>
  );
}

export default Frame;
