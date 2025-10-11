import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function ScrollToTop({ scrollToSection, setCursorVariant }) {
  return (
    <button
      onClick={() => scrollToSection('inicio')}
      className="fixed bottom-8 left-8 p-4 bg-gradient-to-r from-red-500 to-blue-500 rounded-full shadow-2xl hover:shadow-red-500/50 transition-all hover:scale-125 z-40 animate-bounce group"
      onMouseEnter={() => setCursorVariant('hover')}
      onMouseLeave={() => setCursorVariant('default')}
    >
      <ChevronDown size={24} className="rotate-180 group-hover:animate-pulse" />
      <span className="absolute inset-0 rounded-full border-2 border-red-400 pulse-ring opacity-0 group-hover:opacity-100"></span>
    </button>
  );
}