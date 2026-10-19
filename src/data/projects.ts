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
    featured: true,
  },
  {
    slug: 'enerwave',
    title: 'Enerwave',
    year: 2023,
    kind: 'web',
    accent: 'blue',
    role: { en: 'UI/UX Designer', es: 'Diseñador UI/UX' },
    description: {
      en: "A web application that brings everything its users need into one platform, so they don't have to add yet another tool to their routine.",
      es: 'Una aplicación web que reúne todo lo que sus usuarios necesitan en una sola plataforma, para que no tengan que sumar otra herramienta a su rutina.',
    },
    tags: ['Web App', 'UI Design', 'Dashboard'],
    url: 'https://www.behance.net/gallery/185603759/Enerwave',
    featured: true,
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

export const featuredProjects = projects.filter((p) => p.featured);
