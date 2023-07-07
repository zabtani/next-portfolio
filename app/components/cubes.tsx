'use client';
import { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
interface Props {
  count?: number;
  size?: number;
}
export default function Cubes(props: Props) {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className={` w-full h-full ${fadeIn ? 'animate-pop' : ''}`}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars {...props} />
      </Canvas>
    </div>
  );
}

function Stars({ count = 5000, size = 0.005 }: Props) {
  const ref = useRef<any>(null);
  const [sphere] = useState(() => random.inSphere(new Float32Array(count), { radius: 1.5 }));
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#3f3f3f" size={size} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
}
