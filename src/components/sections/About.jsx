// ============================================
// src/components/sections/About.jsx
// ============================================
import React from 'react';
import { User, Zap, BookOpen, Code } from 'lucide-react';
import { translations } from '../../data/translations';
import { skills } from '../../data/skills';

export default function About({ language, setCursorVariant }) {
  const t = translations[language];

  const badges = [
    { icon: BookOpen, label: t.about.badges.learner, color: 'red' },
    { icon: Code, label: t.about.badges.cleanCode, color: 'blue' },
    { icon: Zap, label: t.about.badges.problemSolver, color: 'purple' }
  ];

  const storyParagraphs = [
    t.about.story.p1,
    t.about.story.p2,
    t.about.story.p3,
    t.about.story.p4
  ];

  return (
    <section id="sobre-mi" className="py-20 px-4 fade-in-section relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text inline-block">
            {t.about.title}
          </h2>
          <p className="text-gray-400 text-lg">{t.about.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all duration-500 hover-lift">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <User className="text-red-400 animate-pulse" />
                {t.about.myStory}
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                {storyParagraphs.map((paragraph, idx) => (
                  <p key={idx} className="hover:text-white transition-colors duration-300">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                {badges.map((badge, idx) => (
                  <span 
                    key={idx}
                    className={`flex items-center gap-2 px-4 py-2 bg-${badge.color}-500/20 border border-${badge.color}-500/30 rounded-full text-${badge.color}-300 text-sm hover:scale-110 transition-transform duration-300 cursor-pointer`}
                    onMouseEnter={() => setCursorVariant('hover')}
                    onMouseLeave={() => setCursorVariant('default')}
                  >
                    <badge.icon size={16} />
                    {badge.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all duration-500 hover-lift">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Zap className="text-red-400 animate-pulse" />
              {t.about.techStack}
            </h3>
            <div className="space-y-6">
              {skills.map((skill, i) => (
                <div key={i} className="space-y-2 group">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-semibold text-white group-hover:text-red-400 transition-colors duration-300">
                        {skill.nombre}
                      </span>
                      <span className="text-xs text-gray-500 ml-2">{skill.categoria}</span>
                    </div>
                    <span className="text-red-400 font-bold text-sm group-hover:scale-125 transition-transform duration-300">
                      {skill.nivel}%
                    </span>
                  </div>
                  <div className="h-2.5 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-full transition-all duration-1000 relative group-hover:animate-pulse"
                      style={{ width: `${skill.nivel}%` }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
