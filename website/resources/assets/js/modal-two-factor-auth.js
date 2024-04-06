document.addEventListener("DOMContentLoaded", (e) => {
  (() => {
    const phoneMaskList = document.querySelectorAll("#twoFactorAuthInputSms");

    // Phone Number
    if (phoneMaskList) {
      phoneMaskList.forEach((phoneMask) => {
        new Cleave(phoneMask, {
          phone: true,
          phoneRegionCode: "US",
        });
      });
    }
  })();
});
