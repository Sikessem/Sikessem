$(() => {
  const select2ShareProject = $(".share-project-select");

  const shareProject = document.getElementById("shareProject");
  shareProject.addEventListener("show.bs.modal", (event) => {
    if (select2ShareProject.length) {
      function renderAvatar(option) {
        if (!option.id) {
          return option.text;
        }
        const optionEle = `<div class="d-flex align-items-center"><div class="avatar avatar-xs me-2 d-flex"><img src="${assetsPath}${$(
          option.element,
        ).data("image")}" class="rounded-circle"></div><div class="name">${$(
          option.element,
        ).data("name")}</div></div>`;
        return optionEle;
      }
      select2ShareProject
        .wrap('<div class="position-relative"></div>')
        .select2({
          dropdownParent: shareProject,
          templateResult: renderAvatar,
          templateSelection: renderAvatar,
          placeholder: "Add Project Members",
          escapeMarkup: (es) => es,
        });
    }
  });
});
