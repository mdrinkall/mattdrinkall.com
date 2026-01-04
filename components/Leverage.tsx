import React from 'react';
import { motion } from 'framer-motion';

interface LeveragePrincipleProps {
  title: string;
  body: string;
  example: string;
  delay: number;
}

const LeveragePrinciple: React.FC<LeveragePrincipleProps> = ({ title, body, example, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="flex flex-col"
    >
      <h3 className="text-lg font-semibold text-slate-900 mb-3">
        {title}
      </h3>
      <p className="text-slate-600 leading-relaxed mb-4">
        {body}
      </p>
      <p className="text-sm text-slate-500 leading-relaxed">
        {example}
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
          How I Create Leverage
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          <LeveragePrinciple
            title="Product Judgment"
            body="I identify the bottleneck that actually slows teams down — not the loudest one — and design systems that remove it permanently."
            example="Example: replacing weeks of UI deployment friction with autonomous styling pipelines for non-technical teams."
            delay={0}
          />

          <LeveragePrinciple
            title="Systems Over Features"
            body="I build platforms that compound over time: guardrails, observability, and ownership models that scale beyond the first release."
            example="Example: multi-tenant commerce architecture that sustained £100M+ peak traffic without downtime."
            delay={0.1}
          />

          <LeveragePrinciple
            title="Trustworthy AI in Production"
            body="I ship AI where failure matters — with human-in-the-loop workflows, auditability, latency guarantees, and cost controls."
            example="Example: internal RAG agents used daily across engineering and operations."
            delay={0.2}
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm text-slate-500 text-center md:text-left max-w-3xl"
        >
          I'm trusted with ambiguous, high-stakes problems because I optimise for outcomes, not optics.
        </motion.p>
      </div>
    </section>
  );
};
