document.addEventListener('DOMContentLoaded', (e) => {
  (() => {
    const formAccSettings = document.querySelector('#formAccountSettings');
    const deactivateAcc = document.querySelector('#formAccountDeactivation');
    const deactivateButton = deactivateAcc.querySelector('.deactivate-account');

    // Form validation for Add new record
    if (formAccSettings) {
      const fv = FormValidation.formValidation(formAccSettings, {
        fields: {
          firstName: {
            validators: {
              notEmpty: {
                message: 'Please enter first name',
              },
            },
          },
          lastName: {
            validators: {
              notEmpty: {
                message: 'Please enter last name',
              },
            },
          },
        },
        plugins: {
          trigger: new FormValidation.plugins.Trigger(),
          bootstrap5: new FormValidation.plugins.Bootstrap5({
            eleValidClass: '',
            rowSelector: '.col-md-6',
          }),
          submitButton: new FormValidation.plugins.SubmitButton(),
          // Submit the form when all fields are valid
          // defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
          autoFocus: new FormValidation.plugins.AutoFocus(),
        },
        init: (instance) => {
          instance.on('plugins.message.placed', (e) => {
            if (e.element.parentElement.classList.contains('input-group')) {
              e.element.parentElement.insertAdjacentElement(
                'afterend',
                e.messageElement,
              );
            }
          });
        },
      });
    }

    if (deactivateAcc) {
      const fv = FormValidation.formValidation(deactivateAcc, {
        fields: {
          accountActivation: {
            validators: {
              notEmpty: {
                message: 'Please confirm you want to delete account',
              },
            },
          },
        },
        plugins: {
          trigger: new FormValidation.plugins.Trigger(),
          bootstrap5: new FormValidation.plugins.Bootstrap5({
            eleValidClass: '',
          }),
          submitButton: new FormValidation.plugins.SubmitButton(),
          fieldStatus: new FormValidation.plugins.FieldStatus({
            onStatusChanged: (areFieldsValid) => {
              areFieldsValid
                ? // Enable the submit button
                  // so user has a chance to submit the form again
                  deactivateButton.removeAttribute('disabled')
                : // Disable the submit button
                  deactivateButton.setAttribute('disabled', 'disabled');
            },
          }),
          // Submit the form when all fields are valid
          // defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
          autoFocus: new FormValidation.plugins.AutoFocus(),
        },
        init: (instance) => {
          instance.on('plugins.message.placed', (e) => {
            if (e.element.parentElement.classList.contains('input-group')) {
              e.element.parentElement.insertAdjacentElement(
                'afterend',
                e.messageElement,
              );
            }
          });
        },
      });
    }

    // Deactivate account alert
    const accountActivation = document.querySelector('#accountActivation');

    // Alert With Functional Confirm Button
    if (deactivateButton) {
      deactivateButton.onclick = () => {
        if (accountActivation.checked === true) {
          Swal.fire({
            text: 'Are you sure you would like to deactivate your account?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            customClass: {
              confirmButton: 'btn btn-primary me-2 waves-effect waves-light',
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
                text: 'Deactivation Cancelled!!',
                icon: 'error',
                customClass: {
                  confirmButton: 'btn btn-success waves-effect waves-light',
                },
              });
            }
          });
        }
      };
    }

    // CleaveJS validation

    const phoneNumber = document.querySelector('#phoneNumber');
    const zipCode = document.querySelector('#zipCode');
    // Phone Mask
    if (phoneNumber) {
      new Cleave(phoneNumber, {
        phone: true,
        phoneRegionCode: 'US',
      });
    }

    // Pincode
    if (zipCode) {
      new Cleave(zipCode, {
        delimiter: '',
        numeral: true,
      });
    }

    // Update/reset user image of account page
    const accountUserImage = document.getElementById('uploadedAvatar');
    const fileInput = document.querySelector('.account-file-input');
    const resetFileInput = document.querySelector('.account-image-reset');

    if (accountUserImage) {
      const resetImage = accountUserImage.src;
      fileInput.onchange = () => {
        if (fileInput.files[0]) {
          accountUserImage.src = window.URL.createObjectURL(fileInput.files[0]);
        }
      };
      resetFileInput.onclick = () => {
        fileInput.value = '';
        accountUserImage.src = resetImage;
      };
    }
  })();
});

// Select2 (jquery)
$(() => {
  const select2 = $('.select2');
  // For all Select2
  if (select2.length) {
    select2.each(function () {
      const $this = $(this);
      $this.wrap('<div class="position-relative"></div>');
      $this.select2({
        dropdownParent: $this.parent(),
      });
    });
  }
});
