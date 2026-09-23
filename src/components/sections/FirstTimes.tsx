'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { storyData, FirstTime } from '@/data/story';

import { MediaRender } from '@/components/MediaRender';

export function FirstTimes() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <section className="relative w-full pt-16 pb-32 px-6 md:px-12 lg:px-24 bg-[#080808]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h2 className="font-serif text-3xl md:text-5xl text-white/90 mb-6">{storyData.firstTimes.title}</h2>
        <p className="font-serif text-xl md:text-2xl text-white/50 italic mb-8 max-w-2xl mx-auto">{storyData.firstTimes.subtitle}</p>
        <div className="w-12 h-[1px] bg-white/20 mx-auto" />
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {storyData.firstTimes.cards.map((card) => (
          <motion.div
            key={card.id}
            layoutId={`card-${card.id}`}
            onClick={() => setSelectedId(card.id)}
            className="group relative h-[300px] overflow-hidden rounded-md cursor-pointer bg-neutral-900 border border-white/5"
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 opacity-40 group-hover:opacity-70 transition-opacity duration-700 grayscale group-hover:grayscale-0">
              <MediaRender item={card.photo} className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <motion.h3 className="font-serif text-2xl text-white mb-2">{card.title}</motion.h3>
              <p className="font-sans text-xs tracking-widest text-white/50 uppercase">Abrir recuerdo</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-pointer"
            />
            
            <motion.div
              layoutId={`card-${selectedId}`}
              className="relative w-full max-w-2xl bg-[#111] rounded-lg overflow-hidden border border-white/10 z-10"
            >
              {(() => {
                const card = storyData.firstTimes.cards.find(c => c.id === selectedId);
                if (!card) return null;
                return (
                  <div className="flex flex-col md:flex-row h-full">
                    <div className="w-full md:w-1/2 h-[300px] md:h-[500px] relative">
                      <MediaRender item={card.photo} className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                    <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                      <span className="font-sans text-xs tracking-[0.2em] text-white/40 mb-4">{card.date}</span>
                      <h3 className="font-serif text-3xl text-white/90 mb-6">{card.title}</h3>
                      <p className="font-sans text-white/60 leading-relaxed text-sm md:text-base">
                        {card.memory}
                      </p>
                      <button 
                        onClick={() => setSelectedId(null)}
                        className="mt-12 self-start font-sans text-xs tracking-widest text-white/50 hover:text-white transition-colors border-b border-white/20 pb-1"
                      >
                        CERRAR
                      </button>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
