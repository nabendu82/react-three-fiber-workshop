import { Component, useState } from 'react';
import FirstScene from './lessons/FirstScene';
import DeskScene from './lessons/DeskScene';
import DeskScenePart2 from './lessons/DeskScenePart2';

class SceneBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() {
    return this.state.failed
      ? <div className="scene-error"><h2>The 3D scene could not start.</h2><p>Enable hardware acceleration and use a browser with WebGL support.</p><button onClick={() => window.location.reload()}>Try again</button></div>
      : this.props.children;
  }
}
const titles = ['Your first scene', 'Make it interactive', 'A little more polish'];
const summaries = [
  'Meet the canvas, camera, geometry, material, and lights. One cube is all you need to start.',
  'Compose a tiny desk with React components. Click the cube, hover it, and watch it rotate.',
  'Add shadows, style your cube, switch the lighting, and render only when you need to.',
];
export default function App() {
  const requested = Number(new URLSearchParams(window.location.search).get('lesson'));
  const [lesson, setLesson] = useState([1, 2, 3].includes(requested) ? requested : 1);
  const [selected, setSelected] = useState(false);
  const [wireframe, setWireframe] = useState(false);
  const [spinning, setSpinning] = useState(true);
  const [night, setNight] = useState(false);
  const [color, setColor] = useState('#ea875a');
  const [roughness, setRoughness] = useState(0.4);
  const [x, setX] = useState(0);
  const [cameraVersion, setCameraVersion] = useState(0);
  function changeLesson(next) {
    setLesson(next); setSelected(false); setSpinning(true);
    setCameraVersion(0); setNight(false); setX(0); setColor('#ea875a'); setRoughness(0.4);
    const url = new URL(window.location.href);
    url.searchParams.set('lesson', next);
    window.history.replaceState(null, '', url);
  }
  return (
    <main>
      <header><a className="brand" href="?lesson=1"><span className="brand-icon">◇</span> LITTLE DESK <span className="brand-tag">/ WORKSHOP</span></a><span className="header-note">REACT THREE FIBER · BEGINNER SERIES</span></header>
      <div className="intro"><p className="eyebrow">FROM REACT COMPONENTS TO A 3D WORLD</p><h1>A small scene.<br /><em>A new dimension.</em></h1><p>Learn 3D one component at a time. No Blender. No model downloads.<br />Just React, a few shapes, and your imagination.</p></div>
      <nav aria-label="Lessons">{titles.map((title, index) => <button key={title} aria-current={lesson === index + 1 ? 'step' : undefined} onClick={() => changeLesson(index + 1)}><span>0{index + 1}</span>{title}</button>)}</nav>
      <section className="workbench">
        <div className="viewport"><div className="scene-status"><span className="dot" /> LESSON 0{lesson} <span>LIVE 3D SCENE</span></div>
          <SceneBoundary key={lesson}>
            {lesson === 1 ? <FirstScene wireframe={wireframe} /> : lesson === 2 ? <DeskScenePart2 selected={selected} onSelect={setSelected} spinning={spinning} /> : <DeskScene selected={selected} onSelect={setSelected} polished={lesson === 3} spinning={spinning} night={night} color={color} roughness={roughness} x={x} cameraVersion={cameraVersion} />}
          </SceneBoundary>
          <div className="scene-hint">Drag to orbit · Scroll to zoom{lesson > 1 ? ' · Click the cube to select' : ''}</div>
        </div>
        <aside><p className="eyebrow">CHAPTER 0{lesson} / 03</p><h2>{titles[lesson - 1]}</h2><p>{summaries[lesson - 1]}</p>
          <div className="divider" />
          {lesson === 1 ? <><label className="switch"><input type="checkbox" checked={wireframe} onChange={(e) => setWireframe(e.target.checked)} />Show wireframe</label><dl><dt>Geometry</dt><dd>Box · 1.5 × 1.5 × 1.5</dd><dt>Material</dt><dd>MeshStandardMaterial</dd><dt>Camera</dt><dd>Perspective · 45°</dd></dl></> : <>
            <button className={`action ${selected ? 'active' : ''}`} onClick={() => setSelected(!selected)}>{selected ? 'Deselect cube' : 'Select cube'} <span>↗</span></button>
            <p className="selection" role="status">{selected ? 'Cube selected — scaled to 115%' : 'Nothing selected'}</p>
            <label className="switch"><input type="checkbox" checked={spinning} onChange={(e) => setSpinning(e.target.checked)} />Animate cube</label>
            {lesson === 3 && <><label className="switch"><input type="checkbox" checked={night} onChange={(e) => setNight(e.target.checked)} />Evening lighting</label>
              <label className="field">Cube finish<select value={color} onChange={(e) => setColor(e.target.value)}><option value="#ea875a">Terracotta</option><option value="#689f9a">Sea glass</option><option value="#aa92ca">Lavender</option></select></label>
              <label className="field">Roughness <output>{roughness.toFixed(2)}</output><input aria-label="Roughness" type="range" min="0.1" max="1" step="0.05" value={roughness} onChange={(e) => setRoughness(Number(e.target.value))} /></label>
              <label className="field">Move cube <output>{x.toFixed(1)}</output><input aria-label="Move cube" type="range" min="-0.6" max="0.6" step="0.1" value={x} onChange={(e) => setX(Number(e.target.value))} /></label>
              <button className="reset" onClick={() => setCameraVersion((value) => value + 1)}>Reset camera ↺</button>
              <p className="render-note">{spinning ? 'Continuous rendering · animation on' : 'On-demand rendering · animation off'}</p>
            </>}
          </>}
          <div className="learn"><span>WHAT YOU ARE LEARNING</span><p>{lesson === 1 ? 'Canvas · mesh · args · lights' : lesson === 2 ? 'groups · useState · events · useFrame' : 'shadows · Html · materials · demand'}</p></div>
        </aside>
      </section>
      <footer><span>A THREE-PART PROJECT BY NABENDU</span><span>Built with React + Three.js + Fiber + Drei</span></footer>
    </main>
  );
}
