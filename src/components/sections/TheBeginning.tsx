'use client';

import { motion } from 'framer-motion';
import { storyData } from '@/data/story';

import { MediaRender } from '@/components/MediaRender';

export function TheBeginning() {
  const { title, paragraphs, outro, photos } = storyData.beginning;

  return (
    <section className="relative w-full min-h-screen pt-32 pb-16 px-6 md:px-12 lg:px-24 flex flex-col items-center max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="text-center mb-24"
      >
        <h2 className="font-serif text-3xl md:text-5xl text-white/90 mb-4">{title}</h2>
        <div className="w-12 h-[1px] bg-white/20 mx-auto" />
      </motion.div>

      <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center w-full">
        {/* Photos Grid/Collage */}
        <div className="w-full max-w-sm mx-auto md:max-w-none md:w-1/2 relative aspect-square md:aspect-auto md:min-h-[600px] mb-8 md:mb-0">
          {photos.map((photo, idx) => (
            <motion.div
              key={idx}
              className={`absolute rounded-sm overflow-hidden shadow-2xl shadow-black/50 grayscale hover:grayscale-0 transition-all duration-700
                ${idx === 0 ? 'w-[65%] md:w-[70%] z-10 top-0 left-0 rotate-[-2deg]' : ''}
                ${idx === 1 ? 'w-[55%] md:w-[60%] z-20 top-20 md:top-24 right-0 rotate-[3deg]' : ''}
                ${idx === 2 ? 'w-[45%] md:w-[50%] z-30 bottom-16 md:bottom-12 left-8 md:left-12 rotate-[-1deg]' : ''}
                ${idx === 3 ? 'w-[35%] md:w-[40%] z-0 bottom-4 md:bottom-0 right-8 md:right-12 rotate-[4deg]' : ''}
              `}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
            >
              <MediaRender item={photo} className="w-full h-auto object-cover" />
            </motion.div>
          ))}
        </div>

        {/* Narrative */}
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-12">
          {paragraphs.map((p, idx) => {
            const isPunchline = p === '"más despacio"';
            
            return (
              <motion.p
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                className={`
                  ${isPunchline ? 'font-serif text-3xl md:text-4xl italic text-white/90 text-center py-8' : 'font-sans text-lg md:text-xl text-white/60 leading-relaxed'}
                `}
              >
                {p}
              </motion.p>
            );
          })}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-16 text-center"
      >
        <p className="font-serif text-2xl md:text-3xl text-white/80 italic">{outro}</p>
      </motion.div>
    </section>
  );
}
