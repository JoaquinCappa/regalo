'use client';

import { useEffect, useRef, useState } from 'react';
import { useAudioStore } from '@/store/useAudioStore';
import { storyData } from '@/data/story';
import { Play, Pause } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { isPlaying, hasStarted, togglePlay } = useAudioStore();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!audioRef.current) {
      const src = storyData.settings.musicFile.startsWith('/') 
        ? `/regalo${storyData.settings.musicFile}` 
        : storyData.settings.musicFile;
      audioRef.current = new Audio(src);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.5;
    }

    if (isPlaying) {
      audioRef.current.play().catch(e => console.log("Audio play blocked by browser", e));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  if (!hasStarted) return null;

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 mix-blend-difference"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.span 
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="text-xs tracking-widest uppercase text-white/70"
          >
            {isPlaying ? 'Pausar' : 'Reproducir'}
          </motion.span>
        )}
      </AnimatePresence>
      <button
        onClick={togglePlay}
        className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-colors backdrop-blur-sm"
        aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
      >
        {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-1" />}
      </button>
    </div>
  );
}
