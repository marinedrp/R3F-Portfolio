import { useSpring } from "@react-spring/web";
import { Text, useCursor } from "@react-three/drei";
import { useState } from "react";
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
      font='/Merriweather-Regular.ttf'
      maxWidth={5}
      anchorX="left"
      anchorY="top"
      position={position}
      fontSize={0.1}
    >
      {text}
    </AnimatedText>
  );
};

export default TextWrapper;
