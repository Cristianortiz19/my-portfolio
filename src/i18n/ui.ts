// ─────────────────────────────────────────────────────────────
//  Textos del sitio en inglés (por defecto) y español.
//  Para editar un texto, cámbialo en ambos idiomas.
// ─────────────────────────────────────────────────────────────

export const languages = { en: 'EN', es: 'ES' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

/** Devuelve la ruta con el prefijo de idioma. localePath('es', '/projects') → '/es/projects' */
export function localePath(lang: Lang, path = '/') {
  const p = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return p;
  return p === '/' ? '/es/' : `/es${p}`;
}

export const contact = {
  email: 'cristianortiz0319@hotmail.com',
  linkedin: 'https://www.linkedin.com/in/cristian-ortiz-melendez',
  behance: 'https://www.behance.net/cristianortiz6',
  cv: '/Cristian_Ortiz_CV.pdf',
};

export const ui = {
  en: {
    meta: {
      title: 'Cristian Ortiz — Product & UI/UX Designer',
      description:
        'Product & UI/UX Designer with 4+ years of experience in product design, interfaces and design systems. Based in Cali, Colombia, working remotely worldwide.',
      projectsTitle: 'Projects — Cristian Ortiz',
      projectsDescription: 'Selected product design, design system and front-end work by Cristian Ortiz.',
    },
    nav: {
      work: 'Work',
      about: 'About',
      services: 'Services',
      contact: 'Contact',
      cta: "Let's talk",
      menu: 'Menu',
      close: 'Close',
      skip: 'Skip to content',
    },
    hero: {
      role: 'Product & UI/UX Designer',
      statement: [
        { t: "I'm a " },
        { t: 'product designer', c: 'orange' },
        { t: ' crafting ' },
        { t: 'interfaces', c: 'serif' },
        { t: ', ' },
        { t: 'design systems', c: 'blue' },
        { t: ' and digital experiences people enjoy using.' },
      ],
      cta: "Let's talk",
      viewWork: 'View work',
      available: 'Available for projects',
      badge: '4+ YEARS · PRODUCT DESIGN · UI/UX · DESIGN SYSTEMS · ',
    },
    clients: 'Worked with teams at',
    about: {
      label: 'About',
      statement: [
        { t: "I'm a product designer with 4+ years crafting " },
        { t: 'interfaces', c: 'serif' },
        { t: ', ' },
        { t: 'design systems', c: 'orange' },
        { t: ' and component architecture — and I write the ' },
        { t: 'code', c: 'blue' },
        { t: ' that ships them.' },
      ],
      bio: [
        'With over 4 years of experience and more than 20 brands behind me, I design clear, scalable digital products people love to use. I work with remote, international teams to turn complex problems into simple experiences.',
        'I studied Interactive Media Design at ICESI University. Spanish is my native language and I work in English every day (B2+, EF SET).',
      ],
      localTime: 'Local time',
      stats: [
        { value: 4, suffix: '+', label: 'Years designing digital products' },
        { value: 20, suffix: '+', label: 'Brands & interfaces delivered' },
        { value: 17, suffix: '', label: 'Platforms unified into one portal' },
        { value: 40, suffix: '%', label: 'Less platform-switching time' },
      ],
    },
    stickers: {
      label: 'Skills & tools',
      title: ['Design with', 'purpose.'],
      hint: 'Drag the stickers around',
    },
    expertise: {
      label: 'Expertise & skills',
      title: 'What I bring to the table',
    },
    experience: {
      label: 'Experience',
      title: 'Where I’ve worked',
      education: 'Education',
      present: 'Present',
    },
    work: {
      label: 'Selected work',
      featured: ['Featured', 'work'],
      scroll: '(Scroll to explore)',
      title: 'Projects.',
      all: 'All projects',
      viewProject: 'View project',
      viewSite: 'Visit site',
      nda: 'Under NDA — ask me about it',
      soon: 'Case study coming soon',
    },
    projectsPage: {
      intro:
        'A selection of product design, design systems and front-end projects — from internal platforms and mobile apps to component libraries.',
      filters: { all: 'All', web: 'Web', mobile: 'Mobile', system: 'Design Systems' },
      more: 'More on Behance',
      moreText: 'Explorations, case studies and visual work.',
      back: 'Back home',
    },
    services: {
      label: 'How I can help',
      title: 'Services.',
      categories: 'Categories',
    },
    contactSection: {
      label: 'Contact',
      line1: "Let's build",
      line2: 'something',
      line3: 'together.',
      text: 'Have a product, a design system or a website in mind? I’m currently open to freelance projects and full-time remote roles.',
      copy: 'Copy',
      copied: 'Copied!',
      marquee: 'Available for new projects',
    },
    footer: {
      rights: 'All rights reserved.',
      built: 'Designed & built by me with Astro, Tailwind CSS & GSAP.',
      top: 'Back to top',
    },
  },

  es: {
    meta: {
      title: 'Cristian Ortiz — Diseñador de Producto & UI/UX',
      description:
        'Diseñador de producto y UI/UX con más de 4 años de experiencia en diseño de producto, interfaces y sistemas de diseño. Desde Cali, Colombia, trabajando en remoto para todo el mundo.',
      projectsTitle: 'Proyectos — Cristian Ortiz',
      projectsDescription: 'Proyectos seleccionados de diseño de producto, sistemas de diseño y front-end de Cristian Ortiz.',
    },
    nav: {
      work: 'Proyectos',
      about: 'Sobre mí',
      services: 'Servicios',
      contact: 'Contacto',
      cta: 'Hablemos',
      menu: 'Menú',
      close: 'Cerrar',
      skip: 'Saltar al contenido',
    },
    hero: {
      role: 'Diseñador de Producto & UI/UX',
      statement: [
        { t: 'Soy ' },
        { t: 'diseñador de producto', c: 'orange' },
        { t: ' y creo ' },
        { t: 'interfaces', c: 'serif' },
        { t: ', ' },
        { t: 'sistemas de diseño', c: 'blue' },
        { t: ' y experiencias digitales que la gente disfruta usar.' },
      ],
      cta: 'Hablemos',
      viewWork: 'Ver proyectos',
      available: 'Disponible para proyectos',
      badge: '4+ AÑOS · PRODUCTO · UI/UX · SISTEMAS DE DISEÑO · ',
    },
    clients: 'He trabajado con equipos de',
    about: {
      label: 'Sobre mí',
      statement: [
        { t: 'Soy diseñador de producto con más de 4 años creando ' },
        { t: 'interfaces', c: 'serif' },
        { t: ', ' },
        { t: 'sistemas de diseño', c: 'orange' },
        { t: ' y arquitectura de componentes — y escribo el ' },
        { t: 'código', c: 'blue' },
        { t: ' que los lleva a producción.' },
      ],
      bio: [
        'Con más de 4 años de experiencia y más de 20 marcas en mi trayectoria, diseño productos digitales claros, escalables y fáciles de usar. Trabajo con equipos remotos e internacionales para convertir problemas complejos en experiencias simples.',
        'Estudié Diseño de Medios Interactivos en la Universidad ICESI. Mi idioma nativo es el español y trabajo en inglés todos los días (B2+, EF SET).',
      ],
      localTime: 'Hora local',
      stats: [
        { value: 4, suffix: '+', label: 'Años diseñando productos digitales' },
        { value: 20, suffix: '+', label: 'Marcas e interfaces entregadas' },
        { value: 17, suffix: '', label: 'Plataformas unificadas en un portal' },
        { value: 40, suffix: '%', label: 'Menos tiempo cambiando de plataforma' },
      ],
    },
    stickers: {
      label: 'Habilidades y herramientas',
      title: ['Diseño con', 'propósito.'],
      hint: 'Arrastra los stickers',
    },
    expertise: {
      label: 'Experiencia y habilidades',
      title: 'Lo que aporto a tu equipo',
    },
    experience: {
      label: 'Trayectoria',
      title: 'Dónde he trabajado',
      education: 'Educación',
      present: 'Actual',
    },
    work: {
      label: 'Trabajo seleccionado',
      featured: ['Proyectos', 'destacados'],
      scroll: '(Haz scroll para explorar)',
      title: 'Proyectos.',
      all: 'Todos los proyectos',
      viewProject: 'Ver proyecto',
      viewSite: 'Visitar sitio',
      nda: 'Bajo NDA — pregúntame por él',
      soon: 'Caso de estudio próximamente',
    },
    projectsPage: {
      intro:
        'Una selección de proyectos de diseño de producto, sistemas de diseño y front-end — desde plataformas internas y apps móviles hasta librerías de componentes.',
      filters: { all: 'Todos', web: 'Web', mobile: 'Móvil', system: 'Sistemas de diseño' },
      more: 'Más en Behance',
      moreText: 'Exploraciones, casos de estudio y trabajo visual.',
      back: 'Volver al inicio',
    },
    services: {
      label: 'Cómo puedo ayudarte',
      title: 'Servicios.',
      categories: 'Categorías',
    },
    contactSection: {
      label: 'Contacto',
      line1: 'Construyamos',
      line2: 'algo',
      line3: 'juntos.',
      text: '¿Tienes en mente un producto, un sistema de diseño o un sitio web? Estoy abierto a proyectos freelance y a roles remotos de tiempo completo.',
      copy: 'Copiar',
      copied: '¡Copiado!',
      marquee: 'Disponible para nuevos proyectos',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      built: 'Diseñado y desarrollado por mí con Astro, Tailwind CSS y GSAP.',
      top: 'Volver arriba',
    },
  },
};

export type UI = (typeof ui)[Lang];
