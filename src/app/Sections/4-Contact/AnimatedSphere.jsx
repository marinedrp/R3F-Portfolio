import { Decal, Sphere, useCursor } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import { useState } from "react";

function AnimatedSphere({ position, logo, url }) {
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);
  const { color } = useSpring({ color: hovered ? "white" : "#7585ff" });
  return (
    <Sphere
      args={[0.2, 32, 16]}
      castShadow
      receiveShadow
      position={position}
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
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
        rotation={[0, 0, 0]}
        position={[0, 0, 0.1]}
        scale={0.28}
        map={logo}
      />
    </Sphere>
  );
}

export default AnimatedSphere;
