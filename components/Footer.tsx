import React from 'react';
import { socials } from '../config/socials';

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-slate-100 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-slate-400 text-sm">
          Built with care.
        </div>
        <div className="flex gap-6">
          {/* <a
            href={socials.email}
            className="text-slate-500 hover:text-emerald-600 text-sm font-medium transition-colors"
          >
            Email
          </a> */}
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-emerald-600 text-sm font-medium transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-emerald-600 text-sm font-medium transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};
