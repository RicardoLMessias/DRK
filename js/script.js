window.addEventListener('load', () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !window.gsap) return;

  gsap.set(['.logo', '.intro', '.actions', '.footer'], { autoAlpha: 0 });

  gsap.timeline({ defaults: { ease: 'power2.out' } })
    .to('.logo', { autoAlpha: 1, duration: .9 })
    .to('.intro', { autoAlpha: 1, duration: .6 }, '-=.3')
    .to('.actions', { autoAlpha: 1, duration: .8 }, '-=.2')
    .to('.footer', { autoAlpha: 1, duration: .6 }, '-=.35');
});
