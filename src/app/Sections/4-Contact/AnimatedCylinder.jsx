import { Cylinder, Decal, useCursor } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import { useState } from "react";

function AnimatedCylinder({position, logo, url}) {
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);
  const { color } = useSpring({ color: hovered ? "white" : "#7585ff" });

  return (
      <Cylinder
        castShadow
        receiveShadow
        position={position}
        args={[0.2, 0.2, 0.4]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => window.location.href = url}
      >
        <animated.meshStandardMaterial
          color={'white'}
          emissive={color}
          metalness={0.5}
          roughness={0}
        />
        <Decal
          position={[0, 0, 0.2]}
          rotation={[0, 0, 0]}
          scale={0.28}
          map={logo}
        />
      </Cylinder>
  );
}

export default AnimatedCylinder;
