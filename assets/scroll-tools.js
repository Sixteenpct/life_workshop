/* 180ms ease-out scroll, matching the material workbench's fast TOC motion. */
(() => {
  let frame = null;
  const duration = 180;
  function scrollToEdge(bottom) {
    if (frame !== null) window.cancelAnimationFrame(frame);
    frame = null;
    const start = window.scrollY;
    const target = bottom ? Math.max(0, document.documentElement.scrollHeight - window.innerHeight) : 0;
    if (start === target || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.scrollTo({top: target, behavior: 'instant'});
      return;
    }
    const began = performance.now();
    function step(now) {
      const progress = Math.min(1, Math.max(0, (now - began) / duration));
      window.scrollTo({top: start + (target - start) * (1 - Math.pow(1 - progress, 3)), behavior: 'instant'});
      frame = progress < 1 ? window.requestAnimationFrame(step) : null;
    }
    frame = window.requestAnimationFrame(step);
  }
  document.getElementById('scroll-bottom')?.addEventListener('click', () => scrollToEdge(true));
  document.getElementById('scroll-top')?.addEventListener('click', () => scrollToEdge(false));
})();
