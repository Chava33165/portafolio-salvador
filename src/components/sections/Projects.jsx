// ============================================
// src/components/sections/Projects.jsx
// ============================================
import React from 'react';
import { Github, ExternalLink, Star } from 'lucide-react';
import { translations } from '../../data/translations';
import { projects, projectDescriptions } from '../../data/projects';

export default function Projects({ language, setCursorVariant }) {
  const t = translations[language];
  const descriptions = projectDescriptions[language];

  return (
    <section id="proyectos" className="py-20 px-4 fade-in-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text inline-block">
            {t.projects.title}
          </h2>
          <p className="text-gray-400 text-lg">{t.projects.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proyecto, i) => (
            <div 
              key={i}
              className="project-card group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-red-500 transition-all duration-500"
              style={{ animationDelay: `${i * 0.1}s` }}
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              <div className={`relative w-full h-64 bg-gradient-to-br ${proyecto.color} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-all duration-500"></div>
                
                {proyecto.imagen && (proyecto.imagen.startsWith('/') || proyecto.imagen.startsWith('http') || proyecto.imagen.startsWith('data:')) ? (
                  <img
                    src={proyecto.imagen}
                    alt={`${proyecto.titulo} screenshot`}
                    className="w-full h-full object-cover relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
                  />
                ) : (
                  <span className="relative z-10 text-8xl group-hover:scale-125 transition-transform duration-500">
                    {proyecto.imagen}
                  </span>
                )}
                
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  <a 
                    href={proyecto.github} 
                    className="p-4 bg-white rounded-full text-gray-900 hover:scale-125 transition-transform shadow-2xl animate-bounce"
                    title={t.projects.viewCode}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={24} />
                  </a>
                </div>

                {proyecto.destacado && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 animate-pulse">
                    <Star size={12} className="animate-spin" />
                    {t.projects.featured}
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-red-400 transition-colors duration-300">
                  {proyecto.titulo}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {descriptions[i].descripcion}
                </p>
                <div className="flex flex-wrap gap-2">
                  {proyecto.tecnologias.map((tech, j) => (
                    <span 
                      key={j} 
                      className="px-3 py-1 bg-red-500/20 border border-red-500/30 text-red-300 rounded-full text-xs font-semibold hover:bg-red-500/40 hover:scale-110 transition-all duration-300 cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/Chava33165?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-800 hover:bg-red-600 rounded-full font-semibold transition-all hover:scale-110 duration-300 hover-lift"
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            <Github size={20} className="animate-spin" />
            {t.projects.allProjects}
            <ExternalLink size={16} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
