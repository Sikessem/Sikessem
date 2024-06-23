(() => {
  const dNum = document.querySelector('.dNum');
  const fNum = document.querySelector('.fNum');
  const fCurrency = document.querySelector('.fCurrency');
  const fBytes = document.querySelector('.fBytes');
  const fPercent = document.querySelector('.fPercent');
  const fTime = document.querySelector('.fTime');
  const fExponential = document.querySelector('.fExponential');

  if (dNum) {
    dNum.innerHTML = numeral(974).value();
  }
  if (fNum) {
    fNum.innerHTML = numeral(1230974).format('0.0a');
  }
  if (fCurrency) {
    fCurrency.innerHTML = numeral(1000.234).format('$0,0.000');
  }
  if (fBytes) {
    fBytes.innerHTML = numeral(3467479682787).format('0.000ib');
  }
  if (fPercent) {
    fPercent.innerHTML = numeral(0.974878234).format('0.000%');
  }
  if (fTime) {
    fTime.innerHTML = numeral(63846).format('00:00:00');
  }
  if (fExponential) {
    fExponential.innerHTML = numeral(1123456789).format('0,0e+0');
  }
})();
