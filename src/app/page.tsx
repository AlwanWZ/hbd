"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import DigitalCover from "@/components/DigitalCover";
import ModernPageFlip from "@/components/ModernPageFlip";
import MusicToggle from "@/components/MusicToggle";
import WelcomeScreen from "@/components/WelcomeScreen";

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="relative w-full h-[100dvh] overflow-hidden bg-pink-50 font-sans selection:bg-pink-200 selection:text-pink-900">
      {/* Background Photo with cute pink overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-110 blur-md"
        style={{ backgroundImage: "url('/background.jpg')" }}
      ></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-pink-100/85 via-rose-50/80 to-pink-200/85"></div>

      <MusicToggle playSignal={isOpen} />
      
      <AnimatePresence mode="wait">
        {!hasEntered ? (
          <motion.div
            key="welcome"
            exit={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 z-50"
          >
            <WelcomeScreen onEnter={() => setHasEntered(true)} />
          </motion.div>
        ) : !isOpen ? (
          <motion.div
            key="cover"
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 z-20"
          >
            <DigitalCover onOpen={() => setIsOpen(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="book"
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            className="absolute inset-0 z-10"
          >
            <ModernPageFlip />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
