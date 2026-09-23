'use client';

import { motion } from 'framer-motion';
import { storyData } from '@/data/story';

import { MediaRender } from '@/components/MediaRender';

export function Outro() {
  const { date, birthday, message, finalWords, image } = storyData.outro;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-screen bg-[#000] flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background with extreme fade */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        viewport={{ once: true, margin: "-200px" }}
        transition={{ duration: 3 }}
      >
        <MediaRender item={image} className="w-full h-full object-cover object-center grayscale" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.5 }}
          className="font-sans text-sm tracking-[0.3em] text-white/50 mb-12"
        >
          {date}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 1.5 }}
          className="font-serif text-4xl md:text-6xl text-white mb-12"
        >
          {birthday}
        </motion.h2>

        {message && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 3 }}
            className="font-serif text-xl md:text-3xl text-white/70 italic mb-16"
          >
            "{message}"
          </motion.p>
        )}

        {finalWords && (
          <motion.h3
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3, delay: 4 }}
            className="font-serif text-3xl md:text-4xl text-white tracking-wide"
          >
            {finalWords}
          </motion.h3>
        )}
      </div>

      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 7 }}
        className="absolute bottom-12 font-sans text-[10px] tracking-widest uppercase text-white/30 hover:text-white/70 transition-colors"
      >
        Volver al principio
      </motion.button>
    </section>
  );
}
