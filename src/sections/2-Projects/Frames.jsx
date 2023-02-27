import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import Frame from './Frame';
import { easing } from 'maath';
import { Text } from '@react-three/drei';

function Frames() {
  const [clicked, setClicked] = useState(null);
  let q = new THREE.Quaternion();
  let p = new THREE.Vector3();
  const ref = useRef();
  const [HTML, setHTML] = useState(false)
  const [path, setPath] = useState("../../../project3.png")

  useEffect(() => {
    if (clicked) {
      clicked.updateWorldMatrix(true, true);
      clicked.localToWorld(p.set(0, 0, 25));
      clicked.getWorldQuaternion(q);
    } else if (clicked === null) {
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

  // https://plantastic-shop.netlify.app/
  // https://mingle.adaptable.app/
  // https://marinedrp.github.io/Meow-Knight/

  return (
    <group position={[14, 0, 0]} ref={ref} onClick={handleFrameClick} onPointerMissed={() => setClicked(null)}>
      {/* Back */}
      <Frame position={[0, 0, -0.8]} isHTML={HTML} contentPath={path} color1={'#222'} color2={'grey'} size={2} text={'Chose a project'} textPosition={1.05} />
      <Text
      maxWidth={0.4}
      anchorX="left"
      anchorY="top"
      position={[1.05,0.5, -0.8]}
      fontSize={0.035}
      onClick={(e) => (setHTML(true), setPath("https://plantastic-shop.netlify.app/"))}>
        - Plantastic
      </Text>
      <Text
      maxWidth={0.4}
      anchorX="left"
      anchorY="top"
      position={[1.05,0.4, -0.8]}
      fontSize={0.035}
      onClick={() => (setHTML(true), setPath("https://mingle.adaptable.app/"))}>
        - Mingle
      </Text>
      <Text
      maxWidth={0.4}
      anchorX="left"
      anchorY="top"
      position={[1.05,0.3, -0.8]}
      fontSize={0.035}
      onClick={() => (setHTML(true), setPath("https://marinedrp.github.io/Meow-Knight/"))}>
        - Meow-Knight
      </Text>
      {/* vertical scroll: x: x, y: -8.2, z: z */}
       {/* Left */}
      <Frame position={[-2.3, 0, 2.1]} rotation={[0, Math.PI / 2.5, 0]} isHTML={false} contentPath={"../../../project3.png"} size={1.6} color1={'white'} color2={"lightgreen"} text={'Plantastic\n\nE-commerce website dedicated to providing a unique shopping experience for plant enthusiasts.\n\nFront-End: React, Chart.js, MDBootstrap\n\nBack-End: MongoDB, Express, Node.js, Stripe, Nodemailer, Cloudinary'} textPosition={0.85} />
      <Frame position={[-2, 0, -0.2]} rotation={[0, Math.PI / 2.5, 0]} isHTML={false} contentPath={"../../../project2.jpg"} size={1} color1={'white'} color2={"violet"} text={'Mingle\n\nSocial media platform where users can connect with the world, share pictures, belong to communities and stay up-to-date on the latest information and trends.\n\nFront-End: Handlebars, HTML, CSS, Bootstrap\n\nBack-End: Node.js, Express, MongoDB, Cloudinary'} textPosition={0.55} />

      {/* Right */}
      <Frame position={[2, 0, -0.2]} rotation={[0, -Math.PI / 2.8, 0]} isHTML={false} contentPath={"../../../hill.png"} size={1} color1={'white'} color2={"yellow"} text={"My Portfolio\n\nFront-End: React Three Fiber (Renderer for Three.js), React Spring\n\nBack-End: Node.js, Nodemailer"} textPosition={0.55}/>
      <Frame position={[2.3, 0, 2.1]} rotation={[0, -Math.PI / 2.5, 0]} isHTML={false} contentPath={"../../../project1.png"} size={1.6} color1={'white'} color2={"sienna"} text={"Meow-Knight's Tale\n\n2D side-scrolling RPG playable on browsers.\n\nTech Stack: Vanilla Javascript, HTML Canvas and CSS."} textPosition={0.85} />
     
    </group>
  );
}

export default Frames;
