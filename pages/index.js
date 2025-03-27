import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Home() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden flex flex-col items-center justify-center">
      {/* パーティクル背景 */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: "#000000",
          },
          fpsLimit: 60,
          particles: {
            color: { value: "#ffffff" },
            links: { enable: true, color: "#ffffff", distance: 150 },
            move: { enable: true, speed: 1 },
            number: { value: 50 },
            opacity: { value: 0.3 },
            size: { value: { min: 1, max: 3 } },
          },
        }}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      {/* 中央コンテンツ */}
      <main className="z-10 text-center">
        <h1 className="text-5xl font-bold mb-4 text-blue-400">Kazutti</h1>
        <p className="text-xl text-gray-300">
          大学生 × 建築 × Java × SQLite × ランニング
        </p>
      </main>
    </div>
  );
}