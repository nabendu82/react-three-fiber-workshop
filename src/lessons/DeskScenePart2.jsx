import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import InteractiveBox from './InteractiveBox';
import { Desk, Mug, Laptop } from './DeskObjects';

export default function DeskScene({ selected, onSelect, spinning = true }) {
  return (
    <Canvas camera={{ position: [6, 4.8, 7], fov: 40 }} dpr={[1, 1.5]}
      onPointerMissed={(event) => {
        if (event.type === 'click') onSelect(false);
      }}>
      <color attach="background" args={['#edf1ed']} />
      <ambientLight intensity={0.9} />
      <directionalLight position={[3, 7, 5]} intensity={2.5} color="#fff3de" />
      <Desk /><Mug /><Laptop />
      <InteractiveBox selected={selected} onSelect={() => onSelect(!selected)}
        spinning={spinning} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]}>
        <planeGeometry args={[200, 200]} />
        <meshStandardMaterial color="#edf1ed" roughness={1} />
      </mesh>
      <OrbitControls makeDefault target={[0, 1, 0]} enablePan={false}
        minDistance={5} maxDistance={14} minPolarAngle={0.3}
        maxPolarAngle={Math.PI / 2.1} />
    </Canvas>
  );
}
