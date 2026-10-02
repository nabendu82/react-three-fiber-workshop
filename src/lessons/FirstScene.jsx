import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export default function FirstScene({ wireframe = false }) {
  return (
    <Canvas camera={{ position: [4, 3, 5], fov: 45 }} dpr={[1, 1.5]}
      fallback={<p>Your browser needs WebGL to display this scene.</p>}>
      <color attach="background" args={['#edf1ed']} />
      <ambientLight intensity={0.8} />
      <directionalLight position={[3, 5, 4]} intensity={2} />
      <mesh position={[0, 0.75, 0]} rotation={[0.15, 0.4, 0]}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial color="#ea875a" roughness={0.45} wireframe={wireframe} />
      </mesh>
      <gridHelper args={[10, 10, '#a2b5aa', '#d5dfd7']} />
      <OrbitControls makeDefault enablePan={false} minDistance={3} maxDistance={10}
        maxPolarAngle={Math.PI / 2.05} target={[0, 0.5, 0]} />
    </Canvas>
  );
}
