// leanModal v1.1 by Ray Stone - http://finelysliced.com.au
// Dual licensed under the MIT and GPL

(($) => {
  $.fn.extend({
    leanModal: function (options) {
      const defaults = { top: 100, overlay: 0.5, closeButton: null };
      const overlay = $("<div id='lean_overlay'></div>");
      $("body").append(overlay);
      options = $.extend(defaults, options);
      return this.each(function () {
        const o = options;
        $(this).click(function (e) {
          const modal_id = $(this).attr("href");
          $("#lean_overlay").click(() => {
            close_modal(modal_id);
          });
          $(o.closeButton).click(() => {
            close_modal(modal_id);
          });
          const modal_height = $(modal_id).outerHeight();
          const modal_width = $(modal_id).outerWidth();
          $("#lean_overlay").css({ display: "block", opacity: 0 });
          $("#lean_overlay").fadeTo(200, o.overlay);
          $(modal_id).css({
            display: "block",
            position: "fixed",
            opacity: 0,
            "z-index": 11000,
            left: `${50}%`,
            "margin-left": `${-(modal_width / 2)}px`,
            top: `${o.top}px`,
          });
          $(modal_id).fadeTo(200, 1);
          e.preventDefault();
        });
      });
      function close_modal(modal_id) {
        $("#lean_overlay").fadeOut(200);
        $(modal_id).css({ display: "none" });
      }
    },
  });
})(jQuery);
