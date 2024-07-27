// Animation des orbes
function animateOrbs() {
  const orbs = document.querySelectorAll('.orb');
  orbs.forEach(orb => {
    orb.style.transform = `translate(${Math.random() * 50}px, ${Math.random() * 50}px)`;
  });
}

setInterval(animateOrbs, 3000);

// Effet de parallaxe léger
document.addEventListener('mousemove', (e) => {
  const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
  const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
  document.querySelector('.auth-container').style.transform = `translate(${moveX}px, ${moveY}px)`;
});
