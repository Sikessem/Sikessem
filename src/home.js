import { Particle } from './particle';

const orbContainer = document.querySelector('.orb-container');
const mainOrb = document.querySelector('.main-orb');
const hero = document.querySelector('.hero');

const orbs = [];

// Création des orbes secondaires
for (let i = 0; i < 5; i++) {
  const orb = document.createElement('div');
  orb.classList.add('orb');
  orb.style.width = `${Math.random() * 300 + 100}px`;
  orb.style.height = orb.style.width;
  orb.style.background = `radial-gradient(circle, ${getRandomColor()} 0%, transparent 70%)`;
  orb.style.left = `${Math.random() * 100}%`;
  orb.style.top = `${Math.random() * 100}%`;
  orb.style.filter = `blur(${Math.random() * 40 + 20}px)`;
  orbContainer.appendChild(orb);

  animateOrb(orb);
  orbs.push(orb);
}

function getRandomColor() {
  const colors = ['#7878ff', '#32e0c4', '#ff6b6b', '#feca57'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function animateOrb(orb) {
  const duration = Math.random() * 40 + 20;
  const xMove = Math.random() * 40 - 20;
  const yMove = Math.random() * 40 - 20;

  orb.animate(
    [
      { transform: 'translate(0, 0)' },
      { transform: `translate(${xMove}%, ${yMove}%)` },
      { transform: 'translate(0, 0)' },
    ],
    {
      duration: duration * 1000,
      iterations: Number.POSITIVE_INFINITY,
      easing: 'ease-in-out',
    },
  );
}

const particles = Particle.create(hero);

// Animation interactive
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  const xOffset = (mouseX / window.innerWidth - 0.5) * 20;
  const yOffset = (mouseY / window.innerHeight - 0.5) * 20;

  mainOrb.style.transform = `translate(${xOffset}px, ${yOffset}px)`;

  // Mise à jour de la luminosité des orbes
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

  // Mise à jour de la luminosité des particules
  particles.forEach((particle) => {
    const rect = particle.element.getBoundingClientRect();
    const particleCenterX = rect.left + rect.width / 2;
    const particleCenterY = rect.top + rect.height / 2;
    const distance = Math.sqrt(
      (mouseX - particleCenterX) ** 2 + (mouseY - particleCenterY) ** 2,
    );
    const maxDistance = 200; // Distance maximale pour l'effet de luminosité
    const brightness = Math.max(0, 1 - distance / maxDistance);
    particle.element.style.boxShadow = `0 0 ${brightness * 10}px ${brightness * 5}px rgba(255, 255, 255, ${brightness})`;
  });
});

// Effet de parallaxe sur le titre
const title = document.querySelector('h1');
document.addEventListener('mousemove', (e) => {
  const xOffset = (e.clientX / window.innerWidth - 0.5) * 20;
  const yOffset = (e.clientY / window.innerHeight - 0.5) * 20;
  title.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
});

// Animation du bouton CTA
const ctaButtons = document.querySelectorAll('.cta-button');
for (const ctaButton of ctaButtons) {
  ctaButton.addEventListener('mouseover', () => {
    ctaButton.style.animation =
      'buttonPulse 0.5s ease-in-out infinite alternate';
  });
  ctaButton.addEventListener('mouseout', () => {
    ctaButton.style.animation = 'none';
  });
}
