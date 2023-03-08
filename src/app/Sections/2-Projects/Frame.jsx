import * as THREE from "three";
import { useSpring, animated } from "@react-spring/three";
import { Html, Image, Text, useCursor } from "@react-three/drei";
import { useRef, useState } from "react";
import { useThree } from "react-three-fiber";
import TextWrapper from "../../Components/TextWrapper";

function Frame(props, q = new THREE.Quaternion(), p = new THREE.Vector3()) {
  const GOLDENRATIO = 1.61803398875;
  const { gl } = useThree();

  // Change the color of the frame
  const frame = useRef();
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);
  const { color } = useSpring({ color: hovered ? "orange" : "white" });

  return (
    <group position={props.position} rotation={props.rotation}>
      <mesh
        scale={[props.size, GOLDENRATIO, 0.05]}
        onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
        onPointerOut={() => setHovered(false)}
        onClick={props.onClick}
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
              <iframe
                width={780}
                height={900}
                title="embed"
                src={props.contentPath}
              />
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

      <group position={props.textPosition}>
        <Text
          font="/Merriweather-Black.ttf"
          maxWidth={0.7}
          anchorX="left"
          anchorY="top"
          fontSize={0.05}
        >
          {props.title}
        </Text>
        {props.isHTML ? (
          <>
            <TextWrapper
              position={[0, -0.1, 0]}
              fontSize={0.035}
              customColor1={"white"}
              customColor2={"orange"}
              text={props.website1}
              onClick={props.changeWebsite1}
            />
            <TextWrapper
              position={[0, -0.2, 0]}
              fontSize={0.035}
              customColor1={"white"}
              customColor2={"orange"}
              text={props.website2}
              onClick={props.changeWebsite2}
            />
            <TextWrapper
              position={[0, -0.3, 0]}
              fontSize={0.035}
              customColor1={"white"}
              customColor2={"orange"}
              text={props.website3}
              onClick={props.changeWebsite3}
            />
            <Text
              position={[0, -0.4, 0]}
              font="/Merriweather-Regular.ttf"
              maxWidth={0.5}
              anchorX="left"
              anchorY="top"
              fontSize={0.035}
            >
              {props.description}
            </Text>
          </>
        ) : (
          <>
            <TextWrapper
              position={[0, -0.1, 0]}
              fontSize={0.035}
              customColor1={"white"}
              customColor2={"orange"}
              text={"Visit website"}
              onClick={() => (window.open(props.url1))}
            />
            <TextWrapper
              position={[0, -0.2, 0]}
              fontSize={0.035}
              customColor1={"white"}
              customColor2={"orange"}
              text={props.visible ? ("Client") : ('Github Repository')}
              onClick={() => (window.open(props.url2))}
            />
            <TextWrapper
              position={[0, -0.3, 0]}
              fontSize={0.035}
              customColor1={"white"}
              customColor2={"orange"}
              text={props.visible ? ("Server") : ("")}
              visible={props.visible}
              onClick={() => (window.open(props.url3))}
            />
            <Text
              position={props.visible ? ([0, -0.4, 0]) : ([0, -0.3, 0])}
              font="/Merriweather-Regular.ttf"
              maxWidth={0.5}
              anchorX="left"
              anchorY="top"
              fontSize={0.035}
            >
              {props.description}
            </Text>
          </>
        )}
      </group>
    </group>
  );
}

export default Frame;
