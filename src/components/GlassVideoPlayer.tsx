"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState, useRef } from "react";

export default function GlassVideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-rose-200/50 bg-white/40 p-2 backdrop-blur-md border border-white/60"
    >
      <div className="relative w-full h-full rounded-[20px] overflow-hidden bg-gray-100">
        <video
          ref={videoRef}
          src="/video/hbd.mp4"
          className="w-full h-full object-cover"
          onEnded={() => {
            setIsPlaying(false);
            window.dispatchEvent(new CustomEvent("videoPause"));
          }}
          onPause={() => {
            setIsPlaying(false);
            window.dispatchEvent(new CustomEvent("videoPause"));
          }}
          onPlay={() => {
            setIsPlaying(true);
            window.dispatchEvent(new CustomEvent("videoPlay"));
          }}
          playsInline
          controls={isPlaying}
        />
        
        {!isPlaying && (
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300">
            <button
              onClick={handlePlay}
              className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 text-white shadow-lg transform transition-transform hover:scale-110 active:scale-95"
            >
              <Play className="w-6 h-6 ml-1" fill="currentColor" />
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}
