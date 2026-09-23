'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { useAudioStore } from '@/store/useAudioStore';

export function ProgressIndicator() {
  const { scrollYProgress } = useScroll();
  const { hasStarted } = useAudioStore();
  const [currentSection, setCurrentSection] = useState(1);
  const totalSections = 10;

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      // Calculate which section we're in based on scroll progress.
      // This is a rough estimation since sections have different heights.
      // A more robust way would be IntersectionObserver on section IDs, 
      // but for this linear cinematic experience, this works well enough.
      const section = Math.min(
        totalSections,
        Math.max(1, Math.ceil(latest * totalSections))
      );
      setCurrentSection(section);
    });
  }, [scrollYProgress, totalSections]);

  if (!hasStarted) return null;

  return (
    <div className="fixed top-1/2 left-6 -translate-y-1/2 z-50 mix-blend-difference hidden md:flex flex-col items-center gap-4">
      <span className="font-sans text-xs tracking-widest text-white/50">
        {String(currentSection).padStart(2, '0')}
      </span>
      <div className="w-[1px] h-24 bg-white/10 relative">
        <motion.div 
          className="absolute top-0 left-0 w-full bg-white origin-top"
          style={{ scaleY: scrollYProgress }}
        />
      </div>
      <span className="font-sans text-xs tracking-widest text-white/30">
        {totalSections}
      </span>
    </div>
  );
}
