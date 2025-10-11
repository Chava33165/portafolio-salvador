// ============================================
// src/components/layout/Footer.jsx
// ============================================
import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { translations } from '../../data/translations';

export default function Footer({ language, setCursorVariant }) {
  const t = translations[language];

  const socialLinks = [
    { href: "https://github.com/Chava33165", icon: Github },
    { href: "https://www.linkedin.com/in/salvadorpantoja", icon: Linkedin },
    { href: "https://www.instagram.com/chava33p?igsh=MTN2Zno2NjJzaHd0dQ%3D%3D&utm_source=qr", icon: Instagram }
  ];

  return (
    <footer className="py-12 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-2">
              "{t.footer.quote}"
            </h3>
            <p className="text-gray-400 text-sm">
              — {t.footer.author}
            </p>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social, idx) => (
              <a 
                key={idx}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-gray-800 hover:bg-red-600 rounded-full transition-all hover:scale-125 duration-300 group relative"
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                <social.icon size={20} />
                <span className="absolute inset-0 rounded-full border-2 border-red-400 pulse-ring opacity-0 group-hover:opacity-100"></span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p className="hover:text-red-400 transition-colors duration-300">
            © 2025 Pantoja Vera Salvador Antonio. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}