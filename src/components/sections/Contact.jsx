// ============================================
// src/components/sections/Contact.jsx
// ============================================
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { translations } from '../../data/translations';

export default function Contact({ language, setCursorVariant }) {
  const t = translations[language];
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    setFormData({ nombre: '', email: '', mensaje: '' });
  };

  const contactInfo = [
    { href: "mailto:a22300165@ceti.mx", icon: Mail, label: t.contact.email, value: "a22300165@ceti.mx" },
    { href: "tel:+523332202065", icon: Phone, label: t.contact.phone, value: "+52 33 3220 2065" },
    { href: null, icon: MapPin, label: t.contact.location, value: "Guadalajara, México" }
  ];

  const socialLinks = [
    { href: "https://github.com/Chava33165", icon: Github },
    { href: "https://www.linkedin.com/in/salvadorpantoja", icon: Linkedin },
    { href: "mailto:a22300165@ceti.mx", icon: Mail }
  ];

  return (
    <section id="contacto" className="py-20 px-4 bg-black/20 fade-in-section">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text inline-block">
            {t.contact.title}
          </h2>
          <p className="text-gray-400 text-lg">{t.contact.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all duration-500 hover-lift">
              <h3 className="text-2xl font-bold mb-6">{t.contact.info}</h3>
              
              <div className="space-y-4">
                {contactInfo.map((item, idx) => (
                  <a 
                    key={idx}
                    href={item.href || "#"} 
                    className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-xl hover:bg-red-600/20 transition-all duration-300 group hover:scale-105"
                    onMouseEnter={() => setCursorVariant('hover')}
                    onMouseLeave={() => setCursorVariant('default')}
                  >
                    <div className="p-3 bg-red-500/20 rounded-lg group-hover:bg-red-500 transition-colors duration-300">
                      <item.icon className="text-red-400 group-hover:text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{item.label}</p>
                      <p className="font-semibold group-hover:text-red-400 transition-colors duration-300">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8">
                <p className="text-sm text-gray-400 mb-4">{t.contact.followMe}</p>
                <div className="flex gap-3">
                  {socialLinks.map((social, idx) => (
                    <a 
                      key={idx}
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-3 bg-gray-700 hover:bg-red-600 rounded-lg transition-all hover:scale-125 duration-300"
                      onMouseEnter={() => setCursorVariant('hover')}
                      onMouseLeave={() => setCursorVariant('default')}
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all duration-500 hover-lift">
            <h3 className="text-2xl font-bold mb-6">{t.contact.form}</h3>
            
            {showSuccess && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 animate-pulse scale-in">
                ✓ {t.contact.success}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">
                  {t.contact.name}
                </label>
                <input
                  type="text"
                  required
                  value={formData.nombre}
                  onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-red-500 focus:scale-105 transition-all duration-300 text-white"
                  placeholder={t.contact.placeholders.name}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">
                  {t.contact.email}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-red-500 focus:scale-105 transition-all duration-300 text-white"
                  placeholder={t.contact.placeholders.email}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">
                  {t.contact.message}
                </label>
                <textarea
                  required
                  value={formData.mensaje}
                  onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-red-500 focus:scale-105 transition-all duration-300 text-white resize-none"
                  placeholder={t.contact.placeholders.message}
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-red-500 to-blue-500 rounded-lg font-semibold hover:shadow-2xl hover:shadow-red-500/50 transition-all flex items-center justify-center gap-2 hover:scale-105 duration-300"
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                <Send size={20} className="animate-bounce" />
                {t.contact.send}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
