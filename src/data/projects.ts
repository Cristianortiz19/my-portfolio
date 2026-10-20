// ─────────────────────────────────────────────────────────────
//  Proyectos
//  · Cuando tengas imágenes, guárdalas en /public/projects/ y
//    añade `image: "/projects/nombre.webp"` al proyecto.
//    Mientras no haya imagen se muestra un placeholder diseñado.
//  · `featured: true` → aparece en el home (máx. 4 recomendado).
// ─────────────────────────────────────────────────────────────
import type { Lang } from '../i18n/ui';

export type ProjectKind = 'web' | 'mobile' | 'system';

export interface Project {
  slug: string;
  title: string;
  client?: string;
  year: number;
  kind: ProjectKind;
  accent: 'orange' | 'blue';
  role: Record<Lang, string>;
  description: Record<Lang, string>;
  tags: string[];
  url?: string; // link externo (Behance, sitio en vivo…)
  status?: 'nda' | 'soon'; // si no hay link
  featured?: boolean;
  featuredOrder?: number; // orden en el home (menor = primero)
  image?: string;
}

export const kindLabel: Record<ProjectKind, Record<Lang, string>> = {
  web: { en: 'Web Platform', es: 'Plataforma web' },
  mobile: { en: 'Mobile App', es: 'App móvil' },
  system: { en: 'Design System', es: 'Sistema de diseño' },
};

export const projects: Project[] = [
  {
    slug: 'conectemonos',
    title: 'Portal Conectémonos',
    client: 'Eficacia S.A.',
    year: 2024,
    kind: 'web',
    accent: 'blue',
    role: { en: 'Lead UX/UI Designer & Front-end', es: 'Líder UX/UI & Front-end' },
    description: {
      en: 'An internal portal that unified 17 platforms into a single ecosystem in under 4 months — cutting platform-switching time by 40% and lifting employee productivity by 25%.',
      es: 'Un portal interno que unificó 17 plataformas en un solo ecosistema en menos de 4 meses — reduciendo un 40% el tiempo de cambio entre plataformas y aumentando un 25% la productividad.',
    },
    tags: ['UX/UI', 'Information Architecture', 'Component Library'],
    url: 'https://www.behance.net/gallery/201528415/Portal-Conectmonos-Eficacia',
    featured: true,
    featuredOrder: 3,
    image: '/projects/eficacia.webp',
  },
  {
    slug: 'amica-design-system',
    title: 'Amica Design System',
    client: 'Amica · Publicis Global Delivery',
    year: 2025,
    kind: 'system',
    accent: 'orange',
    role: { en: 'Creative UI Designer', es: 'Creative UI Designer' },
    description: {
      en: "A design system for Amica's website redesign — reusable UI components and visual guidelines that streamlined design handoff across the team.",
      es: 'Un sistema de diseño para el rediseño del sitio web de Amica — componentes reutilizables y guías visuales que agilizaron el handoff de diseño en todo el equipo.',
    },
    tags: ['Design System', 'Components', 'Guidelines'],
    status: 'nda',
    featured: true,
    featuredOrder: 1,
    image: '/projects/amica.webp',
  },
  {
    slug: 'jazz-blue-apron',
    title: 'Jazz — Design System for Blue Apron',
    client: 'Blue Apron',
    year: 2025,
    kind: 'system',
    accent: 'blue',
    role: { en: 'Design System Designer', es: 'Diseñador de Sistemas de Diseño' },
    description: {
      en: 'A design system for Blue Apron that unifies component look and functionality, streamlining development with a clear framework for accessible, intuitive design — 29 prototyped components, 94 variants and 42 colors.',
      es: 'Un sistema de diseño para Blue Apron que unifica la apariencia y funcionalidad de los componentes, agilizando el desarrollo con un marco claro para un diseño accesible e intuitivo — 29 componentes prototipados, 94 variantes y 42 colores.',
    },
    tags: ['Design System', 'Component Library', 'Accessibility'],
    featured: true,
    featuredOrder: 2,
    image: '/projects/jazz-blue-apron.webp',
  },
  {
    slug: 'munchmatch',
    title: 'MunchMatch',
    year: 2023,
    kind: 'mobile',
    accent: 'orange',
    role: { en: 'Product Designer', es: 'Diseñador de producto' },
    description: {
      en: 'An app that ends lunchtime indecision by matching taste preferences, location and budget with personalized cafeteria recommendations.',
      es: 'Una app que acaba con la indecisión a la hora del almuerzo, combinando gustos, ubicación y presupuesto en recomendaciones personalizadas de cafeterías.',
    },
    tags: ['Mobile', 'Product Design', 'UX Research'],
    url: 'https://www.behance.net/gallery/185666373/MUNCHMATCH-Food-recomendation-App',
  },
  {
    slug: 'enerwave',
    title: 'Enerwave',
    client: 'enerBit · Universidad ICESI',
    year: 2023,
    kind: 'web',
    accent: 'blue',
    role: { en: 'UX/UI Designer & Front-end', es: 'Diseñador UX/UI & Front-end' },
    description: {
      en: 'A web app that gives enerBit employees integrated support in one platform: learning paths, a personalized dashboard, a centralized library and continuous feedback, with no extra tools to add.',
      es: 'Una aplicación web que le da a los colaboradores de enerBit un soporte integrado en una sola plataforma: rutas de aprendizaje, un panel personalizado, una biblioteca centralizada y retroalimentación continua, sin herramientas adicionales.',
    },
    tags: ['UX Research', 'UI Design', 'Front-end', 'Dashboard'],
    url: 'https://www.behance.net/gallery/185603759/Enerwave',
    featured: true,
    featuredOrder: 4,
    image: '/projects/enerwave.webp',
  },
  {
    slug: 'jardin-plaza',
    title: 'Jardín Plaza Mobile',
    client: 'Jardín Plaza',
    year: 2023,
    kind: 'mobile',
    accent: 'blue',
    role: { en: 'UX/UI Designer', es: 'Diseñador UX/UI' },
    description: {
      en: 'A mobile app concept for a shopping mall that gives visitors information, interactive features and exclusive services in one place.',
      es: 'Un concepto de app móvil para un centro comercial que reúne información, funciones interactivas y servicios exclusivos para sus visitantes.',
    },
    tags: ['Mobile', 'UX/UI', 'Prototyping'],
    url: 'https://www.behance.net/gallery/172652027/Jardin-Plaza-Mobile-UXUI-Project',
  },
  {
    slug: 'banco-w',
    title: 'Banco W Website',
    client: 'Banco W',
    year: 2023,
    kind: 'web',
    accent: 'orange',
    role: { en: 'Front-end Developer', es: 'Desarrollador front-end' },
    description: {
      en: "A website redesign focused on usability for micro-entrepreneurs and small businesses, built on a UX research phase that defined what to improve.",
      es: 'Un rediseño del sitio web enfocado en la usabilidad para microempresarios y pequeños negocios, basado en una fase de investigación UX que definió qué mejorar.',
    },
    tags: ['UX Research', 'Front-end', 'Web Redesign'],
    status: 'soon',
  },
];

export const featuredProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99));
