import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import Frame from './Frame';
import { easing } from 'maath';

function Frames() {
  const [clicked, setClicked] = useState(null);
  let q = new THREE.Quaternion();
  let p = new THREE.Vector3();
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


  // TODO disable scroll controls when a frame is clicked?
  // TODO make the website responsive
  
  const handleFrameClick = (e) => {
    e.stopPropagation();
    if (clicked === e.object) {
      setClicked(null);
    } else {
      setClicked(e.object);
    }
  };

  console.log()

  return (
    <group position={[window.innerWidth / 138, 0, 0]} ref={ref} onClick={handleFrameClick} onPointerMissed={() => setClicked(null)}>
      {/* Back */}
      {/* vertical scroll: x: x, y: -8.2, z: z */}
      <Frame position={[0.8, 0, 1.3]} />
      <Frame position={[-0.8, 0, 1.3]} />
      {/* Right */}
      <Frame position={[2.2, 0, 2.1]} rotation={[0, -Math.PI / 2.5, 0]} />
      {/* Left */}
      <Frame position={[-2.2, 0, 2.1]} rotation={[0, Math.PI / 2.5, 0]} />
    </group>
  );
}

export default Frames;
