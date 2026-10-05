"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import PageDecorations from "../PageDecorations";

export default function PageMinigame() {
  const [score, setScore] = useState(0);
  const [won, setWon] = useState(false);

  // Auto-drain the meter slightly to make it a bit challenging (but easy enough)
  useEffect(() => {
    if (won) return;
    const interval = setInterval(() => {
      setScore(s => Math.max(0, s - 3));
    }, 200);
    return () => clearInterval(interval);
  }, [won]);

  const tap = () => {
    if (won) return;
    const newScore = Math.min(100, score + 12);
    setScore(newScore);
    
    if (newScore >= 100) {
      setWon(true);
      // Confetti burst!
      const heart = confetti.shapeFromPath({
        path: "M12 21s-7.5-4.6-9.5-9.3C1 8 3.6 4.5 7.2 4.5c2 0 3.6 1.1 4.8 2.7 1.2-1.6 2.8-2.7 4.8-2.7 3.6 0 6.2 3.5 4.7 7.2C19.5 16.4 12 21 12 21z",
      });
      const opts = { shapes: [heart, "circle" as const], colors: ["#f43f5e", "#ec4899", "#fda4af", "#881337"], scalar: 1.4 };
      confetti({ ...opts, particleCount: 80, spread: 100, startVelocity: 45, origin: { y: 0.5 } });
      setTimeout(() => confetti({ ...opts, particleCount: 40, angle: 60, spread: 60, origin: { x: 0, y: 0.6 } }), 250);
      setTimeout(() => confetti({ ...opts, particleCount: 40, angle: 120, spread: 60, origin: { x: 1, y: 0.6 } }), 400);
    }
  };

  return (
    <div className="relative min-h-full flex flex-col w-full">
      {/* Background pakai foto yang di-request */}
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: "url('/minigame-bg.jpg')" }}
      />
      {/* Overlay sama kaya page 5 */}
      <div className="absolute inset-0 bg-pink-100/60 backdrop-blur-[3px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-5 py-12 overflow-hidden text-center">
        <PageDecorations />

        <div className="relative z-10 max-w-sm mx-auto w-full flex flex-col items-center bg-white/80 backdrop-blur-md px-6 py-8 rounded-[16px] shadow-[0_15px_35px_rgba(225,29,72,0.15)] border border-white/60">
          
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-gray-800 drop-shadow-sm leading-tight">
              Seberapa Sayang <br/> <span className="text-rose-500">Ichin Sama Fau?</span>
            </h3>
            <p className="text-sm text-gray-500 font-medium mt-2">
              Pencet tombol hatinya secepat mungkin sampai bar-nya penuh! 💖
            </p>
          </div>

          {/* Meter Bar */}
          <div className="w-full h-8 bg-gray-200/80 rounded-full overflow-hidden mb-8 border-2 border-white shadow-inner relative">
            <motion.div 
              className="h-full bg-gradient-to-r from-pink-400 to-rose-500"
              animate={{ width: `${score}%` }}
              transition={{ type: "spring", bounce: 0, duration: 0.2 }}
            />
            <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-white mix-blend-difference uppercase tracking-widest pointer-events-none">
              {score}%
            </div>
          </div>

          <AnimatePresence mode="wait">
            {!won ? (
              <motion.button
                key="btn-tap"
                exit={{ scale: 0, opacity: 0 }}
                whileTap={{ scale: 0.85 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                onClick={tap}
                className="relative w-32 h-32 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 shadow-[0_10px_25px_rgba(244,63,94,0.5)] flex items-center justify-center border-4 border-white active:bg-rose-600 transition-colors"
              >
                <span className="text-white font-bold text-lg pointer-events-none drop-shadow-md">
                  TAP TAP!
                </span>
                
                {/* Floating particles around button */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 rounded-full border-2 border-rose-300"
                    animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.3 }}
                  />
                ))}
              </motion.button>
            ) : (
              <motion.div
                key="won-msg"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", bounce: 0.5 }}
                className="flex flex-col items-center"
              >
                <img src="/gifs/gifluv.gif" alt="happy" className="w-28 h-28 object-contain mb-3 drop-shadow-md" />
                <h4 className="text-3xl text-rose-500 font-bold mb-1" style={{ fontFamily: "var(--font-agbalumo)" }}>1000% Sayang!</h4>
                <p className="text-[0.8rem] text-gray-600 font-medium bg-pink-50/80 px-4 py-2 rounded-[16px] border border-pink-100 mt-2 leading-relaxed">
                  Wahh ternyata sayang banget ya! Aku juga sayang bangeettt sama kamu cantiikkk hihihi 🫶
                </p>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
}
