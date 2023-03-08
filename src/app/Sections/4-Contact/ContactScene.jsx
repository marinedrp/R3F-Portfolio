import { Center } from "@react-three/drei";
import Title3D from "../../Components/Title3D";
import Podium from "./Podium";

function ContactScene() {
  return (
    <>
      <Podium />
      <Center position={[42.5, -0.65, 2.5]}>
        <Title3D text={"CONTACT"} />
      </Center>
    </>
  );
}

export default ContactScene;
