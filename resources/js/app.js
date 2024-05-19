/*
  Add custom scripts here
*/
import.meta.glob([
  "../assets/img/**",
  // '../assets/json/**',
  "../assets/vendor/fonts/**",
]);

// Page loading animation
$(window).on("load", () => {
  $("#js-preloader").addClass("loaded");
});

