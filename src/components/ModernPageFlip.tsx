"use client";

import { useState, useRef, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import PageGreeting from "./pages/PageGreeting";
import PageMemories from "./pages/PageMemories";
import PageAnimation from "./pages/PageAnimation";
import PageGallery from "./pages/PageGallery";
import PageLoveLetter from "./pages/PageLoveLetter";
import PageClosing from "./pages/PageClosing";
import FloatingDecor from "./FloatingDecor";

const pages = [PageGreeting, PageMemories, PageAnimation, PageGallery, PageLoveLetter, PageClosing];
const TOTAL = pages.length;

function ScrollablePageWrapper({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  const checkScroll = () => {
    if (containerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      const isScrollable = scrollHeight > clientHeight + 5;
      setCanScroll(isScrollable);
      setIsAtBottom(scrollTop + clientHeight >= scrollHeight - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    // setTimeout untuk nunggu children selesai dirender (gambar dll)
    const timeout = setTimeout(checkScroll, 500);
    window.addEventListener("resize", checkScroll);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  return (
    <>
      <div 
        ref={containerRef}
        onScroll={checkScroll}
        className="relative h-full overflow-y-auto overflow-x-hidden no-scrollbar pl-3 pb-8"
      >
        {children}
      </div>

      <AnimatePresence>
        {canScroll && !isAtBottom && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-5 left-1/2 -translate-x-1/2 pointer-events-none flex flex-col items-center opacity-70 z-50 text-rose-400"
          >
            <span className="text-[9px] font-bold uppercase tracking-widest bg-white/70 px-2 py-0.5 rounded-full backdrop-blur-sm shadow-sm border border-pink-100">Scroll</span>
            <ChevronDown className="w-4 h-4 animate-bounce mt-0.5 drop-shadow-sm" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function ModernPageFlip() {
  // current = index halaman yang sedang terlihat. Halaman dengan index < current sudah "dibalik".
  const [current, setCurrent] = useState(0);
  const [flipping, setFlipping] = useState<number | null>(null);

  const go = (dir: 1 | -1) => {
    if (flipping !== null) return; // kunci selama animasi biar nggak dobel
    const next = current + dir;
    if (next < 0 || next >= TOTAL) return;
    // maju: halaman current yang dibalik. mundur: halaman current-1 yang dibalik balik.
    setFlipping(dir === 1 ? current : current - 1);
    setCurrent(next);
  };

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden flex flex-col items-center justify-center">
      <FloatingDecor />

      {/* Book */}
      <div
        className="relative w-[calc(100%-2rem)] max-w-md h-[calc(100dvh-8.5rem)] [perspective:2000px] touch-pan-y"
      >
        {/* Ketebalan buku (lembar di bawah) */}
        <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-r-[28px] rounded-l-lg bg-pink-100/80 shadow-xl" />
        <div className="absolute inset-0 translate-x-[3px] translate-y-[3px] rounded-r-[28px] rounded-l-lg bg-white/90" />

        {pages.map((Page, i) => {
          const flipped = i < current;
          const z = flipping === i ? 100 : flipped ? i : TOTAL - i;
          return (
            <motion.div
              key={i}
              initial={false}
              animate={{ rotateY: flipped ? -180 : 0 }}
              transition={{ duration: 0.9, ease: [0.645, 0.045, 0.355, 1] }}
              onAnimationComplete={() => flipping === i && setFlipping(null)}
              style={{ zIndex: z, transformOrigin: "left center", transformStyle: "preserve-3d" }}
              className="absolute inset-0"
              drag={i === current || i === current - 1 ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;
                if (swipe < -1000 || offset.x < -100) go(1);
                else if (swipe > 1000 || offset.x > 100) go(-1);
              }}
            >
              {/* Sisi depan */}
              <div className="absolute inset-0 [backface-visibility:hidden] rounded-r-[28px] rounded-l-lg overflow-hidden bg-[#fffafc] shadow-[0_20px_50px_-15px_rgba(190,24,93,0.35)] border border-pink-100">
                {/* jilid */}
                <div className="absolute left-0 inset-y-0 w-5 bg-gradient-to-r from-rose-300/40 via-pink-100/30 to-transparent z-10 pointer-events-none" />
                {/* pola titik kertas */}
                <div className="absolute inset-0 opacity-[0.35] pointer-events-none bg-[radial-gradient(#f9a8d4_1px,transparent_1px)] [background-size:18px_18px]" />
                {/* washi tape */}
                <div className="absolute -top-1 right-10 w-20 h-6 bg-pink-200/70 rotate-6 rounded-sm z-10 pointer-events-none" />

                <ScrollablePageWrapper>
                  <Page />
                </ScrollablePageWrapper>

                <div className="absolute bottom-3 right-5 text-[11px] font-semibold text-pink-300 tracking-widest pointer-events-none">
                  {String(i + 1).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
                </div>
              </div>

              {/* Sisi belakang (terlihat saat halaman sedang dibalik) */}
              <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-l-[28px] rounded-r-lg bg-gradient-to-br from-pink-50 to-rose-100 border border-pink-100 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-16 h-16 fill-pink-200"><path d="M12 21s-7.5-4.6-9.5-9.3C1 8 3.6 4.5 7.2 4.5c2 0 3.6 1.1 4.8 2.7 1.2-1.6 2.8-2.7 4.8-2.7 3.6 0 6.2 3.5 4.7 7.2C19.5 16.4 12 21 12 21z" /></svg>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigasi */}
      <div className="relative z-50 mt-5 flex items-center gap-5">
        <button
          onClick={() => go(-1)}
          disabled={current === 0}
          aria-label="Halaman sebelumnya"
          className="p-3 rounded-full bg-white/70 backdrop-blur-md shadow-lg shadow-pink-200/50 border border-pink-100 text-rose-500 transition-all active:scale-90 disabled:opacity-30"
        >
          <ChevronLeft size={22} />
        </button>

        <div className="flex gap-1.5 px-4 py-2.5 rounded-full bg-white/60 backdrop-blur-md border border-pink-100">
          {pages.map((_, idx) => (
            <motion.div
              key={idx}
              animate={{ width: idx === current ? 22 : 7, backgroundColor: idx === current ? "#f43f5e" : "#fbcfe8" }}
              className="h-[7px] rounded-full"
            />
          ))}
        </div>

        <button
          onClick={() => go(1)}
          disabled={current === TOTAL - 1}
          aria-label="Halaman berikutnya"
          className="p-3 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 shadow-lg shadow-rose-300/60 text-white transition-all active:scale-90 disabled:opacity-30"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
