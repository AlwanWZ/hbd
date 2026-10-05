"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import Script from "next/script";
import PageDecorations from "../PageDecorations";

export default function PageClosing() {
  const [taps, setTaps] = useState(0);

  const burst = () => {
    setTaps((t) => t + 1);
    const heart = confetti.shapeFromPath({
      path: "M12 21s-7.5-4.6-9.5-9.3C1 8 3.6 4.5 7.2 4.5c2 0 3.6 1.1 4.8 2.7 1.2-1.6 2.8-2.7 4.8-2.7 3.6 0 6.2 3.5 4.7 7.2C19.5 16.4 12 21 12 21z",
    });
    const opts = { shapes: [heart, "circle" as const], colors: ["#f43f5e", "#ec4899", "#fda4af", "#881337"], scalar: 1.4 };
    confetti({ ...opts, particleCount: 60, spread: 90, startVelocity: 40, origin: { y: 0.6 } });
    setTimeout(() => confetti({ ...opts, particleCount: 30, angle: 60, spread: 60, origin: { x: 0, y: 0.7 } }), 200);
    setTimeout(() => confetti({ ...opts, particleCount: 30, angle: 120, spread: 60, origin: { x: 1, y: 0.7 } }), 350);
  };

  const messages = [
    "Coba pencet hatinya", 
    "Wih, lagi dongg", 
    "Hehehe, lagi coba", 
    "Sayang kamu banyak-banyak!", 
    "Udah woy jebol nanti wkwk", 
    "I love youuu paling gedeee!"
  ];

  return (
    <div className="relative min-h-full flex flex-col w-full">
      {/* Background nempel di belakang dan full size */}
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: "url('/closing-bg.png')" }}
      />
      {/* Overlay sama persis kaya page 5 */}
      <div className="absolute inset-0 bg-pink-100/60 backdrop-blur-[3px] pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-5 py-12 text-center">
        <PageDecorations />
        
        <div className="relative z-10 max-w-md mx-auto w-full flex flex-col items-center">
        <div className="relative bg-white/80 backdrop-blur-md px-6 pt-10 pb-12 rounded-[12px] shadow-[0_15px_35px_rgba(225,29,72,0.15)] border border-white/60 flex flex-col items-center w-full min-h-[440px]">
          <img src="/gifs/gif1.gif" alt="" className="w-40 h-40 object-contain mb-4" />

          <h3 className="text-3xl font-bold text-gray-800 leading-tight">
            Sekali lagi,
            <br />
            <span className="text-rose-500 drop-shadow-sm">happy birthday!</span>
          </h3>
          <p className="text-gray-600 font-medium mt-3 mb-8 text-[0.92rem]">
            Makasih udah baca sampai sini. Tahun ini kita bikin cerita yang lebih seru lagi ya.
          </p>

          <div className="relative">
            <motion.span
              animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
              className="absolute inset-0 rounded-full bg-rose-300"
            />
            <motion.button
              whileTap={{ scale: 0.85 }}
              animate={{ scale: [1, 1.08, 1, 1.08, 1] }}
              transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 0.4 }}
              onClick={burst}
              className="relative w-24 h-24 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 shadow-xl shadow-rose-300/60 flex items-center justify-center border-2 border-white/50"
            >
              <svg viewBox="0 0 24 24" className="w-11 h-11 fill-white"><path d="M12 21s-7.5-4.6-9.5-9.3C1 8 3.6 4.5 7.2 4.5c2 0 3.6 1.1 4.8 2.7 1.2-1.6 2.8-2.7 4.8-2.7 3.6 0 6.2 3.5 4.7 7.2C19.5 16.4 12 21 12 21z" /></svg>
            </motion.button>
          </div>
          <motion.p key={taps} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="text-sm font-semibold text-rose-500 mt-5 bg-pink-50/80 px-4 py-1.5 rounded-full border border-pink-100 shadow-sm">
            {messages[Math.min(taps, messages.length - 1)]}
          </motion.p>

          <div className="mt-12 text-xs text-gray-500 font-bold uppercase tracking-[0.25em]">
            With lots of love,
            <span className="block mt-2 text-base normal-case tracking-normal text-rose-500" style={{ fontFamily: "var(--font-agbalumo)" }}>Fau</span>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
