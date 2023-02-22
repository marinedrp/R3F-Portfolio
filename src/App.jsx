import "./App.css";
import { Canvas } from "@react-three/fiber";
import Overlay from "./sections/Overlay";
import {Environment, Scroll, ScrollControls, Stars } from "@react-three/drei";
import Ground from './sections/2-Projects/Ground'
import { Suspense } from "react";
import Frames from "./sections/2-Projects/Frames";
import Cursor from "./cursor/Cursor";

function App() {
  return (
    <div className="App">
      <Canvas className="canvas" >
        <Cursor />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, -3, 10]} angle={0.15} penumbra={1} />
      <Suspense fallback={null}>
        <ScrollControls horizontal={true} pages={4} damping={0.8}>
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
