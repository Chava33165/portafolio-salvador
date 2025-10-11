// ============================================
// src/components/layout/Navbar.jsx
// ============================================
import React from 'react';
import { Menu, X, Globe, Download } from 'lucide-react';
import { translations } from '../../data/translations';

export default function Navbar({ 
  scrolled, 
  menuOpen, 
  setMenuOpen, 
  activeSection, 
  scrollToSection,
  language,
  setLanguage,
  setCursorVariant
}) {
  const t = translations[language];

  const navItems = [
    { id: 'inicio', label: t.nav.home },
    { id: 'sobre-mi', label: t.nav.about },
    { id: 'proyectos', label: t.nav.projects },
    { id: 'experiencia', label: t.nav.experience },
    { id: 'contacto', label: t.nav.contact }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl shadow-2xl shadow-red-500/20 border-b border-red-500/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <h1 
          className="text-2xl font-bold gradient-text cursor-pointer hover:scale-110 transition-transform duration-300"
          onClick={() => scrollToSection('inicio')}
        >
          {language === 'es' ? '💼 Mi Portafolio' : '💼 My Portfolio'}
        </h1>
        
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative font-medium hover:text-red-400 transition-all duration-300 hover:scale-110 ${
                activeSection === item.id ? 'text-red-400' : ''
              }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-red-400 to-blue-400 rounded-full animate-glow"></span>
              )}
            </button>
          ))}
          
          <button
            onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800/80 hover:bg-gray-700 rounded-full transition-all hover:scale-110 border border-gray-700 hover:border-red-500 duration-300"
            title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            <Globe size={18} className="text-red-400" />
            <span className="text-sm font-semibold">{language === 'es' ? 'EN' : 'ES'}</span>
          </button>
          
          <a 
            href="/Mi CV.pdf" 
            download
            className="px-6 py-2.5 bg-gradient-to-r from-red-500 to-blue-500 rounded-full font-semibold hover:shadow-2xl hover:shadow-red-500/50 transition-all flex items-center gap-2 hover:scale-110 duration-300 animate-glow"
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            <Download size={16} className="animate-bounce" />
            {t.nav.downloadCV}
          </a>
        </div>

        <button 
          className="md:hidden p-2 hover:scale-110 transition-transform" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} className="text-red-400" /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-gray-900/98 backdrop-blur-xl border-t border-gray-800 scale-in">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left px-6 py-4 hover:bg-red-900/30 transition-all border-b border-gray-800 hover:translate-x-2 duration-300"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              setLanguage(language === 'es' ? 'en' : 'es');
              setMenuOpen(false);
            }}
            className="flex items-center gap-3 w-full px-6 py-4 hover:bg-red-900/30 transition-all border-b border-gray-800 hover:translate-x-2 duration-300"
          >
            <Globe size={20} className="text-red-400" />
            <span>{language === 'es' ? 'English' : 'Español'}</span>
          </button>
        </div>
      )}
    </nav>
  );
}
