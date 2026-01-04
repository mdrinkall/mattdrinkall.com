import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -20 }}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      className="pt-24 md:pt-32 pb-20 max-w-4xl mx-auto px-6"
    >
      {/* Back Link */}
      <motion.div variants={fadeInUp} className="mb-12">
        <Link to="/" className="inline-flex items-center text-slate-500 hover:text-slate-900 transition-colors text-sm font-medium group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Work
        </Link>
      </motion.div>

      {/* Hero Section */}
      <motion.section variants={fadeInUp} className="mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
          {project.title}
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light mb-8 max-w-2xl">
          {project.subtitle}
        </p>
        
        <ul className="flex flex-col md:flex-row gap-4 md:gap-8 mb-12 border-l-2 border-emerald-500 pl-6">
          {project.credibilityBullets.map((bullet, idx) => (
            <li key={idx} className="text-slate-700 font-medium text-sm">
              {bullet}
            </li>
          ))}
        </ul>

        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl bg-slate-100">
           <img src={project.heroImage} alt="Hero" className="w-full h-full object-cover" />
        </div>
      </motion.section>

      {/* The Problem */}
      <motion.section variants={fadeInUp} className="mb-20 bg-slate-50 p-8 md:p-12 rounded-2xl border border-slate-100">
        <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">The Problem</h2>
        <p className="text-lg text-slate-800 leading-relaxed max-w-3xl">
          {project.problem.text}
        </p>
      </motion.section>

      {/* Constraints */}
      <motion.section variants={fadeInUp} className="mb-20">
        <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-8">Constraints & Reality</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.constraints.map((constraint, idx) => (
            <div key={idx} className="flex items-start">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-4 flex-shrink-0" />
              <p className="text-slate-700 font-medium leading-relaxed">{constraint}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* The Solution */}
      <motion.section variants={fadeInUp} className="mb-24">
        <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-12">The Solution</h2>
        <div className="space-y-20">
          {project.solution.images.map((img, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                 <p className="text-lg text-slate-800 font-medium mb-4">
                    {img.alt}
                 </p>
                 <p className="text-slate-600 leading-relaxed">
                   {img.caption}
                 </p>
              </div>
              <div className={`rounded-xl overflow-hidden border border-slate-200 shadow-lg ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                 <img src={img.src} alt={img.alt} className="w-full h-auto" />
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Impact */}
      <motion.section variants={fadeInUp} className="mb-20">
         <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-wider mb-12">Impact & Outcomes</h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {project.impactStats.map((stat, idx) => (
              <div key={idx} className="border-t-2 border-slate-100 pt-4">
                <p className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{stat.value}</p>
                <p className="text-sm font-semibold text-slate-900 mb-1">{stat.label}</p>
                <p className="text-xs text-slate-500">{stat.description}</p>
              </div>
            ))}
         </div>
      </motion.section>

      {/* Ownership */}
      <motion.section variants={fadeInUp} className="mb-12 border border-slate-200 rounded-xl p-8 bg-white">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Ownership & Role</h3>
        <p className="text-slate-700 leading-relaxed">
          I owned this project end-to-end: from initial problem definition and technical design, through to implementation, deployment, and internal evangelism.
        </p>
      </motion.section>

      {/* Architecture (Optional) */}
      {project.architectureDiagram && (
        <motion.section variants={fadeInUp} className="mb-20">
          <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-8">High-Level Architecture</h2>
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
            <img src={project.architectureDiagram} alt="Architecture Diagram" className="w-full h-auto rounded-lg grayscale hover:grayscale-0 transition-all duration-500" />
          </div>
        </motion.section>
      )}

    </motion.div>
  );
};
