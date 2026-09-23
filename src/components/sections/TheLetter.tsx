'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { storyData } from '@/data/story';
import { Mail } from 'lucide-react';

export function TheLetter() {
  const [isOpen, setIsOpen] = useState(false);
  const { preTitle, postTitle, paragraphs, signature } = storyData.letter;

  return (
    <section className="relative w-full py-40 px-6 bg-[#0a0a0a] flex flex-col items-center justify-center min-h-screen">
      
      {!isOpen ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center cursor-pointer group"
          onClick={() => setIsOpen(true)}
        >
          <p className="font-serif text-2xl text-white/50 italic mb-8">{preTitle}</p>
          
          <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/30 transition-all duration-500 mb-8">
            <Mail className="w-8 h-8 text-white/70 group-hover:text-white transition-colors" strokeWidth={1} />
          </div>

          <p className="font-serif text-3xl text-white/90 group-hover:text-white transition-colors">{postTitle}</p>
          <span className="mt-6 font-sans text-xs tracking-widest text-white/30 uppercase group-hover:text-white/50 transition-colors">Abrir carta</span>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full max-w-2xl mx-auto bg-[#111] border border-white/10 p-8 md:p-16 rounded-sm shadow-2xl relative"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-white/20" />
          
          <div className="space-y-6 font-serif text-lg md:text-xl text-white/80 leading-relaxed text-balance">
            {paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-white/5 text-right">
            <p className="font-serif text-2xl text-white/90 italic">{signature}</p>
          </div>
        </motion.div>
      )}

    </section>
  );
}
