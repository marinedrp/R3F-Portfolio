import * as THREE from "three";
import {
  Box,
  Decal,
  RoundedBox,
  useDepthBuffer,
  useTexture,
} from "@react-three/drei";
import MovingSpot from "./MovingSpot";
import { useMemo } from "react";

function Podium() {
  const boxMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#666",
        metalness: 1,
        roughness: 0.3,
      }),
    []
  );

  const roundedBoxMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "white",
        metalness: 1,
        roughness: 0.5,
      })
  );
  const depthBuffer = useDepthBuffer({ frames: 1 });

  const [github, linkedIn, email] = useTexture([
    "../../../github.png",
    "../../../linkedin.png",
    "../../../mail.png",
  ]);

  return (
    <>
      <group position={[45, -0.3, 2.5]}>
        <MovingSpot
          depthBuffer={depthBuffer}
          color="blue"
          position={[3, 3, 2]}
        />
        <MovingSpot
          depthBuffer={depthBuffer}
          color="purple"
          position={[1, 3, 1]}
        />
        <mesh castShadow receiveShadow>
          <Box args={[0.5, 1, 0.3]} material={boxMaterial} />
          <RoundedBox
            castShadow
            receiveShadow
            position={[0, 0.7, 0]}
            args={[0.4, 0.4, 0.1]}
            radius={0.05}
            smoothness={4}
            material={roundedBoxMaterial}
          >
            <Decal
              position={[0, 0, 0.1]}
              rotation={[0, 0, 0]}
              scale={0.25}
              map={linkedIn}
            />
          </RoundedBox>
        </mesh>
        <mesh castShadow receiveShadow position={[0, -0.25, 0.3]}>
          <Box args={[0.5, 0.5, 0.3]} material={boxMaterial} />
          <RoundedBox
            castShadow
            receiveShadow
            position={[0, 0.45, 0]}
            args={[0.4, 0.4, 0.1]}
            radius={0.05}
            smoothness={4}
            material={roundedBoxMaterial}
          >
            <Decal
              position={[0, 0, 0.1]}
              rotation={[0, 0, 0]}
              scale={0.25}
              map={github}
              map-anisotropy={16}
            />
          </RoundedBox>
        </mesh>
        <mesh castShadow receiveShadow position={[0.5, -0.25, 0]}>
          <Box args={[0.5, 0.5, 0.3]} material={boxMaterial} />
          <RoundedBox
            castShadow
            receiveShadow
            position={[0, 0.45, 0]}
            args={[0.4, 0.4, 0.1]}
            radius={0.05}
            smoothness={4}
            material={roundedBoxMaterial}
          >
            <Decal
              position={[0, 0, 0.1]}
              rotation={[0, 0, 0]}
              scale={0.25}
              map={email}
            />
          </RoundedBox>
        </mesh>
      </group>
    </>
  );
}

export default Podium;
