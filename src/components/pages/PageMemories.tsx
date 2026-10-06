"use client";

import GlassVideoPlayer from "../GlassVideoPlayer";
import PageDecorations from "../PageDecorations";

export default function PageMemories() {
  return (
    <div className="relative min-h-full flex flex-col w-full">
      {/* Background nempel di belakang dan full size */}
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: "url('/video-bg.png')" }}
      />
      {/* Overlay biar teks tetep kebaca dan elegan */}
      <div className="absolute inset-0 bg-pink-100/85 pointer-events-none" />

      <div className="relative z-10 flex flex-col justify-center flex-1 px-5 py-14 overflow-hidden text-center">
        <PageDecorations />

      <div className="relative z-10 max-w-md mx-auto w-full space-y-6">
        <div>
          <span className="inline-block px-4 py-1.5 mb-3 rounded-full bg-white/90 shadow-sm border border-pink-100 text-rose-500 text-[10px] font-bold tracking-[0.2em] uppercase">
            Play me
          </span>
          <h3 className="text-[2.2rem] leading-[1.2] font-bold text-gray-800 drop-shadow-sm">Si Paling Cantik</h3>
        </div>

        <GlassVideoPlayer />

        <div className="bg-white/95 px-5 py-4 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/60 ">
          <p className="text-center text-gray-700 font-medium text-sm leading-relaxed">
            Sengaja aku kumpulin foto-foto kamu di sini. Gatau kenapa, liat kamu senyum di tiap foto ini aja udah selalu berhasil bikin hari aku lebih tenang.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}
