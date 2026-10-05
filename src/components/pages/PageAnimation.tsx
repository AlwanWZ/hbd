"use client";

import { motion } from "framer-motion";

export default function PageAnimation() {
  return (
    <div className="relative min-h-full flex flex-col w-full">
      {/* Background nempel di belakang dan full size */}
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: "url('/animation-bg.jpg')" }}
      />
      {/* Overlay biar teks tetep kebaca dan elegan */}
      <div className="absolute inset-0 bg-pink-100/60 backdrop-blur-[3px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center flex-1 overflow-hidden">
      {/* Matahari/Bulan Cute */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-8"
      >
        <div className="w-16 h-16 bg-gradient-to-tr from-yellow-100 to-yellow-300 rounded-full shadow-[0_0_30px_rgba(253,224,71,0.8)] border-4 border-yellow-50 flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-yellow-500 fill-current" opacity="0.5">
             <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18.75a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM6.166 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM2.25 12a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zM5.106 6.166a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591z" />
          </svg>
        </div>
      </motion.div>

      {/* Butterfly */}
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[10%] z-20"
      >
        <img src="/gifs/kupu kupu.gif" alt="butterfly" className="w-16 h-16 object-contain opacity-80" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[30%] right-[5%] z-20 scale-75"
      >
        <img src="/gifs/kupu kupu.gif" alt="butterfly" className="w-16 h-16 object-contain opacity-70 scale-x-[-1]" />
      </motion.div>

      {/* Floating Gem */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] left-[5%] z-20"
      >
        <img src="/gifs/permata.gif" alt="gem" className="w-12 h-12 object-contain opacity-70" />
      </motion.div>

      {/* Awan-awan melayang */}
      <motion.div animate={{ x: [-100, 400] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute top-20 opacity-50 z-0">
        <svg width="100" height="60" viewBox="0 0 100 60" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M73 24c0-10.493-8.507-19-19-19-8.487 0-15.65 5.57-18.066 13.29-1.258-.838-2.766-1.328-4.382-1.328-4.324 0-7.83 3.507-7.83 7.832 0 .532.054 1.05.158 1.554C14.773 28.528 8 36.438 8 46c0 10.493 8.507 19 19 19h45c10.493 0 19-8.507 19-19 0-9.255-6.61-17-15.426-18.665.17-.674.26-1.373.26-2.09z" opacity="0.8"/>
        </svg>
      </motion.div>
      <motion.div animate={{ x: [400, -100] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute top-44 opacity-40 scale-75 z-0">
        <svg width="100" height="60" viewBox="0 0 100 60" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M73 24c0-10.493-8.507-19-19-19-8.487 0-15.65 5.57-18.066 13.29-1.258-.838-2.766-1.328-4.382-1.328-4.324 0-7.83 3.507-7.83 7.832 0 .532.054 1.05.158 1.554C14.773 28.528 8 36.438 8 46c0 10.493 8.507 19 19 19h45c10.493 0 19-8.507 19-19 0-9.255-6.61-17-15.426-18.665.17-.674.26-1.373.26-2.09z" opacity="0.8"/>
        </svg>
      </motion.div>

      {/* Main Bear on a Cloud */}
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 flex flex-col items-center mt-6"
      >
        {/* Floating Hearts from Phone */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`phone-heart-${i}`}
            className="absolute text-rose-400 z-20"
            style={{ left: '40%', bottom: '50%' }}
            initial={{ y: 0, x: 0, opacity: 0, scale: 0.5 }}
            animate={{ 
              y: -90 - (Math.random() * 50), 
              x: (Math.random() - 0.5) * 80,
              opacity: [0, 1, 0],
              scale: [0.5, 1.2, 1]
            }}
            transition={{ duration: 2.5, repeat: Infinity, delay: Math.random() * 2 }}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M12 21s-7.5-4.6-9.5-9.3C1 8 3.6 4.5 7.2 4.5c2 0 3.6 1.1 4.8 2.7 1.2-1.6 2.8-2.7 4.8-2.7 3.6 0 6.2 3.5 4.7 7.2C19.5 16.4 12 21 12 21z" />
            </svg>
          </motion.div>
        ))}

        {/* Bear playing phone */}
        <img 
          src="/gifs/lv2.gif" 
          alt="bear playing phone" 
          className="w-40 h-40 object-contain relative z-10" 
        />

        {/* Big Fluffy Cloud Underneath */}
        <div className="absolute top-[65%] w-56 h-20 bg-white rounded-[50px] shadow-[0_15px_30px_rgba(236,72,153,0.15)] flex justify-center z-0">
          <div className="absolute -top-6 left-6 w-16 h-16 bg-white rounded-full"></div>
          <div className="absolute -top-8 right-10 w-20 h-20 bg-white rounded-full"></div>
          <div className="absolute -top-4 right-4 w-12 h-12 bg-white rounded-full"></div>
        </div>
      </motion.div>
      
      {/* Teks Animasi yang Romantis */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", bounce: 0.5, duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-14 bg-white/80 backdrop-blur-md px-6 py-5 rounded-[1.5rem] border-2 border-pink-100 shadow-[0_10px_20px_rgba(225,29,72,0.05)] z-10 text-center mx-5 relative"
      >
        <p className="text-[1.3rem] text-rose-500 mb-2 leading-snug" style={{ fontFamily: "var(--font-agbalumo)" }}>
          Lagi senyum-senyum ngeliatin <br/>
          <span className="text-pink-400 text-xl">foto cantikmu...</span>
        </p>
        <p className="text-xs text-rose-500 font-medium bg-pink-100/50 inline-block px-4 py-2 rounded-full border border-pink-100 shadow-sm leading-relaxed">
          Walau terpisah jarak, <br/> Ichin selalu jadi tempat pulangnya hati ini.
        </p>
      </motion.div>

      {/* Extra Floating Background Hearts */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`bg-heart-${i}`}
          className="absolute text-pink-300 opacity-40 z-0"
          style={{ 
            left: `${Math.random() * 90}%`, 
            top: `${Math.random() * 90}%` 
          }}
          animate={{ y: [0, -30, 0], rotate: [0, 20, -20, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: Math.random() * 3 + 3, repeat: Infinity, delay: Math.random() * 2 }}
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
            <path d="M12 21s-7.5-4.6-9.5-9.3C1 8 3.6 4.5 7.2 4.5c2 0 3.6 1.1 4.8 2.7 1.2-1.6 2.8-2.7 4.8-2.7 3.6 0 6.2 3.5 4.7 7.2C19.5 16.4 12 21 12 21z" />
          </svg>
        </motion.div>
      ))}

      {/* Sparkles (Stars) */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute text-yellow-400 z-10"
          style={{ 
            left: `${Math.random() * 80 + 10}%`, 
            top: `${Math.random() * 80 + 10}%` 
          }}
          animate={{ scale: [0, 1, 0], opacity: [0, 0.7, 0], rotate: [0, 90] }}
          transition={{ duration: Math.random() * 2 + 2, repeat: Infinity, delay: Math.random() * 2 }}
        >
          <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current">
            <path d="M12 0l3.5 8.5L24 12l-8.5 3.5L12 24l-3.5-8.5L0 12l8.5-3.5L12 0z" />
          </svg>
        </motion.div>
      ))}
      </div>
    </div>
  );
}
