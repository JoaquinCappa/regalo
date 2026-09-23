'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { storyData } from '@/data/story';

import { MediaRender } from '@/components/MediaRender';

export function PhotoAlbum() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const { title, photos } = storyData.photoAlbum;
  
  if (!photos || photos.length === 0) return null;

  return (
    <section ref={containerRef} className="relative w-full py-32 bg-[#080808] overflow-hidden">
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20 px-6"
      >
        <h2 className="font-serif text-3xl md:text-5xl text-white/90 mb-4">{title}</h2>
        <div className="w-12 h-[1px] bg-white/20 mx-auto" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          
          {/* Column 1 */}
          <motion.div style={{ y: y1 }} className="flex-1 flex flex-col gap-16 md:mt-24">
            {photos.filter((_, i) => i % 2 === 0).map((photo, i) => (
              <motion.div 
                key={`c1-${i}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                className={`relative w-full overflow-hidden border border-white/5 ${i % 3 === 0 ? 'aspect-square' : 'aspect-[3/4]'}`}
              >
                <div className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-1000">
                  <MediaRender item={photo} className="w-full h-full object-cover" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Column 2 */}
          <motion.div style={{ y: y2 }} className="flex-1 flex flex-col gap-16">
            {photos.filter((_, i) => i % 2 !== 0).map((photo, i) => (
              <motion.div 
                key={`c2-${i}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                className={`relative w-full overflow-hidden border border-white/5 ${i % 2 === 0 ? 'aspect-[4/3]' : 'aspect-[3/4]'}`}
              >
                <div className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-1000">
                  <MediaRender item={photo} className="w-full h-full object-cover" />
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

