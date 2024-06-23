(() => {
  // Animation Dropdown
  const animationDropdown = document.querySelector('#animation-dropdown');
  const animationModal = document.querySelector('#animationModal');
  if (animationDropdown) {
    animationDropdown.onchange = function () {
      animationModal.classList = '';
      animationModal.classList.add('modal', 'animate__animated', this.value);
    };
  }

  // On hiding modal, remove iframe video/audio to stop playing
  const youTubeModal = document.querySelector('#youTubeModal');
  const youTubeModalVideo = youTubeModal.querySelector('iframe');
  youTubeModal.addEventListener('hidden.bs.modal', () => {
    youTubeModalVideo.setAttribute('src', '');
  });

  // Function to get and auto play youTube video
  const autoPlayYouTubeModal = () => {
    const modalTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="modal"]'),
    );
    modalTriggerList.map((modalTriggerEl) => {
      modalTriggerEl.onclick = function () {
        const theModal = this.getAttribute('data-bs-target');
        const videoSRC = this.getAttribute('data-theVideo');
        const videoSRCauto = `${videoSRC}?autoplay=1`;
        const modalVideo = document.querySelector(`${theModal} iframe`);
        if (modalVideo) {
          modalVideo.setAttribute('src', videoSRCauto);
        }
      };
    });
  };

  // Calling function on load
  autoPlayYouTubeModal();

  // Onboarding modal carousel height animation
  document.querySelectorAll('.carousel').forEach((carousel) => {
    carousel.addEventListener('slide.bs.carousel', (event) => {
      // ! Todo: Convert to JS (animation) (jquery)
      const nextH = $(event.relatedTarget).height();
      $(carousel).find('.active.carousel-item').parent().animate(
        {
          height: nextH,
        },
        500,
      );
    });
  });
})();
