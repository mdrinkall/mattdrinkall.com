import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { socials } from '../config/socials';

export const Navigation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';

  const handleWorkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (isHome) {
      const section = document.getElementById('featured-work');
      section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById('featured-work');
        section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-slate-200/50"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-slate-900 font-bold text-lg tracking-tight hover:opacity-80 transition-opacity">
          Matthew Drinkall
        </Link>

        <div className="flex gap-8">
          <a
            href="#featured-work"
            onClick={handleWorkClick}
            className={`text-sm font-medium transition-colors ${isHome ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}
          >
            Work
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-slate-500 hover:text-emerald-600 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
};
