// ─────────────────────────────────────────────────────────────
//  Experiencia, habilidades y servicios (bilingüe)
// ─────────────────────────────────────────────────────────────
import type { Lang } from '../i18n/ui';

type T = Record<Lang, string>;

export const clients = [
  'Publicis Global Delivery',
  'PayPal',
  'Amica',
  'Eficacia',
  'Logitech',
  'Rivian',
  'William & Mary',
  'Banco W',
  'Terminal Agency',
];

export const expertise: {
  title: T;
  color: 'orange' | 'blue' | 'bone' | 'outline';
  text: T;
  skills: string[];
}[] = [
  {
    title: { en: 'Product', es: 'Producto' },
    color: 'orange',
    text: {
      en: 'End-to-end product design — research, information architecture, flows and high-fidelity prototypes focused on real user problems.',
      es: 'Diseño de producto de principio a fin — investigación, arquitectura de información, flujos y prototipos de alta fidelidad enfocados en problemas reales.',
    },
    skills: ['User Research', 'Information Architecture', 'User Flows', 'Wireframing', 'Prototyping', 'Usability Testing'],
  },
  {
    title: { en: 'Systems', es: 'Sistemas' },
    color: 'blue',
    text: {
      en: 'Scalable component libraries, tokens and guidelines that keep teams consistent and speed up the design-to-dev handoff.',
      es: 'Librerías de componentes, tokens y guías escalables que mantienen la consistencia del equipo y agilizan el handoff a desarrollo.',
    },
    skills: ['Figma', 'Design Tokens', 'Component Architecture', 'Storybook', 'Documentation', 'Accessibility'],
  },
  {
    title: { en: 'Engineering', es: 'Desarrollo' },
    color: 'bone',
    text: {
      en: 'Production-ready interfaces with modern frameworks. I speak both design and code, so nothing gets lost in translation.',
      es: 'Interfaces listas para producción con frameworks modernos. Hablo diseño y código, así que nada se pierde en la traducción.',
    },
    skills: ['HTML & CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Astro', 'Tailwind CSS', 'Git'],
  },
  {
    title: { en: 'Visual', es: 'Visual' },
    color: 'outline',
    text: {
      en: 'Brand identities, UI assets, motion and immersive AR experiences that give products a distinct voice.',
      es: 'Identidades de marca, assets de UI, motion y experiencias inmersivas en AR que le dan a cada producto una voz propia.',
    },
    skills: ['Branding', 'Illustrator', 'Photoshop', 'After Effects', 'Framer', '3D & AR'],
  },
];

