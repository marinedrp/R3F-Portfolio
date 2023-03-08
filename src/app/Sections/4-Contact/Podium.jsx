import * as THREE from "three";
import {
  Box,
  useDepthBuffer,
  useTexture,
} from "@react-three/drei";
import MovingSpot from "./MovingSpot";
import AnimatedCylinder from "./AnimatedCylinder";
import AnimatedSphere from "./AnimatedSphere";

const boxMaterial = new THREE.MeshStandardMaterial({
  color: "#555",
  metalness: 1,
  roughness: 0.3,
});

function Podium() {
  const depthBuffer = useDepthBuffer({ frames: 1 });

  const [github, linkedIn, email] = useTexture([
    "../../../github.png",
    "../../../linkedin.png",
    "../../../mail.png",
  ]);

  return (
      <group position={[40, -0.3, 2.3]} rotation={[0, 0.2, 0]}>
        <MovingSpot
          depthBuffer={depthBuffer}
          color="blue"
          position={[3, 3, 2.3]}
        />
        <MovingSpot
          depthBuffer={depthBuffer}
          color="purple"
          position={[1, 3, 1.8]}
        />
          <Box castShadow receiveShadow args={[0.5, 1, 0.3]} material={boxMaterial} />
          <AnimatedCylinder position={[0, 0.7, 0]} logo={linkedIn} url={'https://www.linkedin.com/in/marine-drp/'} />
        
          <Box position={[0, -0.25, 0.3]} castShadow receiveShadow args={[0.5, 0.5, 0.3]} material={boxMaterial} />
          <AnimatedSphere position={[0, 0.2, 0.3]} logo={github} url={'https://github.com/marinedrp'} />
        
          <Box castShadow receiveShadow position={[0.5, -0.25, 0]} args={[0.5, 0.5, 0.3]} material={boxMaterial} />
          <AnimatedCylinder position={[0.5, 0.2, 0]} logo={email} url={'mailto:marine.drp@outlook.com'} />
      </group>
  );
}

export default Podium;
