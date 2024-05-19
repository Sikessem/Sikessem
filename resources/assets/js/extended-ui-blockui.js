$(() => {
  const section = $("#section-block");
  const sectionBlock = $(".btn-section-block");
  const sectionBlockOverlay = $(".btn-section-block-overlay");
  const sectionBlockSpinner = $(".btn-section-block-spinner");
  const sectionBlockCustom = $(".btn-section-block-custom");
  const sectionBlockMultiple = $(".btn-section-block-multiple");
  const cardSection = $("#card-block");
  const cardBlock = $(".btn-card-block");
  const cardBlockOverlay = $(".btn-card-block-overlay");
  const cardBlockSpinner = $(".btn-card-block-spinner");
  const cardBlockCustom = $(".btn-card-block-custom");
  const cardBlockMultiple = $(".btn-card-block-multiple");
  const pageBlock = $(".btn-page-block");
  const pageBlockOverlay = $(".btn-page-block-overlay");
  const pageBlockSpinner = $(".btn-page-block-spinner");
  const pageBlockCustom = $(".btn-page-block-custom");
  const pageBlockMultiple = $(".btn-page-block-multiple");
  const formSection = $(".form-block");
  const formBlock = $(".btn-form-block");
  const formBlockOverlay = $(".btn-form-block-overlay");
  const formBlockSpinner = $(".btn-form-block-spinner");
  const formBlockCustom = $(".btn-form-block-custom");
  const formBlockMultiple = $(".btn-form-block-multiple");

  // Block UI
  // --------------------------------------------------------------------

  // Default
  if (sectionBlock.length && section.length) {
    sectionBlock.on("click", () => {
      $("#section-block").block({
        message: '<div class="spinner-border text-white" role="status"></div>',
        timeout: 1000,
        css: {
          backgroundColor: "transparent",
          border: "0",
        },
        overlayCSS: {
          opacity: 0.5,
        },
      });
    });
  }
  // Overlay Color
  if (sectionBlockOverlay.length && section.length) {
    sectionBlockOverlay.on("click", () => {
      $("#section-block").block({
        message:
          '<div class="spinner-border text-primary" role="status"></div>',
        timeout: 1000,
        css: {
          backgroundColor: "transparent",
          border: "0",
        },
        overlayCSS: {
          backgroundColor: "#fff",
          opacity: 0.8,
        },
      });
    });
  }
  // Custom Spinner
  if (sectionBlockSpinner.length && section.length) {
    sectionBlockSpinner.on("click", () => {
      $("#section-block").block({
        message:
          '<div class="sk-wave mx-auto"><div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div></div>',
        timeout: 1000,
        css: {
          backgroundColor: "transparent",
          border: "0",
        },
        overlayCSS: {
          opacity: 0.5,
        },
      });
    });
  }
  // Custom Message
  if (sectionBlockCustom.length && section.length) {
    sectionBlockCustom.on("click", () => {
      $("#section-block").block({
        message:
          '<div class="d-flex justify-content-center"><p class="mb-0">Please wait...</p> <div class="sk-wave m-0"><div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div></div> </div>',
        timeout: 1000,
        css: {
          backgroundColor: "transparent",
          color: "#fff",
          border: "0",
        },
        overlayCSS: {
          opacity: 0.5,
        },
      });
    });
  }
  // Multiple Message
  if (sectionBlockMultiple.length && section.length) {
    sectionBlockMultiple.on("click", () => {
      $("#section-block").block({
        message:
          '<div class="d-flex justify-content-center"><p class="mb-0">Please wait...</p> <div class="sk-wave m-0"><div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div></div> </div>',
        css: {
          backgroundColor: "transparent",
          color: "#fff",
          border: "0",
        },
        overlayCSS: {
          opacity: 0.5,
        },
        timeout: 1000,
        onUnblock: () => {
          $("#section-block").block({
            message: '<p class="mb-0">Almost Done...</p>',
            timeout: 1000,
            css: {
              backgroundColor: "transparent",
              color: "#fff",
              border: "0",
            },
            overlayCSS: {
              opacity: 0.25,
            },
            onUnblock: () => {
              $("#section-block").block({
                message: '<div class="p-3 bg-success">Success</div>',
                timeout: 500,
                css: {
                  backgroundColor: "transparent",
                  color: "#fff",
                  border: "0",
                },
                overlayCSS: {
                  opacity: 0.25,
                },
              });
            },
          });
        },
      });
    });
  }

  // Card Blocking
  // --------------------------------------------------------------------

  // Default
  if (cardBlock.length && cardSection.length) {
    cardBlock.on("click", () => {
      $("#card-block").block({
        message: '<div class="spinner-border text-white" role="status"></div>',
        timeout: 1000,
        css: {
          backgroundColor: "transparent",
          border: "0",
        },
        overlayCSS: {
          opacity: 0.5,
        },
      });
    });
  }
  // Overlay Color
  if (cardBlockOverlay.length && cardSection.length) {
    cardBlockOverlay.on("click", () => {
      $("#card-block").block({
        message:
          '<div class="spinner-border text-primary" role="status"></div>',
        timeout: 1000,
        css: {
          backgroundColor: "transparent",
          border: "0",
        },
        overlayCSS: {
          backgroundColor: "#fff",
          opacity: 0.8,
        },
      });
    });
  }
  // Custom Spinner
  if (cardBlockSpinner.length && cardSection.length) {
    cardBlockSpinner.on("click", () => {
      $("#card-block").block({
        message:
          '<div class="sk-wave mx-auto"><div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div></div>',
        timeout: 1000,
        css: {
          backgroundColor: "transparent",
          color: "#fff",
          border: "0",
        },
        overlayCSS: {
          opacity: 0.5,
        },
      });
    });
  }
  // Custom Message
  if (cardBlockCustom.length && cardSection.length) {
    cardBlockCustom.on("click", () => {
      $("#card-block").block({
        message:
          '<div class="d-flex justify-content-center"><p class="mb-0">Please wait...</p> <div class="sk-wave m-0"><div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div></div> </div>',
        timeout: 1000,
        css: {
          backgroundColor: "transparent",
          color: "#fff",
          border: "0",
        },
        overlayCSS: {
          opacity: 0.5,
        },
      });
    });
  }
  // Multiple Message
  if (cardBlockMultiple.length && cardSection.length) {
    cardBlockMultiple.on("click", () => {
      $("#card-block").block({
        message:
          '<div class="d-flex justify-content-center"><p class="mb-0">Please wait...</p> <div class="sk-wave m-0"><div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div></div> </div>',
        css: {
          backgroundColor: "transparent",
          color: "#fff",
          border: "0",
        },
        overlayCSS: {
          opacity: 0.5,
        },
        timeout: 1000,
        onUnblock: () => {
          $("#card-block").block({
            message: '<p class="mb-0">Almost Done...</p>',
            timeout: 1000,
            css: {
              backgroundColor: "transparent",
              color: "#fff",
              border: "0",
            },
            overlayCSS: {
              opacity: 0.25,
            },
            onUnblock: () => {
              $("#card-block").block({
                message: '<div class="p-3 bg-success">Success</div>',
                timeout: 500,
                css: {
                  backgroundColor: "transparent",
                  color: "#fff",
                  border: "0",
                },
                overlayCSS: {
                  opacity: 0.25,
                },
              });
            },
          });
        },
      });
    });
  }

  // Page Blocking
  // --------------------------------------------------------------------

  // Default
  if (pageBlock.length) {
    pageBlock.on("click", () => {
      $.blockUI({
        message: '<div class="spinner-border text-white" role="status"></div>',
        timeout: 1000,
        css: {
          backgroundColor: "transparent",
          border: "0",
        },
        overlayCSS: {
          opacity: 0.5,
        },
      });
    });
  }
  // Overlay Color
  if (pageBlockOverlay.length) {
    pageBlockOverlay.on("click", () => {
      $.blockUI({
        message:
          '<div class="spinner-border text-primary" role="status"></div>',
        timeout: 1000,
        css: {
          backgroundColor: "transparent",
          border: "0",
        },
        overlayCSS: {
          backgroundColor: "#fff",
          opacity: 0.8,
        },
      });
    });
  }
  // Custom Spinner
  if (pageBlockSpinner.length) {
    pageBlockSpinner.on("click", () => {
      $.blockUI({
        message:
          '<div class="sk-wave mx-auto"><div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div></div>',
        timeout: 1000,
        css: {
          backgroundColor: "transparent",
          border: "0",
        },
        overlayCSS: {
          opacity: 0.5,
        },
      });
    });
  }
  // Custom Message
  if (pageBlockCustom.length) {
    pageBlockCustom.on("click", () => {
      $.blockUI({
        message:
          '<div class="d-flex justify-content-center"><p class="mb-0">Please wait...</p> <div class="sk-wave m-0"><div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div></div> </div>',
        timeout: 1000,
        css: {
          backgroundColor: "transparent",
          color: "#fff",
          border: "0",
        },
        overlayCSS: {
          opacity: 0.5,
        },
      });
    });
  }
  // Multiple Message
  if (pageBlockMultiple.length) {
    pageBlockMultiple.on("click", () => {
      $.blockUI({
        message:
          '<div class="d-flex justify-content-center"><p class="mb-0">Please wait...</p> <div class="sk-wave m-0"><div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div></div> </div>',
        css: {
          backgroundColor: "transparent",
          color: "#fff",
          border: "0",
        },
        overlayCSS: {
          opacity: 0.5,
        },
        timeout: 1000,
        onUnblock: () => {
          $.blockUI({
            message: '<p class="mb-0">Almost Done...</p>',
            timeout: 1000,
            css: {
              backgroundColor: "transparent",
              color: "#fff",
              border: "0",
            },
            overlayCSS: {
              opacity: 0.5,
            },
            onUnblock: () => {
              $.blockUI({
                message: '<div class="p-3 bg-success">Success</div>',
                timeout: 500,
                css: {
                  backgroundColor: "transparent",
                  color: "#fff",
                  border: "0",
                },
                overlayCSS: {
                  opacity: 0.5,
                },
              });
            },
          });
        },
      });
    });
  }

  // Form Blocking
  // --------------------------------------------------------------------

  // Default
  if (formBlock.length && formSection.length) {
    formBlock.on("click", () => {
      formSection.block({
        message: '<div class="spinner-border text-white" role="status"></div>',
        timeout: 1000,
        css: {
          backgroundColor: "transparent",
          color: "#fff",
          border: "0",
        },
        overlayCSS: {
          opacity: 0.5,
        },
      });
    });
  }
  // Overlay Color
  if (formBlockOverlay.length && formSection.length) {
    formBlockOverlay.on("click", () => {
      formSection.block({
        message:
          '<div class="spinner-border text-primary" role="status"></div>',
        timeout: 1000,
        css: {
          backgroundColor: "transparent",
          border: "0",
        },
        overlayCSS: {
          backgroundColor: "#fff",
          opacity: 0.8,
        },
      });
    });
  }
  // Custom Spinner
  if (formBlockSpinner.length && formSection.length) {
    formBlockSpinner.on("click", () => {
      formSection.block({
        message:
          '<div class="sk-wave mx-auto"><div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div></div>',
        timeout: 1000,
        css: {
          backgroundColor: "transparent",
          color: "#fff",
          border: "0",
        },
        overlayCSS: {
          opacity: 0.5,
        },
      });
    });
  }
  // Custom Message
  if (formBlockCustom.length && formSection.length) {
    formBlockCustom.on("click", () => {
      formSection.block({
        message:
          '<div class="d-flex justify-content-center"><p class="mb-0">Please wait...</p> <div class="sk-wave m-0"><div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div></div> </div>',
        timeout: 1000,
        css: {
          backgroundColor: "transparent",
          color: "#fff",
          border: "0",
        },
        overlayCSS: {
          opacity: 0.5,
        },
      });
    });
  }
  // Multiple Message
  if (formBlockMultiple.length && formSection.length) {
    formBlockMultiple.on("click", () => {
      formSection.block({
        message:
          '<div class="d-flex justify-content-center"><p class="mb-0">Please wait...</p> <div class="sk-wave m-0"><div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div></div> </div>',
        css: {
          backgroundColor: "transparent",
          color: "#fff",
          border: "0",
        },
        overlayCSS: {
          opacity: 0.5,
        },
        timeout: 1000,
        onUnblock: () => {
          formSection.block({
            message: '<p class="mb-0">Almost Done...</p>',
            timeout: 1000,
            css: {
              backgroundColor: "transparent",
              border: "0",
            },
            overlayCSS: {
              opacity: 0.25,
            },
            onUnblock: () => {
              formSection.block({
                message: '<div class="p-3 bg-success">Success</div>',
                timeout: 500,
                css: {
                  backgroundColor: "transparent",
                  border: "0",
                },
                overlayCSS: {
                  opacity: 0.25,
                },
              });
            },
          });
        },
      });
    });
  }
});
