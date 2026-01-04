import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

export const FeaturedWork: React.FC = () => {
  return (
    <section id="featured-work" className="py-12 max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-12">
          Featured Work
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link key={project.id} to={`/project/${project.id}`}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group h-full bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 flex flex-col"
              >
                <div className="mb-6 h-48 bg-slate-50 rounded-lg overflow-hidden relative">
                   {/* Grayscale to color on hover effect */}
                   <img 
                      src={project.heroImage} 
                      alt={project.title}
                      className="w-full h-full object-cover filter grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                   />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                  {project.shortDescription}
                </p>
                
                <div className="pt-6 border-t border-slate-100">
                  <p className="text-xs font-mono text-emerald-600 font-medium">
                    {project.impactMetric}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
