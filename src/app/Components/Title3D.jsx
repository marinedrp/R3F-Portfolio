import { Text3D } from "@react-three/drei";

function Title3D({ text }) {
  return (
    <Text3D
      curveSegments={20}
      bevelThickness={0.1}
      height={0.02}
      lineHeight={0.6}
      letterSpacing={-0.03}
      size={0.3}
      font="/Limelight_Regular.json"
    >
      {text}
      <meshStandardMaterial metalness={0.8} roughness={0} color={"white"} />
    </Text3D>
  );
}

export default Title3D;
