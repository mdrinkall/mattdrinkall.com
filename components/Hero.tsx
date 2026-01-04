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
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Alex Dev
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-8 font-light">
            Product-focused software engineer building internal platforms and AI systems used by thousands.
          </p>
          
          <div className="flex flex-wrap gap-3">
            <StatPill text="Company-wide platform owner" />
            <StatPill text="CTO showcased work" />
            <StatPill text="£100M+ revenue systems" />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative hidden md:block"
        >
          {/* Abstract geometric illustration placeholder using pure CSS/SVG */}
          <div className="w-full aspect-square bg-gradient-to-tr from-slate-100 to-slate-50 rounded-2xl overflow-hidden relative border border-slate-100">
             <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-emerald-500/5 rounded-full blur-3xl" />
             <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl" />
             <div className="absolute inset-0 flex items-center justify-center opacity-30">
               <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="80" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4 4"/>
                  <circle cx="100" cy="100" r="40" stroke="#94A3B8" strokeWidth="1"/>
               </svg>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
