# Little Desk — React Three Fiber Workshop

A three-part beginner project for people who already know React components, props, state, refs, and effects. No Blender, texture assets, HDR downloads, or remote fonts required.

## Run

Use Node 22.12+ (or Node 20.19+). The project was built and browser-tested with Node 26.8.1 on macOS.

```sh
cd /Users/nabendubiswas/Desktop/Projects/react-three-fiber-workshop
npm ci
npm run dev -- --port 5190
```

Open the URL Vite prints. If 5190 is occupied, choose another port; the dev server can also pick the next free port automatically.

```sh
npm run build
npm run preview -- --port 5191
```

The static output is `dist/`. Preview is for local inspection, not production deployment.

## Lessons

- `?lesson=1`: first cube, grid, lighting, OrbitControls, wireframe toggle.
- `?lesson=2`: desk, mug, laptop, hover/click selection, ref-based animation. Pausing stops cube motion; the canvas remains continuously rendered at this stage.
- `?lesson=3`: plant/books, shadows, day/evening light, color/roughness/position controls, HTML label, reset camera. Pausing also switches the scene to demand rendering.

You can use the navigation tabs or query parameters. Switching lessons resets customization. These settings are deliberately not persisted.

## Files to read

1. `src/lessons/FirstScene.jsx` — start here.
2. `src/lessons/DeskObjects.jsx` — component composition and local coordinates.
3. `src/lessons/InteractiveBox.jsx` — event handling and `useFrame`.
4. `src/lessons/DeskScenePart2.jsx` — simpler lesson-2 scene.
5. `src/lessons/DeskScene.jsx` — finished scene and `useThree` camera reset.
6. `src/App.jsx` — workshop shell and native HTML controls.
7. `src/styles.css` — desktop and narrow layout.

The article version builds one lesson at a time using a small App. The downloadable project keeps every lesson available in a styled navigation shell. The scene/component behavior is the same.

## Versions

React/React DOM 19.3.0, Fiber 9.8.1, Drei 10.7.9, Three.js 0.179.1, Vite 8.3.1, React Vite plugin 6.1.1. Version pairing was verified against npm peer dependencies on 1 October 2026. Keep `package-lock.json` when installing.

## Screenshots

Numbered JPEGs are in `screenshots/`, with `screenshots/manifest.csv` describing the article and captured state. The website currently uses local `/blog/react-three-fiber/*.jpg` URLs so previews work before you upload the files to Cloudinary. Replace those Markdown image destinations with your Cloudinary URLs after upload; keep the alt text and instructional paragraphs.

The source ZIP on the website omits screenshots and dependencies to keep the download small.

## Verification and limits

The Vite production build passes. The browser was checked at desktop and narrow widths, including mesh selection, wireframe, pause/resume, theme/material/position controls, orbiting, and camera reset. Native HTML controls provide keyboard alternatives for selecting and customizing the mesh.

This is a learning demo, not a physics simulator. The mug is stylized, the cube is suspended above the desktop, and positions can overlap if altered. It is not a device-wide FPS benchmark. The bundle includes a real 3D renderer and Vite can report its large-chunk advisory.

## Series

- https://www.nabendu.org/blog/react-three-fiber-1
- https://www.nabendu.org/blog/react-three-fiber-2
- https://www.nabendu.org/blog/react-three-fiber-3

## Official references

- https://r3f.docs.pmnd.rs/getting-started/introduction
- https://r3f.docs.pmnd.rs/api/events
- https://r3f.docs.pmnd.rs/advanced/scaling-performance
- https://github.com/pmndrs/react-three-fiber/blob/v9.8.1/packages/fiber/src/core/hooks.tsx
- https://drei.docs.pmnd.rs/controls/introduction
- https://threejs.org/manual/pages/materials.html
