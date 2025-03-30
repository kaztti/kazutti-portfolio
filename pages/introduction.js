// pages/introduction.js
import { FaCode, FaServer, FaRunning, FaHandshake } from "react-icons/fa";
import Image from "next/image";

export default function Introduction() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-4 py-16 flex flex-col items-center relative overflow-hidden">
      {/* 背景のプログラミングコード風要素 */}
      <div className="absolute inset-0 z-0 opacity-5 select-none pointer-events-none font-mono text-xs text-green-300 whitespace-pre-line leading-relaxed px-8">
        {`const runner = "Kazutti";
let passion = ["Architecture", "Minecraft", "WebDev", "Running"];
function grow(skills) {
  return skills.map(skill => skill + "++");
}
function batonPass(teammate) {
  console.log("Passing the baton to " + teammate);
}
console.log("Keep running and coding!");`}
      </div>

      {/* 駅伝ロゴの背景イメージ（回転・濃く表示） */}
      <div className="absolute bottom-12 right-12 z-1 opacity-30 animate-spin-slow">
        <Image src="/1770477.png" alt="Ekiden Logo" width={440} height={440} />
      </div>

       {/* マイクラロゴの背景イメージ（上部に設置） */}
       <div className="absolute bottom-[440px] left-[calc(50%-520px)] z-0 opacity-50 animate-pulse">
        <Image src="/Rearth.png" alt="Minecraft Logo" width={200} height={0} />
      </div>

      <h1 className="relative z-10 text-5xl font-bold bg-gradient-to-r from-pink-400 via-pink-300 to-pink-500 bg-clip-text text-transparent mb-4 drop-shadow-lg">
        Introduction
      </h1>
      <div className="relative z-10 w-16 h-1 bg-pink-400 rounded-full mb-8"></div>

      <div className="relative z-10 text-lg text-center text-pink-100 max-w-2xl mb-16 leading-loose space-y-6">
        <p>
          こんにちは、<strong>Kazutti</strong> です。<br />
          大学では建築を学びながら、趣味で Minecraft サーバーの運営や、プログラミングをやっています。また、空いた時間にジョギングもしています。
        </p>
        <p>
          自身が運営している Minecraft サーバー <strong>らーす鯖</strong> では、<br />
          プレイヤーのサポートやプラグインの開発を通じて、<br />
          日々技術力を向上させています。
        </p>

        <p>
          最近は <strong>BLOOM VASE</strong> の音楽にハマっています。<br />
          だけど、好きな楽曲はsloppy dim さんの <strong>KIMAGURE</strong> です。
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl px-4">
        <div className="bg-white/10 border border-white/20 p-6 rounded-lg shadow-md hover:bg-white/20 transition-all">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-blue-800 p-3 rounded-full">
              <FaCode className="text-2xl text-white" />
            </div>
            <h2 className="text-xl font-semibold">Development</h2>
          </div>
          <p className="text-pink-100 text-sm">
            Java、JavaScript、SQLite などを使って、自身のウェブサイトや Minecraft のプラグインを作っています。プログラミング歴は１年ぐらいです。
          </p>
        </div>

        <div className="bg-white/10 border border-white/20 p-6 rounded-lg shadow-md hover:bg-white/20 transition-all">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-blue-800 p-3 rounded-full">
              <FaServer className="text-2xl text-white" />
            </div>
            <h2 className="text-xl font-semibold">Server Management</h2>
          </div>
          <p className="text-pink-100 text-sm">
            Minecraft サーバー <strong>「らーす鯖」</strong> を運営していて、
            サポートやメンテナンス、コンテンツ追加なども行っています。あんなこんなで今年で３年目になるらしい。
          </p>
        </div>

        <div className="bg-white/10 border border-white/20 p-6 rounded-lg shadow-md hover:bg-white/20 transition-all">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-pink-700 p-3 rounded-full">
              <FaRunning className="text-2xl text-white" />
            </div>
            <h2 className="text-xl font-semibold">Running</h2>
          </div>
          <p className="text-pink-100 text-sm">
            小学生の頃から続けていて、最近また走り始めました。<br />
            毎日、家や競技場の周りをジョギングしていて、<br />
            サーバー運営のストレスをリフレッシュしています。
          </p>
        </div>

        <div className="bg-white/10 border border-white/20 p-6 rounded-lg shadow-md hover:bg-white/20 transition-all">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-pink-700 p-3 rounded-full">
              <FaHandshake className="text-2xl text-white" />
            </div>
            <h2 className="text-xl font-semibold">Teamwork</h2>
          </div>
          <p className="text-pink-100 text-sm">
            性格はINFJ型です。コミュニケーションは、自分が<br />
            慣れた人としか出来ません。でも最近少しずつ鍛えてる。<br />
            誰よりも気配りができる自信があります。
          </p>
        </div>
      </div>
    </div>
  );
}