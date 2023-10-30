import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Plane } from "@react-three/drei";
import { Showcase } from "../Models/Showcase";

const shadowOffset = 100;

const Scene = () => {
  return (
    <group>
      <Suspense fallback={null}>
        <Showcase />
      </Suspense>
      <Plane
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1, 0]}
        args={[1000, 1000]}
      >
        <meshStandardMaterial color="white" />
      </Plane>
    </group>
  );
};

const Model3D = () => {
  return (
    <Canvas camera={{ position: [2, 1, 0], fov: 90 }} shadows>
      {/*<fog attach="fog" args={["white", 0, 40]} />*/}
      <ambientLight intensity={1.5} />
      <directionalLight
        castShadow
        intensity={2.5}
        shadow-mapSize={4096}
        shadow-camera-top={shadowOffset}
        shadow-camera-bottom={-shadowOffset}
        shadow-camera-left={shadowOffset}
        shadow-camera-right={-shadowOffset}
        position={[100, 100, 0]}
      />
      <Scene />

      <OrbitControls />
    </Canvas>
  );
};

export default Model3D;
