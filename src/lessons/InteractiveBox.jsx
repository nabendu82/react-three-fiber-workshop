import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

export default function InteractiveBox({ selected, onSelect, spinning = true,
  color = '#ea875a', roughness = 0.4, x = 0 }) {
  const mesh = useRef(null);
  const [hovered, setHovered] = useState(false);

  useFrame((_, delta) => {
    if (spinning && mesh.current) {
      mesh.current.rotation.y += Math.min(delta, 0.05) * 0.6;
    }
  });

  return (
    <mesh ref={mesh} position={[x, 1.6, 0.15]} scale={selected ? 1.15 : 1}
      castShadow receiveShadow
      onClick={(event) => { event.stopPropagation(); onSelect(); }}
      onPointerOver={(event) => { event.stopPropagation(); setHovered(true); }}
      onPointerOut={() => setHovered(false)}>
      <boxGeometry args={[0.7, 0.7, 0.7]} />
      <meshStandardMaterial color={hovered ? '#f7b68c' : color} roughness={roughness}
        emissive={selected ? '#7e2b0e' : '#000000'} emissiveIntensity={0.15} />
    </mesh>
  );
}
