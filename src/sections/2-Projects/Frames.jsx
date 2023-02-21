import * as THREE from 'three'
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import Frame from "./Frame";
import { easing } from 'maath';

function Frames() {
  const [clicked, setClicked] = useState(null);
  let q = new THREE.Quaternion()
  let p = new THREE.Vector3()
  const ref = useRef();

  useEffect(() => {
    if (clicked) {
      clicked.updateWorldMatrix(true, true);
      clicked.localToWorld(p.set(0, 0, 25));
      clicked.getWorldQuaternion(q);
    } else {
      p.set(0, 0, 5.5);
      q.identity();
    }
  }, [clicked]);

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
      ref={ref}
      onClick={handleFrameClick}
      onPointerMissed={() => setClicked(null)}
    >
      {/* Back */}
      <Frame position={[0.8, -7.6, 1.3]} />
      <Frame position={[-0.8, -7.6, 1.3]} />
      {/* Right */}
      <Frame position={[2.2, -7.6, 2.1]} rotation={[0, -Math.PI / 2.5, 0]} />
      {/* Left */}
      <Frame position={[-2.2, -7.6, 2.1]} rotation={[0, Math.PI / 2.5, 0]} />
    </group>
  );
}

export default Frames;
