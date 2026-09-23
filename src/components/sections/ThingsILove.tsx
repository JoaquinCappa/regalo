'use client';

import { motion } from 'framer-motion';
import { storyData } from '@/data/story';

export function ThingsILove() {
  return (
    <section className="relative w-full py-32 px-6 md:px-12 bg-[#050505]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <h2 className="font-serif text-3xl md:text-5xl text-white/90 mb-4">{storyData.thingsILove.title}</h2>
        <div className="w-12 h-[1px] bg-white/20 mx-auto" />
      </motion.div>

      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6">
        {storyData.thingsILove.items.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] p-8 border border-white/5 bg-[#0a0a0a] hover:bg-white/5 transition-colors duration-500 rounded-sm cursor-default"
          >
            <h3 className="font-serif text-xl text-white/80 mb-4 group-hover:text-white transition-colors">{item.title}</h3>
            <p className="font-sans text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
