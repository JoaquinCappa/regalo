'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { storyData } from '@/data/story';

import { MediaRender } from '@/components/MediaRender';

export function Trips() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const { title, outro, years } = storyData.timePassing;

  return (
    <section ref={containerRef} className="relative w-full py-32 bg-[#050505]">
      <div className="text-center mb-24 px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-5xl text-white/90 mb-4"
        >
          {title}
        </motion.h2>
        <div className="w-12 h-[1px] bg-white/20 mx-auto" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative mt-16 md:mt-24">
        {/* Progress Line */}
        <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10" />
        
        <motion.div 
          className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/50 origin-top"
          style={{ scaleY: scrollYProgress }}
        />

        <div className="space-y-32">
          {years.map((year, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={year.id} className="relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16">
                
                {/* Dot */}
                <div className="absolute left-[22px] md:left-1/2 top-[6px] md:top-0 w-3 h-3 bg-[#050505] border-2 border-white/50 rounded-full md:-translate-x-[5px] z-10" />

                {/* Content */}
                <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-16 md:text-right md:justify-end md:ml-0' : 'md:pl-16 md:ml-[50%]'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                  >
                    <span className="font-sans text-xs tracking-widest text-white/40 uppercase block mb-2">{year.date}</span>
                    <h3 className="font-serif text-3xl md:text-4xl text-white/90 mb-4">{year.name}</h3>
                    <p className="font-sans text-white/60 leading-relaxed mb-8">{year.description}</p>
                    
                    {/* Photos */}
                    <div className={`flex gap-4 overflow-x-auto pb-4 hide-scrollbar ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                      {year.photos.map((photo, pIdx) => (
                        <div key={pIdx} className="w-[150px] h-[200px] flex-shrink-0 relative rounded-sm overflow-hidden border border-white/10 group cursor-pointer">
                           <div className="absolute inset-0 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700">
                             <MediaRender item={photo} className="w-full h-full object-cover" />
                           </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-32 text-center px-6 max-w-2xl mx-auto"
      >
        <p className="font-serif text-2xl md:text-3xl text-white/80 italic">{outro}</p>
      </motion.div>
    </section>
  );
}
