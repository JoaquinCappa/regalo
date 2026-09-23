'use client';

import { motion } from 'framer-motion';
import { storyData } from '@/data/story';

export function FunnyFacts() {
  return (
    <section className="relative w-full py-32 px-6 bg-[#080808]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h2 className="font-serif text-3xl md:text-4xl text-white/80 mb-4 italic">{storyData.funnyFacts.title}</h2>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {storyData.funnyFacts.facts.map((fact, idx) => (
            <motion.div
              key={fact.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col border-l border-white/10 pl-6"
            >
              <span className="font-serif text-3xl text-white/90 mb-2">{fact.stat}</span>
              <span className="font-sans text-sm text-white/50 tracking-wide">{fact.description}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
