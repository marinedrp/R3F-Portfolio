import "./App.css";
import { Canvas } from "@react-three/fiber";
import Overlay from "./sections/Overlay";
import {Environment, Html, OrbitControls, Scroll, ScrollControls, Sparkles, Stars } from "@react-three/drei";
import Ground from './sections/2-Projects/Ground'
import { Suspense } from "react";
import Frames from "./sections/2-Projects/Frames";
import Cinema from "./sections/3-Skills/Cinema";
import Podium from "./sections/4-Contact/Podium";

function App() {

  return (
    <div className="App">
      <Canvas className="canvas" >
      <ambientLight intensity={0.4} />
      <Suspense fallback={null}>
        <ScrollControls horizontal={true} pages={4} damping={0.8}>
          <Scroll>
            <Podium />
            <Cinema />
            <Frames />
            <Ground />
          </Scroll>
          <Scroll html style={{ width: "100%" }}>
            <Overlay />
          </Scroll>
        </ScrollControls>
        <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
