"use client";

import { motion } from "framer-motion";

const Heart = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path d="M12 21s-7.5-4.6-9.5-9.3C1 8 3.6 4.5 7.2 4.5c2 0 3.6 1.1 4.8 2.7 1.2-1.6 2.8-2.7 4.8-2.7 3.6 0 6.2 3.5 4.7 7.2C19.5 16.4 12 21 12 21z" />
  </svg>
);

const Sparkle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0z" />
  </svg>
);

const items = [
  { type: "heart", left: "6%", size: 18, dur: 14, delay: 0, color: "fill-pink-300" },
  { type: "sparkle", left: "18%", size: 12, dur: 11, delay: 3, color: "fill-rose-300" },
  { type: "heart", left: "32%", size: 12, dur: 16, delay: 6, color: "fill-rose-300" },
  { type: "heart", left: "55%", size: 22, dur: 13, delay: 1.5, color: "fill-pink-200" },
  { type: "sparkle", left: "70%", size: 14, dur: 12, delay: 4.5, color: "fill-pink-300" },
  { type: "heart", left: "84%", size: 14, dur: 15, delay: 8, color: "fill-rose-200" },
  { type: "sparkle", left: "93%", size: 10, dur: 10, delay: 2, color: "fill-rose-300" },
];

export default function FloatingDecor() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* glow orbs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.75, 0.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-pink-300/50 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-24 -right-16 w-80 h-80 rounded-full bg-rose-300/40 blur-3xl"
      />

      {/* hati & kilau yang naik pelan */}
      {items.map((it, i) => (
        <motion.div
          key={i}
          className="absolute bottom-[-40px]"
          style={{ left: it.left, width: it.size, height: it.size }}
          animate={{ y: [0, -1100], x: [0, 15, -15, 0], rotate: [0, 20, -20, 0], opacity: [0, 0.9, 0.9, 0] }}
          transition={{ duration: it.dur, delay: it.delay, repeat: Infinity, ease: "linear" }}
        >
          {it.type === "heart" ? (
            <Heart className={`w-full h-full ${it.color} drop-shadow-[0_0_6px_rgba(244,114,182,0.6)]`} />
          ) : (
            <Sparkle className={`w-full h-full ${it.color} drop-shadow-[0_0_6px_rgba(251,113,133,0.6)]`} />
          )}
        </motion.div>
      ))}
    </div>
  );
}
