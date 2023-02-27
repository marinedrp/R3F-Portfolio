import { useSpring } from "@react-spring/web";
import { Text, useCursor } from "@react-three/drei";
import React, { useState } from "react";
import { animated } from "react-spring";

export const TextWrapper = ({ text, position, customColor, onClick }) => {
  const AnimatedText = animated(Text);
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);
  
  const { color } = useSpring({color: hovered ? customColor : 'white'})

  const handlePointerOver = (e) => {
    e.stopPropagation();
    setHovered(true);
  };

  const handlePointerOut = () => {
    setHovered(false);
  };

  return (
    <AnimatedText
      color={color}
      onClick={onClick}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      maxWidth={2}
      anchorX="left"
      anchorY="top"
      position={position}
      rotation={[0, 3, 0]}
      fontSize={0.1}
    >
      {text}
    </AnimatedText>
  );
};

export default TextWrapper;