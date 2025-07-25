import '@fontsource-variable/figtree';
import '@/bootstrap';
import { createOrbs } from '@/orbs';
import { Particle } from '@/particle';
import { getDistanceBrightness } from '@/utils';

import.meta.glob(['./images/*']);

const orbContainer = document.querySelector('.orb-container');
const mainOrb = document.querySelector('.orb-main');
const hero = document.querySelector('.hero');

const orbs = createOrbs(orbContainer as HTMLElement | undefined);

const particles = Particle.create(hero);

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  const xOffset = (mouseX / window.innerWidth - 0.5) * 20;
  const yOffset = (mouseY / window.innerHeight - 0.5) * 20;

  if (mainOrb) {
    (mainOrb as HTMLElement).style.transform =
      `translate(${xOffset}px, ${yOffset}px)`;
  }

  orbs.forEach((orb) => {
    const brightness = getDistanceBrightness(
      orb,
      mouseX,
      mouseY,
      Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2) / 2,
    );
    orb.style.filter = `blur(${40 - brightness * 20}px) brightness(${1 + brightness})`;
  });

  particles.forEach((particle) => {
    const brightness = getDistanceBrightness(particle.element, mouseX, mouseY);
    particle.element.style.boxShadow = `0 0 ${brightness * 10}px ${brightness * 5}px rgba(255, 255, 255, ${brightness})`;
  });
});

const title = document.querySelector('.title');
if (title) {
  document.addEventListener('mousemove', (e) => {
    const xOffset = (e.clientX / window.innerWidth - 0.5) * 20;
    const yOffset = (e.clientY / window.innerHeight - 0.5) * 20;
    (title as HTMLHeadingElement).style.transform =
      `translate(${xOffset}px, ${yOffset}px)`;
  });
}

const ctaButtons = document.querySelectorAll(
  '.cta.button',
) as NodeListOf<HTMLElement>;
if (ctaButtons) {
  for (const ctaButton of ctaButtons) {
    ctaButton.addEventListener('mouseover', () => {
      ctaButton.style.animation =
        'buttonPulse 0.5s ease-in-out infinite alternate';
    });
    ctaButton.addEventListener('mouseout', () => {
      ctaButton.style.animation = 'none';
    });
  }
}
