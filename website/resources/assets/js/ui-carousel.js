(() => {
  const swiperDefault = document.querySelector("#swiper-default");
  const swiperWithArrows = document.querySelector("#swiper-with-arrows");
  const swiperWithPagination = document.querySelector(
    "#swiper-with-pagination",
  );
  const swiperWithProgress = document.querySelector("#swiper-with-progress");
  const swiperWithScrollbar = document.querySelector("#swiper-with-scrollbar");
  const verticalSwiper = document.querySelector("#swiper-vertical");
  const swiperMultipleSlides = document.querySelector(
    "#swiper-multiple-slides",
  );
  const swiper3dCoverflowEffect = document.querySelector(
    "#swiper-3d-coverflow-effect",
  );
  const swiper3dCubeEffect = document.querySelector("#swiper-3d-cube-effect");
  const swiper3dFlipEffect = document.querySelector("#swiper-3d-flip-effect");
  const galleryThumbs = document.querySelector(".gallery-thumbs");
  const galleryTop = document.querySelector(".gallery-top");
  let galleryInstance;

  // Default
  // --------------------------------------------------------------------
  if (swiperDefault) {
    new Swiper(swiperDefault, {
      slidesPerView: "auto",
    });
  }

  // With arrows
  // --------------------------------------------------------------------
  if (swiperWithArrows) {
    new Swiper(swiperWithArrows, {
      slidesPerView: "auto",
      navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      },
    });
  }

  // With pagination
  // --------------------------------------------------------------------
  if (swiperWithPagination) {
    new Swiper(swiperWithPagination, {
      slidesPerView: "auto",
      pagination: {
        clickable: true,
        el: ".swiper-pagination",
      },
    });
  }

  // With progress
  // --------------------------------------------------------------------
  if (swiperWithProgress) {
    new Swiper(swiperWithProgress, {
      slidesPerView: "auto",
      pagination: {
        type: "progressbar",
        el: ".swiper-pagination",
      },
      navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      },
    });
  }

  // With scrollbar
  // --------------------------------------------------------------------
  if (swiperWithScrollbar) {
    new Swiper(swiperWithScrollbar, {
      scrollbar: {
        hide: true,
        el: ".swiper-scrollbar",
      },
    });
  }

  // Vertical
  // --------------------------------------------------------------------
  if (verticalSwiper) {
    new Swiper(verticalSwiper, {
      direction: "vertical",
      pagination: {
        clickable: true,
        el: ".swiper-pagination",
      },
    });
  }

  // Multiple slides
  // --------------------------------------------------------------------
  if (swiperMultipleSlides) {
    new Swiper(swiperMultipleSlides, {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        clickable: true,
        el: ".swiper-pagination",
      },
    });
  }

  // 3D coverflow effect
  // --------------------------------------------------------------------
  if (swiper3dCoverflowEffect) {
    new Swiper(swiper3dCoverflowEffect, {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }

  // 3D cube effect
  // --------------------------------------------------------------------
  if (swiper3dCubeEffect) {
    new Swiper(swiper3dCubeEffect, {
      effect: "cube",
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowScale: 0.94,
        shadowOffset: 20,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }

  // 3D flip effect
  // --------------------------------------------------------------------
  if (swiper3dFlipEffect) {
    new Swiper(swiper3dFlipEffect, {
      effect: "flip",
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      },
    });
  }

  // Gallery effect
  // --------------------------------------------------------------------
  if (galleryThumbs) {
    galleryInstance = new Swiper(galleryThumbs, {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
  }

  if (galleryTop) {
    new Swiper(galleryTop, {
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: galleryInstance,
      },
    });
  }
})();
