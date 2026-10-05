"use client";

import { motion } from "framer-motion";

export function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" fill="currentColor"/>
    </svg>
  );
}

export function MiniHeart({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 21s-7.5-4.6-9.5-9.3C1 8 3.6 4.5 7.2 4.5c2 0 3.6 1.1 4.8 2.7 1.2-1.6 2.8-2.7 4.8-2.7 3.6 0 6.2 3.5 4.7 7.2C19.5 16.4 12 21 12 21z" />
    </svg>
  );
}

export default function PageDecorations() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-[8%] left-[8%]">
        <Sparkle className="w-5 h-5 text-pink-300" />
      </motion.div>
      <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 2.5, repeat: Infinity, delay: 1 }} className="absolute bottom-[12%] right-[10%]">
        <Sparkle className="w-6 h-6 text-rose-300" />
      </motion.div>
      <motion.div animate={{ y: [0, -8, 0], rotate: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[18%] right-[10%]">
        <MiniHeart className="w-4 h-4 text-pink-400 opacity-70" />
      </motion.div>
      <motion.div animate={{ y: [0, -10, 0], rotate: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-[25%] left-[8%]">
        <MiniHeart className="w-5 h-5 text-rose-400 opacity-60" />
      </motion.div>
      <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }} className="absolute top-[45%] left-[5%]">
        <Sparkle className="w-3 h-3 text-pink-300" />
      </motion.div>
      <motion.div animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 4, repeat: Infinity, delay: 1.5 }} className="absolute top-[60%] right-[6%]">
        <Sparkle className="w-4 h-4 text-rose-200" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 10, 0], x: [0, -10, 0] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} 
        className="absolute top-[10%] right-[8%] z-[-1] opacity-70"
      >
        <img src="/gifs/kupu kupu.gif" alt="butterfly" className="w-14 h-14 object-contain" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, -10, 0], x: [0, 5, 0] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} 
        className="absolute bottom-3 left-4 z-[-1] opacity-80"
      >
        <img src="/gifs/permata.gif" alt="gem" className="w-10 h-10 object-contain" />
      </motion.div>
    </div>
  );
}
