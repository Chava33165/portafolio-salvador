import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Github, Linkedin, Mail, Code, Briefcase, User, ChevronDown, Download, ExternalLink, Star, Award, BookOpen, Zap, Send, ArrowRight, Calendar, MapPin, Phone, Terminal } from 'lucide-react';

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
  const [typedText, setTypedText] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const roles = [
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
];

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
    }, 100);
    return () => clearInterval(timer);
  }, [currentRole]);

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
      descripcion: "Pipeline de datos Dockerizada con Airflow. Implementación de arquitectura bronce–plata–oro con transformaciones dbt. Desarrollo de cuatro tablas analíticas (financieras, técnicas, no-PII, PII) con control de acceso por roles. Validación de datos con PostgreSQL / pgAdmin4.",
      tecnologias: ["Airflow", "Docker", "dbt", "PostgreSQL", "pgAdmin4", "Big Data"],
      color: "from-black-500 to-indigo-500",
      github: "https://github.com/Chava33165/DrivenPath/tree/chapter_3/chapter_3",
      imagen: "/images/soft.jpeg", // <-- ¡Aquí va la URL de tu imagen!
      destacado: true
    },
    {
      titulo: "SoundLink LED",
      descripcion: "Vúmetro interactivo de 10 LEDs controlado en tiempo real por el sonido captado desde una aplicación móvil React Native. Utiliza Bluetooth Low Energy (BLE) para comunicarse con un microcontrolador ESP32-C3, creando una experiencia visual sincronizada con música o voz. Proyecto multiplataforma con firmware y app integrados.",
      tecnologias: ["React Native", "Expo", "BLE", "ESP32-C3", "Arduino", "JavaScript"],
      github: "https://github.com/Chava33165/SoundLink_LED",
      imagen: "/images/Micro.webp",  
      destacado: true
    },
    {
      titulo: "WaterLevel Monitor IoT",
      descripcion: "Sistema integral de monitoreo y gestión del nivel de agua en depósitos domésticos mediante sensores ultrasónicos y comunicación BLE/WiFi. Desarrollado con ESP32 y una aplicación móvil multiplataforma creada con React Native y Expo. Permite visualizar en tiempo real el nivel del tanque, registrar históricos y enviar alertas de bajo nivel. Proyecto orientado a la eficiencia del consumo hídrico y la automatización del hogar.",
      tecnologias: ["React Native", "Expo", "ESP32", "IoT", "BLE", "Arduino", "JavaScript"],
      color: "from-cyan-500 to-red-500",
      github: "https://github.com/Chava33165/WaterLevel",
      imagen: "/images/lwater.png", 
      destacado: true

    },
    {
      titulo: "Sensor Ball – Simulador de Movimiento por Acelerómetro",
      descripcion: "Aplicación móvil desarrollada con React Native y Expo que convierte el smartphone en una superficie de control físico. Utiliza el acelerómetro del dispositivo para simular la fuerza de la gravedad y controlar el desplazamiento de un balón dentro de una cancha digital. Mediante cálculos de física aplicada, el sistema reacciona de manera fluida al movimiento del usuario, ajustando velocidad, rebote y fricción para ofrecer una experiencia realista. Este proyecto integra conceptos de interacción sensorial, animaciones dinámicas y renderizado en tiempo real, ideal para experimentos con sensores de movimiento o prototipos de videojuegos móviles.",
      tecnologias: ["React Native", "Expo", "Accelerometer", "Animated API", "JavaScript"],
      color: "from-vine-500 to-lime-500",
      github: "https://github.com/Chava33165/Sensor-Ball",
      imagen: "/images/lbalon.png",
      destacado: true
    },
    {
      titulo: "Portafolio Personal Interactivo",
      descripcion: "Portafolio web moderno y responsivo desarrollado con React. Incluye efectos de typing animado, navegación suave, formulario de contacto funcional, animaciones al scroll y diseño glassmorphism. Optimizado para SEO y rendimiento, con integración de iconos Lucide React y gradientes dinámicos.",
      tecnologias: ["React", "Tailwind CSS", "JavaScript", "Lucide Icons", "Responsive Design"],
      color: "from-purple-500 to-red-1000",
      github: "https://github.com/Chava33165/portafolio-salvador",
      imagen: "/images/lportafolio.png",
      destacado: false
    }
    
  ];

  const habilidades = [
  // 🖥️ Frontend
  { nombre: "JavaScript / TypeScript", nivel: 95, categoria: "Frontend" },
  { nombre: "React & React Native (Expo)", nivel: 90, categoria: "Frontend" },
  { nombre: "Tailwind CSS & UI Design", nivel: 80, categoria: "Frontend" },
  { nombre: "Animated API & Sensors (Accelerometer, BLE)", nivel: 85, categoria: "Frontend" },

  // ⚙️ Backend / IoT
  { nombre: "Node.js & Express", nivel: 80, categoria: "Backend" },
  { nombre: "Arduino / ESP32 (Firmware IoT)", nivel: 85, categoria: "Backend" },
  { nombre: "Bluetooth Low Energy (BLE)", nivel: 80, categoria: "Backend" },

  // 🗄️ Bases de Datos / Data Engineering
  { nombre: "PostgreSQL & pgAdmin4", nivel: 85, categoria: "Database" },
  { nombre: "XAMPP & MariaDB", nivel: 80, categoria: "Database" },
  { nombre: "dbt (Data Build Tool)", nivel: 75, categoria: "Data Engineering" },
  { nombre: "Airflow (ETL Pipelines)", nivel: 80, categoria: "Data Engineering" },

  // 🐳 DevOps / Herramientas
  { nombre: "Docker & Containerization", nivel: 85, categoria: "DevOps" },
  { nombre: "Git & GitHub / CI-CD", nivel: 90, categoria: "Tools" },

  // ☁️ Extras
  { nombre: "Big Data Concepts", nivel: 70, categoria: "Data Engineering" },
  { nombre: "Project Documentation & Deployment", nivel: 80, categoria: "Tools" }
];


  /* ---------------------------------------- Servicios (Comentado para posible uso futuro) ---------------------------------------- 
  const servicios = [
    {
      icon: <Code size={32} />,
      titulo: "Desarrollo Web",
      descripcion: "Aplicaciones web modernas, rápidas y escalables utilizando las últimas tecnologías",
      items: ["Single Page Applications", "Progressive Web Apps", "E-commerce", "Dashboards"]
    },
    {
      icon: <Terminal size={32} />,
      titulo: "Backend & APIs",
      descripcion: "Arquitecturas robustas y APIs RESTful/GraphQL para tus aplicaciones",
      items: ["API Development", "Database Design", "Authentication", "Microservicios"]
    },
    {
      icon: <Zap size={32} />,
      titulo: "Optimización",
      descripcion: "Mejoro el rendimiento de aplicaciones existentes y las hago más rápidas",
      items: ["Performance", "SEO", "Code Review", "Refactoring"]
    },
    {
      icon: <Award size={32} />,
      titulo: "Consultoría",
      descripcion: "Te ayudo a elegir las mejores tecnologías y arquitectura para tu proyecto",
      items: ["Tech Stack", "Arquitectura", "Code Quality", "Mentoring"]
    }
  ];
  -------------------------------------------------------------------------------------------------------------------------------------*/



  const experiencias = [
    // ----------------------------------------------------
    // 1. TU CERTIFICACIÓN DE BIG DATA (¡Es importante que esté arriba!)
    // ----------------------------------------------------
    {
      empresa: "SoftServe Academy",
      puesto: "Certificación: Big Data Crash Course",
      periodo: "Julio 2025",
      descripcion: "Curso intensivo enfocado en la arquitectura y procesamiento de datos masivos. Incluyó: Big Data Pipeline, Airflow, dbt, PostgreSQL y diseño de arquitectura Bronze-Silver-Gold.",
      logros: [
        "Certificado ID: Series ZD № 25638/2025",
        "Implementación de pipeline de datos Dockerizada.",
        "Experiencia en validación y control de acceso a datos sensibles (PII)."
      ],
      certificadoURL: "https://career.softserveinc.com/en-us/certification/verification" // URL para el botón
    },
    // ----------------------------------------------------
    // 2. TU CARRERA (Punto de inicio de tu experiencia)
    // ----------------------------------------------------
    {
      empresa: "CETI (Centro de Enseñanzas Técnicas Industriales)",
      puesto: "Tecnólogo en Desarrollo de Software",
      periodo: "2022 - 2026 (Pendiente de Título)",
      descripcion: "Formación académica y técnica que marcó el inicio de mi trayectoria como desarrollador de software. Enfoque en programación orientada a objetos, bases de datos y desarrollo web full-stack.",
      logros: [
        "Adquisición de bases sólidas en lógica de programación y estructuras de datos.",
        "Desarrollo de proyectos finales con metodologías ágiles.",
        // Puedes añadir aquí un logro más específico de la carrera
      ],
      // Puedes poner 'certificadoURL: "/ruta/a/mi/titulo.pdf"' cuando lo tengas, o dejarlo vacío por ahora
    }
    
  ];

