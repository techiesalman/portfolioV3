import ScrollReveal from 'scrollreveal';

const isSSR = typeof window === 'undefined';
// Sections call sr.reveal on mount, before usePrefersReducedMotion has read the
// real preference, so reduced motion is honoured here too.
const prefersReducedMotion =
  !isSSR && !window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
const sr = isSSR || prefersReducedMotion ? { reveal: () => {} } : ScrollReveal();

export default sr;
