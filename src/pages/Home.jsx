import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";

{
  /* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        POPUP
      </div> */
}

const Home = () => {
  return (
    <section className="w-full h-screen relative">
      {/* 3d akan dirender didalam canvas ini */}
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}></Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
