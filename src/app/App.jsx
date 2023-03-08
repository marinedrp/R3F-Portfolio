import "./App.css";
import { Canvas } from "@react-three/fiber";
import {Environment, Html, OrbitControls, Scroll, ScrollControls, Sparkles, Stars, Stats } from "@react-three/drei";
import { Suspense } from "react";
import Ground from "./Sections/2-Projects/Ground.jsx";
import Cinema from "./Sections/3-Skills/Cinema.jsx";
import Podium from "./Sections/4-Contact/Podium.jsx";
import Overlay from "./Sections/Overlay.jsx";
import Frames from "./Sections/2-Projects/Frames.jsx";

function App() {
  return (
    <div className="App">
      <Canvas shadows className="canvas" >
      <ambientLight intensity={0.4} />
      <Suspense fallback={null}>
        <ScrollControls horizontal={true} pages={4} damping={0.8}>
          <Scroll>
            <Ground />
            <Frames />
            <Cinema />
            <Podium />
            <Stats />
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
