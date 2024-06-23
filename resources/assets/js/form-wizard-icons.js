$(() => {
  const select2 = $('.select2');
  const selectPicker = $('.selectpicker');

  // Bootstrap select
  if (selectPicker.length) {
    selectPicker.selectpicker();
  }

  // select2
  if (select2.length) {
    select2.each(function () {
      const $this = $(this);
      $this.wrap('<div class="position-relative"></div>');
      $this.select2({
        placeholder: 'Select value',
        dropdownParent: $this.parent(),
      });
    });
  }
});

(() => {
  // Icons Wizard
  // --------------------------------------------------------------------
  const wizardIcons = document.querySelector('.wizard-icons-example');

  if (typeof wizardIcons !== 'undefined' && wizardIcons !== null) {
    const wizardIconsBtnNextList = [].slice.call(
      wizardIcons.querySelectorAll('.btn-next'),
    );
    const wizardIconsBtnPrevList = [].slice.call(
      wizardIcons.querySelectorAll('.btn-prev'),
    );
    const wizardIconsBtnSubmit = wizardIcons.querySelector('.btn-submit');

    const iconsStepper = new Stepper(wizardIcons, {
      linear: false,
    });
    if (wizardIconsBtnNextList) {
      wizardIconsBtnNextList.forEach((wizardIconsBtnNext) => {
        wizardIconsBtnNext.addEventListener('click', (event) => {
          iconsStepper.next();
        });
      });
    }
    if (wizardIconsBtnPrevList) {
      wizardIconsBtnPrevList.forEach((wizardIconsBtnPrev) => {
        wizardIconsBtnPrev.addEventListener('click', (event) => {
          iconsStepper.previous();
        });
      });
    }
    if (wizardIconsBtnSubmit) {
      wizardIconsBtnSubmit.addEventListener('click', (event) => {
        alert('Submitted..!!');
      });
    }
  }

  // Vertical Icons Wizard
  // --------------------------------------------------------------------
  const wizardIconsVertical = document.querySelector(
    '.wizard-vertical-icons-example',
  );

  if (
    typeof wizardIconsVertical !== 'undefined' &&
    wizardIconsVertical !== null
  ) {
    const wizardIconsVerticalBtnNextList = [].slice.call(
      wizardIconsVertical.querySelectorAll('.btn-next'),
    );
    const wizardIconsVerticalBtnPrevList = [].slice.call(
      wizardIconsVertical.querySelectorAll('.btn-prev'),
    );
    const wizardIconsVerticalBtnSubmit =
      wizardIconsVertical.querySelector('.btn-submit');

    const verticalIconsStepper = new Stepper(wizardIconsVertical, {
      linear: false,
    });

    if (wizardIconsVerticalBtnNextList) {
      wizardIconsVerticalBtnNextList.forEach((wizardIconsVerticalBtnNext) => {
        wizardIconsVerticalBtnNext.addEventListener('click', (event) => {
          verticalIconsStepper.next();
        });
      });
    }
    if (wizardIconsVerticalBtnPrevList) {
      wizardIconsVerticalBtnPrevList.forEach((wizardIconsVerticalBtnPrev) => {
        wizardIconsVerticalBtnPrev.addEventListener('click', (event) => {
          verticalIconsStepper.previous();
        });
      });
    }
    if (wizardIconsVerticalBtnSubmit) {
      wizardIconsVerticalBtnSubmit.addEventListener('click', (event) => {
        alert('Submitted..!!');
      });
    }
  }

  // Icons Modern Wizard
  // --------------------------------------------------------------------
  const wizardIconsModern = document.querySelector(
    '.wizard-modern-icons-example',
  );

  if (typeof wizardIconsModern !== 'undefined' && wizardIconsModern !== null) {
    const wizardIconsModernBtnNextList = [].slice.call(
      wizardIconsModern.querySelectorAll('.btn-next'),
    );
    const wizardIconsModernBtnPrevList = [].slice.call(
      wizardIconsModern.querySelectorAll('.btn-prev'),
    );
    const wizardIconsModernBtnSubmit =
      wizardIconsModern.querySelector('.btn-submit');

    const modernIconsStepper = new Stepper(wizardIconsModern, {
      linear: false,
    });

    if (wizardIconsModernBtnNextList) {
      wizardIconsModernBtnNextList.forEach((wizardIconsModernBtnNext) => {
        wizardIconsModernBtnNext.addEventListener('click', (event) => {
          modernIconsStepper.next();
        });
      });
    }
    if (wizardIconsModernBtnPrevList) {
      wizardIconsModernBtnPrevList.forEach((wizardIconsModernBtnPrev) => {
        wizardIconsModernBtnPrev.addEventListener('click', (event) => {
          modernIconsStepper.previous();
        });
      });
    }
    if (wizardIconsModernBtnSubmit) {
      wizardIconsModernBtnSubmit.addEventListener('click', (event) => {
        alert('Submitted..!!');
      });
    }
  }

  // Icons Modern Wizard
  // --------------------------------------------------------------------
  const wizardIconsModernVertical = document.querySelector(
    '.wizard-modern-vertical-icons-example',
  );

  if (
    typeof wizardIconsModernVertical !== 'undefined' &&
    wizardIconsModernVertical !== null
  ) {
    const wizardIconsModernVerticalBtnNextList = [].slice.call(
      wizardIconsModernVertical.querySelectorAll('.btn-next'),
    );
    const wizardIconsModernVerticalBtnPrevList = [].slice.call(
      wizardIconsModernVertical.querySelectorAll('.btn-prev'),
    );
    const wizardIconsModernVerticalBtnSubmit =
      wizardIconsModernVertical.querySelector('.btn-submit');

    const verticalModernIconsStepper = new Stepper(wizardIconsModernVertical, {
      linear: false,
    });

    if (wizardIconsModernVerticalBtnNextList) {
      wizardIconsModernVerticalBtnNextList.forEach(
        (wizardIconsModernVerticalBtnNext) => {
          wizardIconsModernVerticalBtnNext.addEventListener(
            'click',
            (event) => {
              verticalModernIconsStepper.next();
            },
          );
        },
      );
    }
    if (wizardIconsModernVerticalBtnPrevList) {
      wizardIconsModernVerticalBtnPrevList.forEach(
        (wizardIconsModernVerticalBtnPrev) => {
          wizardIconsModernVerticalBtnPrev.addEventListener(
            'click',
            (event) => {
              verticalModernIconsStepper.previous();
            },
          );
        },
      );
    }
    if (wizardIconsModernVerticalBtnSubmit) {
      wizardIconsModernVerticalBtnSubmit.addEventListener('click', (event) => {
        alert('Submitted..!!');
      });
    }
  }
})();
