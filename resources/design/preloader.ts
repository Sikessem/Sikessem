document.addEventListener('DOMContentLoaded', function() {
  let preloader = document.getElementById('preloader');
  if (!preloader) {
    preloader = document.createElement('div');
    preloader.id = 'preloader';
    document.body.insertBefore(preloader, document.body.firstChild);
  }

  window.addEventListener('load', function() {
    preloader.classList.add('loaded');

    const timeoutId = setTimeout(() => {
      remove(preloader);
    }, 1000);

    preloader.addEventListener('transitionend', () => {
      clearTimeout(timeoutId);
      remove(preloader);
    });
  });
});

function remove(element: HTMLElement): void {
  if (! element) {
    return;
  }
  
  if (element.remove) {
    element.remove();
  }
  
  if (element.parentNode) {
    element.parentNode.removeChild(element);
  }
}
