document.addEventListener('DOMContentLoaded', function() {
  let preloader = document.getElementById('preloader');
  if (!preloader) {
    preloader = document.createElement('div');
    preloader.id = 'preloader';
    document.body.appendChild(preloader);
  }

  let brand = document.querySelector('#preloader .brand');
  if (!brand) {
    brand = document.createElement('img');
    brand.classList.add('brand');
    preloader.appendChild(brand);
  }

  window.addEventListener('load', function() {
    preloader.classList.add('loaded');

    preloader.addEventListener('transitionend', () => {
      preloader.remove();
    });
  });
});
