import {
  Box,
  Center,
  SpotLight,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef} from "react";
import * as THREE from 'three'
import { Vector3 } from "three";
import { Screen } from "./Screen";
import { Projector } from "./Projector";
import Title3D from "../../Components/Title3D";

function Cinema({ vec = new Vector3(), ...props }) {
  const spotlight = useRef();
  const boxMaterial = useMemo(() => new THREE.MeshStandardMaterial({color: "#555", metalness: 1, roughness: 0.3}), []) 

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

        <Center position={[3, 0.15, 0.5]} rotation={[0, 3, 0]}>
          <Title3D text={'SKILLS'} />
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
