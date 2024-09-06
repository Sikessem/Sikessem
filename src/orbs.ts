export function createOrbs(container?: HTMLElement, min = 0, max = 5) {
  const orbs: HTMLDivElement[] = [];

  if (container) {
    for (let i = min; i < max; i++) {
      const orb = document.createElement('div');
      orb.classList.add('orb');
      orb.style.width = `${Math.random() * 300 + 100}px`;
      orb.style.height = orb.style.width;
      orb.style.background = `radial-gradient(circle, ${getRandomColor()} 0%, transparent 70%)`;
      orb.style.left = `${Math.random() * 100}%`;
      orb.style.top = `${Math.random() * 100}%`;
      orb.style.filter = `blur(${Math.random() * 40 + 20}px)`;
      container.appendChild(orb);

      animateOrb(orb);
      orbs.push(orb);
    }
  }

  return orbs;
}

function getRandomColor() {
  const colors = ['#7878ff', '#32e0c4', '#ff6b6b', '#feca57'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function animateOrb(orb: HTMLElement) {
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
