"use client";

import { motion } from "framer-motion";
import PageDecorations from "../PageDecorations";

export default function PageGreeting() {
  return (
    <div className="relative min-h-full flex flex-col w-full">
      {/* Background nempel di belakang dan full size */}
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: "url('/greeting-bg.png')" }}
      />
      {/* Overlay biar teks tetep kebaca dan elegan */}
      <div className="absolute inset-0 bg-pink-100/85 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-5 py-12 overflow-hidden text-center">
        <PageDecorations />

      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-sm mx-auto w-full flex flex-col items-center"
      >
        {/* GIF Centered with Glow */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-pink-300 blur-2xl opacity-40 rounded-full"></div>
          <img src="/gifs/cute.gif" alt="" className="relative w-36 h-36 object-contain drop-shadow-md" />
        </div>

        <span className="inline-block px-4 py-1.5 mb-5 rounded-full bg-white/90 shadow-sm border border-pink-100 text-rose-500 text-[10px] font-bold tracking-[0.2em] uppercase">
          Hari ini hari kamu
        </span>

        <h2 className="text-[2.2rem] leading-[1.2] font-bold text-gray-800 mb-7 drop-shadow-sm">
          Selamat ulang tahun,<br/>
          <span className="relative inline-block text-rose-500 mt-2">
            Ichin sayang
            <svg className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-[110%]" viewBox="0 0 200 12" fill="none">
              <path d="M2 9C50 3 150 3 198 9" stroke="#f9a8d4" strokeWidth="5" strokeLinecap="round" />
            </svg>
          </span>
        </h2>

        {/* Glassmorphism Card for Text */}
        <div className="space-y-4 text-gray-700 text-[1.05rem] leading-relaxed font-medium bg-white/50 px-5 py-6 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/60 backdrop-blur-sm">
          <p>
            Ciee udah 22 tahun nih! Semoga di umur yang baru ini kamu makin bahagia, makin sehat, dan semua hal baik yang lagi kamu usahain jalannya lancar.
          </p>
          <p>
            Aku bikin ini khusus buat kamu. Bukan kartu ucapan biasa, tapi buku kecil yang isinya kita. Pelan-pelan aja bacanya, geser ke kanan ya.
          </p>
        </div>
      </motion.div>
      </div>
    </div>
  );
}
