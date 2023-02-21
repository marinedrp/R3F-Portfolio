import "./App.css";
import { Canvas } from "@react-three/fiber";
import Overlay from "./sections/Overlay";
import {Environment, Scroll, ScrollControls } from "@react-three/drei";
import Frame from "./sections/2-Projects/Frame";
import Ground from './sections/2-Projects/Ground'
import { Suspense } from "react";
import Frames from "./sections/2-Projects/Frames";

function App() {
  return (
    <div className="App">
      <Canvas className="canvas" >
      <ambientLight intensity={0.5} />
      <spotLight position={[10, -3, 10]} angle={0.15} penumbra={1} />
      <Suspense fallback={null}>
        <ScrollControls pages={4} damping={0.1}>
          <Scroll>
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
