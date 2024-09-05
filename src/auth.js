import { Particle } from './particle';

Particle.create(document.querySelector('.particles'));

// Animation des orbes
function animateOrbs() {
  const orbs = document.querySelectorAll('.orb');
  orbs.forEach((orb) => {
    orb.style.transform = `translate(${Math.random() * 50}px, ${Math.random() * 50}px)`;
  });
}

setInterval(animateOrbs, 3000);

// Effet de parallaxe léger
document.addEventListener('mousemove', (e) => {
  const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
  const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
  document.querySelector('.auth-container').style.transform =
    `translate(${moveX}px, ${moveY}px)`;
});

document.querySelector('.auth-container').style.transform = 'translate(0, 0)';

document.addEventListener('DOMContentLoaded', (event) => {
  const form = document.getElementById('registerForm');
  const step1Form = document.getElementById('step1Form');
  const step2Form = document.getElementById('step2Form');
  const step3Form = document.getElementById('step3Form');
  const nextStep1 = document.getElementById('nextStep1');
  const nextStep2 = document.getElementById('nextStep2');
  const prevStep2 = document.getElementById('prevStep2');
  const prevStep3 = document.getElementById('prevStep3');
  const step1Indicator = document.getElementById('step1');
  const step2Indicator = document.getElementById('step2');
  const step3Indicator = document.getElementById('step3');
  const stepConnectors = document.querySelectorAll('.step-connector');

  nextStep1.addEventListener('click', () => {
    step1Form.classList.add('hidden');
    step2Form.classList.remove('hidden');
    step2Indicator.classList.add('active');
    stepConnectors[0].classList.add('active');
  });

  nextStep2.addEventListener('click', () => {
    step2Form.classList.add('hidden');
    step3Form.classList.remove('hidden');
    step3Indicator.classList.add('active');
    stepConnectors[1].classList.add('active');
  });

  prevStep2.addEventListener('click', () => {
    step2Form.classList.add('hidden');
    step1Form.classList.remove('hidden');
    step2Indicator.classList.remove('active');
    stepConnectors[0].classList.remove('active');
  });

  prevStep3.addEventListener('click', () => {
    step3Form.classList.add('hidden');
    step2Form.classList.remove('hidden');
    step3Indicator.classList.remove('active');
    stepConnectors[1].classList.remove('active');
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Ici, vous enverriez normalement ces données à votre serveur pour l'inscription
    console.log('Inscription avec:', data);

    // Simuler une inscription réussie
    alert(
      'Inscription réussie ! Vous allez être redirigé vers la page de connexion.',
    );
    window.location.href = '/login';
  });
});
