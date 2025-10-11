// ============================================
// src/components/sections/Hero.jsx
// ============================================
import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, ArrowRight, Sparkles, Rocket, ChevronDown } from 'lucide-react';
import { translations } from '../../data/translations';

export default function Hero({ scrollToSection, language, setCursorVariant }) {
  const t = translations[language];
  const roles = t.roles;
  const [currentRole, setCurrentRole] = useState(0);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let index = 0;
    const role = roles[currentRole];
    const timer = setInterval(() => {
      if (index <= role.length) {
        setTypedText(role.substring(0, index));
        index++;
      } else {
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length);
          setTypedText('');
          index = 0;
        }, 2000);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [currentRole, language]);

  const socialLinks = [
    { href: "https://github.com/Chava33165", icon: Github },
    { href: "https://www.linkedin.com/in/salvadorpantoja", icon: Linkedin },
    { href: "mailto:a22300165@ceti.mx", icon: Mail }
  ];

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-5xl w-full space-y-8 fade-in-section relative z-10">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full text-red-300 text-sm mb-4 scale-in hover:scale-110 transition-transform duration-300">
            <Sparkles size={16} className="animate-spin" />
            <span className="font-semibold">Available for Opportunities</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold leading-tight slide-in-left">
            {t.hero.greeting}{' '}
            <span className="gradient-text inline-block hover:scale-105 transition-transform duration-300">
              Salvador Pantoja
            </span>
          </h1>
          
          <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-300 h-16 typing-cursor slide-in-right flex items-center justify-center">
            <Rocket className="mr-3 text-red-400 animate-bounce" size={32} />
            {typedText}
          </div>

          <div className="flex flex-wrap gap-4 justify-center pt-6 scale-in">
            <button 
              onClick={() => scrollToSection('proyectos')}
              className="group px-8 py-4 bg-gradient-to-r from-red-500 to-blue-500 rounded-full font-semibold hover:shadow-2xl hover:shadow-red-500/50 transform hover:scale-110 transition-all duration-300 flex items-center gap-2 hover-lift"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              {t.hero.viewWork}
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="px-8 py-4 border-2 border-red-500 rounded-full font-semibold hover:bg-red-500/20 transition-all duration-300 flex items-center gap-2 hover:scale-110 hover-lift"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              <Mail size={20} />
              {t.hero.letsTalk}
            </button>
          </div>

          <div className="flex gap-4 justify-center pt-8">
            {socialLinks.map((social, idx) => (
              <a 
                key={idx}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="relative p-3 bg-gray-800 hover:bg-red-600 rounded-full transition-all hover:scale-125 duration-300 group"
                style={{ animationDelay: `${idx * 0.1}s` }}
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                <social.icon size={24} />
                <span className="absolute inset-0 rounded-full border-2 border-red-400 pulse-ring opacity-0 group-hover:opacity-100"></span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-center pt-8">
          <ChevronDown 
            className="animate-bounce text-red-400 cursor-pointer hover:scale-125 transition-transform duration-300" 
            size={40}
            onClick={() => scrollToSection('sobre-mi')}
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => setCursorVariant('default')}
          />
        </div>
      </div>
    </section>
  );
}