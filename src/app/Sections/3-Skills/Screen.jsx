/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 screen.gltf --transform
Author: Georgiy_Liahov (https://sketchfab.com/georgiyaliahov)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/cinema-screen-2221cf86c46f4716bf7a904c642a5542
Title: Cinema Screen
*/

import { useRef } from "react";
import { Decal, useGLTF, useVideoTexture } from "@react-three/drei";
import { useFrame } from "react-three-fiber";
import TextWrapper from "./TextWrapper";

export function Screen(props) {
  const screen = useRef();
  const { nodes, materials } = useGLTF("../../../screen-transformed.glb");
  const defaultVideo = useVideoTexture("../../../default-video.mp4");
  const frontEndVideo = useVideoTexture("../../../front-end.mp4");
  const backEndVideo = useVideoTexture("../../../back-end.mp4");
  const softSkillsVideo = useVideoTexture("../../../soft-skills.mp4");
  const currentVideo = useRef(defaultVideo);

  useFrame(() => {
    screen.current.children[0].material.map = currentVideo.current;
  });

  return (
    <>
    <group {...props} dispose={null} scale={[0.5, 0.4, 0.4]}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.black} />
      <mesh
        ref={screen}
        geometry={nodes.Object_5.geometry}
        material={materials.wite}
      >
        <Decal
          mesh={screen}
          position={[0, 5.5, 0]}
          rotation={[0, 0, 0]}
          scale={[14.6, 7.5, 7.5]}
        >
          <meshBasicMaterial map={currentVideo.current} />
        </Decal>
      </mesh>
      </group>

      <group position={[26.5, -0.9, 3.4]} rotation={[0, 0.1, 0]}>
        <TextWrapper
          customColor={"orange"}
          text="Front-End Development"
          position={[1.7, 0.7, 0.2]}
          onClick={() => (currentVideo.current = frontEndVideo)}
        />
        <TextWrapper
          customColor={"turquoise"}
          text="Back-End Development"
          position={[1.7, 0.5, 0.2]}
          onClick={() => (currentVideo.current = backEndVideo)}
        />
        <TextWrapper
          customColor={"hotpink"}
          text="Soft Skills"
          position={[1.7, 0.3, 0.2]}
          onClick={() => (currentVideo.current = softSkillsVideo)}
        />
    </group>
    </>
  );
}

useGLTF.preload("/screen-transformed.glb");