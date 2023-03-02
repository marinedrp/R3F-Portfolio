import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import Frame from './Frame';
import { easing } from 'maath';
import { Center, Text, Text3D } from '@react-three/drei';

function Frames() {
  const [clicked, setClicked] = useState(null);
  let q = new THREE.Quaternion();
  let p = new THREE.Vector3();
  const ref = useRef();
  const [HTML, setHTML] = useState(false)
  const [path, setPath] = useState("../../../frame5.jpg")

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

  // https://plantastic-shop.netlify.app/
  // https://mingle.adaptable.app/
  // https://marinedrp.github.io/Meow-Knight/

  return (
    <group position={[14, 0.1, 0]} ref={ref} onClick={handleFrameClick} onPointerMissed={() => setClicked(null)}>
      {/* Back */}
      <Center position={[0, -0.75, 1.5]}>
        <Text3D
          curveSegments={20}
          bevelThickness={0.1}
          height={0.02}
          lineHeight={0.6}
          letterSpacing={-0.03}
          size={0.2}
          font="/Inter_Bold.json">
          {`Projects`}
          <meshStandardMaterial metalness={1} roughness={0} color={'white'} />
        </Text3D>
        </Center>
      <Frame position={[0, 0, -1.2]} isHTML={HTML} contentPath={path} color1={'#222'} color2={'grey'} size={1.5} text={'Please note that the websites will be displayed in a responsive format optimized for tablet viewing.'} textPosition={0.8} />
      <Text
      maxWidth={0.4}
      anchorX="left"
      anchorY="top"
      position={[0.8,0.5, -1.2]}
      fontSize={0.035}
      onClick={(e) => (setHTML(true), setPath("https://plantastic-shop.netlify.app/"))}>
        - Plantastic
      </Text>
      <Text
      maxWidth={0.4}
      anchorX="left"
      anchorY="top"
      position={[0.8,0.4, -1.2]}
      fontSize={0.035}
      onClick={() => (setHTML(true), setPath("https://mingle.adaptable.app/"))}>
        - Mingle
      </Text>
      <Text
      maxWidth={0.4}
      anchorX="left"
      anchorY="top"
      position={[0.8,0.3, -1.2]}
      fontSize={0.035}
      onClick={() => (setHTML(true), setPath("https://marinedrp.github.io/Meow-Knight/"))}>
        - Meow-Knight
      </Text>
      {/* vertical scroll: x: x, y: -8.2, z: z */}
       {/* Left */}
      <Frame position={[-2.3, 0, 2.1]} rotation={[0, Math.PI / 2.5, 0]} isHTML={false} contentPath={"../../../project3.png"} size={1.6} text={'Plantastic\n\nE-commerce website dedicated to providing a unique shopping experience for plant enthusiasts.\n\nFront-End: React, Chart.js, MDBootstrap\n\nBack-End: MongoDB, Express, Node.js, Stripe, Nodemailer, Cloudinary'} textPosition={0.85} />
      <Frame position={[-2, 0, -0.4]} rotation={[0, Math.PI / 2.5, 0]} isHTML={false} contentPath={"../../../project2.png"} size={1.2} text={'Mingle\n\nSocial media platform where users can connect with the world, share pictures, belong to communities and stay up-to-date on the latest information and trends.\n\nFront-End: Handlebars, HTML, CSS, Bootstrap\n\nBack-End: Node.js, Express, MongoDB, Cloudinary'} textPosition={0.65} />

      {/* Right */}
      <Frame position={[2, 0, -0.4]} rotation={[0, -Math.PI / 2.8, 0]} isHTML={false} contentPath={"../../../project2.png"} size={1.2} text={"My Portfolio\n\nFront-End: React Three Fiber (Renderer for Three.js), React Spring\n\nBack-End: Node.js, Nodemailer"} textPosition={0.65}/>
      <Frame position={[2.3, 0, 2.1]} rotation={[0, -Math.PI / 2.5, 0]} isHTML={false} contentPath={"../../../project1.png"} size={1.6} text={"Meow-Knight's Tale\n\n2D side-scrolling RPG playable on browsers.\n\nTech Stack: Vanilla Javascript, HTML Canvas and CSS."} textPosition={0.85} />
     
    </group>
  );
}

export default Frames;
