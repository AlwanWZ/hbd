"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Script from "next/script";
import FloatingDecor from "./FloatingDecor";

interface DigitalCoverProps {
  onOpen: () => void;
}

const HeartPath = "M12 21s-7.5-4.6-9.5-9.3C1 8 3.6 4.5 7.2 4.5c2 0 3.6 1.1 4.8 2.7 1.2-1.6 2.8-2.7 4.8-2.7 3.6 0 6.2 3.5 4.7 7.2C19.5 16.4 12 21 12 21z";

export default function DigitalCover({ onOpen }: DigitalCoverProps) {
  const [photoOk, setPhotoOk] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setPhotoOk(true);
    img.src = "/cover-photo.png";
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-[100dvh] w-full px-6 overflow-hidden">
      <FloatingDecor />

      <motion.div
        initial={{ opacity: 0, y: 30, rotateX: 10 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-[340px] [perspective:1200px]"
      >
        {/* halaman-halaman di belakang sampul */}
        <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-r-[30px] rounded-l-xl bg-white shadow-xl" />
        <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-r-[30px] rounded-l-xl bg-pink-50" />

        {/* Sampul */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative aspect-[3/4.4] rounded-r-[30px] rounded-l-xl overflow-hidden shadow-[0_30px_60px_-20px_rgba(136,19,55,0.55)] bg-gradient-to-br from-pink-300 via-rose-300 to-rose-400"
        >
          {/* tekstur titik */}
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#fff_1.2px,transparent_1.2px)] [background-size:16px_16px]" />
          {/* kilau kaca */}
          <motion.div
            animate={{ x: ["-120%", "220%"] }}
            transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 2.5, ease: "easeInOut" }}
            className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] z-20 pointer-events-none"
          />
          {/* jilid */}
          <div className="absolute left-0 inset-y-0 w-7 bg-gradient-to-r from-rose-900/60 via-rose-700/40 to-transparent z-10" />
          <div className="absolute left-7 inset-y-0 w-px bg-white/40 z-10" />

          {/* pita pembatas */}
          <div className="absolute top-0 right-8 w-7 h-20 bg-rose-800 z-10 [clip-path:polygon(0_0,100%_0,100%_100%,50%_82%,0_100%)] shadow-md" />

          <div className="relative h-full flex flex-col items-center pl-7 pr-5 pt-8 pb-6">
            <p className="text-[10px] font-bold tracking-[0.35em] text-white/90 uppercase">Vol. 01 &middot; Special Edition</p>

            {/* Polaroid foto */}
            <motion.div
              initial={{ rotate: -12, scale: 0.8, opacity: 0 }}
              animate={{ rotate: -4, scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 90 }}
              className="relative mt-6 bg-white p-2.5 pb-9 rounded-md shadow-xl w-[62%]"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-pink-200/90 rotate-3 rounded-sm" />
              <div className="aspect-square rounded-sm overflow-hidden bg-gradient-to-br from-pink-100 to-rose-200 flex items-center justify-center">
                {photoOk ? (
                  <img src="/cover-photo.png" alt="Kita" className="w-full h-full object-cover" onError={() => setPhotoOk(false)} />
                ) : (
                  <svg viewBox="0 0 24 24" className="w-16 h-16 fill-white/80"><path d={HeartPath} /></svg>
                )}
              </div>
              <p className="absolute bottom-2 inset-x-0 text-center text-xs font-bold text-rose-400">hi, cantik</p>

              {/* hati kecil */}
              <motion.svg
                animate={{ scale: [1, 1.25, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                viewBox="0 0 24 24"
                className="absolute -top-4 -left-4 w-8 h-8 fill-rose-500 drop-shadow"
              >
                <path d={HeartPath} />
              </motion.svg>
            </motion.div>

            {/* GIF di bawah foto */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, y: [0, -4, 0] }}
              transition={{ scale: { delay: 0.7, type: "spring" }, y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" } }}
              className="mt-5 w-[76px] h-[76px] rounded-full overflow-hidden bg-white border-4 border-white shadow-lg shrink-0"
            >
              <div className="tenor-gif-embed" data-postid="7935144640471707564" data-share-method="host" data-aspect-ratio="1.01852" data-width="100%">
                <a href="https://tenor.com/view/birthday-cake-mochi-mochi-peach-cat-gif-7935144640471707564">Birthday Cake Sticker</a>
              </div>
              <Script strategy="lazyOnload" src="https://tenor.com/embed.js" />
            </motion.div>

            <div className="mt-auto text-center">
              <p className="text-white/90 text-sm font-semibold">A Special Book for</p>
              <h1 className="text-5xl font-bold text-white drop-shadow-[0_3px_0_rgba(159,18,57,0.45)] leading-none mt-1">Ichin</h1>
              <p className="text-[11px] text-white/80 font-semibold mt-2 tracking-wide">Chinta Ramadhani</p>
            </div>
          </div>
        </motion.div>

        {/* Tombol */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpen}
          className="relative mt-9 w-full py-4 rounded-full bg-white text-rose-500 font-bold tracking-wide shadow-[0_10px_30px_-5px_rgba(244,63,94,0.5)] overflow-hidden"
        >
          <motion.span
            animate={{ scale: [1, 1.5], opacity: [0.4, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="absolute inset-0 rounded-full ring-4 ring-rose-300"
          />
          <span className="relative flex items-center justify-center gap-2">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-rose-500"><path d={HeartPath} /></svg>
            Buka Buku
            <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.2, repeat: Infinity }}>→</motion.span>
          </span>
        </motion.button>
        <p className="text-center text-xs font-semibold text-rose-400 mt-3">nyalain suaranya ya</p>
      </motion.div>
    </div>
  );
}