/*

  const estadisticas = [
    { numero: "60+", texto: "Proyectos Completados", icon: <Code className="text-red-400" size={24} /> },
    { numero: "40+", texto: "Clientes Satisfechos", icon: <Star className="text-yellow-400" size={24} /> },
    { numero: "5+", texto: "Años Experiencia", icon: <Award className="text-blue-400" size={24} /> },
    { numero: "15k+", texto: "Líneas de Código", icon: <Terminal className="text-blue-400" size={24} /> }
  ];

  */

  /* ---------------------------------------- Testimonios ---------------------------------------- 
  const testimonios = [
    {
      nombre: "María González",
      puesto: "CEO en TechStart",
      empresa: "TechStart Inc",
      texto: "Profesional excepcional. Entregó el proyecto antes de tiempo con calidad superior a la esperada. Su comunicación fue clara y siempre estuvo disponible.",
      rating: 5
    },
    {
      nombre: "Carlos Ruiz",
      puesto: "Product Manager",
      empresa: "Digital Corp",
      texto: "Excelente desarrollador con gran atención al detalle. Transformó nuestras ideas en una aplicación robusta y escalable. Totalmente recomendado.",
      rating: 5
    },
    {
      nombre: "Ana Martínez",
      puesto: "CTO",
      empresa: "InnovateLab",
      texto: "Su expertise técnico y capacidad de resolver problemas complejos es impresionante. Una gran adición a cualquier proyecto.",
      rating: 5
    }
  ];
----------------------------------------------------------------------------------------------------*/

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
        .fade-in-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
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
      `}</style>

      {/* Partículas flotantes */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-500 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* NAVEGACIÓN */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl shadow-red-500/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <h1 
            className="text-2xl font-bold bg-gradient-to-r from-red-400 via-blue-400 to-red-400 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform"
            onClick={() => scrollToSection('inicio')}
          >
            Mi Portafolio
          </h1>
          
          <div className="hidden md:flex gap-8 items-center">
            {[
              { id: 'inicio', label: 'Inicio' },
              { id: 'sobre-mi', label: 'Sobre Mí' },
              { id: 'proyectos', label: 'Proyectos' },
              { id: 'experiencia', label: 'Experiencia' },
              { id: 'contacto', label: 'Contacto' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative font-medium hover:text-red-400 transition-colors ${activeSection === item.id ? 'text-red-400' : ''}`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-red-400 to-blue-400 rounded-full"></span>
                )}
              </button>
            ))}
            <a 
              href="/Mi CV.pdf" 
              download
              className="px-6 py-2.5 bg-gradient-to-r from-red-500 to-blue-500 rounded-full font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all flex items-center gap-2 hover:scale-105"
            >
              <Download size={16} />
              Descargar CV
            </a>
          </div>

          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800">
            {['inicio', 'sobre-mi', 'proyectos', 'experiencia', 'contacto'].map((seccion) => (
              <button
                key={seccion}
                onClick={() => scrollToSection(seccion)}
                className="block w-full text-left px-6 py-4 capitalize hover:bg-red-900/30 transition-colors border-b border-gray-800"
              >
                {seccion.replace('-', ' ')}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="inicio" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-5xl w-full space-y-8 fade-in-section">
          <div className="text-center space-y-6">
            
            
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold leading-tight">
              Hola, Soy{' '}
              <span className="bg-gradient-to-r from-red-400 via-blue-400 to-red-400 bg-clip-text text-transparent">
                Salvador Pantoja
              </span>
            </h1>
            
            <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-300 h-12 typing-cursor">
              {typedText}
            </div>

            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-6">
              <button 
                onClick={() => scrollToSection('proyectos')}
                className="group px-8 py-4 bg-gradient-to-r from-red-500 to-blue-500 rounded-full font-semibold hover:shadow-2xl hover:shadow-red-500/50 transform hover:scale-105 transition-all flex items-center gap-2"
              >
                Ver Mi Trabajo
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="px-8 py-4 border-2 border-red-500 rounded-full font-semibold hover:bg-red-500/10 transition-all flex items-center gap-2"
              >
                <Mail size={20} />
                Hablemos
              </button>
            </div>

            <div className="flex gap-4 justify-center pt-8">
              <a href="https://github.com/Chava33165" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 hover:bg-red-600 rounded-full transition-all hover:scale-110">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/salvadorpantoja" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 hover:bg-red-600 rounded-full transition-all hover:scale-110">
                <Linkedin size={24} />
              </a>
              <a href="a22300165@ceti.mx" className="p-3 bg-gray-800 hover:bg-red-600 rounded-full transition-all hover:scale-110">
                <Mail size={24} />
              </a>
            </div>
          </div>


          {/* Estadísticas 

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
            {estadisticas.map((stat, i) => (
              <div 
                key={i} 
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-red-500 transition-all hover:transform hover:scale-105 text-center"
              >
                <div className="flex justify-center mb-3">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">
                  {stat.numero}
                </div>
                <div className="text-gray-400 text-sm mt-2">{stat.texto}</div>
              </div>
            ))}
          </div>


          */}
          

          <div className="flex justify-center pt-8">
            <ChevronDown 
              className="animate-bounce text-red-400 cursor-pointer" 
              size={40}
              onClick={() => scrollToSection('sobre-mi')}
            />
          </div>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section id="sobre-mi" className="py-20 px-4 fade-in-section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">
              Sobre Mí
            </h2>
            <p className="text-gray-400 text-lg">Conoce mi historia y habilidades</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <User className="text-red-400" />
                  Mi Historia
                </h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Desde pequeño siempre he estado encantado con la tecnología. Me fascinaba entender cómo funcionaban las cosas, 
                    desarmar aparatos y descubrir qué había detrás de cada pantalla. Esa curiosidad poco a poco se convirtió 
                    en una verdadera pasión que me ha acompañado hasta hoy.
                  </p>
                  <p>
                    En el 2022 decidí dar un paso más y estudiar en el <strong>Centro de Enseñanza Técnica Industrial (CETI)</strong>, 
                    donde actualmente curso la carrera de Tecnólogo en Desarrollo de Software. 
                    Ha sido una experiencia increíble que me ha permitido crecer tanto técnica como personalmente, 
                    aprendiendo de grandes compañeros y profesores.
                  </p>
                  <p>
                    Hoy en día me interesa seguir aprendiendo a través de <strong>internships</strong> y colaboraciones, 
                    conociendo personas apasionadas por la tecnología como yo, dispuestas a compartir sus experiencias y conocimientos. 
                    Me llaman mucho la atención áreas como la <strong>ciberseguridad</strong>, <strong>DevOps</strong>, 
                    el <strong>desarrollo web y móvil</strong>, e incluso la <strong>electrónica</strong>.
                  </p>
                  <p>
                    Más allá del código, también me gusta mantener un equilibrio. 
                    Disfruto <strong>hacer ejercicio</strong> para despejar la mente o <strong>salir con mis amigos</strong> 
                    a pasar un buen rato y recargar energía. Creo que la creatividad también nace de esos momentos simples 
                    fuera de la pantalla.
                  </p>
                </div>


                <div className="flex flex-wrap gap-3 mt-6">
                  <span className="flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-300 text-sm">
                    <BookOpen size={16} />
                    Aprendiz Continuo
                  </span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm">
                    <Code size={16} />
                    Clean Code
                  </span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm">
                    <Zap size={16} />
                    Problem Solver
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Zap className="text-red-400" />
                Stack Técnico
              </h3>
              <div className="space-y-6">
                {habilidades.map((skill, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-semibold text-white">{skill.nombre}</span>
                        <span className="text-xs text-gray-500 ml-2">{skill.categoria}</span>
                      </div>
                      <span className="text-red-400 font-bold text-sm">{skill.nivel}%</span>
                    </div>
                    <div className="h-2.5 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-red-500 to-blue-500 rounded-full transition-all duration-1000 relative"
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

{/* 
----------------------------------------
Servicios (Desactivado temporalmente)
----------------------------------------

<section id="servicios" className="py-20 px-4 bg-black/20 fade-in-section">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">
        ¿Qué Puedo Hacer Por Ti?
      </h2>
      <p className="text-gray-400 text-lg">Servicios profesionales de desarrollo web</p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {servicios.map((servicio, i) => (
        <div 
          key={i}
          className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all hover:transform hover:scale-105 group"
        >
          <div className="text-red-400 mb-4 group-hover:scale-110 transition-transform">
            {servicio.icon}
          </div>
          <h3 className="text-xl font-bold mb-3 group-hover:text-red-400 transition-colors">
            {servicio.titulo}
          </h3>
          <p className="text-gray-400 mb-4 text-sm leading-relaxed">
            {servicio.descripcion}
          </p>
          <ul className="space-y-2">
            {servicio.items.map((item, j) => (
              <li key={j} className="text-sm text-gray-500 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</section>
*/}



{/* PROYECTOS */}
<section id="proyectos" className="py-20 px-4 fade-in-section">
    <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">
                Proyectos Destacados
            </h2>
            <p className="text-gray-400 text-lg">Algunos de mis trabajos más recientes</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proyectos.map((proyecto, i) => (
                <div 
                    key={i}
                    className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-red-500 transition-all duration-300"
                >
                    <div className={`relative w-full h-64 bg-gradient-to-br ${proyecto.color} flex items-center justify-center overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors"></div>
                        
                        {/* Lógica para determinar si es Imagen (URL) o Emoji/Fallback (Texto) */}
                        {
                            proyecto.imagen && (proyecto.imagen.startsWith('/') || proyecto.imagen.startsWith('http') || proyecto.imagen.startsWith('data:')) ? (
                                // 1. Renderiza la IMAGEN (foto)
                                <img
                                    src={proyecto.imagen}
                                    alt={`Captura de pantalla del proyecto ${proyecto.titulo}`}
                                    // w-full h-full object-cover asegura que la foto llene el contenedor
                                    className="w-full h-full object-cover relative z-10 transition-opacity duration-300 group-hover:opacity-70"
                                />
                            ) : (
                                // 2. Renderiza el EMOJI o texto grande (comportamiento original)
                                <span className="relative z-10 text-8xl">{proyecto.imagen}</span>
                            )
                        }
                        {/* Fin de la Lógica de Visualización */}
                        
                        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                            <a 
                                href={proyecto.github} 
                                className="p-4 bg-white rounded-full text-gray-900 hover:scale-110 transition-transform shadow-xl"
                                title="Ver Código"
                            >
                                <Github size={24} />
                            </a>
                        </div>

                        {proyecto.destacado && (
                            <div className="absolute top-4 right-4 bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                                <Star size={12} />
                                Destacado
                            </div>
                        )}
                    </div>
                    
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-red-400 transition-colors">
                            {proyecto.titulo}
                        </h3>
                        <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                            {proyecto.descripcion}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {proyecto.tecnologias.map((tech, j) => (
                                <span 
                                    key={j} 
                                    className="px-3 py-1 bg-red-500/20 border border-red-500/30 text-red-300 rounded-full text-xs font-semibold"
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
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-800 hover:bg-red-600 rounded-full font-semibold transition-all hover:scale-105"
            >
                <Github size={20} />
                Ver Todos los Proyectos en GitHub
                <ExternalLink size={16} />
            </a>
        </div>
    </div>
</section>

      {/* EXPERIENCIA */}
      <section id="experiencia" className="py-20 px-4 bg-black/20 fade-in-section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">
              Mi Trayectoria
            </h2>
            <p className="text-gray-400 text-lg">Experiencia profesional</p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 to-blue-500"></div>
            
            <div className="space-y-12">
              {experiencias.map((exp, i) => (
                <div key={i} className="relative pl-20">
                  <div className="absolute left-5 top-2 w-6 h-6 bg-red-500 rounded-full border-4 border-gray-900 shadow-lg shadow-red-500/50"></div>
                  
                  <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all group">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-red-400 group-hover:text-blue-400 transition-colors">
                          {exp.puesto}
                        </h3>
                        <p className="text-lg text-gray-300 font-semibold mt-1">{exp.empresa}</p>
                      </div>
                      <span className="flex items-center gap-2 text-sm text-gray-400 bg-gray-700/50 px-4 py-2 rounded-full">
                        <Calendar size={16} />
                        {exp.periodo}
                      </span>
                    </div>
                    
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {exp.descripcion}
                    </p>
                    
                    {/* BOTÓN DE CERTIFICADO - Lógica OK */}
                    {exp.certificadoURL && (
                      <div className="mt-4 mb-6">
                        <a 
                          href={exp.certificadoURL} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500 to-blue-500 rounded-full font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all"
                        >
                          <Award size={16} />
                          Ver Certificado
                        </a>
                      </div>
                    )}
                    {/* Fin del Botón de Certificado */}


                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-red-300">Logros destacados:</p>
                      <ul className="space-y-2">
                        {exp.logros.map((logro, j) => (
                          <li key={j} className="flex items-start gap-3 text-sm text-gray-400">
                            <span className="text-red-400 mt-1">▸</span>
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


{/* ---------------------------------------------------------------------------------
  TESTIMONIOS 
  -------------------------------------------------------
  Esta sección muestra opiniones y reseñas de clientes actuales 
  sobre proyectos completados.

  También está pensada para futuros usos, como:
    - Agregar nuevos testimonios de clientes.
    - Mostrar reseñas de futuros proyectos.
    - Incorporar feedback o comentarios generales.
    - Conectarla a una base de datos o panel administrativo 
      para actualizar los testimonios dinámicamente.
  -------------------------------------------------------
*/}
{/* 
  <section className="py-20 px-4 fade-in-section">
    <div className="max-w-7xl mx-auto">
      
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">
          Lo Que Dicen Mis Clientes
        </h2>
        <p className="text-gray-400 text-lg">
          Testimonios reales de proyectos completados y espacio para futuros clientes
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonios.map((test, i) => (
          <div 
            key={i} 
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all hover:transform hover:scale-105"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(test.rating)].map((_, j) => (
                <Star key={j} size={20} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            
            <p className="text-gray-300 italic mb-6 leading-relaxed">
              "{test.texto}"
            </p>
            
            <div className="border-t border-gray-700 pt-4">
              <p className="font-bold text-white">{test.nombre}</p>
              <p className="text-sm text-gray-400">{test.puesto}</p>
              <p className="text-xs text-red-400 mt-1">{test.empresa}</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  </section> 
---------------------------------------------------------------------------------------------------------------------*/}


      {/* CONTACTO */}
      <section id="contacto" className="py-20 px-4 bg-black/20 fade-in-section">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">
              ¡Trabajemos Juntos!
            </h2>
            <p className="text-gray-400 text-lg">¿Tienes un proyecto en mente? Hablemos</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Información de contacto */}
            <div className="space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
                <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
                
                <div className="space-y-4">
                  <a 
                    href="a22300165@ceti.mx" 
                    className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-xl hover:bg-red-600/20 transition-all group"
                  >
                    <div className="p-3 bg-red-500/20 rounded-lg group-hover:bg-red-500 transition-colors">
                      <Mail className="text-red-400 group-hover:text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="font-semibold">a22300165@ceti.mx.com</p>
                    </div>
                  </a>

                  <a 
                    href="tel:+523332202065" 
                    className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-xl hover:bg-red-600/20 transition-all group"
                  >
                    <div className="p-3 bg-red-500/20 rounded-lg group-hover:bg-red-500 transition-colors">
                      <Phone className="text-red-400 group-hover:text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Teléfono</p>
                      <p className="font-semibold">+52 33 3220 2065</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-xl">
                    <div className="p-3 bg-red-500/20 rounded-lg">
                      <MapPin className="text-red-400" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Ubicación</p>
                      <p className="font-semibold">Guadalajara, México</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-sm text-gray-400 mb-4">Sígueme en redes:</p>
                  <div className="flex gap-3">
                    <a href="https://github.com/Chava33165" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-700 hover:bg-red-600 rounded-lg transition-all hover:scale-110">
                      <Github size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/salvadorpantoja" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-700 hover:bg-red-600 rounded-lg transition-all hover:scale-110">
                      <Linkedin size={24} />
                    </a>
                    <a href="a22300165@ceti.mx" className="p-3 bg-gray-700 hover:bg-red-600 rounded-lg transition-all hover:scale-110">
                      <Mail size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario de contacto */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-6">Envíame un Mensaje</h3>
              
              {showSuccess && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 animate-pulse">
                  ✓ ¡Mensaje enviado! Te contactaré pronto.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-red-500 transition-colors text-white"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-red-500 transition-colors text-white"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">
                    Mensaje
                  </label>
                  <textarea
                    required
                    value={formData.mensaje}
                    onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-red-500 transition-colors text-white resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-red-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all flex items-center justify-center gap-2 hover:scale-105"
                >
                  <Send size={20} />
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent mb-2">
                "The people who are crazy enough to think they can change the world are the ones who do."
              </h3>
              <p className="text-gray-400 text-sm">
                — Steve Jobs (Apple's "Think Different" campaign, 1997)
              </p>
            </div>

            <div className="flex gap-4">
              <a href="https://github.com/Chava33165" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 hover:bg-red-600 rounded-full transition-all hover:scale-110">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/salvadorpantoja" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 hover:bg-red-600 rounded-full transition-all hover:scale-110">
                <Linkedin size={20} />
              </a>
              <a 
              href="https://www.instagram.com/chava33p?igsh=MTN2Zno2NjJzaHd0dQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-red-600 rounded-full transition-all hover:scale-110"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>© 2025 Pantoja Vera Salvador Antonio. Hecho con ❤️ y React en Guadalajara, México</p>
          </div>
        </div>
      </footer>

      {/* Botón scroll to top */}
      {scrolled && (
        <button
          onClick={() => scrollToSection('inicio')}
          className="fixed bottom-8 left-8 p-4 bg-gradient-to-r from-red-500 to-blue-500 rounded-full shadow-lg hover:shadow-red-500/50 transition-all hover:scale-110 z-40"
        >
          <ChevronDown size={24} className="rotate-180" />
        </button>
      )}
    </div>
  );
}