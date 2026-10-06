"use client";

import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { useState } from "react";

export default function WelcomeScreen({ onEnter }: { onEnter: () => void }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    
    // Tembak confetti heboh beberapa kali aja (nggak usah tiap frame biar nggak ngelag)
    const colors = ["#f43f5e", "#ec4899", "#fda4af", "#881337"];
    
    const fire = (delay: number) => {
      setTimeout(() => {
        confetti({ particleCount: 40, angle: 60, spread: 70, origin: { x: -0.1, y: 0.8 }, colors, zIndex: 100 });
        confetti({ particleCount: 40, angle: 120, spread: 70, origin: { x: 1.1, y: 0.8 }, colors, zIndex: 100 });
      }, delay);
    };

    fire(0);
    fire(400);
    fire(800);
    fire(1200);
    fire(1600);
    fire(2000);
    fire(2400);

    setTimeout(onEnter, 3200); // pindah setelah 3.2 detik biar dramatis
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-pink-50/95  overflow-hidden">
      
      {/* Decorative floating items */}
      <motion.div animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-20 left-10 text-rose-300 opacity-60">
        <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current"><path d="M12 21s-7.5-4.6-9.5-9.3C1 8 3.6 4.5 7.2 4.5c2 0 3.6 1.1 4.8 2.7 1.2-1.6 2.8-2.7 4.8-2.7 3.6 0 6.2 3.5 4.7 7.2C19.5 16.4 12 21 12 21z" /></svg>
      </motion.div>
      <motion.div animate={{ y: [0, 20, 0], rotate: [0, -15, 15, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-32 right-8 text-pink-300 opacity-60">
        <svg viewBox="0 0 24 24" className="w-16 h-16 fill-current"><path d="M12 21s-7.5-4.6-9.5-9.3C1 8 3.6 4.5 7.2 4.5c2 0 3.6 1.1 4.8 2.7 1.2-1.6 2.8-2.7 4.8-2.7 3.6 0 6.2 3.5 4.7 7.2C19.5 16.4 12 21 12 21z" /></svg>
      </motion.div>
      
      <motion.div 
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} 
        className="absolute top-[12%] right-[12%] opacity-80"
      >
        <img src="/gifs/kupu kupu.gif" alt="butterfly" className="w-20 h-20 object-contain" />
      </motion.div>
      
      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-[30%] left-[15%] text-rose-400">
        ✨
      </motion.div>
      <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 2.5, repeat: Infinity, delay: 1 }} className="absolute bottom-[20%] left-[25%] text-pink-500">
        ✨
      </motion.div>

      <div className="relative z-10 w-full max-w-sm px-6">
        <AnimatePresence>
          {!isOpening && (
            <motion.div
              initial={{ scale: 0, rotate: -5 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotate: 10 }}
              transition={{ type: "spring", bounce: 0.5, duration: 1 }}
              className="bg-white/95  p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(225,29,72,0.15)] border border-white text-center relative"
            >
              {/* Stamp/Badge */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-rose-400 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg rotate-12 border-2 border-white">
                VIP
              </div>

              <img src="/gifs/gifluv.gif" alt="Cute greeting" className="w-36 h-36 object-contain mx-auto drop-shadow-lg mb-2 -mt-4" />
              
              <p className="text-[10px] font-bold tracking-[0.4em] text-pink-400 uppercase mb-3 border-b border-pink-100 pb-2 inline-block">Special Delivery 💌</p>
              
              <h1 className="text-4xl leading-tight mb-2 text-gray-800" style={{ fontFamily: "var(--font-agbalumo)" }}>
                Ada <span className="text-rose-500 block text-[2.8rem] my-2 rotate-[-2deg]">paket spesial</span> buat Ichin!
              </h1>
              <p className="text-gray-500 text-sm mb-8 font-medium">Buka sekarang yuk, ada kejutan di dalemnya! Hihihi ~</p>

              <motion.button
                whileTap={{ scale: 0.9 }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                onClick={handleOpen}
                className="relative inline-flex items-center justify-center w-full group"
              >
                {/* Animated rings for 'heboh' effect */}
                <div className="absolute inset-0 bg-rose-400 rounded-full animate-ping opacity-40 group-hover:opacity-60"></div>
                <div className="absolute -inset-2 bg-pink-300 rounded-full animate-pulse opacity-50"></div>
                
                <div className="relative w-full bg-gradient-to-r from-rose-400 to-pink-500 text-white font-bold text-lg px-8 py-4 rounded-full shadow-xl shadow-rose-300/50 flex items-center justify-center gap-3 border-2 border-white/50">
                  <span>Buka Paketnya!</span>
                  <svg className="w-6 h-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                </div>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* GIANT HEART OVERLAY */}
      {isOpening && (
        <div className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none overflow-visible">
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ 
              scale: [0, 0.08, 0.05, 1.5], 
              rotate: [-20, 15, -10, 0] 
            }}
            transition={{ 
              duration: 3.2, 
              times: [0, 0.15, 0.3, 1], 
              ease: "easeInOut" 
            }}
            className="text-pink-500 absolute flex items-center justify-center transform-gpu"
            style={{ width: "3000px", height: "3000px" }}
          >
            <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
              <path d="M12 21s-7.5-4.6-9.5-9.3C1 8 3.6 4.5 7.2 4.5c2 0 3.6 1.1 4.8 2.7 1.2-1.6 2.8-2.7 4.8-2.7 3.6 0 6.2 3.5 4.7 7.2C19.5 16.4 12 21 12 21z" />
            </svg>
          </motion.div>
        </div>
      )}
    </div>
  );
}
