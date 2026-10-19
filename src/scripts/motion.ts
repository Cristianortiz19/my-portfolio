// ─────────────────────────────────────────────────────────────
//  Animaciones del sitio (GSAP + ScrollTrigger + SplitText)
//  Atributos que puedes usar en cualquier componente:
//   data-reveal       → aparece desde abajo al entrar en pantalla
//   data-split        → el titular se revela línea por línea
//   data-line-reveal  → (con class="hero-line") línea enmascarada que sube
//   data-scrub-words  → las palabras se iluminan con el scroll
//   data-speed="1.2"  → parallax vertical
//   data-count="40"   → contador numérico
// ─────────────────────────────────────────────────────────────
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(ScrollTrigger, SplitText, Draggable);

declare global {
  interface Window {
    __motionReady?: boolean;
  }
}

window.__motionReady = true;
const root = document.documentElement;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reduceMotion) {
  root.classList.add('reduce');
} else {
  hero();
  lineReveals();
  reveals();
  typeBands();
  stickers();
  parallax();
  counters();
  document.fonts.ready.then(() => {
    splitHeadings();
    scrubWords();
    ScrollTrigger.refresh();
  });
  window.addEventListener('load', () => ScrollTrigger.refresh());
}

/* ───────── Hero: intro + parallax con el mouse + salida con scroll ───────── */
function hero() {
  const section = document.querySelector<HTMLElement>('[data-hero]');
  if (!section) return;
  const loader = document.getElementById('loader');
  const fades = gsap.utils.toArray<HTMLElement>(section.querySelectorAll('[data-hero-fade]'));
  const statement = section.querySelector<HTMLElement>('[data-hero-split]');

  const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

  // 1) Preloader: el nombre cae letra por letra, el logo rebota y la cortina sube (solo 1ª visita)
  const showLoader = !!loader && getComputedStyle(loader).display !== 'none';
  if (showLoader && loader) {
    const chars = loader.querySelectorAll('.loader-char');
    const mark = loader.querySelector('.loader-mark');
    tl.fromTo(chars, { y: 0, yPercent: 110 }, { yPercent: 0, duration: 0.9, ease: 'back.out(2)', stagger: 0.045 }, 0.2)
      .fromTo(mark, { y: -60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'bounce.out' }, '-=0.35')
      .to(loader, { yPercent: -100, duration: 1.1, ease: 'expo.inOut' }, '+=0.25')
      .add(() => {
        loader.style.display = 'none';
        try {
          sessionStorage.setItem('co-intro', '1');
        } catch (e) {}
      });
    setTimeout(() => {
      if (loader.style.display !== 'none') loader.style.display = 'none';
    }, 7000);
  }

  // 2) Contenido: la declaración entra línea por línea y el resto aparece en cascada
  const start = showLoader ? '-=0.55' : 0.1;
  tl.fromTo(fades, { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, stagger: 0.08 }, start);

  if (statement) {
    document.fonts.ready.then(() => {
      SplitText.create(statement, {
        type: 'lines',
        mask: 'lines',
        autoSplit: true,
        onSplit(self) {
          gsap.set(statement, { opacity: 1 });
          const delay = Math.max(0, tl.duration() - tl.time() - 1.2);
          return gsap.from(self.lines, { yPercent: 110, duration: 1.3, ease: 'expo.out', stagger: 0.09, delay });
        },
      });
    });
  }

  gsap.to('[data-badge]', { rotation: 360, duration: 22, ease: 'none', repeat: -1, transformOrigin: '50% 50%' });
}

/* ───────── Líneas enmascaradas que suben (titulares grandes) ───────── */
function lineReveals() {
  gsap.utils.toArray<HTMLElement>('[data-line-reveal]').forEach((line) => {
    const inner = line.firstElementChild as HTMLElement | null;
    if (!inner) return;
    const siblings = Array.from(line.parentElement?.querySelectorAll(':scope > [data-line-reveal]') ?? []);
    const index = Math.max(0, siblings.indexOf(line));
    gsap.set(inner, { yPercent: 115, opacity: 1 });
    gsap.to(inner, {
      yPercent: 0,
      duration: 1.4,
      delay: index * 0.12,
      ease: 'expo.out',
      scrollTrigger: { trigger: line, start: 'top 90%' },
    });
  });
}

/* ───────── Aparición genérica en lote (con stagger) ───────── */
function reveals() {
  ScrollTrigger.batch('[data-reveal]', {
    start: 'top 92%',
    once: true,
    onEnter: (batch) =>
      gsap.fromTo(
        batch,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'expo.out', stagger: 0.08, overwrite: true },
      ),
  });
}

