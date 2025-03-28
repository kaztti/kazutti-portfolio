// pages/introduction.js
import { FaCode, FaServer } from "react-icons/fa";

export default function Introduction() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2c0036] to-[#1a0d1f] text-white px-4 py-16 flex flex-col items-center">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-400 via-pink-300 to-pink-500 bg-clip-text text-transparent mb-4 drop-shadow-lg">
        Introduction
      </h1>
      <div className="w-16 h-1 bg-pink-400 rounded-full mb-8"></div>

      <div className="text-lg text-center text-pink-100 max-w-2xl mb-16 leading-loose space-y-8">
        <p>
          Hi, I'm <strong>Kazutti</strong>.<br />
          I'm currently studying architecture at university while enjoying hobbies like running a Minecraft server,
          developing plugins, and working on web projects.
        </p>
        <p>
          On my own Minecraft server, <strong>Rearth</strong>,<br />
          I support players and develop original plugins as a way to grow my skills while having fun.
        </p>
        <p>
          I've been running since elementary school,<br />
          and recently I've been into the music of <strong>BLOOM VASE</strong>.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl px-4">
        <div className="bg-white/10 border border-white/20 p-6 rounded-lg shadow-md hover:bg-white/20 transition-all">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-blue-800 p-3 rounded-full">
              <FaCode className="text-2xl text-white" />
            </div>
            <h2 className="text-xl font-semibold">Development</h2>
          </div>
          <p className="text-pink-100 text-sm">
            I create web applications and Minecraft plugins using technologies like Java, JavaScript, and SQLite.
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
            I operate and manage the Minecraft server <strong>"Rearth"</strong>,
            providing support, maintenance, and development of original features.
          </p>
        </div>
      </div>
    </div>
  );
}