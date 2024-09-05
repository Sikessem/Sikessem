export class Particle {
  constructor(root) {
    this.element = document.createElement('div');
    this.element.classList.add('particle');
    root.appendChild(this.element);

    this.size = Math.random() * 5 + 1;
    this.element.style.width = `${this.size}px`;
    this.element.style.height = `${this.size}px`;

    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * window.innerHeight;
    this.vx = Math.random() * 2 - 1;
    this.vy = Math.random() * 2 - 1;

    this.update();
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > window.innerWidth) {
      this.vx *= -1;
    }
    if (this.y < 0 || this.y > window.innerHeight) {
      this.vy *= -1;
    }

    this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;

    requestAnimationFrame(() => this.update());
  }

  static create(root, min = 0, max = 50) {
    const particles = [];

    for (let i = min; i < max; i++) {
      particles.push(new Particle(root));
    }

    return particles;
  }
}
