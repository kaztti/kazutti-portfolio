import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`grid items-center justify-items-center min-h-screen p-8 font-sans ${geistSans.variable}`}
    >
      <main className="flex flex-col items-center gap-4">
        <h1 className="text-5xl font-bold">Kazutti</h1>
        <p className="text-xl text-center text-gray-600">
          大学生 × 建築 × Java × SQLite × ランニング
        </p>
      </main>
    </div>
  );
}