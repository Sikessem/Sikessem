import '@fontsource-variable/figtree';
import '@/bootstrap';
import { createOrbs } from '@/orbs';
import { Particle } from '@/particle';

import.meta.glob(['./assets/*']);

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
    const rect = orb.getBoundingClientRect();
    const orbCenterX = rect.left + rect.width / 2;
    const orbCenterY = rect.top + rect.height / 2;
    const distance = Math.sqrt(
      (mouseX - orbCenterX) ** 2 + (mouseY - orbCenterY) ** 2,
    );
    const maxDistance =
      Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2) / 2;
    const brightness = Math.max(0, 1 - distance / maxDistance);
    orb.style.filter = `blur(${40 - brightness * 20}px) brightness(${1 + brightness})`;
  });

  particles.forEach((particle) => {
    const rect = particle.element.getBoundingClientRect();
    const particleCenterX = rect.left + rect.width / 2;
    const particleCenterY = rect.top + rect.height / 2;
    const distance = Math.sqrt(
      (mouseX - particleCenterX) ** 2 + (mouseY - particleCenterY) ** 2,
    );
    const maxDistance = 200;
    const brightness = Math.max(0, 1 - distance / maxDistance);
    particle.element.style.boxShadow = `0 0 ${brightness * 10}px ${brightness * 5}px rgba(255, 255, 255, ${brightness})`;
  });
});

const title = document.querySelector('.title');
if (title) {
  document.addEventListener('mousemove', (e) => {
    const xOffset = (e.clientX / window.innerWidth - 0.5) * 20;
    const yOffset = (e.clientY / window.innerHeight - 0.5) * 20;
    (title as HTMLHeadingElement).style.transform = `translate(${xOffset}px, ${yOffset}px)`;
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
