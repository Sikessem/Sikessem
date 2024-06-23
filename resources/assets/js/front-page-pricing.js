document.addEventListener('DOMContentLoaded', (event) => {
  (() => {
    const priceDurationToggler = document.querySelector(
      '.price-duration-toggler',
    );
    const priceMonthlyList = [].slice.call(
      document.querySelectorAll('.price-monthly'),
    );
    const priceYearlyList = [].slice.call(
      document.querySelectorAll('.price-yearly'),
    );

    function togglePrice() {
      if (priceDurationToggler.checked) {
        // If checked
        priceYearlyList.map((yearEl) => {
          yearEl.classList.remove('d-none');
        });
        priceMonthlyList.map((monthEl) => {
          monthEl.classList.add('d-none');
        });
      } else {
        // If not checked
        priceYearlyList.map((yearEl) => {
          yearEl.classList.add('d-none');
        });
        priceMonthlyList.map((monthEl) => {
          monthEl.classList.remove('d-none');
        });
      }
    }
    // togglePrice Event Listener
    togglePrice();

    priceDurationToggler.onchange = () => {
      togglePrice();
    };
  })();
});
