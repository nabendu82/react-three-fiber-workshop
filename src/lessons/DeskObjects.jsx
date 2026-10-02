// Local positions are relative to their parent group. No model downloads required.
export function Desk() {
  return (
    <group>
      <mesh position={[0, 1, 0]} castShadow receiveShadow>
        <boxGeometry args={[5, 0.22, 3.2]} />
        <meshStandardMaterial color="#cfb697" roughness={0.8} />
      </mesh>
      {[-2, 2].flatMap((x) => [-1.1, 1.1].map((z) => (
        <mesh key={`${x}-${z}`} position={[x, 0.45, z]} castShadow>
          <boxGeometry args={[0.16, 0.9, 0.16]} />
          <meshStandardMaterial color="#465850" roughness={0.65} />
        </mesh>
      )))}
    </group>
  );
}

export function Mug() {
  return (
    <group position={[-1.5, 1.12, 0.65]}>
      <mesh position={[0, 0.25, 0]} castShadow>
        <cylinderGeometry args={[0.24, 0.21, 0.5, 32]} />
        <meshStandardMaterial color="#f8ecdb" roughness={0.25} />
      </mesh>
      <mesh position={[0, 0.505, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.195, 32]} />
        <meshStandardMaterial color="#5a3523" roughness={0.5} />
      </mesh>
      <mesh position={[0.27, 0.27, 0]} castShadow>
        <torusGeometry args={[0.14, 0.045, 12, 24]} />
        <meshStandardMaterial color="#f8ecdb" roughness={0.25} />
      </mesh>
    </group>
  );
}

export function Laptop() {
  return (
    <group position={[0.9, 1.15, -0.5]} rotation={[0, -0.15, 0]}>
      <mesh castShadow><boxGeometry args={[1.6, 0.08, 1.05]} />
        <meshStandardMaterial color="#3e514d" roughness={0.5} /></mesh>
      <group position={[0, 0.54, -0.47]} rotation={[-0.15, 0, 0]}>
        <mesh castShadow><boxGeometry args={[1.6, 1, 0.06]} />
          <meshStandardMaterial color="#3e514d" /></mesh>
        <mesh position={[0, 0, 0.035]}><planeGeometry args={[1.43, 0.82]} />
          <meshStandardMaterial color="#90d8c2" emissive="#376b59" emissiveIntensity={0.45} /></mesh>
        {[0, 1, 2].map((line) => (
          <mesh key={line} position={[-0.1, 0.2 - line * 0.16, 0.04]}>
            <planeGeometry args={[0.8 - line * 0.12, 0.04]} />
            <meshBasicMaterial color="#e6fff1" />
          </mesh>
        ))}
      </group>
      <mesh position={[0, 0.045, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.25, 0.6]} /><meshStandardMaterial color="#708a7d" />
      </mesh>
    </group>
  );
}

export function Plant() {
  return (
    <group position={[-1.65, 1.12, -0.9]}>
      <mesh position={[0, 0.19, 0]} castShadow>
        <cylinderGeometry args={[0.28, 0.2, 0.38, 24]} />
        <meshStandardMaterial color="#b96347" roughness={0.85} />
      </mesh>
      {[0, 1, 2, 3, 4].map((leaf) => (
        <mesh key={leaf} position={[Math.sin(leaf * 1.26) * 0.17,
          0.6 + (leaf % 2) * 0.13, Math.cos(leaf * 1.26) * 0.17]}
          rotation={[0.35, leaf * 1.26, 0.45]} scale={[0.1, 0.36, 0.16]} castShadow>
          <sphereGeometry args={[1, 12, 8]} />
          <meshStandardMaterial color={leaf % 2 ? '#658753' : '#43654b'} roughness={0.8} />
        </mesh>
      ))}
    </group>
  );
}

export function Books() {
  return (
    <group position={[1.6, 1.12, 0.9]} rotation={[0, -0.2, 0]}>
      {['#b86f56', '#e6d7b9', '#6d9487'].map((color, index) => (
        <mesh key={color} position={[index * 0.04, 0.08 + index * 0.16, 0]}
          rotation={[0, index * 0.08, 0]} castShadow>
          <boxGeometry args={[0.75, 0.14, 0.65]} />
          <meshStandardMaterial color={color} roughness={0.9} />
        </mesh>
      ))}
    </group>
  );
}
