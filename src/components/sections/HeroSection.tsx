'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { storyData } from '@/data/story';
import { useAudioStore } from '@/store/useAudioStore';

import { MediaRender } from '@/components/MediaRender';

export function HeroSection() {
  const { startExperience, hasStarted } = useAudioStore();
  const [showTransition, setShowTransition] = useState(false);

  const handleOpen = () => {
    startExperience();
    setShowTransition(true);
    
    // Auto hide transition and allow scroll
    setTimeout(() => {
      setShowTransition(false);
      // Ensure we are at the top when transition ends to see the next section naturally
      // or we can programmatically scroll to the next section
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }, 6000);
  };

  return (
    <>
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image */}
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: hasStarted ? 1 : 1.1 }}
          transition={{ duration: 4, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-black/60 z-10" />
          <MediaRender item={storyData.hero.primaryImage} className="w-full h-full object-cover object-center opacity-80" loading="eager" />
        </motion.div>

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-3xl">
          <motion.p 
            className="font-sans tracking-[0.3em] text-sm text-white/60 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {storyData.hero.date}
          </motion.p>
          
          <motion.h1 
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {storyData.hero.title}
          </motion.h1>
          
          <motion.p 
            className="font-serif text-lg md:text-2xl text-white/80 italic mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            {storyData.hero.subtitle}
          </motion.p>

          {!hasStarted && (
            <motion.button
              onClick={handleOpen}
              className="group relative px-8 py-3 overflow-hidden rounded-full border border-white/30 bg-transparent text-white tracking-widest text-sm hover:border-white transition-colors duration-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <span className="relative z-10">{storyData.hero.buttonText}</span>
              <div className="absolute inset-0 h-full w-full bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.button>
          )}
        </div>

        {/* Scroll indicator */}
        {hasStarted && !showTransition && (
          <motion.div 
            className="absolute bottom-10 z-20 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
          >
            <span className="text-[10px] tracking-[0.2em] uppercase text-white/50">Empezar el recorrido</span>
            <motion.div 
              className="w-[1px] h-12 bg-white/30"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            />
          </motion.div>
        )}
      </section>

      {/* Cinematic Transition Overlay */}
      <AnimatePresence>
        {showTransition && (
          <motion.div 
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center text-center px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="font-serif text-3xl md:text-5xl text-white mb-8"
            >
              {storyData.introTransition.line1}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.5 }}
              className="font-serif text-xl md:text-2xl text-white/70 italic mb-4"
            >
              {storyData.introTransition.line2}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 4 }}
              className="font-serif text-xl md:text-2xl text-white/70 italic"
            >
              {storyData.introTransition.line3}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
