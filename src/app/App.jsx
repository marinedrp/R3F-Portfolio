import "./App.css";
import { Canvas } from "@react-three/fiber";
import {Environment, Html, OrbitControls, Scroll, ScrollControls, Sparkles, Stars, Stats } from "@react-three/drei";
import { Suspense, useState } from "react";
import Ground from "./Components/Ground";
import Cinema from "./Sections/3-Skills/Cinema";
import Overlay from "./Sections/Overlay";
import Frames from "./Sections/2-Projects/Frames";
import ContactScene from "./Sections/4-Contact/ContactScene";
import AboutPage from "./Sections/1-About/AboutPage";

function App() {
  const [scrollEnabled, setScrollEnabled] = useState(true);

  const toggleScroll = () => {
    setScrollEnabled(!scrollEnabled);
  };
  return (
    <div className="App">
      <Canvas shadows className="canvas" >
      <fog attach="fog" args={['#111113', 10, 25]} />
      <ambientLight intensity={0.4} />
      <Suspense fallback={null}>
        <ScrollControls enabled={scrollEnabled} horizontal={true} pages={4} damping={0.8}>
          <Scroll>
            {/* <Stars /> */}
            <Ground />
            <AboutPage />
            <Frames toggleScroll={toggleScroll} />
            <Cinema />
            <ContactScene />
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
