import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.js";
import Loading from "./Loading";
import Info from "./Info";
import { Suspense } from "react";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <>
    <Info />
    <Suspense fallback={<Loading />}>
      <Canvas
        frameloop="demand"
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [0, 0, 6],
        }}
      >
        <Experience />
      </Canvas>
    </Suspense>
  </>
);
