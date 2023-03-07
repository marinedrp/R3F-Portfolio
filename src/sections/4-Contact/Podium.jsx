import * as THREE from "three";
import {
  Box,
  Cylinder,
  Decal,
  Sphere,
  useDepthBuffer,
  useTexture,
} from "@react-three/drei";
import MovingSpot from "./MovingSpot";

const boxMaterial = new THREE.MeshStandardMaterial({
  color: "#555",
  metalness: 1,
  roughness: 0.3,
});

const whiteMaterial = new THREE.MeshStandardMaterial({
  color: "white",
  metalness: 1,
  roughness: 0.5,
});

function Podium() {
  const depthBuffer = useDepthBuffer({ frames: 1 });

  const [github, linkedIn, email] = useTexture([
    "../../../github.png",
    "../../../linkedin.png",
    "../../../mail.png",
  ]);

  return (
    <>
      <group position={[40, -0.3, 2.3]}>
        <MovingSpot
          depthBuffer={depthBuffer}
          color="blue"
          position={[3, 3, 2]}
        />
        <MovingSpot
          depthBuffer={depthBuffer}
          color="purple"
          position={[1, 3, 1.5]}
        />
        <mesh castShadow receiveShadow>
          <Box args={[0.5, 1, 0.3]} material={boxMaterial} />
          <Cylinder
            castShadow
            receiveShadow
            position={[0, 0.7, 0]}
            args={[0.2, 0.2, 0.4]}
            material={whiteMaterial}
          >
            <Decal
              position={[0, 0, 0.2]}
              rotation={[0, 0, 0]}
              scale={0.28}
              map={linkedIn}
            />
          </Cylinder>
        </mesh>
        <mesh castShadow receiveShadow position={[0, -0.25, 0.3]}>
          <Box args={[0.5, 0.5, 0.3]} material={boxMaterial} />
          <Sphere
            args={[0.2, 32, 16]}
            castShadow
            receiveShadow
            position={[0, 0.45, 0]}
            material={whiteMaterial}
          >
            <Decal
              rotation={[0, 0, 0]}
              position={[0, 0, 0.1]}
              scale={0.28}
              map={github}
            />
          </Sphere>
        </mesh>
        <mesh castShadow receiveShadow position={[0.5, -0.25, 0]}>
          <Box args={[0.5, 0.5, 0.3]} material={boxMaterial} />
          <Cylinder
            args={[0.2, 0.2, 0.4]}
            castShadow
            receiveShadow
            position={[0, 0.45, 0]}
            material={whiteMaterial}
          >
            <Decal
              position={[0, 0, 0.2]}
              rotation={[0, 0, 0]}
              scale={0.28}
              map={email}
            />
          </Cylinder>
        </mesh>
      </group>
    </>
  );
}

export default Podium;
