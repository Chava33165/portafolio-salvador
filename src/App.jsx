import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Instagram, Github, Linkedin, Mail, Code, Briefcase, User, ChevronDown, Download, ExternalLink, Star, Award, BookOpen, Zap, Send, ArrowRight, Calendar, MapPin, Phone, Terminal, Globe, Sparkles, Rocket, TrendingUp } from 'lucide-react';

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
  const [typedText, setTypedText] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [language, setLanguage] = useState('es');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  // Traducciones completas
  const translations = {
    es: {
      roles: [
        "Desarrollador Full Stack",
        "Creador de Experiencias Web",
        "Arquitecto de Soluciones",
        "Problem Solver",
        "Apasionado por la Tecnología",
        "Desarrollador de Aplicaciones Móviles",
        "Entusiasta de la Ciberseguridad",
        "Diseñador de Interfaces Intuitivas",
        "Explorador de Nuevas Tecnologías",
        "Desarrollador Creativo",
        "Innovador Digital",
        "Colaborador en Equipo",
        "Aprendiz Constante",
        "Amante del Código Limpio",
        "Constructor de Ideas Digitales",
        "Desarrollador Orientado a Resultados",
        "Soñador Tecnológico",
        "Enthusiast DevOps",
        "Tech Explorer",
        "Builder de Soluciones Digitales"
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
        viewWork: "Ver Mi Trabajo",
        letsTalk: "Hablemos"
      },
      about: {
        title: "Sobre Mí",
        subtitle: "Conoce mi historia y habilidades",
        myStory: "Mi Historia",
        techStack: "Stack Técnico",
        story: {
          p1: "Desde pequeño siempre he estado encantado con la tecnología. Me fascinaba entender cómo funcionaban las cosas, desarmar aparatos y descubrir qué había detrás de cada pantalla. Esa curiosidad poco a poco se convirtió en una verdadera pasión que me ha acompañado hasta hoy.",
          p2: "En el 2022 decidí dar un paso más y estudiar en el Centro de Enseñanza Técnica Industrial (CETI), donde actualmente curso la carrera de Tecnólogo en Desarrollo de Software. Ha sido una experiencia increíble que me ha permitido crecer tanto técnica como personalmente, aprendiendo de grandes compañeros y profesores.",
          p3: "Hoy en día me interesa seguir aprendiendo a través de internships y colaboraciones, conociendo personas apasionadas por la tecnología como yo, dispuestas a compartir sus experiencias y conocimientos. Me llaman mucho la atención áreas como la ciberseguridad, DevOps, el desarrollo web y móvil, e incluso la electrónica.",
          p4: "Más allá del código, también me gusta mantener un equilibrio. Disfruto hacer ejercicio para despejar la mente o salir con mis amigos a pasar un buen rato y recargar energía. Creo que la creatividad también nace de esos momentos simples fuera de la pantalla."
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
        featured: "Destacado",
        viewCode: "Ver Código",
        allProjects: "Ver Todos los Proyectos en GitHub",
        list: [
          {
            titulo: "Batch Processing – Local Pipeline",
            descripcion: "Pipeline de datos Dockerizada con Airflow. Implementación de arquitectura bronce–plata–oro con transformaciones dbt. Desarrollo de cuatro tablas analíticas (financieras, técnicas, no-PII, PII) con control de acceso por roles. Validación de datos con PostgreSQL / pgAdmin4."
          },
          {
            titulo: "SoundLink LED",
            descripcion: "Vúmetro interactivo de 10 LEDs controlado en tiempo real por el sonido captado desde una aplicación móvil React Native. Utiliza Bluetooth Low Energy (BLE) para comunicarse con un microcontrolador ESP32-C3, creando una experiencia visual sincronizada con música o voz. Proyecto multiplataforma con firmware y app integrados."
          },
          {
            titulo: "WaterLevel Monitor IoT",
            descripcion: "Sistema integral de monitoreo y gestión del nivel de agua en depósitos domésticos mediante sensores ultrasónicos y comunicación BLE/WiFi. Desarrollado con ESP32 y una aplicación móvil multiplataforma creada con React Native y Expo. Permite visualizar en tiempo real el nivel del tanque, registrar históricos y enviar alertas de bajo nivel. Proyecto orientado a la eficiencia del consumo hídrico y la automatización del hogar."
          },
          {
            titulo: "Sensor Ball – Simulador de Movimiento por Acelerómetro",
            descripcion: "Aplicación móvil desarrollada con React Native y Expo que convierte el smartphone en una superficie de control físico. Utiliza el acelerómetro del dispositivo para simular la fuerza de la gravedad y controlar el desplazamiento de un balón dentro de una cancha digital. Mediante cálculos de física aplicada, el sistema reacciona de manera fluida al movimiento del usuario, ajustando velocidad, rebote y fricción para ofrecer una experiencia realista. Este proyecto integra conceptos de interacción sensorial, animaciones dinámicas y renderizado en tiempo real, ideal para experimentos con sensores de movimiento o prototipos de videojuegos móviles."
          },
          {
            titulo: "Portafolio Personal Interactivo",
            descripcion: "Portafolio web moderno y responsivo desarrollado con React. Incluye efectos de typing animado, navegación suave, formulario de contacto funcional, animaciones al scroll y diseño glassmorphism. Optimizado para SEO y rendimiento, con integración de iconos Lucide React y gradientes dinámicos."
          }
        ]
      },


      experience: {
        title: "Mi Trayectoria",
        subtitle: "Experiencia profesional",
        achievements: "Logros destacados:",
        viewCertificate: "Ver Certificado",
        list: [
          {
            empresa: "SoftServe Academy",
            puesto: "Certificación: Big Data Crash Course",
            periodo: "Julio 2025",
            descripcion: "Curso intensivo enfocado en la arquitectura y procesamiento de datos masivos. Incluyó: Big Data Pipeline, Airflow, dbt, PostgreSQL y diseño de arquitectura Bronze-Silver-Gold.",
            logros: [
              "Certificado ID: Series ZD № 25638/2025",
              "Implementación de pipeline de datos Dockerizada.",
              "Experiencia en validación y control de acceso a datos sensibles (PII)."
            ]
          },
          {
            empresa: "CETI (Centro de Enseñanzas Técnicas Industriales)",
            puesto: "Tecnólogo en Desarrollo de Software",
            periodo: "2022 - 2026 (Pendiente de Título)",
            descripcion: "Formación académica y técnica que marcó el inicio de mi trayectoria como desarrollador de software. Enfoque en programación orientada a objetos, bases de datos y desarrollo web full-stack.",
            logros: [
              "Adquisición de bases sólidas en lógica de programación y estructuras de datos.",
              "Desarrollo de proyectos finales con metodologías ágiles."
            ]
          }
        ]
      },
      contact: {
        title: "¡Trabajemos Juntos!",
        subtitle: "¿Tienes un proyecto en mente? Hablemos",
        info: "Información de Contacto",
        form: "Envíame un Mensaje",
        name: "Nombre Completo",
        email: "Email",
        message: "Mensaje",
        send: "Enviar Mensaje",
        success: "¡Mensaje enviado! Te contactaré pronto.",
        followMe: "Sígueme en redes:",
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
        author: "Steve Jobs (Campaña 'Think Different' de Apple, 1997)",
        rights: "Hecho con ❤️ y React en Guadalajara, México"
      }
    },
    en: {
      roles: [
        "Full Stack Developer",
        "Web Experience Creator",
        "Solutions Architect",
        "Problem Solver",
        "Technology Enthusiast",
        "Mobile App Developer",
        "Cybersecurity Enthusiast",
        "Intuitive Interface Designer",
        "New Technology Explorer",
        "Creative Developer",
        "Digital Innovator",
        "Team Collaborator",
        "Constant Learner",
        "Clean Code Lover",
        "Digital Ideas Builder",
        "Results-Oriented Developer",
        "Technology Dreamer",
        "DevOps Enthusiast",
        "Tech Explorer",
        "Digital Solutions Builder"
      ],
      nav: {
        home: "Home",
        about: "About Me",
        projects: "Projects",
        experience: "Experience",
        contact: "Contact",
        downloadCV: "Download CV"
      },
      hero: {
        greeting: "Hi, I'm",
        viewWork: "View My Work",
        letsTalk: "Let's Talk"
      },
      about: {
        title: "About Me",
        subtitle: "Get to know my story and skills",
        myStory: "My Story",
        techStack: "Tech Stack",
        story: {
          p1: "Since I was young, I've always been fascinated by technology. I loved understanding how things worked, taking devices apart, and discovering what was behind every screen. That curiosity gradually became a true passion that has stayed with me to this day.",
          p2: "In 2022, I decided to take the next step and study at the Centro de Enseñanza Técnica Industrial (CETI), where I'm currently pursuing a degree in Software Development Technology. It's been an incredible experience that has allowed me to grow both technically and personally, learning from great classmates and teachers.",
          p3: "Today, I'm interested in continuing to learn through internships and collaborations, meeting people passionate about technology like me, willing to share their experiences and knowledge. I'm particularly drawn to areas like cybersecurity, DevOps, web and mobile development, and even electronics.",
          p4: "Beyond coding, I also like to maintain balance. I enjoy exercising to clear my mind or hanging out with friends to have a good time and recharge. I believe creativity also comes from those simple moments away from the screen."
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
        featured: "Featured",
        viewCode: "View Code",
        allProjects: "View All Projects on GitHub",
        list: [
          {
            titulo: "Batch Processing – Local Pipeline",
            descripcion: "Dockerized data pipeline with Airflow. Implementation of bronze-silver-gold architecture with dbt transformations. Development of four analytical tables (financial, technical, non-PII, PII) with role-based access control. Data validation with PostgreSQL / pgAdmin4."
          },
          {
            titulo: "SoundLink LED",
            descripcion: "Interactive 10-LED VU meter controlled in real-time by sound captured from a React Native mobile app. Uses Bluetooth Low Energy (BLE) to communicate with an ESP32-C3 microcontroller, creating a visual experience synchronized with music or voice. Cross-platform project with integrated firmware and app."
          },
          {
            titulo: "WaterLevel Monitor IoT",
            descripcion: "Comprehensive monitoring and management system for domestic water tank levels using ultrasonic sensors and BLE/WiFi communication. Developed with ESP32 and a cross-platform mobile app built with React Native and Expo. Allows real-time visualization of tank level, historical logging, and low-level alerts. Project focused on water consumption efficiency and home automation."
          },
          {
            titulo: "Sensor Ball – Accelerometer Motion Simulator",
            descripcion: "Mobile app developed with React Native and Expo that turns the smartphone into a physical control surface. Uses the device's accelerometer to simulate gravity and control the movement of a ball within a digital court. Through applied physics calculations, the system responds fluidly to user movement, adjusting speed, bounce, and friction for a realistic experience. This project integrates concepts of sensory interaction, dynamic animations, and real-time rendering, ideal for motion sensor experiments or mobile game prototypes."
          },
          {
            titulo: "Interactive Personal Portfolio",
            descripcion: "Modern and responsive web portfolio developed with React. Includes animated typing effects, smooth navigation, functional contact form, scroll animations, and glassmorphism design. Optimized for SEO and performance, with Lucide React icons integration and dynamic gradients."
          }
        ]
      },
      experience: {
        title: "My Journey",
        subtitle: "Professional experience",
        achievements: "Key achievements:",
        viewCertificate: "View Certificate",
        list: [
          {
            empresa: "SoftServe Academy",
            puesto: "Certification: Big Data Crash Course",
            periodo: "July 2025",
            descripcion: "Intensive course focused on big data architecture and processing. Included: Big Data Pipeline, Airflow, dbt, PostgreSQL, and Bronze-Silver-Gold architecture design.",
            logros: [
              "Certificate ID: Series ZD № 25638/2025",
              "Implementation of Dockerized data pipeline.",
              "Experience in validation and access control for sensitive data (PII)."
            ]
          },
          {
            empresa: "CETI (Centro de Enseñanzas Técnicas Industriales)",
            puesto: "Software Development Technologist",
            periodo: "2022 - 2026 (Degree Pending)",
            descripcion: "Academic and technical training that marked the beginning of my career as a software developer. Focus on object-oriented programming, databases, and full-stack web development.",
            logros: [
              "Acquired solid foundations in programming logic and data structures.",
              "Developed final projects using agile methodologies."
            ]
          }
        ]
      },
      contact: {
        title: "Let's Work Together!",
        subtitle: "Have a project in mind? Let's talk",
        info: "Contact Information",
        form: "Send Me a Message",
        name: "Full Name",
        email: "Email",
        message: "Message",
        send: "Send Message",
        success: "Message sent! I'll contact you soon.",
        followMe: "Follow me on social media:",
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
        author: "Steve Jobs (Apple's 'Think Different' campaign, 1997)",
        rights: "Made with ❤️ and React in Guadalajara, Mexico"
      }
    }
  };

  const t = translations[language];
  const roles = t.roles;

  const [currentRole, setCurrentRole] = useState(0);

  // Mouse tracking effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
      tecnologias: ["Airflow", "Docker", "dbt", "PostgreSQL", "pgAdmin4", "Big Data"],
      color: "from-black-500 to-indigo-500",
      github: "https://github.com/Chava33165/DrivenPath/tree/chapter_3/chapter_3",
      imagen: "/images/soft.jpeg",
      destacado: false
    },
    {
      titulo: "SoundLink LED",
      tecnologias: ["React Native", "Expo", "BLE", "ESP32-C3", "Arduino", "JavaScript"],
      github: "https://github.com/Chava33165/SoundLink_LED",
      imagen: "/images/Micro.webp",  
      destacado: false
    },
    {
      titulo: "WaterLevel Monitor IoT",
      tecnologias: ["React Native", "Expo", "ESP32", "IoT", "BLE", "Arduino", "JavaScript"],
      color: "from-cyan-500 to-red-500",
      github: "https://github.com/Chava33165/WaterLevel",
      imagen: "/images/lwater.png", 
      destacado: false
    },
    {
      titulo: "Sensor Ball – Simulador de Movimiento",
      tecnologias: ["React Native", "Expo", "Accelerometer", "Animated API", "JavaScript"],
      color: "from-vine-500 to-lime-500",
      github: "https://github.com/Chava33165/Sensor-Ball",
      imagen: "/images/lbalon.png",
      destacado: false
    },
    {
      titulo: "Portafolio Personal Interactivo",
      tecnologias: ["React", "Tailwind CSS", "JavaScript", "Lucide Icons", "Responsive Design"],
      color: "from-purple-500 to-red-1000",
      github: "https://github.com/Chava33165/portafolio-salvador",
      imagen: "/images/lportafolio.png",
      destacado: false
    }
  ];

  const habilidades = [
    { nombre: "JavaScript / TypeScript", nivel: 95, categoria: "Frontend" },
    { nombre: "React & React Native (Expo)", nivel: 90, categoria: "Frontend" },
    { nombre: "Tailwind CSS & UI Design", nivel: 80, categoria: "Frontend" },
    { nombre: "Animated API & Sensors", nivel: 85, categoria: "Frontend" },
    { nombre: "Node.js & Express", nivel: 80, categoria: "Backend" },
    { nombre: "Arduino / ESP32 (Firmware IoT)", nivel: 85, categoria: "Backend" },
    { nombre: "Bluetooth Low Energy (BLE)", nivel: 80, categoria: "Backend" },
    { nombre: "PostgreSQL & pgAdmin4", nivel: 85, categoria: "Database" },
    { nombre: "XAMPP & MariaDB", nivel: 80, categoria: "Database" },
    { nombre: "dbt (Data Build Tool)", nivel: 75, categoria: "Data Engineering" },
    { nombre: "Airflow (ETL Pipelines)", nivel: 80, categoria: "Data Engineering" },
    { nombre: "Docker & Containerization", nivel: 85, categoria: "DevOps" },
    { nombre: "Git & GitHub / CI-CD", nivel: 90, categoria: "Tools" },
    { nombre: "Big Data Concepts", nivel: 70, categoria: "Data Engineering" },
    { nombre: "Project Documentation", nivel: 80, categoria: "Tools" }
  ];

  const experiencias = [
    {
      empresa: "SoftServe Academy",
      puesto: "Certificación: Big Data Crash Course",
      periodo: "Julio 2025",
      certificadoURL: "https://career.softserveinc.com/en-us/certification/verification"
    },

    {
      empresa: "CETI",
      puesto: "Tecnólogo en Desarrollo de Software",
      periodo: "2022 - 2026",
      certificadoURL: "https://www.ceti.mx/"
      
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 text-white overflow-x-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(239, 68, 68, 0.5); }
          50% { box-shadow: 0 0 40px rgba(239, 68, 68, 0.8), 0 0 60px rgba(239, 68, 68, 0.6); }
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
        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), 
                      transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
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
          animation: float 6s ease-in-out infinite;
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        .slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }
        .slide-in-right {
          animation: slideInRight 0.6s ease-out forwards;
        }
        .scale-in {
          animation: scaleIn 0.5s ease-out forwards;
        }
        .gradient-text {
          background: linear-gradient(90deg, #ef4444, #3b82f6, #ef4444);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shift 3s ease infinite;
        }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(239, 68, 68, 0.3);
        }
        .project-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .project-card:hover {
          transform: translateY(-12px) rotateX(2deg);
        }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .pulse-ring {
          animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>

      {/* Cursor personalizado */}
      <div 
        className="fixed w-6 h-6 border-2 border-red-400 rounded-full pointer-events-none z-50 transition-transform duration-100 ease-out"
        style={{ 
          left: mousePosition.x - 12, 
          top: mousePosition.y - 12,
          transform: cursorVariant === 'hover' ? 'scale(1.5)' : 'scale(1)'
        }}
      />

      {/* Partículas flotantes mejoradas */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              background: `radial-gradient(circle, ${i % 2 === 0 ? '#ef4444' : '#3b82f6'} 0%, transparent 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 7}s`,
              opacity: Math.random() * 0.5 + 0.3
            }}
          />
        ))}
      </div>

      {/* Efecto de luz que sigue el mouse */}
      <div 
        className="fixed w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none z-0 transition-all duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192
        }}
      />

      {/* NAVEGACIÓN MEJORADA */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-gray-900/95 backdrop-blur-xl shadow-2xl shadow-red-500/20 border-b border-red-500/20' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <h1 
            className="text-2xl font-bold gradient-text cursor-pointer hover:scale-110 transition-transform duration-300"
            onClick={() => scrollToSection('inicio')}
          >
            {language === 'es' ? '💼 Mi Portafolio' : '💼 My Portfolio'}
          </h1>
          
          <div className="hidden md:flex gap-8 items-center">
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
                className={`relative font-medium hover:text-red-400 transition-all duration-300 hover:scale-110 ${activeSection === item.id ? 'text-red-400' : ''}`}
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
              <Globe size={18} className="text-red-400 animate-spin-slow" />
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

      {/* HERO SECTION ULTRA MEJORADO */}
      <section id="inicio" className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
        {/* Círculos animados de fondo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-5xl w-full space-y-8 fade-in-section relative z-10">
          <div className="text-center space-y-6">
            {/* Badge animado */}
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
              {[
                { href: "https://github.com/Chava33165", icon: Github },
                { href: "https://www.linkedin.com/in/salvadorpantoja", icon: Linkedin },
                { href: "a22300165@ceti.mx", icon: Mail }
              ].map((social, idx) => (
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

      {/* SOBRE MÍ MEJORADO */}
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
                  {[t.about.story.p1, t.about.story.p2, t.about.story.p3, t.about.story.p4].map((p, idx) => (
                    <p key={idx} className="hover:text-white transition-colors duration-300">{p}</p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mt-6">
                  {[
                    { icon: BookOpen, label: t.about.badges.learner, color: 'red' },
                    { icon: Code, label: t.about.badges.cleanCode, color: 'blue' },
                    { icon: Zap, label: t.about.badges.problemSolver, color: 'purple' }
                  ].map((badge, idx) => (
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
                {habilidades.map((skill, i) => (
                  <div key={i} className="space-y-2 group">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-semibold text-white group-hover:text-red-400 transition-colors duration-300">{skill.nombre}</span>
                        <span className="text-xs text-gray-500 ml-2">{skill.categoria}</span>
                      </div>
                      <span className="text-red-400 font-bold text-sm group-hover:scale-125 transition-transform duration-300">{skill.nivel}%</span>
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

      {/* PROYECTOS ULTRA MEJORADOS */}
      <section id="proyectos" className="py-20 px-4 fade-in-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text inline-block">
              {t.projects.title}
            </h2>
            <p className="text-gray-400 text-lg">{t.projects.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proyectos.map((proyecto, i) => (
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
                    <span className="relative z-10 text-8xl group-hover:scale-125 transition-transform duration-500">{proyecto.imagen}</span>
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
                    {t.projects.list[i].descripcion}
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

      {/* EXPERIENCIA MEJORADA */}
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
              {experiencias.map((exp, i) => (
                <div key={i} className="relative pl-20" style={{ animationDelay: `${i * 0.2}s` }}>
                  <div className="absolute left-5 top-2 w-6 h-6 bg-red-500 rounded-full border-4 border-gray-900 shadow-lg shadow-red-500/50 animate-pulse">
                    <div className="absolute inset-0 rounded-full border-2 border-red-400 pulse-ring"></div>
                  </div>
                  
                  <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all duration-500 group hover-lift">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-red-400 group-hover:text-blue-400 transition-colors duration-300">
                          {t.experience.list[i].puesto}
                        </h3>
                        <p className="text-lg text-gray-300 font-semibold mt-1 group-hover:text-white transition-colors duration-300">
                          {t.experience.list[i].empresa}
                        </p>
                      </div>
                      <span className="flex items-center gap-2 text-sm text-gray-400 bg-gray-700/50 px-4 py-2 rounded-full group-hover:scale-110 transition-transform duration-300">
                        <Calendar size={16} className="animate-pulse" />
                        {t.experience.list[i].periodo}
                      </span>
                    </div>
                    
                    <p className="text-gray-400 mb-4 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {t.experience.list[i].descripcion}
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
                        {t.experience.list[i].logros.map((logro, j) => (
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

      {/* CONTACTO MEJORADO */}
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
                  {[
                    { href: "a22300165@ceti.mx", icon: Mail, label: t.contact.email, value: "a22300165@ceti.mx" },
                    { href: "tel:+523332202065", icon: Phone, label: t.contact.phone, value: "+52 33 3220 2065" },
                    { href: null, icon: MapPin, label: t.contact.location, value: "Guadalajara, México" }
                  ].map((item, idx) => (
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

      {/* FOOTER MEJORADO */}
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
              {[
                { href: "https://github.com/Chava33165", icon: Github },
                { href: "https://www.linkedin.com/in/salvadorpantoja", icon: Linkedin },
                { href: "https://www.instagram.com/chava33p?igsh=MTN2Zno2NjJzaHd0dQ%3D%3D&utm_source=qr", icon: Instagram }
              ].map((social, idx) => (
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

      {/* Botón scroll to top mejorado */}
      {scrolled && (
        <button
          onClick={() => scrollToSection('inicio')}
          className="fixed bottom-8 left-8 p-4 bg-gradient-to-r from-red-500 to-blue-500 rounded-full shadow-2xl hover:shadow-red-500/50 transition-all hover:scale-125 z-40 animate-bounce group"
          onMouseEnter={() => setCursorVariant('hover')}
          onMouseLeave={() => setCursorVariant('default')}
        >
          <ChevronDown size={24} className="rotate-180 group-hover:animate-pulse" />
          <span className="absolute inset-0 rounded-full border-2 border-red-400 pulse-ring opacity-0 group-hover:opacity-100"></span>
        </button>
      )}
    </div>
  );
}