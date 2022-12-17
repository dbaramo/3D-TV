import { Stage, OrbitControls } from "@react-three/drei";
import Tv from "./Tv";

export default function Experience() {
  return (
    <>
      <OrbitControls makeDefault minDistance={2.35} autoRotate />
      <Stage>
        <Tv
          position-x={-0.5}
          position-y={0}
          position-z={-0.3}
          turn={Math.PI * -0.3}
        />
        <Tv
          position-x={-0.5}
          position-y={0.45}
          position-z={-0.3}
          turn={Math.PI * -0.3}
        />
        <Tv
          position-x={-0.5}
          position-y={0.9}
          position-z={-0.3}
          turn={Math.PI * -0.3}
        />

        <Tv position-y={0} position-z={0} />

        <Tv position-y={0.45} position-z={0} />

        <Tv position-y={0.9} position-z={0} />

        <Tv
          position-x={0.5}
          position-y={0}
          position-z={-0.3}
          turn={Math.PI * 0.3}
        />

        <Tv
          position-x={0.5}
          position-y={0.45}
          position-z={-0.3}
          turn={Math.PI * 0.3}
        />

        <Tv
          position-x={0.5}
          position-y={0.9}
          position-z={-0.3}
          turn={Math.PI * 0.3}
        />

        <Tv
          position-x={-0.5}
          position-y={0}
          position-z={2 * -0.45}
          turn={2 * Math.PI * -0.3}
        />
        <Tv
          position-x={-0.5}
          position-y={0.45}
          position-z={2 * -0.45}
          turn={2 * Math.PI * -0.3}
        />
        <Tv
          position-x={-0.5}
          position-y={0.9}
          position-z={2 * -0.45}
          turn={2 * Math.PI * -0.3}
        />

        <Tv position-y={0} position-z={-1.25} turn={Math.PI} />

        <Tv position-y={0.45} position-z={-1.25} turn={Math.PI} />

        <Tv position-y={0.9} position-z={-1.25} turn={Math.PI} />

        <Tv
          position-x={0.5}
          position-y={0}
          position-z={2 * -0.45}
          turn={2 * Math.PI * 0.3}
        />

        <Tv
          position-x={0.5}
          position-y={0.45}
          position-z={2 * -0.45}
          turn={2 * Math.PI * 0.3}
        />

        <Tv
          position-x={0.5}
          position-y={0.9}
          position-z={2 * -0.45}
          turn={2 * Math.PI * 0.3}
        />
      </Stage>
    </>
  );
}
