(() => {
  const clipboardList = [].slice.call(
    document.querySelectorAll('.clipboard-btn'),
  );
  if (ClipboardJS) {
    clipboardList.map((clipboardEl) => {
      const clipboard = new ClipboardJS(clipboardEl);
      clipboard.on('success', (e) => {
        if (e.action === 'copy') {
          toastr.success('', 'Copied to Clipboard!!');
        }
      });
    });
  } else {
    clipboardList.map((clipboardEl) => {
      clipboardEl.setAttribute('disabled', true);
    });
  }
})();
