document.addEventListener('DOMContentLoaded', function() {
  let preloader = document.getElementById('preloader');
  if (!preloader) {
    preloader = document.createElement('div');
    preloader.id = 'preloader';
    document.body.appendChild(preloader);
  }

  window.addEventListener('load', function() {
    preloader.classList.add('loaded');

    const timeoutId = setTimeout(() => {
      preloader.remove();
    }, 1000);

    preloader.addEventListener('transitionend', () => {
      clearTimeout(timeoutId);
      preloader.remove();
    });
  });
});
