(() => {
  // Invoice amount
  const paymentAmount = document.querySelector(".invoice-amount");

  // Prefix
  if (paymentAmount) {
    new Cleave(paymentAmount, {
      numeral: true,
    });
  }

  // Datepicker
  const date = new Date();
  const invoiceDateList = document.querySelectorAll(".invoice-date");

  if (invoiceDateList) {
    invoiceDateList.forEach((invoiceDateEl) => {
      invoiceDateEl.flatpickr({
        monthSelectorType: "static",
        defaultDate: date,
      });
    });
  }
})();
