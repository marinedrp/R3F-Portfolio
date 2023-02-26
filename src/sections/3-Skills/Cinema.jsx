import {
  PerspectiveCamera,
  SpotLight,
  useGLTF,
  useVideoTexture,
} from "@react-three/drei";
import { useLoader, useFrame } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Vector3 } from "three";
import TextWrapper from "./TextWrapper";
import ProjectedMaterial from "three-projected-material";

function Cinema({ vec = new Vector3(), ...props }) {
  const cinemaModel = useRef();
  const spotlight = useRef();
  const screen = useRef();
  const camera = useRef();

  const [source, setSource] = useState("../../../video1.mp4");

  const { nodes, materials } = useGLTF("../../../screen/screen.gltf");

  const texture = useVideoTexture(source);

  const [screenMaterial, setScreenMaterial] = useState(null);

  useEffect(() => {
    if (texture && camera.current) {
      setScreenMaterial(
        new ProjectedMaterial({
          camera: camera.current,
          texture,
          color: "#aaa",
        })
      );
    }
  }, [texture, camera]);

  useFrame(() => {
    spotlight.current.target.position.lerp(vec.set(-0.106, 1.1, 0), 0.1);
    spotlight.current.target.updateMatrixWorld();
    screenMaterial && screenMaterial.project(screen.current);
  });

  const projector = useLoader(GLTFLoader, "../../../projector/projector.gltf");

  return (
    <>
      <group
        position={[28, -0.8, -0.8]}
        scale={[0.5, 0.4, 0.4]}
        ref={cinemaModel}
        {...props}
        dispose={null}
      >
        {Object.values(nodes)
          .slice(0, -2)
          .map((node, index) => (
            <mesh
              key={index}
              position={[1, 0, 0]}
              castShadow
              receiveShadow
              geometry={node.geometry}
              material={materials["black"]}
              dispose={null}
            />
          ))}
        <mesh
          ref={screen}
          position={[1, 0, 0]}
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={screenMaterial}
          dispose={null}
        />
      </group>

      <group position={[30, -0.8, 3.2]} rotation={[0, 3.4, 0]}>
      <primitive position={[0, 1.02, 0]} scale={[0.4, 0.4, 0.4]} object={projector.scene} />
        <mesh>
          <boxGeometry args={[0.5, 2, 0.5]} />
          <meshStandardMaterial color={"#666"} metalness={1} roughness={0.3} />
        </mesh>
        <TextWrapper
          customColor={"orange"}
          text="Front-End Development"
          position={[1.7, 0.7, 0.2]}
          onClick={() => setSource("../../../10.mp4")}
        />
        <TextWrapper
          customColor={"turquoise"}
          text="Back-End Development"
          position={[1.7, 0.5, 0.2]}
          onClick={() => setSource("../../../video1.mp4")}
        />
        <TextWrapper
          customColor={"hotpink"}
          text="Soft Skills"
          position={[1.7, 0.3, 0.2]}
          onClick={() => setSource("../../../10.mp4")}
        />
      </group>

      <SpotLight
        ref={spotlight}
        intensity={0.8}
        angle={0.3}
        attenuation={4}
        distance={5}
        position={[29.9, 0.4, 2.8]}
      />

      <PerspectiveCamera
        ref={camera}
        rotation={[0, 0.08, 0.01]}
        position={[29, 1.4, 4]}
        fov={40}
        aspect={16 / 9}
        near={0.01}
        far={6}
      ></PerspectiveCamera>
    </>
  );
}

export default Cinema;
