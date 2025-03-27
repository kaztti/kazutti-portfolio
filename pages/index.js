import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Image from "next/image";

export default function Home() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  // タイピングアニメーション（2行）
  const [typedLine1, setTypedLine1] = useState("");
  const [typedLine2, setTypedLine2] = useState("");
  const fullTextLine1 = "大学生 × 建築 × ランニング";
  const fullTextLine2 = "Java / JavaScript / CSS / SQLite";

  useEffect(() => {
    let index = 0;
    const interval1 = setInterval(() => {
      setTypedLine1(fullTextLine1.slice(0, index));
      index++;
      if (index > fullTextLine1.length) clearInterval(interval1);
    }, 100);

    return () => clearInterval(interval1);
  }, []);

  useEffect(() => {
    let index = 0;
    const delay = 100 * (fullTextLine1.length + 5); // 1行目が終わるまで待つ
    const timeout = setTimeout(() => {
      const interval2 = setInterval(() => {
        setTypedLine2(fullTextLine2.slice(0, index));
        index++;
        if (index > fullTextLine2.length) clearInterval(interval2);
      }, 100);
    }, delay);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#2c0036] to-[#1a0d1f] text-white overflow-hidden flex items-center justify-center">
      {/* パーティクル背景（雲） */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "#1a0d1f" },
          fpsLimit: 60,
          particles: {
            number: { value: 12, density: { enable: true, area: 800 } },
            shape: {
              type: "image",
              image: {
                src: "/516f972fe72d247dfd174a53482488f1.png",
                width: 128,
                height: 128,
              },
            },
            opacity: { value: 0.12, random: true },
            size: { value: { min: 100, max: 180 }, random: true },
            move: {
              enable: true,
              speed: 0.15,
              direction: "none",
              random: true,
              outModes: { default: "out" },
            },
          },
          detectRetina: true,
        }}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      {/* 中央のコンテンツ */}
      <main className="z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6 px-4 sm:px-12 text-left">
        {/* 左側：アイコン */}
        <Image
          src="/KAZUTTI.png"
          alt="Kazutti Icon"
          width={120}
          height={120}
          className="rounded-full shadow-lg w-24 sm:w-40 h-auto"
        />

        {/* 右側：名前＋自己紹介 */}
        <div className="text-center sm:text-left mt-4 sm:mt-0">
          <h1 className="text-4xl sm:text-7xl font-bold bg-gradient-to-r from-pink-400 via-pink-300 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
            Kazutti
          </h1>
          <p className="mt-2 bg-white/10 text-pink-100 text-base sm:text-xl rounded-xl p-4 max-w-md border border-white/20 shadow-md backdrop-blur-sm leading-relaxed">
            {typedLine1}<br />
            {typedLine2}
            <span className="animate-pulse">|</span>
          </p>
        </div>
      </main>

      <footer className="absolute bottom-4 text-sm text-gray-400 w-full text-center z-10">
        © 2025 Kazutti. All rights reserved.
      </footer>
    </div>
  );
}