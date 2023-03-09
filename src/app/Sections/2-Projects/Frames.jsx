import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { useCallback, useEffect, useState } from "react";
import Frame from "./Frame";
import { easing } from "maath";
import { Center } from "@react-three/drei";
import Title3D from "../../Components/Title3D";
import { projects } from "./ProjectList";

function Frames({ toggleScroll }) {
  const [clicked, setClicked] = useState(null);
  const [path, setPath] = useState("/frame5.jpg");
  let q = new THREE.Quaternion();
  let p = new THREE.Vector3();

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

  const handleFrameClick = (e) => {
    e.stopPropagation();
    if (clicked === e.object) {
      setClicked(null);
    } else {
      setClicked(e.object);
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
        projects={projects}
        setPath={setPath}
        path={path}
        size={1.5}
        onClick={handleFrameClick}
        textPosition={[0.85, 0.85, 0]}
        description={"Please note that the websites are displayed in a responsive format optimized for tablet viewing.\n\n"}
        title={"SELECT A PROJECT"}
      />
      {/* vertical scroll: x: x, y: -8.2, z: z */}

      {projects.map((project, index) => (
        <Frame
          key={index}
          position={project.position}
          rotation={project.rotation}
          path={project.imagePath}
          size={project.size}
          isHTML={false}
          onClick={handleFrameClick}
          textPosition={project.textPosition}
          description={project.description}
          project={project}
          urls={project.urls}
          title={project.title.toUpperCase()}
        />
      ))}
    </group>
  );
}

export default Frames;
