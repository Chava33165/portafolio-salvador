// ============================================
// src/data/projects.js
// ============================================
export const projects = [
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

export const projectDescriptions = {
  es: [
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
  ],
  en: [
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
};
