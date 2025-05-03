"use client";

import React, { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

// WebGL Support Check Hook
const useWebGLSupport = () => {
  const [isWebGLSupported, setIsWebGLSupported] = useState(true);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      setIsWebGLSupported(false);
    }
  }, []);

  return isWebGLSupported;
};

// StarBackground Component (3D)
const StarBackground = (props: any) => {
  const ref: any = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#1B0720E3"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

// 2D Fallback Background Component
const FallbackBackground = () => (
  <div className="w-full h-full ">
    <div className="text-white text-4xl flex justify-center items-center h-full">

    </div>
  </div>
);

// StarsCanvas Component (Main Canvas)
const StarsCanvas = () => {
  const isWebGLSupported = useWebGLSupport();

  if (!isWebGLSupported) {
    // Fallback 2D background if WebGL is not available
    return <FallbackBackground />;
  }

  return (
    <div className="w-full h-auto fixed inset-0 z-[20]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={<div>Loading...</div>}>
          <StarBackground />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
