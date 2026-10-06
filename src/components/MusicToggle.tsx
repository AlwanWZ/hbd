"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

interface MusicToggleProps {
  playSignal: boolean;
}

export default function MusicToggle({ playSignal }: MusicToggleProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (playSignal && audioRef.current && !isPlaying) {
      audioRef.current.play().catch((err) => console.log("Audio play error:", err));
      setIsPlaying(true);
    }
  }, [playSignal]);

  // Listener buat auto-pause pas video diputar
  useEffect(() => {
    const handleVideoPlay = () => {
      if (audioRef.current && isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
        // simpan state kalau musik mati gara2 video
        audioRef.current.dataset.pausedByVideo = "true"; 
      }
    };

    const handleVideoPause = () => {
      if (audioRef.current && audioRef.current.dataset.pausedByVideo === "true") {
        audioRef.current.play().catch(e => console.log(e));
        setIsPlaying(true);
        audioRef.current.dataset.pausedByVideo = "false";
      }
    };

    window.addEventListener("videoPlay", handleVideoPlay);
    window.addEventListener("videoPause", handleVideoPause);

    return () => {
      window.removeEventListener("videoPlay", handleVideoPlay);
      window.removeEventListener("videoPause", handleVideoPause);
    };
  }, [isPlaying]);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => console.log("Audio play error:", err));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <audio
        ref={audioRef}
        src="/music/raim.mp3"
        loop
      />
      <button
        onClick={toggleMusic}
        className={cn(
          "p-3 rounded-full bg-white/30  border border-white/40 shadow-[0_4px_15px_rgba(236,72,153,0.15)] transition-all duration-300",
          isPlaying ? "text-pink-500" : "text-gray-400"
        )}
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>
    </div>
  );
}
