//Javascript to handle the e-commerce settings page

$(() => {
  // Select2
  const select2 = $('.select2');
  if (select2.length) {
    select2.each(function () {
      const $this = $(this);
      $this.wrap('<div class="position-relative"></div>').select2({
        dropdownParent: $this.parent(),
        placeholder: $this.data('placeholder'), // for dynamic placeholder
      });
    });
  }
});

(() => {
  // Phone Number
  const phoneMaskList = document.querySelectorAll('.phone-mask');

  if (phoneMaskList) {
    phoneMaskList.forEach((phoneMask) => {
      new Cleave(phoneMask, {
        phone: true,
        phoneRegionCode: 'US',
      });
    });
  }
})();
