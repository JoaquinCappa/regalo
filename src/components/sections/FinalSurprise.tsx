'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { storyData } from '@/data/story';

import { MediaRender } from '@/components/MediaRender';

export function FinalSurprise() {
  const [isOpen, setIsOpen] = useState(false);
  const { preTitle, buttonText, postTitle, type, content } = storyData.surprise;

  return (
    <section className="relative w-full py-40 px-6 bg-[#050505] flex flex-col items-center justify-center min-h-[60vh]">
      
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="button"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <p className="font-serif text-2xl md:text-3xl text-white/80 mb-12 italic">{preTitle}</p>
            
            <button
              onClick={() => setIsOpen(true)}
              className="px-12 py-4 border border-white/30 rounded-sm text-white tracking-[0.3em] text-sm hover:bg-white hover:text-black transition-all duration-500"
            >
              {buttonText}
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex flex-col items-center w-full max-w-[1200px]"
          >
            {postTitle && <p className="font-serif text-2xl md:text-3xl text-white/90 mb-12 italic">{postTitle}</p>}

            {(type === 'image' || type === 'video') && (
              <div className="relative w-full h-[70vh] md:h-[85vh] border border-white/10 rounded-lg overflow-hidden bg-black flex flex-col items-center justify-center shadow-2xl shadow-white/5">
                {content.src && content.src !== '/images/placeholder.jpg' ? (
                  <MediaRender 
                    item={{ src: content.src, type: type as 'image' | 'video' }} 
                    className="absolute inset-0 w-full h-full object-contain"
                    controls={type === 'video'}
                    autoPlay={false}
                    muted={false}
                  />
                ) : null}
                {content.text && (
                  <div className="relative z-10 bg-black/50 p-6 rounded-md backdrop-blur-sm mt-auto pointer-events-none mb-8">
                    <p className="font-sans text-white/80">{content.text}</p>
                  </div>
                )}
              </div>
            )}
            
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

