(() => {
  const invoiceItemPriceList = document.querySelectorAll('.invoice-item-price');
  const invoiceItemQtyList = document.querySelectorAll('.invoice-item-qty');
  const date = new Date();
  const invoiceDate = document.querySelector('.invoice-date');
  const dueDate = document.querySelector('.due-date');

  // Price
  if (invoiceItemPriceList) {
    invoiceItemPriceList.forEach((invoiceItemPrice) => {
      new Cleave(invoiceItemPrice, {
        delimiter: '',
        numeral: true,
      });
    });
  }

  // Qty
  if (invoiceItemQtyList) {
    invoiceItemQtyList.forEach((invoiceItemQty) => {
      new Cleave(invoiceItemQty, {
        delimiter: '',
        numeral: true,
      });
    });
  }

  // Datepicker
  if (invoiceDate) {
    invoiceDate.flatpickr({
      monthSelectorType: 'static',
      defaultDate: date,
    });
  }
  if (dueDate) {
    dueDate.flatpickr({
      monthSelectorType: 'static',
      defaultDate: new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() + 5,
      ),
    });
  }
})();

// repeater (jquery)
$(() => {
  const applyChangesBtn = $('.btn-apply-changes');
  let discount;
  let tax1;
  let tax2;
  let discountInput;
  let taxInput1;
  let taxInput2;
  const sourceItem = $('.source-item');
  const adminDetails = {
    'App Design': 'Designed UI kit & app pages.',
    'App Customization': 'Customization & Bug Fixes.',
    'ABC Template': 'Bootstrap 4 admin template.',
    'App Development': 'Native App Development.',
  };

  // Prevent dropdown from closing on tax change
  $(document).on('click', '.tax-select', (e) => {
    e.stopPropagation();
  });

  // On tax change update it's value value
  function updateValue(listener, el) {
    listener.closest('.repeater-wrapper').find(el).text(listener.val());
  }

  // Apply item changes btn
  if (applyChangesBtn.length) {
    $(document).on('click', '.btn-apply-changes', function (e) {
      const $this = $(this);
      taxInput1 = $this.closest('.dropdown-menu').find('#taxInput1');
      taxInput2 = $this.closest('.dropdown-menu').find('#taxInput2');
      discountInput = $this.closest('.dropdown-menu').find('#discountInput');
      tax1 = $this.closest('.repeater-wrapper').find('.tax-1');
      tax2 = $this.closest('.repeater-wrapper').find('.tax-2');
      discount = $('.discount');

      if (taxInput1.val() !== null) {
        updateValue(taxInput1, tax1);
      }

      if (taxInput2.val() !== null) {
        updateValue(taxInput2, tax2);
      }

      if (discountInput.val().length) {
        $this
          .closest('.repeater-wrapper')
          .find(discount)
          .text(`${discountInput.val()}%`);
      }
    });
  }

  // Repeater init
  if (sourceItem.length) {
    sourceItem.on('submit', (e) => {
      e.preventDefault();
    });
    sourceItem.repeater({
      show: function () {
        $(this).slideDown();
        // Initialize tooltip on load of each item
        const tooltipTriggerList = [].slice.call(
          document.querySelectorAll('[data-bs-toggle="tooltip"]'),
        );
        tooltipTriggerList.map(
          (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl),
        );
      },
      hide: function (e) {
        $(this).slideUp();
      },
    });
  }

  // Item details select onchange
  $(document).on('change', '.item-details', function () {
    const $this = $(this);
    const value = adminDetails[$this.val()];
    if ($this.next('textarea').length) {
      $this.next('textarea').val(value);
    } else {
      $this.after(
        `<textarea class="form-control" rows="2">${value}</textarea>`,
      );
    }
  });
});
