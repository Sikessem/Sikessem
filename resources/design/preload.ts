document.addEventListener('DOMContentLoaded', function() {
  let preloader = document.getElementById('preloader');
  if (!preloader) {
    preloader = document.createElement('div');
    preloader.id = 'preloader';
    document.body.appendChild(preloader);
  }

  window.addEventListener('load', function() {
    preloader.classList.add('loaded');

    preloader.addEventListener('transitionend', () => {
      preloader.remove();
    });
  });
});
