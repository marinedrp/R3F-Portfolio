import {
  Box,
  Center,
  SpotLight,
  Text3D,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import * as THREE from 'three'
import { Vector3 } from "three";
import TextWrapper from "./TextWrapper";
import { Screen } from "./Screen";
import { Projector } from "./Projector";

function Cinema({ vec = new Vector3(), ...props }) {
  const spotlight = useRef();
  const boxMaterial = new THREE.MeshStandardMaterial({color: "#555", metalness: 1, roughness: 0.3})

  useFrame(() => {
    spotlight.current.target.position.lerp(vec.set(-0.106, 1.1, 0), 0.1);
    spotlight.current.target.updateMatrixWorld();
  });

  return (
    <>
      <Screen position={[28, -0.8, -0.8]} />

      <group position={[30, -0.8, 3.2]} rotation={[0, 3.4, 0]}>
        <Projector position={[0, 1.02, 0]} scale={[0.4, 0.4, 0.4]} />
        <Box args={[0.5, 2, 0.5]} material={boxMaterial} />
        <TextWrapper
          customColor={"orange"}
          text="Front-End Development"
          position={[1.7, 0.7, 0.2]}
        />
        <TextWrapper
          customColor={"turquoise"}
          text="Back-End Development"
          position={[1.7, 0.5, 0.2]}
        />
        <TextWrapper
          customColor={"hotpink"}
          text="Soft Skills"
          position={[1.7, 0.3, 0.2]}
        />

        <Center position={[3, 0.2, 0.5]} rotation={[0, 3, 0]}>
          <Text3D
            curveSegments={20}
            bevelThickness={0.1}
            height={0.02}
            lineHeight={0.6}
            letterSpacing={-0.03}
            size={0.3}
            font="/Inter_Bold.json"
          >
            {`SKILLS`}
            <meshStandardMaterial
              metalness={0.3}
              roughness={0}
              color={"white"}
            />
          </Text3D>
        </Center>
      </group>

      <SpotLight
        ref={spotlight}
        intensity={0.8}
        angle={0.3}
        attenuation={4}
        distance={5}
        position={[29.9, 0.4, 2.8]}
      />
    </>
  );
}

export default Cinema;