export const experience: {
  start: string;
  end: string | null;
  role: T;
  company: string;
  place: T;
  summary: T;
}[] = [
  {
    start: '2025',
    end: '2026',
    role: { en: 'Creative UI Designer', es: 'Creative UI Designer' },
    company: 'Publicis Global Delivery',
    place: { en: 'Remote', es: 'Remoto' },
    summary: {
      en: "Built a design system for Amica's website redesign and created brand-aligned UI assets and banners for PayPal.",
      es: 'Construí un sistema de diseño para el rediseño web de Amica y creé assets de UI y banners para PayPal alineados a su marca.',
    },
  },
  {
    start: '2024',
    end: '2025',
    role: { en: 'UI/UX Designer & Web Developer', es: 'Diseñador UI/UX & Desarrollador web' },
    company: 'Eficacia S.A.',
    place: { en: 'Cali, Colombia', es: 'Cali, Colombia' },
    summary: {
      en: 'Led the UX/UI of the Conectémonos portal — 17 platforms, one ecosystem — and built its scalable component library.',
      es: 'Lideré el UX/UI del portal Conectémonos — 17 plataformas, un solo ecosistema — y construí su librería de componentes.',
    },
  },
  {
    start: '2024',
    end: null,
    role: { en: 'Founder', es: 'Fundador' },
    company: 'Kometa Studio',
    place: { en: 'Cali, Colombia · Remote', es: 'Cali, Colombia · Remoto' },
    summary: {
      en: 'Founded a web development studio that combines UI/UX design with modern technology to build user-centered digital experiences that help brands grow.',
      es: 'Fundé un estudio de desarrollo web que combina diseño UI/UX con tecnología moderna para crear experiencias digitales centradas en el usuario que ayudan a crecer a las marcas.',
    },
  },
  {
    start: '2021',
    end: '2025',
    role: { en: 'UI/Graphic Designer & Developer', es: 'Diseñador UI/Gráfico & Desarrollador' },
    company: 'Terminal Agency',
    place: { en: 'Remote · Freelance', es: 'Remoto · Freelance' },
    summary: {
      en: 'Brand identities and interfaces for 20+ companies, shipped as front-end-ready designs with a 30% average lift in engagement.',
      es: 'Identidades de marca e interfaces para más de 20 empresas, entregadas listas para front-end, con un 30% más de engagement en promedio.',
    },
  },
  {
    start: '2022',
    end: '2023',
    role: { en: 'Graphic Designer & Audiovisual Artist', es: 'Diseñador Gráfico & Artista Audiovisual' },
    company: 'Augmented Island Studios',
    place: { en: 'Remote', es: 'Remoto' },
    summary: {
      en: 'Interactive AR experiences, 3D models and textures for clients like Logitech, Rivian and William & Mary.',
      es: 'Experiencias interactivas en AR, modelos 3D y texturas para clientes como Logitech, Rivian y William & Mary.',
    },
  },
];

export const education: { years: string; title: T; school: string }[] = [
  {
    years: '2020 — 2025',
    title: { en: 'Interactive Media Design', es: 'Diseño de Medios Interactivos' },
    school: 'ICESI University',
  },
  {
    years: '2024',
    title: { en: 'Web & Front-End Development', es: 'Desarrollo Web y Front-End' },
    school: 'MinTIC',
  },
];

export const services: { title: T; text: T; categories: string[] }[] = [
  {
    title: { en: 'Product Design & UX/UI Design', es: 'Diseño de Producto & Diseño UX/UI' },
    text: {
      en: 'End-to-end product design, from research and user flows to polished, testable prototypes, backed by scalable design systems: component libraries, tokens and documentation that keep design and engineering speaking the same language.',
      es: 'Diseño de producto de principio a fin, desde la investigación y los flujos de usuario hasta prototipos pulidos y testeables, respaldado por sistemas de diseño escalables: librerías de componentes, tokens y documentación que hacen que diseño y desarrollo hablen el mismo idioma.',
    },
    categories: ['User research & personas', 'Journey mapping & flows', 'UI & interaction design', 'Prototyping & usability testing', 'Component architecture', 'Design tokens', 'Figma libraries', 'Accessibility'],
  },
  {
    title: { en: 'Front-end Development', es: 'Desarrollo Front-end' },
    text: {
      en: 'Fast, responsive and accessible websites and web apps, built pixel-perfect from the design — with smooth motion and clean, maintainable code.',
      es: 'Sitios y aplicaciones web rápidos, responsivos y accesibles, construidos pixel-perfect desde el diseño — con animaciones fluidas y código limpio y mantenible.',
    },
    categories: ['React & Next.js', 'Astro', 'TypeScript', 'Tailwind CSS', 'GSAP animations', 'Responsive & a11y'],
  },
  {
    title: { en: 'Branding & Visual Design', es: 'Branding & Diseño Visual' },
    text: {
      en: 'Visual identities, UI assets and campaign graphics that keep your brand consistent across every platform and touchpoint.',
      es: 'Identidades visuales, assets de UI y piezas de campaña que mantienen tu marca consistente en cada plataforma y punto de contacto.',
    },
    categories: ['Brand identity', 'UI assets & banners', 'Motion graphics', '3D & AR'],
  },
];
