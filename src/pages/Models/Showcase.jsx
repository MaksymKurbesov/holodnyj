import React from "react";
import { useGLTF } from "@react-three/drei";

export function Showcase(props) {
  const { nodes, materials } = useGLTF("/showcase.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0, -1, 0]} scale={[0.563, 0.563, 1.242]}>
        <group position={[-0.119, 3.282, 0]} scale={[0.829, 0.014, 0.945]}>
          <group
            position={[-1.016, -17.269, -0.994]}
            rotation={[1.571, 0, 0]}
            scale={[0.053, 0.022, 9.785]}
          >
            <mesh
              castShadow={true}
              geometry={nodes.Object_13.geometry}
              material={materials[".007"]}
            />
            <mesh
              castShadow={true}
              geometry={nodes.Object_14.geometry}
              material={materials[".004"]}
            />
          </group>
          <mesh
            castShadow={true}
            geometry={nodes.Object_6.geometry}
            material={materials[".001"]}
          />
          <mesh
            castShadow={true}
            geometry={nodes.Object_7.geometry}
            material={materials.material}
          />
          <mesh
            castShadow={true}
            geometry={nodes.Object_9.geometry}
            material={materials[".003"]}
            position={[0.144, -88.777, 0]}
            scale={[1.168, 67.07, 1.025]}
          />
          <mesh
            castShadow={true}
            geometry={nodes.Object_11.geometry}
            material={materials[".006"]}
            position={[0.144, -88.777, 0]}
            scale={[1.168, 67.07, 1.025]}
          />
        </group>
        <mesh
          castShadow={true}
          geometry={nodes.Object_4.geometry}
          material={materials["Wood.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/showcase.glb");
