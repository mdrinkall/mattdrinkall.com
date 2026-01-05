import React from 'react';
import { motion } from 'framer-motion';

interface KeyMetricProps {
  label: string;
  metric: string;
  description: string;
  delay: number;
}

const KeyMetric: React.FC<KeyMetricProps> = ({ label, metric, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="flex flex-col p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
        {label}
      </div>
      <div className="text-2xl md:text-3xl font-bold text-emerald-600 mb-3">
        {metric}
      </div>
      <p className="text-sm text-slate-700 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export const Leverage: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-2xl md:text-3xl font-semibold text-slate-900 mb-12 md:mb-16 tracking-tight"
        >
          Key Impact Metrics
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <KeyMetric
            label="Autonomy"
            metric="500+"
            description="Styling changes released to live sites by non-technical teams using my UI editor—no engineering intervention required."
            delay={0}
          />

          <KeyMetric
            label="Efficiency"
            metric="24hrs → 3hrs"
            description="Support bot on Teams reduced mean ticket response from over 24 hours to instant replies, with changes going live in under 3 hours average."
            delay={0.1}
          />

          <KeyMetric
            label="Performance"
            metric="5MB → 1.5MB"
            description="Reduced homepage size from 5MB to 1.5MB and dev build time from 40s to 3s on the e-commerce platform."
            delay={0.2}
          />

          <KeyMetric
            label="AI Systems"
            metric="4,000+"
            description="Lines of production-grade code automatically generated and deployed by my AI systems."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};
