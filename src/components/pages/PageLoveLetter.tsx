"use client";

import { useState } from "react";
import PageDecorations from "../PageDecorations";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";

export default function PageLoveLetter() {
  const [step, setStep] = useState(0);

  const paragraphs = [
    {
      text: "Makasih ya udah selalu sabar sama aku. Aku tau aku masih banyak kurangnya, kadang nyebelin, kadang nggak peka. Tapi kamu tetep milih buat stay, dan itu bukan hal kecil buat aku.",
      highlight: "Terimakasiih yaa cantiikkk ~",
      color: "text-rose-500",
      rotate: "-rotate-1",
      gif: "/gifs/lv1.gif"
    },
    {
      text: "Aku bersyukur banget bisa kenal kamu. Liat kamu ketawa, dengerin kamu cerita hal random seharian, sampe denger kamu ngomel pun, semuanya bikin hari aku lebih tenang. Kamu tuh lebih berharga dari yang kamu kira.",
      highlight: "I love youuu ♡",
      color: "text-pink-500",
      rotate: "rotate-1",
      gif: "/gifs/gifluv.gif"
    },
    {
      text: "Di umur kamu yang ke-22 ini, aku cuma pengen kamu tau satu hal: kamu nggak harus selalu kuat. Kalau capek, bilang. Kalau lagi pusing sama keadaan, cerita ke aku. Aku mungkin nggak bisa nyelesaiin semuanya, tapi aku bakal selalu ada buat nemenin.",
      highlight: "Janji ya sayangkuuu 💌",
      color: "text-rose-500",
      rotate: "-rotate-1",
      gif: "/gifs/lv2.gif"
    },
    {
      text: "Semoga semua yang kamu pengen pelan-pelan kesampaian. Dan semoga aku masih boleh ada di samping kamu waktu itu semua kejadian.",
      highlight: "Aamiiin paling kenceng buat kamuuu ✨",
      color: "text-pink-500",
      rotate: "rotate-1",
      gif: "/gifs/lv3.gif"
    }
  ];

  return (
    <div className="relative min-h-full flex flex-col w-full">
      {/* Background nempel di belakang dan full size */}
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: "url('/letter-bg.jpg')" }}
      />
      {/* Overlay biar teks tetep kebaca dan elegan */}
      <div className="absolute inset-0 bg-pink-100/60 backdrop-blur-[3px] pointer-events-none" />
      
      <div className="relative z-10 flex flex-col justify-center flex-1 px-5 py-12 overflow-hidden">
        <PageDecorations />
      
      {/* Soft gradient background blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-pink-200/50 rounded-full blur-3xl opacity-60 pointer-events-none z-0" />
      <div className="absolute bottom-10 left-0 w-64 h-64 bg-rose-200/40 rounded-full blur-3xl opacity-60 pointer-events-none z-0" />

      <div className="relative z-10 max-w-md mx-auto w-full">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: -1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative bg-white/80 backdrop-blur-md p-7 pt-10 pb-8 rounded-[12px] shadow-[0_15px_35px_rgba(225,29,72,0.15)] border border-white/60 text-gray-800 text-[0.92rem] leading-[1.8] font-medium min-h-[440px] flex flex-col"
        >
          {/* Washi Tape */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-8 bg-rose-300/60 rotate-2 rounded-sm shadow-sm backdrop-blur-md" />

          <div className="relative z-10 flex-1 flex flex-col">
            
            <div className="text-center mb-5 pb-4 relative shrink-0">
              <h3 className="text-3xl text-rose-500 drop-shadow-sm mb-1" style={{ fontFamily: "var(--font-agbalumo)" }}>Buat Ichin</h3>
              <p className="text-[10px] uppercase tracking-widest text-pink-400 font-bold">dari fau yang jauh dimato</p>
              
              {/* Divider */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-pink-100 rounded-full" />
            </div>

            <div className="flex-1 flex flex-col">
              {step === 0 && <p className="font-bold text-rose-400 text-lg mb-2">Hai sayang,</p>}
              
              <div className="relative w-full flex-1 flex flex-col justify-center min-h-[250px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full flex flex-col"
                  >
                    <div className="flex justify-center mb-3">
                      <img src={paragraphs[step].gif} alt="cute gif" className="h-[75px] object-contain drop-shadow-sm" />
                    </div>
                    <p className="mb-4">{paragraphs[step].text}</p>
                    <p className={`text-2xl text-center ${paragraphs[step].color} ${paragraphs[step].rotate} transform-gpu`} style={{ fontFamily: "var(--font-agbalumo)" }}>
                      {paragraphs[step].highlight}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Signature on last step */}
            <AnimatePresence>
              {step === paragraphs.length - 1 && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="pt-5 flex items-end justify-between border-t border-pink-100/60 mt-2 overflow-hidden"
                >
                  <div>
                    <p className="text-[10px] text-pink-400 font-bold tracking-widest uppercase mb-1">With love,</p>
                    <h3 className="text-4xl text-rose-500 -rotate-3" style={{ fontFamily: "var(--font-agbalumo)" }}>Fau</h3>
                  </div>
                  <img src="/gifs/cute2.gif" alt="kiss bye" className="w-[4.5rem] h-[4.5rem] object-contain -mr-3 -mb-3 drop-shadow-md" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="mt-4 shrink-0 flex items-center justify-between">
              {step > 0 ? (
                <button
                  onClick={() => setStep(s => s - 1)}
                  className="flex items-center gap-1 text-xs font-bold text-gray-500 bg-gray-50 px-3 py-2 rounded-full hover:bg-gray-100 transition-colors active:scale-95 shadow-sm border border-gray-100"
                >
                  <ChevronLeft className="w-4 h-4" /> Kembali
                </button>
              ) : (
                <div />
              )}

              {step < paragraphs.length - 1 && (
                <button
                  onClick={() => setStep(s => s + 1)}
                  className="flex items-center gap-1 text-sm font-bold text-rose-500 bg-rose-50 px-4 py-2 rounded-full hover:bg-rose-100 transition-colors active:scale-95 shadow-sm border border-rose-100"
                >
                  Lanjut <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>
        </motion.div>
      </div>
      </div>
    </div>
  );
}
