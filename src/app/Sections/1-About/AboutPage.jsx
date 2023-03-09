import { Center, Float, Sphere, Text } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useRef } from "react";
import { useFrame } from "react-three-fiber";
import TextWrapper from "../../Components/TextWrapper";
import Title3D from "../../Components/Title3D";
import { Desk } from "./Desk";

function AboutPage() {
  const sphereRef = useRef()

  useFrame((state) => {
    sphereRef.current.position.x = Math.sin(state.clock.elapsedTime) * 0.3
  })
  return (
    <>
      <Center position={[-2.5, -0.65, 3]}>
        <Title3D text={"WELCOME"} />
      </Center>

      <Center position={[-4.4, 2, 2]}>
      <Text
        font="/Merriweather-Black.ttf"
        maxWidth={2}
        anchorX="left"
        anchorY="top"
        fontSize={0.2}
      >
        Hi there,
      </Text>
      <Text
      position={[0, -0.3, 0]}
        font="/Merriweather-Regular.ttf"
        maxWidth={4.5}
        anchorX="left"
        anchorY="top"
        fontSize={0.15}
      >
        My name is Marine and I'm a highly-motivated junior web developer passionate about creating dynamic and engaging online experiences.
      </Text>
      </Center>

      <Float>
      <Desk scale={0.035} position={[1.8, 0, 1]} rotation={[0.15, 4, 0]} />
      </Float>

      <Center position={[2.7, -0.55, 3.2]}>
      <Sphere ref={sphereRef} args={[0.04, 10, 20]} material-color={'orange'} />
      </Center>
      <TextWrapper text={'Scroll to continue'} position={[2.5, -0.7, 3]} customColor1={'white'} customColor2={'orange'} fontSize={0.1} />
      
    </>
  );
}

export default AboutPage;
