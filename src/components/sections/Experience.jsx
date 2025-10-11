// ============================================
// src/components/sections/Experience.jsx
// ============================================
import React from 'react';
import { Calendar, Award, TrendingUp } from 'lucide-react';
import { translations } from '../../data/translations';
import { experience, experienceDescriptions } from '../../data/experience';

export default function Experience({ language, setCursorVariant }) {
  const t = translations[language];
  const descriptions = experienceDescriptions[language];

  return (
    <section id="experiencia" className="py-20 px-4 bg-black/20 fade-in-section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text inline-block">
            {t.experience.title}
          </h2>
          <p className="text-gray-400 text-lg">{t.experience.subtitle}</p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-purple-500 to-blue-500 animate-pulse"></div>
          
          <div className="space-y-12">
            {experience.map((exp, i) => (
              <div key={i} className="relative pl-20" style={{ animationDelay: `${i * 0.2}s` }}>
                <div className="absolute left-5 top-2 w-6 h-6 bg-red-500 rounded-full border-4 border-gray-900 shadow-lg shadow-red-500/50 animate-pulse">
                  <div className="absolute inset-0 rounded-full border-2 border-red-400 pulse-ring"></div>
                </div>
                
                <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all duration-500 group hover-lift">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-red-400 group-hover:text-blue-400 transition-colors duration-300">
                        {descriptions[i].puesto}
                      </h3>
                      <p className="text-lg text-gray-300 font-semibold mt-1 group-hover:text-white transition-colors duration-300">
                        {descriptions[i].empresa}
                      </p>
                    </div>
                    <span className="flex items-center gap-2 text-sm text-gray-400 bg-gray-700/50 px-4 py-2 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Calendar size={16} className="animate-pulse" />
                      {descriptions[i].periodo}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {descriptions[i].descripcion}
                  </p>
                  
                  {exp.certificadoURL && (
                    <div className="mt-4 mb-6">
                      <a 
                        href={exp.certificadoURL} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500 to-blue-500 rounded-full font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all hover:scale-110 duration-300"
                        onMouseEnter={() => setCursorVariant('hover')}
                        onMouseLeave={() => setCursorVariant('default')}
                      >
                        <Award size={16} className="animate-bounce" />
                        {t.experience.viewCertificate}
                      </a>
                    </div>
                  )}

                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-red-300 flex items-center gap-2">
                      <TrendingUp size={16} className="animate-pulse" />
                      {t.experience.achievements}
                    </p>
                    <ul className="space-y-2">
                      {descriptions[i].logros.map((logro, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-gray-400 hover:text-gray-300 transition-colors duration-300">
                          <span className="text-red-400 mt-1 animate-pulse">▸</span>
                          {logro}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}