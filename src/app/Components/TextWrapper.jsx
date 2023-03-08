import { useSpring } from "@react-spring/web";
import { Text, useCursor } from "@react-three/drei";
import { useState } from "react";
import { animated } from "react-spring";

export const TextWrapper = ({ text, position, customColor1, customColor2, onClick, fontSize, visible }) => {
  const AnimatedText = animated(Text);
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);
  
  const { color } = useSpring({color: hovered ? customColor1 : customColor2})

  const handlePointerOver = (e) => {
    e.stopPropagation();
    setHovered(true);
  };

  const handlePointerOut = () => {
    setHovered(false);
  };

  return (
    <AnimatedText
    visible={visible}
      color={color}
      onClick={onClick}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      font='/Merriweather-Regular.ttf'
      maxWidth={5}
      anchorX="left"
      anchorY="top"
      position={position}
      fontSize={fontSize}
    >
      {text}
    </AnimatedText>
  );
};

export default TextWrapper;
