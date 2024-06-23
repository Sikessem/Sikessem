(() => {
  const nav = document.querySelector('.layout-navbar');
  const heroAnimation = document.getElementById('hero-animation');
  const animationImg = document.querySelectorAll('.hero-dashboard-img');
  const animationElements = document.querySelectorAll('.hero-elements-img');
  const swiperLogos = document.getElementById('swiper-clients-logos');
  const swiperReviews = document.getElementById('swiper-reviews');
  const ReviewsPreviousBtn = document.getElementById('reviews-previous-btn');
  const ReviewsNextBtn = document.getElementById('reviews-next-btn');
  const ReviewsSliderPrev = document.querySelector('.swiper-button-prev');
  const ReviewsSliderNext = document.querySelector('.swiper-button-next');
  const priceDurationToggler = document.querySelector(
    '.price-duration-toggler',
  );
  const priceMonthlyList = [].slice.call(
    document.querySelectorAll('.price-monthly'),
  );
  const priceYearlyList = [].slice.call(
    document.querySelectorAll('.price-yearly'),
  );

  // Hero
  const mediaQueryXL = '1200';
  const width = screen.width;
  if (width >= mediaQueryXL && heroAnimation) {
    heroAnimation.addEventListener('mousemove', function parallax(e) {
      animationElements.forEach((layer) => {
        layer.style.transform = 'translateZ(1rem)';
      });
      animationImg.forEach((layer) => {
        const x = (window.innerWidth - e.pageX * 2) / 100;
        const y = (window.innerHeight - e.pageY * 2) / 100;
        layer.style.transform = `perspective(1200px) rotateX(${y}deg) rotateY(${x}deg) scale3d(1, 1, 1)`;
      });
    });
    nav.addEventListener('mousemove', function parallax(e) {
      animationElements.forEach((layer) => {
        layer.style.transform = 'translateZ(1rem)';
      });
      animationImg.forEach((layer) => {
        const x = (window.innerWidth - e.pageX * 2) / 100;
        const y = (window.innerHeight - e.pageY * 2) / 100;
        layer.style.transform = `perspective(1200px) rotateX(${y}deg) rotateY(${x}deg) scale3d(1, 1, 1)`;
      });
    });

    heroAnimation.addEventListener('mouseout', () => {
      animationElements.forEach((layer) => {
        layer.style.transform = 'translateZ(0)';
      });
      animationImg.forEach((layer) => {
        layer.style.transform =
          'perspective(1200px) scale(1) rotateX(0) rotateY(0)';
      });
    });
  }

  // swiper carousel
  // Customers reviews
  // -----------------------------------
  if (swiperReviews) {
    new Swiper(swiperReviews, {
      slidesPerView: 1,
      spaceBetween: 5,
      grabCursor: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      loop: true,
      loopAdditionalSlides: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 26,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
    });
  }

  // Reviews slider next and previous
  // -----------------------------------
  // Add click event listener to next button
  ReviewsNextBtn.addEventListener('click', () => {
    ReviewsSliderNext.click();
  });
  ReviewsPreviousBtn.addEventListener('click', () => {
    ReviewsSliderPrev.click();
  });

  // Review client logo
  // -----------------------------------
  if (swiperLogos) {
    new Swiper(swiperLogos, {
      slidesPerView: 2,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        992: {
          slidesPerView: 5,
        },
        768: {
          slidesPerView: 3,
        },
      },
    });
  }

  // Pricing Plans
  // -----------------------------------
  document.addEventListener('DOMContentLoaded', (event) => {
    function togglePrice() {
      if (priceDurationToggler.checked) {
        // If checked
        priceYearlyList.map((yearEl) => {
          yearEl.classList.remove('d-none');
        });
        priceMonthlyList.map((monthEl) => {
          monthEl.classList.add('d-none');
        });
      } else {
        // If not checked
        priceYearlyList.map((yearEl) => {
          yearEl.classList.add('d-none');
        });
        priceMonthlyList.map((monthEl) => {
          monthEl.classList.remove('d-none');
        });
      }
    }
    // togglePrice Event Listener
    togglePrice();

    priceDurationToggler.onchange = () => {
      togglePrice();
    };
  });
})();
