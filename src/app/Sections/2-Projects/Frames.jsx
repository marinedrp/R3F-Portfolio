import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useEffect, useState } from "react";
import Frame from "./Frame";
import { easing } from "maath";
import { Center } from "@react-three/drei";
import Title3D from "../../Components/Title3D";
import { projects } from "./ProjectList";

function Frames({ toggleScroll }) {
  const [clicked, setClicked] = useState(null);
  let q = new THREE.Quaternion();
  let p = new THREE.Vector3();
  const [path, setPath] = useState("https://plantastic-shop.netlify.app/");


  useEffect(() => {
    if (clicked) {
      clicked.updateWorldMatrix(true, true);
      clicked.localToWorld(p.set(0, 0, 25));
      clicked.getWorldQuaternion(q);
    } else {
      p.set(0, 0, 5.5);
      q.identity();
    }
  }, [clicked, path]);

  useFrame((state, delta) => {
    easing.damp3(state.camera.position, p, 0.4, delta);
    easing.dampQ(state.camera.quaternion, q, 0.4, delta);
  });

  // TODO disable scroll controls when a frame is clicked?

  const handleFrameClick = (e) => {
    e.stopPropagation();
    if (clicked === e.object) {
      setClicked(null);
      // toggleScroll();
    } else {
      setClicked(e.object);
      // toggleScroll();
    }
  };

  return (
    <group
      position={[14, 0.1, 0]}
    >
      <Center position={[0, 1.3, 1.2]}>
        <Title3D text={"PROJECTS"} />
      </Center>

      <Frame
        position={[0, 0, -1.2]}
        isHTML={true}
        contentPath={path}
        size={1.5}
        onClick={handleFrameClick}
        textPosition={[0.85, 0.85, 0]}
        description={"Please note that the websites are displayed in a responsive format optimized for tablet viewing.\n\n"}
        title={"SELECT A PROJECT"}
        website1={projects[0].title}
        changeWebsite1={(e) => (e.stopPropagation, setPath(projects[0].url1))}
        website2={projects[1].title}
        changeWebsite2={(e) => (e.stopPropagation, setPath(projects[1].url1))}
        website3={projects[2].title + ' (Desktop only)'}
        changeWebsite3={(e) => (e.stopPropagation, setPath(projects[2].url1))}
      />
      {/* vertical scroll: x: x, y: -8.2, z: z */}

      {projects.map((project, index) => (
        <>
        <Frame
          key={index}
          position={project.position}
          rotation={project.rotation}
          contentPath={project.imagePath}
          size={project.size}
          isHTML={false}
          onClick={handleFrameClick}
          textPosition={project.textPosition}
          description={project.description}
          url1={project.url1}
          url2={project.url2}
          url3={project.url3}
          title={project.title.toUpperCase()}
          visible={project.visible}
        />
      </>
      ))}
    </group>
  );
}

export default Frames;
