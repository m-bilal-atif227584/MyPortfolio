import React, { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import Loader from '../Loader';

const Computers = ({ isMobile }) => {
  const { scene } = useGLTF('./desktop_pc/scene.gltf');
  const computerRef = useRef();

  // Infinite rotation on the X-axis
  useFrame((state) => {
    if (computerRef.current) {
      const time = state.clock.elapsedTime; // Get elapsed time
      computerRef.current.rotation.y = Math.sin(time) * 0.8; // Rotate continuously
      // computerRef.current.rotation.y = time * 0.4;
    }
  });

  return (
    <mesh ref={computerRef}>
      <hemisphereLight intensity={5} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={scene}
        scale={isMobile ? 0.5 : 0.67}
        position={isMobile ? [0, -2.8, -1.5] : [0, -3.2, -1]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 500);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 500);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Canvas
      frameloop="always"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;




// import React, {Suspense, useEffect, useState, useRef} from 'react'
// import { Canvas, useFrame } from '@react-three/fiber'
// import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
// import Loader from '../Loader'

// const Computers = ({ isMobile }) => {
//   const computer = useGLTF('./desktop_pc/scene.gltf')
//   const computerRef = useRef();

//   useFrame((state) => {
//     if (computerRef.current) {
//       const time = state.clock.elapsedTime; // Get elapsed time
//       computerRef.current.position.x = Math.sin(time) * 0.5; // Oscillate on X-axis
//     }
//   });

//   return (
//     <mesh ref={computerRef}>
//       <hemisphereLight intensity={5} groundColor="black" />
//       <pointLight intensity={1} />
//       <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
//       <primitive object={computer.scene} scale={isMobile ? 0.5 : 0.67} position={isMobile ? [0, -2.8, -1.5] : [0, -3.2, -1]} rotation={[-0.01, -0.2, -0.1]} />
//     </mesh>
//   )
// }

// const ComputersCanvas = () => {

//   const [isMobile, setIsMobile] = useState(false);
//   useEffect(() => {
//     const mediaQuery = window.matchMedia('(max-width : 500px)');
//     setIsMobile(mediaQuery.matches)
//     const handleMediaQueryChange = (event) => {
//       setIsMobile(event.matches);
//     }
//     mediaQuery.addEventListener('change',handleMediaQueryChange);
//     return () =>{
//       mediaQuery.removeEventListener('change',handleMediaQueryChange);
//     }
//   },[])

//   return(
//     <Canvas frameloop='demand' shadows camera={{ position: [20, 3, 5], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
//       <Suspense fallback={<Loader/>}>
//       <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
//       <Computers isMobile={isMobile} />
//       </Suspense>
//       <Preload all />
//     </Canvas>
//   )
// }

// export default ComputersCanvas