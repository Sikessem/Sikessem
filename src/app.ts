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
    const distance = getDistance(orb, mouseX, mouseY);
    const brightness = getBrightness(
      distance,
      Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2) / 2,
    );
    orb.style.filter = `blur(${40 - brightness * 20}px) brightness(${1 + brightness})`;
  });

  particles.forEach((particle) => {
    const distance = getDistance(particle.element, mouseX, mouseY);
    const brightness = getBrightness(distance);
    particle.element.style.boxShadow = `0 0 ${brightness * 10}px ${brightness * 5}px rgba(255, 255, 255, ${brightness})`;
  });
});

function getBrightness(distance: number, maxDistance = 200): number {
  return Math.max(0, 1 - distance / maxDistance);
}

function getDistance(element: HTMLElement, x: number, y: number): number {
  const rect = element.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  return Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
}

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
