import React, { useState } from "react";
import { Suspense } from "react";
import { OrbitControls, Html } from "@react-three/drei";
import { Text } from "troika-three-text";
import { extend, Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Excavator from "./Modeexcavator";

extend({ Text });

const excavator = () => {
  // configure font geometry
  const [rotation, setRotation] = useState([0, 0, 0, 0]);
  const options = {
    font: "https://fonts.googleapis.com/css2?family=Rowdies:wght@300&display=swap",
    fontSize: 2,
    color: "#FFFF00",
    maxWidth: 80,
    lineHeight: 0.5,
    letterSpacing: 0,
    textAlign: "justify",
    materialType: "MeshPhongMaterial",
    anchorX: "center",
    anchorY: "middle",
    outlineOffsetX: "10%",
    outlineOffsetY: "10%",
    outlineBlur: "30%",
    outlineOpacity: 0.3,
    outlineColorP: "#FFFF00",
  };

  const text = "Ashville";

  return (
    <div id="canvas-container" className="h-screen bg-black">
      <Canvas clasName="canvas">
        <OrbitControls enableZoom={false} />

        <directionalLight position={[1, 1, 10]} />
        <Suspense fallback={null}>
          <Excavator position={[0, 0, -7]} />
          <text
            position-z={-5}
            position-y={3}
            rotation={rotation}
            {...options}
            text={text}
            font={""}
            anchorX="center"
            anchorY="middle"
          ></text>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default excavator;
