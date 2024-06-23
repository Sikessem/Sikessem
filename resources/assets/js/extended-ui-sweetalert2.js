(() => {
  const basicAlert = document.querySelector('#basic-alert');
  const withTitle = document.querySelector('#with-title');
  const footerAlert = document.querySelector('#footer-alert');
  const htmlAlert = document.querySelector('#html-alert');
  const positionTopStart = document.querySelector('#position-top-start');
  const positionTopEnd = document.querySelector('#position-top-end');
  const positionBottomStart = document.querySelector('#position-bottom-start');
  const positionBottomEnd = document.querySelector('#position-bottom-end');
  const bounceInAnimation = document.querySelector('#bounce-in-animation');
  const fadeInAnimation = document.querySelector('#fade-in-animation');
  const flipXAnimation = document.querySelector('#flip-x-animation');
  const tadaAnimation = document.querySelector('#tada-animation');
  const shakeAnimation = document.querySelector('#shake-animation');
  const iconSuccess = document.querySelector('#type-success');
  const iconInfo = document.querySelector('#type-info');
  const iconWarning = document.querySelector('#type-warning');
  const iconError = document.querySelector('#type-error');
  const iconQuestion = document.querySelector('#type-question');
  const customImage = document.querySelector('#custom-image');
  const autoClose = document.querySelector('#auto-close');
  const outsideClick = document.querySelector('#outside-click');
  const progressSteps = document.querySelector('#progress-steps');
  const ajaxRequest = document.querySelector('#ajax-request');
  const confirmText = document.querySelector('#confirm-text');
  const confirmColor = document.querySelector('#confirm-color');

  // Basic Alerts
  // --------------------------------------------------------------------

  // Default Alert
  if (basicAlert) {
    basicAlert.onclick = () => {
      Swal.fire({
        title: 'Any fool can use a computer',
        customClass: {
          confirmButton: 'btn btn-primary waves-effect waves-light',
        },
        buttonsStyling: false,
      });
    };
  }

  // Alert With Title
  if (withTitle) {
    withTitle.onclick = () => {
      Swal.fire({
        title: 'The Internet?,',
        text: 'That thing is still around?',
        customClass: {
          confirmButton: 'btn btn-primary waves-effect waves-light',
        },
        buttonsStyling: false,
      });
    };
  }

  // Alert With Footer
  if (footerAlert) {
    footerAlert.onclick = () => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href>Why do I have this issue?</a>',
        customClass: {
          confirmButton: 'btn btn-primary waves-effect waves-light',
        },
        buttonsStyling: false,
      });
    };
  }

  // Html Alert
  if (htmlAlert) {
    htmlAlert.onclick = () => {
      Swal.fire({
        title: '<span class="fw-medium">HTML <u>example</u></span>',
        icon: 'info',
        html:
          'You can use <b>bold text</b>, ' +
          '<a href="https://pixinvent.com/" target="_blank">links</a> ' +
          'and other HTML tags',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: '<i class="ti ti-thumb-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText: '<i class="ti ti-thumb-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down',
        customClass: {
          confirmButton: 'btn btn-primary me-3 waves-effect waves-light',
          cancelButton: 'btn btn-label-secondary waves-effect waves-light',
        },
        buttonsStyling: false,
      });
    };
  }

  // Alerts Positions
  // --------------------------------------------------------------------

  // Top Start Alert
  if (positionTopStart) {
    positionTopStart.onclick = () => {
      Swal.fire({
        position: 'top-start',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          confirmButton: 'btn btn-primary waves-effect waves-light',
        },
        buttonsStyling: false,
      });
    };
  }

  // Top End Alert
  if (positionTopEnd) {
    positionTopEnd.onclick = () => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          confirmButton: 'btn btn-primary waves-effect waves-light',
        },
        buttonsStyling: false,
      });
    };
  }

  // Bottom Start Alert
  if (positionBottomStart) {
    positionBottomStart.onclick = () => {
      Swal.fire({
        position: 'bottom-start',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          confirmButton: 'btn btn-primary waves-effect waves-light',
        },
        buttonsStyling: false,
      });
    };
  }

  // Bottom End Alert
  if (positionBottomEnd) {
    positionBottomEnd.onclick = () => {
      Swal.fire({
        position: 'bottom-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          confirmButton: 'btn btn-primary waves-effect waves-light',
        },
        buttonsStyling: false,
      });
    };
  }

  // Alerts With Animations
  // --------------------------------------------------------------------

  // Bounce In Animation
  if (bounceInAnimation) {
    bounceInAnimation.onclick = () => {
      Swal.fire({
        title: 'Bounce In Animation',
        showClass: {
          popup: 'animate__animated animate__bounceIn',
        },
        customClass: {
          confirmButton: 'btn btn-primary waves-effect waves-light',
        },
        buttonsStyling: false,
      });
    };
  }

  // Fade In Animation
  if (fadeInAnimation) {
    fadeInAnimation.onclick = () => {
      Swal.fire({
        title: 'Fade In Animation',
        showClass: {
          popup: 'animate__animated animate__fadeIn',
        },
        customClass: {
          confirmButton: 'btn btn-primary waves-effect waves-light',
        },
        buttonsStyling: false,
      });
    };
  }

  // Flip X Animation
  if (flipXAnimation) {
    flipXAnimation.onclick = () => {
      Swal.fire({
        title: 'Flip In Animation',
        showClass: {
          popup: 'animate__animated animate__flipInX',
        },
        customClass: {
          confirmButton: 'btn btn-primary waves-effect waves-light',
        },
        buttonsStyling: false,
      });
    };
  }

  // Tada Animation
  if (tadaAnimation) {
    tadaAnimation.onclick = () => {
      Swal.fire({
        title: 'Tada Animation',
        showClass: {
          popup: 'animate__animated animate__tada',
        },
        customClass: {
          confirmButton: 'btn btn-primary waves-effect waves-light',
        },
        buttonsStyling: false,
      });
    };
  }

  // Shake Animation
  if (shakeAnimation) {
    shakeAnimation.onclick = () => {
      Swal.fire({
        title: 'Shake Animation',
        showClass: {
          popup: 'animate__animated animate__shakeX',
        },
        customClass: {
          confirmButton: 'btn btn-primary waves-effect waves-light',
        },
        buttonsStyling: false,
      });
    };
  }

  // Alert Types
  // --------------------------------------------------------------------

  // Success Alert
  if (iconSuccess) {
    iconSuccess.onclick = () => {
      Swal.fire({
        title: 'Good job!',
        text: 'You clicked the button!',
        icon: 'success',
        customClass: {
          confirmButton: 'btn btn-primary waves-effect waves-light',
        },
        buttonsStyling: false,
      });
    };
  }

  // Info Alert
  if (iconInfo) {
    iconInfo.onclick = () => {
      Swal.fire({
        title: 'Info!',
        text: 'You clicked the button!',
        icon: 'info',
        customClass: {
          confirmButton: 'btn btn-primary waves-effect waves-light',
        },
        buttonsStyling: false,
      });
    };
  }

  // Warning Alert
  if (iconWarning) {
    iconWarning.onclick = () => {
      Swal.fire({
        title: 'Warning!',
        text: ' You clicked the button!',
        icon: 'warning',
        customClass: {
          confirmButton: 'btn btn-primary waves-effect waves-light',
        },
        buttonsStyling: false,
      });
    };
  }

  // Error Alert
  if (iconError) {
    iconError.onclick = () => {
      Swal.fire({
        title: 'Error!',
        text: ' You clicked the button!',
        icon: 'error',
        customClass: {
          confirmButton: 'btn btn-primary waves-effect waves-light',
        },
        buttonsStyling: false,
      });
    };
  }

  // Question Alert
  if (iconQuestion) {
    iconQuestion.onclick = () => {
      Swal.fire({
        title: 'Question!',
        text: ' You clicked the button!',
        icon: 'question',
        customClass: {
          confirmButton: 'btn btn-primary waves-effect waves-light',
        },
        buttonsStyling: false,
      });
    };
  }

  // Advanced Options
  // --------------------------------------------------------------------

  //Alert With Custom Icon
  if (customImage) {
    customImage.onclick = () => {
      Swal.fire({
        title: 'Sweet!',
        text: 'Modal with a custom image.',
        imageUrl: `${assetsPath}img/backgrounds/5.jpg`,
        imageWidth: 400,
        imageAlt: 'Custom image',
        customClass: {
          confirmButton: 'btn btn-primary waves-effect waves-light',
        },
        buttonsStyling: false,
      });
    };
  }

  // Auto Closing Alert
  if (autoClose) {
    autoClose.onclick = () => {
      let timerInterval;
      Swal.fire({
        title: 'Auto close alert!',
        html: 'I will close in <strong></strong> seconds.',
        timer: 2000,
        customClass: {
          confirmButton: 'btn btn-primary waves-effect waves-light',
        },
        buttonsStyling: false,
        willOpen: () => {
          Swal.showLoading();
          timerInterval = setInterval(() => {
            Swal.getHtmlContainer().querySelector('strong').textContent =
              Swal.getTimerLeft();
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        if (
          // Read more about handling dismissals
          result.dismiss === Swal.DismissReason.timer
        ) {
          console.log('I was closed by the timer');
        }
      });
    };
  }

  // Close Alert On Backdrop Click
  if (outsideClick) {
    outsideClick.onclick = () => {
      Swal.fire({
        title: 'Click outside to close!',
        text: 'This is a cool message!',
        backdrop: true,
        allowOutsideClick: true,
        customClass: {
          confirmButton: 'btn btn-primary waves-effect waves-light',
        },
        buttonsStyling: false,
      });
    };
  }

  // Alert With Steps
  if (progressSteps) {
    progressSteps.onclick = () => {
      const steps = ['1', '2', '3'];
      const swalQueueStep = Swal.mixin({
        confirmButtonText: 'Forward',
        cancelButtonText: 'Back',
        progressSteps: steps,
        input: 'text',
        inputAttributes: {
          required: true,
        },
        validationMessage: 'This field is required',
      });

      async function backAndForward() {
        const values = [];
        let currentStep;

        for (currentStep = 0; currentStep < steps.length; ) {
          const result = await new swalQueueStep({
            title: `Question ${steps[currentStep]}`,
            showCancelButton: currentStep > 0,
            currentProgressStep: currentStep,
          });

          if (result.value) {
            values[currentStep] = result.value;
            currentStep++;
          } else if (result.dismiss === 'cancel') {
            currentStep--;
          }
        }

        Swal.fire(JSON.stringify(values));
      }

      backAndForward();
    };
  }

  // Alert With Ajax Request
  if (ajaxRequest) {
    ajaxRequest.onclick = () => {
      Swal.fire({
        title: 'Submit your Github username',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off',
        },
        showCancelButton: true,
        confirmButtonText: 'Look up',
        showLoaderOnConfirm: true,
        customClass: {
          confirmButton: 'btn btn-primary me-3 waves-effect waves-light',
          cancelButton: 'btn btn-label-danger waves-effect waves-light',
        },
        preConfirm: (login) => {
          return fetch(`//api.github.com/users/${login}`)
            .then((response) => {
              if (!response.ok) {
                throw new Error(response.statusText);
              }
              return response.json();
            })
            .catch((error) => {
              Swal.showValidationMessage(`Request failed:${error}`);
            });
        },
        backdrop: true,
        allowOutsideClick: () => !Swal.isLoading(),
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: `${result.value.login}'s avatar`,
            imageUrl: result.value.avatar_url,
            customClass: {
              confirmButtonText: 'Close me!',
              confirmButton: 'btn btn-primary waves-effect waves-light',
            },
          });
        }
      });
    };
  }

  // Alert With Functional Confirm Button
  if (confirmText) {
    confirmText.onclick = () => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        customClass: {
          confirmButton: 'btn btn-primary me-3 waves-effect waves-light',
          cancelButton: 'btn btn-label-secondary waves-effect waves-light',
        },
        buttonsStyling: false,
      }).then((result) => {
        if (result.value) {
          Swal.fire({
            icon: 'success',
            title: 'Deleted!',
            text: 'Your file has been deleted.',
            customClass: {
              confirmButton: 'btn btn-success waves-effect waves-light',
            },
          });
        }
      });
    };
  }

  // Alert With Functional Confirm Cancel Button
  if (confirmColor) {
    confirmColor.onclick = () => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        customClass: {
          confirmButton: 'btn btn-primary me-3 waves-effect waves-light',
          cancelButton: 'btn btn-label-secondary waves-effect waves-light',
        },
        buttonsStyling: false,
      }).then((result) => {
        if (result.value) {
          Swal.fire({
            icon: 'success',
            title: 'Deleted!',
            text: 'Your file has been deleted.',
            customClass: {
              confirmButton: 'btn btn-success waves-effect waves-light',
            },
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire({
            title: 'Cancelled',
            text: 'Your imaginary file is safe :)',
            icon: 'error',
            customClass: {
              confirmButton: 'btn btn-success waves-effect waves-light',
            },
          });
        }
      });
    };
  }
})();
