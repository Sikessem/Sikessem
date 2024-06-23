(() => {
  const layoutMenu1 = document.querySelector('#layout-menu1');
  const layoutMenu2 = document.querySelector('#layout-menu2');
  const layoutMenu3 = document.querySelector('#layout-menu3');
  const layoutMenu4 = document.querySelector('#layout-menu4');

  // Initializing four vertical demo menus
  if (layoutMenu1) {
    new Menu(layoutMenu1);
  }
  if (layoutMenu2) {
    new Menu(layoutMenu2);
  }
  if (layoutMenu3) {
    new Menu(layoutMenu3);
  }
  if (layoutMenu4) {
    new Menu(layoutMenu4);
  }

  // On toggle button click
  const appToggleBtn = document.querySelector('.app-brand-toggle');
  if (appToggleBtn) {
    appToggleBtn.onclick = () => {
      if (layoutMenu1) {
        layoutMenu1.classList.toggle('menu-collapsed');
      }
      if (layoutMenu2) {
        layoutMenu2.classList.toggle('menu-collapsed');
      }
      if (layoutMenu3) {
        layoutMenu3.classList.toggle('menu-collapsed');
      }
      if (layoutMenu4) {
        layoutMenu4.classList.toggle('menu-collapsed');
      }
    };
  }

  // For Docs only
  const brandNameBtn = document.querySelector('.brand-menu-toggle');
  const logoNameBtn = document.querySelector('.brand-logo-toggle');
  const logoNameTextBtn = document.querySelector('.logo-name-toggle');
  const brandImageBtn = document.querySelector('.brand-image-toggle');
  if (brandNameBtn) {
    brandNameBtn.onclick = () => {
      if (layoutMenu1) {
        layoutMenu1.classList.toggle('menu-collapsed');
      }
    };
  }
  if (logoNameBtn) {
    logoNameBtn.onclick = () => {
      if (layoutMenu2) {
        layoutMenu2.classList.toggle('menu-collapsed');
      }
    };
  }
  if (logoNameTextBtn) {
    logoNameTextBtn.onclick = () => {
      if (layoutMenu3) {
        layoutMenu3.classList.toggle('menu-collapsed');
      }
    };
  }
  if (brandImageBtn) {
    brandImageBtn.onclick = () => {
      if (layoutMenu4) {
        layoutMenu4.classList.toggle('menu-collapsed');
      }
    };
  }
})();
