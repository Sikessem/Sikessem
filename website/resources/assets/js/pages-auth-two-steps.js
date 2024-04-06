document.addEventListener("DOMContentLoaded", (e) => {
  (() => {
    const maskWrapper = document.querySelector(".numeral-mask-wrapper");

    for (const pin of maskWrapper.children) {
      pin.onkeyup = function (e) {
        // Check if the key pressed is a number (0-9)
        if (/^\d$/.test(e.key)) {
          // While entering value, go to next
          if (pin.nextElementSibling) {
            if (
              this.value.length ===
              Number.parseInt(this.attributes.maxlength.value)
            ) {
              pin.nextElementSibling.focus();
            }
          }
        } else if (e.key === "Backspace") {
          // While deleting entered value, go to previous
          if (pin.previousElementSibling) {
            pin.previousElementSibling.focus();
          }
        }
      };
      // Prevent the default behavior for the minus key
      pin.onkeypress = (e) => {
        if (e.key === "-") {
          e.preventDefault();
        }
      };
    }

    const twoStepsForm = document.querySelector("#twoStepsForm");

    // Form validation for Add new record
    if (twoStepsForm) {
      const fv = FormValidation.formValidation(twoStepsForm, {
        fields: {
          otp: {
            validators: {
              notEmpty: {
                message: "Please enter otp",
              },
            },
          },
        },
        plugins: {
          trigger: new FormValidation.plugins.Trigger(),
          bootstrap5: new FormValidation.plugins.Bootstrap5({
            eleValidClass: "",
            rowSelector: ".mb-3",
          }),
          submitButton: new FormValidation.plugins.SubmitButton(),

          defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
          autoFocus: new FormValidation.plugins.AutoFocus(),
        },
      });

      const numeralMaskList = twoStepsForm.querySelectorAll(".numeral-mask");
      const keyupHandler = () => {
        let otpFlag = true;
        let otpVal = "";
        numeralMaskList.forEach((numeralMaskEl) => {
          if (numeralMaskEl.value === "") {
            otpFlag = false;
            twoStepsForm.querySelector('[name="otp"]').value = "";
          }
          otpVal = otpVal + numeralMaskEl.value;
        });
        if (otpFlag) {
          twoStepsForm.querySelector('[name="otp"]').value = otpVal;
        }
      };
      numeralMaskList.forEach((numeralMaskEle) => {
        numeralMaskEle.addEventListener("keyup", keyupHandler);
      });
    }
  })();
});
