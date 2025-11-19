import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Github, Linkedin, Mail, Code, Briefcase, User, ChevronDown, Download, ExternalLink, Star, Award, BookOpen, Zap, Send, ArrowRight, Calendar, MapPin, Phone, Globe, Palette } from 'lucide-react';

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
  const [typedText, setTypedText] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [language, setLanguage] = useState('es');
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('default');
  
  const themes = {
    default: {
      
      bg: '#0f0f23',
      light: '#1a1a35',
      dark: '#080813',
      accent: '#00d9ff',
      text: '#e0e0e0',
      textSecondary: '#a0a0b0',
      textLight: '#ffffff'
    },
    purple: {
      
      bg: '#1a1625',
      light: '#2a2535',
      dark: '#0d0a15',
      accent: '#b744f5',
      text: '#e8e0f0',
      textSecondary: '#b0a0c0',
      textLight: '#ffffff'
    },
    emerald: {
      
      bg: '#0a1612',
      light: '#152822',
      dark: '#050b08',
      accent: '#00ff88',
      text: '#d0f0e0',
      textSecondary: '#90c0a8',
      textLight: '#ffffff'
    },
    crimson: {
      
      bg: '#1a0a0f',
      light: '#2a1520',
      dark: '#0d0508',
      accent: '#ff0055',
      text: '#f0d0e0',
      textSecondary: '#c090a8',
      textLight: '#ffffff'
    },
    ocean: {
      
      bg: '#0a1628',
      light: '#15273d',
      dark: '#050b15',
      accent: '#00b4d8',
      text: '#cfe0f0',
      textSecondary: '#8fa8c0',
      textLight: '#ffffff'
    }
  };

  const theme = themes[currentTheme];

  const translations = {
    es: {
      roles: [
        "Desarrollador Full Stack",
        "Creador de Experiencias Web",
        "Arquitecto de Soluciones",
        "Problem Solver",
        "Apasionado por la Tecnología"
      ],
      nav: {
        home: "Inicio",
        about: "Sobre Mí",
        projects: "Proyectos",
        experience: "Experiencia",
        contact: "Contacto",
        downloadCV: "Descargar CV"
      },
      hero: {
        greeting: "Hola, Soy",
        viewWork: "Ver Trabajo",
        letsTalk: "Contactar"
      },
      about: {
        title: "Sobre Mí",
        subtitle: "Conoce mi historia y habilidades",
        myStory: "Mi Historia",
        techStack: "Stack Técnico",
        story: {
          p1: "Desde pequeño siempre he estado encantado con la tecnología. Me fascinaba entender cómo funcionaban las cosas, desarmar aparatos y descubrir qué había detrás de cada pantalla.",
          p2: "En el 2022 decidí dar un paso más y estudiar en el Centro de Enseñanza Técnica Industrial (CETI), donde actualmente curso la carrera de Tecnólogo en Desarrollo de Software.",
          p3: "Hoy en día me interesa seguir aprendiendo a través de internships y colaboraciones, conociendo personas apasionadas por la tecnología como yo.",
          p4: "Más allá del código, también me gusta mantener un equilibrio. Disfruto hacer ejercicio para despejar la mente o salir con mis amigos a pasar un buen rato."
        },
        badges: {
          learner: "Aprendiz Continuo",
          cleanCode: "Clean Code",
          problemSolver: "Problem Solver"
        }
      },
      projects: {
        title: "Proyectos Destacados",
        subtitle: "Algunos de mis trabajos más recientes",
        viewCode: "Ver Código",
        allProjects: "Ver Más Proyectos",
        list: [
          {
            titulo: "Batch Processing – Local Pipeline",
            descripcion: "Pipeline de datos Dockerizada con Airflow. Implementación de arquitectura bronce–plata–oro con transformaciones dbt."
          },
          {
            titulo: "SoundLink LED",
            descripcion: "Vúmetro interactivo de 10 LEDs controlado en tiempo real por el sonido captado desde una aplicación móvil React Native."
          },
          {
            titulo: "WaterLevel Monitor IoT",
            descripcion: "Sistema integral de monitoreo y gestión del nivel de agua en depósitos domésticos mediante sensores ultrasónicos."
          },
          {
            titulo: "Sensor Ball",
            descripcion: "Aplicación móvil que convierte el smartphone en una superficie de control físico usando el acelerómetro."
          },
          {
            titulo: "Portafolio Personal",
            descripcion: "Portafolio web moderno y responsivo desarrollado con React y diseño neumórfico minimalista."
          }
        ]
      },
      experience: {
        title: "Mi Trayectoria",
        subtitle: "Experiencia profesional",
        achievements: "Logros:",
        viewCertificate: "Ver Certificado",
        list: [
          {
            empresa: "SoftServe Academy",
            puesto: "Certificación: Linux and Networking Crash Course",
            periodo: "Octubre 2025",
            descripcion: "Curso integral que cubre administración de sistemas Linux y fundamentos de redes.",
            logros: [
              "Certificado ID: Series EJ № 27207/2025",
              "Conocimiento avanzado en comandos Linux y protocolos de red"
            ]
          },
          {
            empresa: "SoftServe Academy",
            puesto: "Certificación: Big Data Crash Course",
            periodo: "Julio 2025",
            descripcion: "Curso intensivo enfocado en la arquitectura y procesamiento de datos masivos.",
            logros: [
              "Certificado ID: Series ZD № 25638/2025",
              "Implementación de pipeline de datos Dockerizada"
            ]
          },
          {
            empresa: "Cisco Networking Academy",
            puesto: "Certificación: Networking Basics",
            periodo: "Octubre 2025",
            descripcion: "Fundamentos de redes de computadoras, abarcando dispositivos de red y protocolos.",
            logros: [
              "Certificado emitido a: Salvador Antonio Pantoja Vera",
              "Dominio de conceptos de TCP/IP y subneteo"
            ]
          },
          {
            empresa: "CETI",
            puesto: "Tecnólogo en Desarrollo de Software",
            periodo: "2022 - 2026",
            descripcion: "Formación académica y técnica en desarrollo de software.",
            logros: [
              "Bases sólidas en programación",
              "Proyectos con metodologías ágiles"
            ]
          }
        ]
      },
      contact: {
        title: "¡Trabajemos Juntos!",
        subtitle: "¿Tienes un proyecto en mente?",
        info: "Contacto",
        form: "Mensaje",
        name: "Nombre",
        email: "Email",
        message: "Mensaje",
        send: "Enviar",
        success: "¡Mensaje enviado!",
        followMe: "Sígueme:",
        location: "Ubicación",
        phone: "Teléfono",
        placeholders: {
          name: "Tu nombre",
          email: "tu@email.com",
          message: "Cuéntame sobre tu proyecto..."
        }
      },
      footer: {
        quote: "Las personas que están lo suficientemente locas como para pensar que pueden cambiar el mundo son las que lo hacen.",
        author: "Steve Jobs",
        rights: "Hecho con ❤️ y React"
      }
    },
    en: {
      roles: [
        "Full Stack Developer",
        "Web Experience Creator",
        "Solutions Architect",
        "Problem Solver",
        "Technology Enthusiast"
      ],
      nav: {
        home: "Home",
        about: "About",
        projects: "Projects",
        experience: "Experience",
        contact: "Contact",
        downloadCV: "Download CV"
      },
      hero: {
        greeting: "Hi, I'm",
        viewWork: "View Work",
        letsTalk: "Contact"
      },
      about: {
        title: "About Me",
        subtitle: "Get to know my story and skills",
        myStory: "My Story",
        techStack: "Tech Stack",
        story: {
          p1: "Since I was young, I've always been fascinated by technology. I loved understanding how things worked and discovering what was behind every screen.",
          p2: "In 2022, I decided to study at CETI, where I'm currently pursuing a degree in Software Development Technology.",
          p3: "Today, I'm interested in continuing to learn through internships and collaborations with passionate people.",
          p4: "Beyond coding, I also like to maintain balance. I enjoy exercising and hanging out with friends."
        },
        badges: {
          learner: "Constant Learner",
          cleanCode: "Clean Code",
          problemSolver: "Problem Solver"
        }
      },
      projects: {
        title: "Featured Projects",
        subtitle: "Some of my most recent work",
        viewCode: "View Code",
        allProjects: "View More Projects",
        list: [
          {
            titulo: "Batch Processing – Local Pipeline",
            descripcion: "Dockerized data pipeline with Airflow. Implementation of bronze-silver-gold architecture."
          },
          {
            titulo: "SoundLink LED",
            descripcion: "Interactive 10-LED VU meter controlled in real-time by sound from a React Native mobile app."
          },
          {
            titulo: "WaterLevel Monitor IoT",
            descripcion: "Comprehensive water tank monitoring system using ultrasonic sensors."
          },
          {
            titulo: "Sensor Ball",
            descripcion: "Mobile app that turns the smartphone into a physical control surface using the accelerometer."
          },
          {
            titulo: "Personal Portfolio",
            descripcion: "Modern and responsive web portfolio developed with React and minimalist neumorphic design."
          }
        ]
      },
      // Versión en inglés
      experience: {
        title: "My Journey",
        subtitle: "Professional experience",
        achievements: "Achievements:",
        viewCertificate: "View Certificate",
        list: [
          {
            empresa: "SoftServe Academy",
            puesto: "Certification: Linux and Networking Crash Course",
            periodo: "October 2025",
            descripcion: "Comprehensive course covering Linux system administration and networking fundamentals.",
            logros: [
              "Certificate ID: Series EJ № 27207/2025",
              "Advanced knowledge in Linux commands and network protocols"
            ]
          },
          {
            empresa: "SoftServe Academy",
            puesto: "Certification: Big Data Crash Course",
            periodo: "July 2025",
            descripcion: "Intensive course focused on big data architecture and processing.",
            logros: [
              "Certificate ID: Series ZD № 25638/2025",
              "Implementation of Dockerized data pipeline"
            ]
          },
          {
            empresa: "Cisco Networking Academy",
            puesto: "Certification: Networking Basics",
            periodo: "October 2025",
            descripcion: "Fundamentals of computer networking covering network devices and protocols.",
            logros: [
              "Certificate issued to: Salvador Antonio Pantoja Vera",
              "Strong understanding of TCP/IP and subnetting"
            ]
          },
          {
            empresa: "CETI",
            puesto: "Software Development Technologist",
            periodo: "2022 - 2026",
            descripcion: "Academic and technical training in software development.",
            logros: [
              "Solid foundations in programming",
              "Projects using agile methodologies"
            ]
          }
        ]
      },
      contact: {
        title: "Let's Work Together!",
        subtitle: "Have a project in mind?",
        info: "Contact",
        form: "Message",
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send",
        success: "Message sent!",
        followMe: "Follow me:",
        location: "Location",
        phone: "Phone",
        placeholders: {
          name: "Your name",
          email: "your@email.com",
          message: "Tell me about your project..."
        }
      },
      footer: {
        quote: "The people who are crazy enough to think they can change the world are the ones who do.",
        author: "Steve Jobs",
        rights: "Made with ❤️ and React"
      }
    }
  };

  const t = translations[language];
  const roles = t.roles;
  const [currentRole, setCurrentRole] = useState(0);

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
    }, 1000);
    return () => clearInterval(timer);
  }, [currentRole, language]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const elements = document.querySelectorAll('.fade-in-section');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.75;
        if (isVisible) {
          el.classList.add('is-visible');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const proyectos = [
    {
      titulo: "Batch Processing – Local Pipeline",
      tecnologias: ["Airflow", "Docker", "dbt", "PostgreSQL"],
      github: "https://github.com/Chava33165/DrivenPath/tree/chapter_3/chapter_3",
      imagen: "/images/soft.jpeg"
    },
    {
      titulo: "SoundLink LED",
      tecnologias: ["React Native", "Expo", "BLE", "ESP32-C3"],
      github: "https://github.com/Chava33165/SoundLink_LED",
      imagen: "/images/Micro.webp"
    },
    {
      titulo: "WaterLevel Monitor IoT",
      tecnologias: ["React Native", "ESP32", "IoT", "BLE"],
      github: "https://github.com/Chava33165/WaterLevel",
      imagen: "/images/lwater.png"
    },
    {
      titulo: "Sensor Ball",
      tecnologias: ["React Native", "Expo", "Accelerometer"],
      github: "https://github.com/Chava33165/Sensor-Ball",
      imagen: "/images/lbalon.png"
    },
    {
      titulo: "Portafolio Personal",
      tecnologias: ["React", "Tailwind", "Neumorphism"],
      github: "https://github.com/Chava33165/portafolio-salvador",
      imagen: "/images/lportafolio.png"
    }
  ];

  const habilidades = [
    { nombre: "JavaScript / TypeScript", nivel: 95 },
    { nombre: "React & React Native", nivel: 90 },
    { nombre: "Tailwind CSS & UI Design", nivel: 80 },
    { nombre: "Node.js & Express", nivel: 80 },
    { nombre: "Arduino / ESP32", nivel: 85 },
    { nombre: "PostgreSQL & Databases", nivel: 85 },
    { nombre: "Docker & DevOps", nivel: 85 },
    { nombre: "Git & GitHub", nivel: 90 }
  ];

  // Array de experiencias con URLs
  const experiencias = [
    {
      empresa: "SoftServe Academy",
      puesto: "Certificación: Linux and Networking Crash Course",
      periodo: "Octubre 2025",
      certificadoURL: "/LinuxCertificate.pdf"
    },
    {
      empresa: "SoftServe Academy",
      puesto: "Certificación: Big Data Crash Course",
      periodo: "Julio 2025",
      certificadoURL: "/Certificate.pdf"
    },
    {
      empresa: "Cisco Networking Academy",
      puesto: "Certificación: Networking Basics",
      periodo: "Octubre 2025",
      certificadoURL: "/CertificadoCisco.pdf"
    },
    {
      empresa: "CETI",
      puesto: "Tecnólogo en Desarrollo de Software",
      periodo: "2022 - 2026"
    }
  ];
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMenuOpen(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    setFormData({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <div style={{ background: theme.bg, minHeight: '100vh', color: theme.text }}>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px ${theme.accent}40; }
          50% { box-shadow: 0 0 30px ${theme.accent}80; }
        }
        
        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .fade-in-section.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .typing-cursor::after {
          content: '|';
          animation: blink 1s infinite;
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        /* Neumorphism */
        .neuro-raised {
          border-radius: 30px;
          background: ${theme.bg};
          box-shadow: -12px 12px 24px ${theme.dark}, 
                      12px -12px 24px ${theme.light};
          transition: all 0.3s ease;
        }
        
        .neuro-raised:hover {
          transform: translateY(-5px);
          box-shadow: -15px 15px 30px ${theme.dark}, 
                      15px -15px 30px ${theme.light};
        }
        
        .neuro-inset {
          border-radius: 30px;
          background: ${theme.bg};
          box-shadow: inset -8px 8px 16px ${theme.dark}, 
                      inset 8px -8px 16px ${theme.light};
        }
        
        .neuro-flat {
          border-radius: 25px;
          background: linear-gradient(145deg, ${theme.light}, ${theme.dark});
          box-shadow: -6px 6px 12px ${theme.dark}, 
                      6px -6px 12px ${theme.light};
          transition: all 0.3s ease;
        }
        
        .neuro-convex {
          border-radius: 50%;
          background: ${theme.bg};
          box-shadow: -15px 15px 30px ${theme.dark}, 
                      15px -15px 30px ${theme.light};
          transition: all 0.3s ease;
        }
        
        .neuro-convex:hover {
          transform: scale(1.1);
        }
        
        .neuro-concave {
          border-radius: 50%;
          background: ${theme.bg};
          box-shadow: inset -10px 10px 20px ${theme.dark}, 
                      inset 10px -10px 20px ${theme.light};
        }
        
        .neuro-pill {
          border-radius: 50px;
          background: ${theme.bg};
          box-shadow: -8px 8px 16px ${theme.dark}, 
                      8px -8px 16px ${theme.light};
          transition: all 0.3s ease;
        }
        
        .neuro-pill:hover {
          box-shadow: -4px 4px 8px ${theme.dark}, 
                      4px -4px 8px ${theme.light};
        }
        
        .neuro-card {
          border-radius: 35px;
          background: ${theme.bg};
          box-shadow: -10px 10px 20px ${theme.dark}, 
                      10px -10px 20px ${theme.light},
                      inset 2px 2px 4px ${theme.light};
          transition: all 0.3s ease;
        }
        
        .neuro-card:hover {
          transform: translateY(-5px);
        }
        
        .neuro-button {
          border-radius: 20px;
          background: ${theme.bg};
          box-shadow: -6px 6px 12px ${theme.dark}, 
                      6px -6px 12px ${theme.light};
          transition: all 0.2s ease;
        }
        
        .neuro-button:hover {
          box-shadow: -3px 3px 6px ${theme.dark}, 
                      3px -3px 6px ${theme.light};
          transform: translateY(-2px);
        }
        
        .neuro-button:active {
          box-shadow: inset -3px 3px 6px ${theme.dark}, 
                      inset 3px -3px 6px ${theme.light};
          transform: translateY(0);
        }
        
        .neuro-input {
          border-radius: 20px;
          background: ${theme.bg};
          box-shadow: inset -4px 4px 8px ${theme.dark}, 
                      inset 4px -4px 8px ${theme.light};
          border: none;
          padding: 14px 20px;
          color: ${theme.text};
          font-size: 16px;
          transition: all 0.3s ease;
        }
        
        .neuro-input:focus {
          outline: none;
          box-shadow: inset -6px 6px 12px ${theme.dark}, 
                      inset 6px -6px 12px ${theme.light},
                      0 0 0 2px ${theme.accent}40;
        }
        
        .neuro-badge {
          border-radius: 15px;
          background: ${theme.bg};
          box-shadow: -4px 4px 8px ${theme.dark}, 
                      4px -4px 8px ${theme.light};
          transition: all 0.2s ease;
        }
        
        .neuro-badge:hover {
          transform: scale(1.05);
        }
        
        .text-accent {
          color: ${theme.accent};
        }
        
        .text-secondary {
          color: ${theme.textSecondary};
        }
        
        .text-light {
          color: ${theme.textLight};
        }
        
        .gradient-text {
          background: linear-gradient(135deg, ${theme.accent}, ${theme.textSecondary});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        /* Partículas de fondo */
        @keyframes particle-float {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          50% { transform: translate(50px, -50px) scale(1.2); opacity: 0.6; }
        }
        
        .particle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
      `}</style>

      {/* Partículas de fondo animadas */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              background: theme.accent,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `particle-float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Selector de temas flotante */}
      <div className="fixed bottom-8 left-8 z-50">
        <button
          onClick={() => setShowColorPicker(!showColorPicker)}
          className="neuro-convex p-4 transition-all animate-pulse-slow"
          title="Cambiar tema"
        >
          <Palette size={24} style={{ color: theme.accent }} />
        </button>
        
        {showColorPicker && (
          <div className="neuro-raised p-4 mt-4 space-y-2" style={{ animation: 'scaleIn 0.3s ease' }}>
            {Object.entries(themes).map(([key, themeData]) => (
              <button
                key={key}
                onClick={() => {
                  setCurrentTheme(key);
                  setShowColorPicker(false);
                }}
                className="neuro-button w-full px-4 py-2 text-sm font-medium flex items-center gap-2"
                style={{ 
                  background: currentTheme === key ? theme.accent : theme.bg,
                  color: currentTheme === key ? theme.textLight : theme.text
                }}
              >
                <div 
                  className="w-4 h-4 rounded-full animate-pulse" 
                  style={{ background: themeData.accent }}
                />
                {themeData.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Navegación */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'neuro-flat' : ''}`}
          style={{ background: scrolled ? theme.bg : 'transparent', position: 'relative' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <h1 
            className="text-xl sm:text-2xl font-bold cursor-pointer text-accent animate-pulse-slow"
            onClick={() => scrollToSection('inicio')}
          >
            Salvador Pantoja
          </h1>
          
          <div className="hidden md:flex gap-6 items-center">
            {[
              { id: 'inicio', label: t.nav.home },
              { id: 'sobre-mi', label: t.nav.about },
              { id: 'proyectos', label: t.nav.projects },
              { id: 'experiencia', label: t.nav.experience },
              { id: 'contacto', label: t.nav.contact }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-all ${activeSection === item.id ? 'text-accent' : ''}`}
                style={{ color: activeSection === item.id ? theme.accent : theme.text }}
              >
                {item.label}
              </button>
            ))}
            
            <button
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="neuro-pill px-4 py-2 text-sm font-semibold flex items-center gap-2"
            >
              <Globe size={16} style={{ color: theme.accent }} />
              {language === 'es' ? 'EN' : 'ES'}
            </button>
            
            <a 
              href="/Salvador_Pantoja_CV.pdf" 
              download
              className="neuro-button px-6 py-2 font-semibold flex items-center gap-2 animate-glow"
            >
              <Download size={16} />
              CV
            </a>
          </div>

          {/* Menú móvil mejorado */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="neuro-pill px-3 py-2 text-xs font-semibold flex items-center gap-1"
              style={{ animation: 'scaleIn 0.5s ease' }}
            >
              <Globe size={14} style={{ color: theme.accent }} />
              <span>{language === 'es' ? 'EN' : 'ES'}</span>
            </button>
            
            <a 
              href="/Salvador_Pantoja_CV.pdf" 
              download
              className="neuro-button px-3 py-2 font-semibold flex items-center gap-1 text-xs"
              style={{ animation: 'scaleIn 0.5s ease 0.1s both' }}
            >
              <Download size={14} />
              <span>CV</span>
            </a>
            
            <button 
              className="neuro-button p-2" 
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ animation: 'scaleIn 0.5s ease 0.2s both' }}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden neuro-inset mt-2 mx-4 mb-4 p-4" style={{ animation: 'slideInRight 0.3s ease' }}>
            {[
              { id: 'inicio', label: t.nav.home },
              { id: 'sobre-mi', label: t.nav.about },
              { id: 'proyectos', label: t.nav.projects },
              { id: 'experiencia', label: t.nav.experience },
              { id: 'contacto', label: t.nav.contact }
            ].map((item, idx) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-secondary transition-all hover:text-accent"
                style={{ animation: `fadeInUp 0.3s ease ${idx * 0.1}s both` }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen flex items-center justify-center px-6 pt-20" style={{ position: 'relative', zIndex: 1 }}>
        <div className="max-w-4xl w-full text-center space-y-8 fade-in-section is-visible">
          <div className="neuro-convex w-32 h-32 mx-auto flex items-center justify-center mb-8 animate-float">
            <User size={64} style={{ color: theme.accent }} />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight" style={{ animation: 'fadeInUp 0.8s ease' }}>
            {t.hero.greeting}{' '}
            <span className="text-accent gradient-text">
              Salvador Pantoja
            </span>
          </h1>
          
          <div className="text-xl sm:text-2xl font-medium text-secondary h-16 typing-cursor flex items-center justify-center px-4">
            {typedText}
          </div>

          <div className="flex flex-wrap gap-4 justify-center pt-6">
            <button 
              onClick={() => scrollToSection('proyectos')}
              className="neuro-button px-6 sm:px-8 py-3 font-semibold flex items-center gap-2 text-sm sm:text-base"
              style={{ animation: 'slideInLeft 0.8s ease' }}
            >
              {t.hero.viewWork}
              <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="neuro-button px-6 sm:px-8 py-3 font-semibold flex items-center gap-2 text-sm sm:text-base"
              style={{ animation: 'slideInRight 0.8s ease' }}
            >
              <Mail size={20} />
              {t.hero.letsTalk}
            </button>
          </div>

          <div className="flex gap-4 justify-center pt-8">
            {[
              { href: "https://github.com/Chava33165", icon: Github },
              { href: "https://www.linkedin.com/in/salvadorpantoja", icon: Linkedin },
              { href: "mailto:a22300165@ceti.mx", icon: Mail }
            ].map((social, idx) => (
              <a 
                key={idx}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="neuro-convex p-4 animate-glow"
                style={{ animation: `scaleIn 0.5s ease ${idx * 0.1}s both` }}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>

          <div className="flex justify-center pt-8">
            <button
              onClick={() => scrollToSection('sobre-mi')}
              className="neuro-pill p-3 animate-float"
            >
              <ChevronDown size={32} style={{ color: theme.accent }} />
            </button>
          </div>
        </div>
      </section>

      {/* Sobre Mí */}
      <section id="sobre-mi" className="py-20 px-6 fade-in-section" style={{ position: 'relative', zIndex: 1 }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-accent animate-pulse-slow">
              {t.about.title}
            </h2>
            <p className="text-secondary text-lg">{t.about.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="neuro-card p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="neuro-concave p-3">
                  <User size={24} style={{ color: theme.accent }} />
                </div>
                {t.about.myStory}
              </h3>
              <div className="space-y-4 text-secondary leading-relaxed text-sm sm:text-base">
                {[t.about.story.p1, t.about.story.p2, t.about.story.p3, t.about.story.p4].map((p, idx) => (
                  <p key={idx} style={{ animation: `fadeInUp 0.5s ease ${idx * 0.1}s both` }}>{p}</p>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                {[
                  { icon: BookOpen, label: t.about.badges.learner },
                  { icon: Code, label: t.about.badges.cleanCode },
                  { icon: Zap, label: t.about.badges.problemSolver }
                ].map((badge, idx) => (
                  <span 
                    key={idx}
                    className="neuro-badge flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium"
                    style={{ animation: `scaleIn 0.5s ease ${idx * 0.1}s both` }}
                  >
                    <badge.icon size={16} style={{ color: theme.accent }} />
                    {badge.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="neuro-card p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="neuro-concave p-3">
                  <Zap size={24} style={{ color: theme.accent }} />
                </div>
                {t.about.techStack}
              </h3>
              <div className="space-y-6">
                {habilidades.map((skill, i) => (
                  <div key={i} className="space-y-2" style={{ animation: `fadeInUp 0.5s ease ${i * 0.05}s both` }}>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-xs sm:text-sm">{skill.nombre}</span>
                      <span className="text-accent font-bold text-xs sm:text-sm">{skill.nivel}%</span>
                    </div>
                    <div className="neuro-inset h-2 sm:h-3 overflow-hidden">
                      <div 
                        className="h-full transition-all duration-1000"
                        style={{ 
                          width: `${skill.nivel}%`,
                          background: `linear-gradient(90deg, ${theme.accent}, ${theme.textSecondary})`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="py-20 px-6 fade-in-section" style={{ position: 'relative', zIndex: 1 }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-accent animate-pulse-slow">
              {t.projects.title}
            </h2>
            <p className="text-secondary text-lg">{t.projects.subtitle}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {proyectos.map((proyecto, i) => (
              <div 
                key={i}
                className="neuro-raised overflow-hidden transition-all hover:scale-105"
                style={{ animation: `scaleIn 0.5s ease ${i * 0.1}s both` }}
              >
                <div className="relative w-full h-48 neuro-inset flex items-center justify-center overflow-hidden">
                  {proyecto.imagen && (proyecto.imagen.startsWith('/') || proyecto.imagen.startsWith('http')) ? (
                    <img
                      src={proyecto.imagen}
                      alt={proyecto.titulo}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  ) : (
                    <Code size={64} style={{ color: theme.accent }} />
                  )}
                  
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 hover:opacity-100 transition-opacity duration-300" 
                      style={{ background: `${theme.bg}ee` }}>
                    <a 
                      href={proyecto.github} 
                      className="neuro-convex p-3 animate-glow"
                      title={t.projects.viewCode}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={24} style={{ color: theme.accent }} />
                    </a>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-accent">
                    {proyecto.titulo}
                  </h3>
                  <p className="text-secondary mb-4 text-xs sm:text-sm leading-relaxed">
                    {t.projects.list[i].descripcion}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {proyecto.tecnologias.map((tech, j) => (
                      <span 
                        key={j} 
                        className="neuro-badge px-2 sm:px-3 py-1 text-xs font-medium"
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
              className="neuro-button inline-flex items-center gap-2 px-6 sm:px-8 py-3 font-semibold text-sm sm:text-base animate-glow"
            >
              <Github size={20} />
              {t.projects.allProjects}
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Experiencia */}
      <section id="experiencia" className="py-20 px-6 fade-in-section" style={{ position: 'relative', zIndex: 1 }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-accent animate-pulse-slow">
              {t.experience.title}
            </h2>
            <p className="text-secondary text-lg">{t.experience.subtitle}</p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {experiencias.map((exp, i) => (
              <div key={i} className="neuro-card p-6 sm:p-8" style={{ animation: `fadeInUp 0.5s ease ${i * 0.1}s both` }}>
                <div className="flex flex-wrap justify-between items-start mb-4 gap-4">
                  <div className="flex items-start gap-3 sm:gap-4 flex-1">
                    <div className="neuro-concave p-3 sm:p-4 mt-1 flex-shrink-0">
                      <Briefcase size={20} style={{ color: theme.accent }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-2xl font-bold text-accent break-words">
                        {t.experience.list[i].puesto}
                      </h3>
                      <p className="text-base sm:text-lg font-semibold mt-1 break-words">
                        {t.experience.list[i].empresa}
                      </p>
                    </div>
                  </div>
                  <span className="neuro-pill flex items-center gap-2 text-xs sm:text-sm text-secondary px-3 sm:px-4 py-2 flex-shrink-0">
                    <Calendar size={14} />
                    {t.experience.list[i].periodo}
                  </span>
                </div>
                
                <p className="text-secondary mb-4 leading-relaxed text-sm sm:text-base">
                  {t.experience.list[i].descripcion}
                </p>
                
                {exp.certificadoURL && (
                  <div className="mt-4 mb-6">
                    <a 
                      href={exp.certificadoURL} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="neuro-button inline-flex items-center gap-2 px-4 py-2 font-semibold text-sm animate-glow"
                    >
                      <Award size={16} />
                      {t.experience.viewCertificate}
                    </a>
                  </div>
                )}

                <div className="space-y-2">
                  <p className="text-xs sm:text-sm font-semibold text-accent flex items-center gap-2">
                    <Star size={16} />
                    {t.experience.achievements}
                  </p>
                  <ul className="space-y-2">
                    {t.experience.list[i].logros.map((logro, j) => (
                      <li key={j} className="flex items-start gap-3 text-xs sm:text-sm text-secondary">
                        <span className="text-accent mt-1 flex-shrink-0">▸</span>
                        <span>{logro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 px-6 fade-in-section" style={{ position: 'relative', zIndex: 1 }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-accent animate-pulse-slow">
              {t.contact.title}
            </h2>
            <p className="text-secondary text-lg">{t.contact.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-6">
              <div className="neuro-card p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
                  <div className="neuro-concave p-3">
                    <Phone size={24} style={{ color: theme.accent }} />
                  </div>
                  {t.contact.info}
                </h3>
                
                <div className="space-y-4">
                  {[
                    { href: "mailto:a22300165@ceti.mx", icon: Mail, label: t.contact.email, value: "a22300165@ceti.mx" },
                    { href: "tel:+523332202065", icon: Phone, label: t.contact.phone, value: "+52 33 3220 2065" },
                    { href: null, icon: MapPin, label: t.contact.location, value: "Guadalajara, México" }
                  ].map((item, idx) => (
                    <a 
                      key={idx}
                      href={item.href || "#"} 
                      className="neuro-flat flex items-center gap-3 sm:gap-4 p-3 sm:p-4"
                      style={{ animation: `fadeInUp 0.5s ease ${idx * 0.1}s both` }}
                    >
                      <div className="neuro-concave p-2 sm:p-3 flex-shrink-0">
                        <item.icon size={18} style={{ color: theme.accent }} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs sm:text-sm text-secondary">{item.label}</p>
                        <p className="font-semibold text-sm sm:text-base break-all">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="mt-8">
                  <p className="text-xs sm:text-sm text-secondary mb-4">{t.contact.followMe}</p>
                  <div className="flex gap-3">
                    {[
                      { href: "https://github.com/Chava33165", icon: Github },
                      { href: "https://www.linkedin.com/in/salvadorpantoja", icon: Linkedin },
                      { href: "mailto:a22300165@ceti.mx", icon: Mail }
                    ].map((social, idx) => (
                      <a 
                        key={idx}
                        href={social.href} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="neuro-convex p-3 animate-glow"
                        style={{ animation: `scaleIn 0.5s ease ${idx * 0.1}s both` }}
                      >
                        <social.icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="neuro-card p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="neuro-concave p-3">
                  <Send size={24} style={{ color: theme.accent }} />
                </div>
                {t.contact.form}
              </h3>
              
              {showSuccess && (
                <div className="mb-6 neuro-inset p-4 text-accent font-semibold text-center text-sm sm:text-base" style={{ animation: 'scaleIn 0.3s ease' }}>
                  ✓ {t.contact.success}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-2">
                    {t.contact.name}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                    className="neuro-input w-full text-sm sm:text-base"
                    placeholder={t.contact.placeholders.name}
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-2">
                    {t.contact.email}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="neuro-input w-full text-sm sm:text-base"
                    placeholder={t.contact.placeholders.email}
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-2">
                    {t.contact.message}
                  </label>
                  <textarea
                    required
                    value={formData.mensaje}
                    onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                    rows={5}
                    className="neuro-input w-full resize-none text-sm sm:text-base"
                    placeholder={t.contact.placeholders.message}
                  />
                </div>

                <button
                  type="submit"
                  className="neuro-button w-full px-6 sm:px-8 py-3 sm:py-4 font-semibold flex items-center justify-center gap-2 text-sm sm:text-base animate-glow"
                >
                  <Send size={18} />
                  {t.contact.send}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 neuro-inset" style={{ position: 'relative', zIndex: 1 }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-lg sm:text-xl font-bold text-accent mb-2">
                "{t.footer.quote}"
              </h3>
              <p className="text-secondary text-xs sm:text-sm">
                — {t.footer.author}
              </p>
            </div>

            <div className="flex gap-4">
              {[
                { href: "https://github.com/Chava33165", icon: Github },
                { href: "https://www.linkedin.com/in/salvadorpantoja", icon: Linkedin },
                { href: "https://www.instagram.com/chava33p", icon: Instagram }
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="neuro-convex p-3 animate-glow"
                  style={{ animation: `scaleIn 0.5s ease ${idx * 0.1}s both` }}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 text-center text-secondary text-xs sm:text-sm">
            <p>
              © 2025 Salvador Antonio Pantoja Vera. {t.footer.rights}
            </p>
          </div>
        </div>
      </footer>

      {/* Botón Scroll to Top */}
      {scrolled && (
        <button
          onClick={() => scrollToSection('inicio')}
          className="fixed bottom-8 right-8 neuro-convex p-3 sm:p-4 z-40 animate-pulse-slow"
          style={{ animation: 'scaleIn 0.5s ease' }}
        >
          <ChevronDown size={24} className="rotate-180" style={{ color: theme.accent }} />
        </button>
      )}
    </div>
  );
}