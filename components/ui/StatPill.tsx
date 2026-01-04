import React from 'react';

interface StatPillProps {
  text: string;
}

export const StatPill: React.FC<StatPillProps> = ({ text }) => {
  return (
    <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200">
      {text}
    </div>
  );
};
