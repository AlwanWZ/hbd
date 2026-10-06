"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import PageDecorations from "../PageDecorations";

export default function PageMinigame() {
  const [score, setScore] = useState(0);
  const [won, setWon] = useState(false);
  const [items, setItems] = useState<{ id: number; x: number; y: number; type: string }[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const TARGET_SCORE = 10;

  useEffect(() => {
    if (won) return;

    // Spawn random cute items every 800ms
    const interval = setInterval(() => {
      setItems((prev) => {
        if (prev.length > 5) return prev; // Max 5 items on screen
        
        const types = ["💖", "💌", "🌸", "✨", "🎀", "🧸"];
        const randomType = types[Math.floor(Math.random() * types.length)];
        
        // Random position within 10% to 80% to keep it inside the box
        const x = 10 + Math.random() * 70; 
        const y = 10 + Math.random() * 70;
        
        return [...prev, { id: Date.now(), x, y, type: randomType }];
      });
    }, 700);

    return () => clearInterval(interval);
  }, [won]);

  // Remove items after they've been on screen for 2 seconds (if not clicked)
  useEffect(() => {
    if (won) return;
    const cleanup = setInterval(() => {
      const now = Date.now();
      setItems((prev) => prev.filter(item => now - item.id < 2000));
    }, 500);
    return () => clearInterval(cleanup);
  }, [won]);

  const tapItem = (id: number) => {
    if (won) return;
    
    setItems((prev) => prev.filter((item) => item.id !== id));
    
    const newScore = score + 1;
    setScore(newScore);
    
    if (newScore >= TARGET_SCORE) {
      setWon(true);
      setItems([]); // clear screen
      const heart = confetti.shapeFromPath({
        path: "M12 21s-7.5-4.6-9.5-9.3C1 8 3.6 4.5 7.2 4.5c2 0 3.6 1.1 4.8 2.7 1.2-1.6 2.8-2.7 4.8-2.7 3.6 0 6.2 3.5 4.7 7.2C19.5 16.4 12 21 12 21z",
      });
      const opts = { shapes: [heart], colors: ["#f43f5e", "#ec4899"], scalar: 1.5 };
      confetti({ ...opts, particleCount: 100, spread: 100, origin: { y: 0.5 } });
      setTimeout(() => confetti({ ...opts, particleCount: 50, spread: 80 }), 300);
    }
  };

  return (
    <div className="relative min-h-full flex flex-col w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: "url('/minigame-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-pink-100/60 backdrop-blur-[3px] pointer-events-none" />

      <div className="relative z-10 flex flex-col flex-1 px-4 py-8 overflow-hidden text-center" ref={containerRef}>
        <PageDecorations />

        <div className="relative z-10 max-w-sm mx-auto w-full flex flex-col h-full bg-white/70 backdrop-blur-md px-4 py-6 rounded-[16px] shadow-[0_15px_35px_rgba(225,29,72,0.15)] border border-white/60">
          
          <div className="mb-4 shrink-0">
            <h3 className="text-[1.3rem] font-bold text-gray-800 drop-shadow-sm leading-tight mb-1">
              Tangkap Cintaku! 🏃‍♀️💨
            </h3>
            <p className="text-xs text-gray-600 font-medium">
              Ayo tangkap 10 barang gemes yang muncul sebelum mereka hilang!
            </p>
            
            <div className="mt-4 flex items-center justify-between px-4">
              <span className="text-sm font-bold text-rose-500 uppercase tracking-wider">Progress:</span>
              <span className="text-lg font-bold text-rose-500">{score} / {TARGET_SCORE}</span>
            </div>
            {/* Simple progress bar */}
            <div className="w-full h-3 bg-rose-100 rounded-full mt-2 overflow-hidden shadow-inner">
              <motion.div 
                className="h-full bg-gradient-to-r from-pink-400 to-rose-500"
                animate={{ width: `${(score / TARGET_SCORE) * 100}%` }}
                transition={{ type: "spring", bounce: 0 }}
              />
            </div>
          </div>

          <div className="relative flex-1 w-full bg-pink-50/40 rounded-xl border border-pink-100/50 overflow-hidden touch-none shadow-inner min-h-[220px]">
            <AnimatePresence>
              {!won ? (
                items.map((item) => (
                  <motion.button
                    key={item.id}
                    initial={{ scale: 0, opacity: 0, rotate: -30 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    exit={{ scale: 0, opacity: 0 }}
                    whileTap={{ scale: 1.5, opacity: 0 }}
                    onClick={() => tapItem(item.id)}
                    className="absolute text-3xl w-14 h-14 flex items-center justify-center transform-gpu drop-shadow-sm"
                    style={{ left: `${item.x}%`, top: `${item.y}%` }}
                  >
                    {item.type}
                  </motion.button>
                ))
              ) : (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                  className="absolute inset-0 flex flex-col items-center justify-center px-4"
                >
                  <img src="/gifs/cute2.gif" alt="happy" className="w-24 h-24 object-contain mb-2 drop-shadow-md" />
                  <h4 className="text-2xl text-rose-500 font-bold mb-1" style={{ fontFamily: "var(--font-agbalumo)" }}>Good Job! 💖</h4>
                  <p className="text-xs text-gray-700 font-medium text-center bg-white/80 px-4 py-2 rounded-xl shadow-sm border border-pink-100">
                    Kamu berhasil nangkep semua rasa sayangkuuu!! Cieee sekarang boleh geser ke halaman selanjutnya yaa sayang! 🥰
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
}
