import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";

import Loader from "../Loader";

const Ball = ({ imgUrl, rotationSpeed = 0.002 }) => {
  const [decal] = useTexture([imgUrl]);
  const ballRef = useRef();

  useFrame((state) => {
    if (ballRef.current) {
      const time = state.clock.elapsedTime; // Get elapsed time
  
      // Oscillating rotation using sine wave
      ballRef.current.rotation.x = Math.sin(time * 0.5) * 0.2; // Slow oscillation on X-axis
      ballRef.current.rotation.y = Math.sin(time * 0.3) * 0.3; // Slow oscillation on Y-axis
    }
  });    

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[2, 2, 5]} intensity={1} />
      <mesh ref={ballRef} castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal position={[0, 0, 1]} rotation={[0, 0, 0]} scale={0.9} map={decal} />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="always" dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<Loader />}>
        {/* Continuous rotation + User interaction enabled */}
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
