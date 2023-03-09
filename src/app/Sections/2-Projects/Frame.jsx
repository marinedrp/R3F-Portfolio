import * as THREE from "three";
import { useSpring, animated } from "@react-spring/three";
import { Html, Image, Text, useCursor } from "@react-three/drei";
import { useRef, useState } from "react";
import { useThree } from "react-three-fiber";
import TextWrapper from "../../Components/TextWrapper";

const GOLDENRATIO = 1.61803398875;

function Frame(props, q = new THREE.Quaternion(), p = new THREE.Vector3()) {
  const { gl } = useThree();

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
                src={props.path}
              />
            </div>
          </Html>
        ) : (
          <Image
            toneMapped={false}
            scale={[0.8, 0.9, 0.8]}
            raycast={() => null}
            position={[0, 0, 0.7]}
            url={props.path}
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
          {props.projects.slice(0, 3).map((project, index) => (
            <TextWrapper
            key={index}
            position={[0, -0.1 - index/10, 0]}
            fontSize={0.035}
            customColor1={"white"}
            customColor2={"orange"}
            text={project.title}
            onClick={(e) => (e.stopPropagation(), props.setPath(project.urls[0]))}
          />
          ))}
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
          {props.urls.map((url, index) => (
            <TextWrapper
            position={[0, -0.1 - index/10, 0]}
            fontSize={0.035}
            customColor1={"white"}
            customColor2={"orange"}
            text={props.project.urlDescription[index]}
            onClick={() => (window.open(url))}
          />
          ))}
            <Text
              position={props.urls.length === 3 ? ([0, -0.4, 0]) : ([0, -0.3, 0])}
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
