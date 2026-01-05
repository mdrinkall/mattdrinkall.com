import React from 'react';
import { motion } from 'framer-motion';
import { StatPill } from './ui/StatPill';

export const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-24 md:pt-48 md:pb-32 max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center gap-4 mb-6">
            <img
              src="https://c4aoo4zznfhkvamz.public.blob.vercel-storage.com/headshot.jpg"
              alt="Matthew Drinkall"
              className="w-24 h-24 rounded-full border-2 border-slate-200 object-cover"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Matthew Drinkall
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-8 font-light">
            Product-focused full-stack engineer building scalable platforms and AI-enabled tooling used daily in production.
          </p>
          
          <div className="flex flex-wrap gap-3">
            <StatPill text="Largest platform contributor" />
            <StatPill text="Demoed to 2,000+ employees" />
            <StatPill text="£100M+ processed annually" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative hidden md:block"
        >
          <div className="w-full aspect-video rounded-2xl overflow-hidden relative border border-slate-200">
            <img
              src="https://c4aoo4zznfhkvamz.public.blob.vercel-storage.com/IMG_3205.jpg"
              alt="Landing page"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
