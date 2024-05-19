(() => {
  // Init Animation on scroll
  AOS.init({
    disable: () => {
      const maxWidth = 1024;
      return window.innerWidth < maxWidth;
    },
    once: true,
  });
})();
