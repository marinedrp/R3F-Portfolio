import { PerspectiveCamera, useGLTF, useHelper, useVideoTexture } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { CameraHelper, MeshStandardMaterial } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Cinema(props) {
  const cinemaModel = useRef();
  
  const { nodes, materials } = useGLTF("../../../screen/screen.gltf");
  
  const texture = useVideoTexture("../../../10.mp4");
  
  const projector = useLoader(GLTFLoader, "../../../projector/projector.gltf");
  
  const camera = useRef();
  useHelper(camera, CameraHelper, 1, 'hotpink')

  const screenMaterial = new MeshStandardMaterial({ map: texture });

  return (
    <>
    <group position={[28, -0.8, -0.8]} scale={[0.5, 0.4, 0.4]} ref={cinemaModel} {...props} dispose={null}>
      <mesh position={[1, 0, 0]} castShadow receiveShadow geometry={nodes.Sketchfab_model.geometry} material={materials['black']} dispose={null} />
      <mesh position={[1, 0, 0]} castShadow receiveShadow geometry={nodes.GLTF_SceneRootNode.geometry} material={materials['black']} dispose={null} />
      <mesh position={[1, 0, 0]} castShadow receiveShadow geometry={nodes.root.geometry} material={materials['black']} dispose={null} />
      <mesh position={[1, 0, 0]} castShadow receiveShadow geometry={nodes.screen_1_0.geometry} material={materials['black']} dispose={null} />
      <mesh position={[1, 0, 0]} castShadow receiveShadow geometry={nodes.Object_4.geometry} material={materials['black']} dispose={null} />
      <mesh position={[1, 0, 0]} castShadow receiveShadow geometry={nodes.Object_5.geometry} material={screenMaterial} dispose={null} />
    </group>

    <group position={[30, 0.22, 3.2]} rotation={[0, 3.4, 0]} scale={[0.4, 0.4, 0.4]}>
      <Suspense fallback={null}>
        <primitive object={projector.scene} />
      </Suspense>
    </group>
    <mesh position={[30, -0.8, 3.2]} rotation={[0, 3.4, 0]}>
    <boxGeometry args={[0.5, 2, 0.5]} />
        <meshStandardMaterial
          color={"#666"}
          metalness={1}
          roughness={0.3}
        />
    </mesh>

    <PerspectiveCamera ref={camera} rotation={[0.25, 0.32, -0.05]} position={[30, 0.38, 3]} fov={40} aspect={16/9} near={0.01} far={6}>
    </PerspectiveCamera>
    </>
  );
}

export default Cinema;