/* ───────── Titulares divididos por líneas ───────── */
function splitHeadings() {
  gsap.utils.toArray<HTMLElement>('[data-split]').forEach((el) => {
    SplitText.create(el, {
      type: 'lines',
      mask: 'lines',
      autoSplit: true,
      onSplit(self) {
        gsap.set(el, { opacity: 1 });
        return gsap.from(self.lines, {
          yPercent: 110,
          duration: 1.3,
          ease: 'expo.out',
          stagger: 0.1,
          scrollTrigger: { trigger: el, start: 'top 90%' },
        });
      },
    });
  });
}

/* ───────── Palabras que se iluminan con el scroll ───────── */
function scrubWords() {
  gsap.utils.toArray<HTMLElement>('[data-scrub-words]').forEach((el) => {
    SplitText.create(el, {
      type: 'words',
      autoSplit: true,
      onSplit(self) {
        return gsap.fromTo(
          self.words,
          { opacity: 0.14 },
          {
            opacity: 1,
            stagger: 0.1,
            ease: 'none',
            scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 45%', scrub: true },
          },
        );
      },
    });
  });
}

/* ───────── Banda tipográfica horizontal ───────── */
function typeBands() {
  gsap.utils.toArray<HTMLElement>('.band-row').forEach((row) => {
    const track = row.querySelector<HTMLElement>('.band-track');
    if (!track) return;
    const dir = Number(row.dataset.dir) || 1;
    gsap.fromTo(
      track,
      { xPercent: dir > 0 ? -28 : -2 },
      {
        xPercent: dir > 0 ? -2 : -28,
        ease: 'none',
        scrollTrigger: { trigger: row.closest('.type-band'), start: 'top bottom', end: 'bottom top', scrub: 0.6 },
      },
    );
  });
}

/* ───────── Parallax vertical ───────── */
function parallax() {
  gsap.utils.toArray<HTMLElement>('[data-speed]').forEach((el) => {
    const s = parseFloat(el.dataset.speed || '1');
    gsap.fromTo(
      el,
      { y: 140 * s },
      {
        y: -140 * s,
        ease: 'none',
        scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
      },
    );
  });

  gsap.utils.toArray<HTMLElement>('[data-parallax-img]').forEach((img) => {
    gsap.fromTo(
      img,
      { yPercent: 6 },
      { yPercent: -2, ease: 'none', scrollTrigger: { trigger: img.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } },
    );
  });
}

/* ───────── Contadores ───────── */
function counters() {
  gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
    const end = Number(el.dataset.count) || 0;
    const obj = { v: 0 };
    el.textContent = '0';
    gsap.to(obj, {
      v: end,
      duration: 2,
      ease: 'expo.out',
      scrollTrigger: { trigger: el, start: 'top 92%' },
      onUpdate: () => {
        el.textContent = String(Math.round(obj.v));
      },
    });
  });
}

/* ───────── Stickers: aparecen con rebote y se pueden arrastrar ───────── */
function stickers() {
  const board = document.querySelector<HTMLElement>('.stickers-board');
  if (!board) return;
  const items = gsap.utils.toArray<HTMLElement>(board.querySelectorAll('[data-sticker]'));
  const desktop = window.matchMedia('(min-width: 48rem)').matches;

  gsap.fromTo(
    items,
    { scale: 0, xPercent: desktop ? -50 : 0, yPercent: desktop ? -50 : 0, rotation: () => gsap.utils.random(-50, 50) },
    {
      scale: 1,
      rotation: (_i: number, el: HTMLElement) => Number(el.dataset.r) || 0,
      duration: 0.9,
      ease: 'back.out(2.2)',
      stagger: { each: 0.06, from: 'random' },
      scrollTrigger: { trigger: board, start: 'top 75%' },
    },
  );
  gsap.from(board.querySelector('h2 > span'), {
    scale: 0.85,
    opacity: 0,
    duration: 1.2,
    ease: 'expo.out',
    scrollTrigger: { trigger: board, start: 'top 75%' },
  });

  let z = 30;
  Draggable.create(items, {
    bounds: board,
    onPress() {
      (this.target as HTMLElement).style.zIndex = String(++z);
      gsap.to(this.target, { scale: 1.12, duration: 0.25, ease: 'power2.out' });
    },
    onRelease() {
      gsap.to(this.target, { scale: 1, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
    },
  });
}
