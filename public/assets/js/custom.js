(($) => {
  // Header Type = Fixed
  $(window).scroll(() => {
    const scroll = $(window).scrollTop();
    const box = $(".header-text").height();
    const header = $("header").height();

    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });

  $(".loop").owlCarousel({
    center: true,
    items: 1,
    loop: true,
    autoplay: true,
    nav: true,
    margin: 0,
    responsive: {
      1200: {
        items: 5,
      },
      992: {
        items: 3,
      },
      760: {
        items: 2,
      },
    },
  });

  $("#modal_trigger").leanModal({
    top: 100,
    overlay: 0.6,
    closeButton: ".modal_close",
  });

  $(() => {
    // Calling Login Form
    $("#login_form").click(() => {
      $(".social_login").hide();
      $(".user_login").show();
      return false;
    });

    // Calling Register Form
    $("#register_form").click(() => {
      $(".social_login").hide();
      $(".user_register").show();
      $(".header_title").text("Register");
      return false;
    });

    // Going back to Social Forms
    $(".back_btn").click(() => {
      $(".user_login").hide();
      $(".user_register").hide();
      $(".social_login").show();
      $(".header_title").text("Login");
      return false;
    });
  });

  // Acc
  $(document).on("click", ".naccs .menu div", function () {
    const numberIndex = $(this).index();

    if (!$(this).is("active")) {
      $(".naccs .menu div").removeClass("active");
      $(".naccs ul li").removeClass("active");

      $(this).addClass("active");
      $(".naccs ul").find(`li:eq(${numberIndex})`).addClass("active");

      const listItemHeight = $(".naccs ul")
        .find(`li:eq(${numberIndex})`)
        .innerHeight();
      $(".naccs ul").height(`${listItemHeight}px`);
    }
  });

  // Menu Dropdown Toggle
  if ($(".menu-trigger").length) {
    $(".menu-trigger").on("click", function () {
      $(this).toggleClass("active");
      $(".header-area .nav").slideToggle(200);
    });
  }

  // Menu elevator animation
  $(".scroll-to-section a[href*=\\#]:not([href=\\#])").on("click", function () {
    if (
      location.pathname.replace(/^\//, "") ===
        this.pathname.replace(/^\//, "") &&
      location.hostname === this.hostname
    ) {
      let target = $(this.hash);
      target = target.length ? target : $(`[name=${this.hash.slice(1)}]`);
      if (target.length) {
        const width = $(window).width();
        if (width < 991) {
          $(".menu-trigger").removeClass("active");
          $(".header-area .nav").slideUp(200);
        }
        $("html,body").animate(
          {
            scrollTop: target.offset().top + 1,
          },
          700,
        );
        return false;
      }
    }
  });

  $(document).ready(() => {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('.scroll-to-section a[href^="#"]').on("click", function (e) {
      e.preventDefault();
      $(document).off("scroll");

      $(".scroll-to-section a").each(function () {
        $(this).removeClass("active");
      });
      $(this).addClass("active");

      let target = this.hash;
      const menu = target;
      target = $(this.hash);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: target.offset().top + 1,
          },
          500,
          "swing",
          () => {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
          },
        );
    });
  });

  function onScroll(event) {
    const scrollPos = $(document).scrollTop();
    $(".nav a").each(function () {
      const currLink = $(this);
      const refElement = $(currLink.attr("href"));
      if (
        refElement.position().top <= scrollPos &&
        refElement.position().top + refElement.height() > scrollPos
      ) {
        $(".nav ul li a").removeClass("active");
        currLink.addClass("active");
      } else {
        currLink.removeClass("active");
      }
    });
  }

  // Acc
  $(document).on("click", ".naccs .menu div", function () {
    const numberIndex = $(this).index();

    if (!$(this).is("active")) {
      $(".naccs .menu div").removeClass("active");
      $(".naccs ul li").removeClass("active");

      $(this).addClass("active");
      $(".naccs ul").find(`li:eq(${numberIndex})`).addClass("active");

      const listItemHeight = $(".naccs ul")
        .find(`li:eq(${numberIndex})`)
        .innerHeight();
      $(".naccs ul").height(`${listItemHeight}px`);
    }
  });

  // Page loading animation
  $(window).on("load", () => {
    $("#js-preloader").addClass("loaded");
  });

  // Window Resize Mobile Menu Fix
  function mobileNav() {
    const width = $(window).width();
    $(".submenu").on("click", function () {
      if (width < 767) {
        $(".submenu ul").removeClass("active");
        $(this).find("ul").toggleClass("active");
      }
    });
  }
})(window.jQuery);
