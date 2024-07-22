document.addEventListener('DOMContentLoaded', function() {
  const preloader = document.createElement('div');
  const brand = document.createElement('img');

  preloader.id = 'preloader';
  brand.classList.add('brand');
  preloader.appendChild(brand);
  document.body.appendChild(preloader);

  window.addEventListener('load', function() {
    preloader.classList.add('loaded');

    preloader.addEventListener('transitionend', () => {
      preloader.remove();
    });
  });
});
