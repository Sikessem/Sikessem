window.addEventListener('load', function() {
  const preloader = document.getElementById('preloader');

  if (preloader) {
    preloader.classList.add('loaded');

    preloader.addEventListener('transitionend', () => {
      preloader.style.display = 'none';
    });
  }
});
