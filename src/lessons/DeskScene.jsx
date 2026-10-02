import { Canvas, useThree } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import InteractiveBox from './InteractiveBox';
import { Desk, Mug, Laptop, Plant, Books } from './DeskObjects';

function ViewControls({ cameraVersion }) {
  const controls = useRef(null);
  const camera = useThree((state) => state.camera);
  const invalidate = useThree((state) => state.invalidate);
  useEffect(() => {
    camera.position.set(6, 4.8, 7);
    if (controls.current) {
      controls.current.target.set(0, 1, 0);
      controls.current.update();
    }
    invalidate();
  }, [cameraVersion, camera, invalidate]);
  return <OrbitControls ref={controls} makeDefault target={[0, 1, 0]}
    enablePan={false} minDistance={5} maxDistance={14}
    minPolarAngle={0.3} maxPolarAngle={Math.PI / 2.1} />;
}

export default function DeskScene({ polished = false, selected, onSelect,
  spinning = true, night = false, color = '#ea875a', roughness = 0.4,
  x = 0, cameraVersion = 0 }) {
  const background = night ? '#182b32' : '#edf1ed';

  return (
    <Canvas shadows={polished} dpr={[1, 1.5]}
      frameloop={spinning ? 'always' : 'demand'}
      camera={{ position: [6, 4.8, 7], fov: 40 }}
      fallback={<p>Your browser needs WebGL to display this scene.</p>}
      onPointerMissed={(event) => { if (event.type === 'click') onSelect(false); }}>
      <color attach="background" args={[background]} />
      <ambientLight intensity={night ? 0.45 : 0.9} />
      <directionalLight position={[3, 7, 5]} intensity={night ? 1 : 2.5}
        color={night ? '#a4caff' : '#fff3de'} castShadow={polished}
        shadow-mapSize={[1024, 1024]} shadow-bias={-0.0005}
        shadow-camera-left={-5} shadow-camera-right={5}
        shadow-camera-top={5} shadow-camera-bottom={-5} />
      {polished && <pointLight position={[-3, 3, -2]} intensity={night ? 12 : 3}
        color={night ? '#ffc083' : '#b8d8cc'} />}
      <Desk /><Mug /><Laptop />
      <InteractiveBox selected={selected} onSelect={() => onSelect(!selected)}
        spinning={spinning} color={color} roughness={roughness} x={x} />
      {polished && <><Plant /><Books /></>}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]} receiveShadow>
        <planeGeometry args={[200, 200]} />
        <meshStandardMaterial color={background} roughness={1} />
      </mesh>
      {polished && selected && <Html position={[x, 2.25, 0.15]} center>
        <div className="object-label">Your first interactive mesh</div>
      </Html>}
      <ViewControls cameraVersion={cameraVersion} />
    </Canvas>
  );
}
