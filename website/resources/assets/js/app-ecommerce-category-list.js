// Comment editor

const commentEditor = document.querySelector(".comment-editor");

if (commentEditor) {
  new Quill(commentEditor, {
    modules: {
      toolbar: ".comment-toolbar",
    },
    placeholder: "Enter category description...",
    theme: "snow",
  });
}

// Datatable (jquery)

$(() => {
  let borderColor;
  let bodyBg;
  let headingColor;

  if (isDarkStyle) {
    borderColor = config.colors_dark.borderColor;
    bodyBg = config.colors_dark.bodyBg;
    headingColor = config.colors_dark.headingColor;
  } else {
    borderColor = config.colors.borderColor;
    bodyBg = config.colors.bodyBg;
    headingColor = config.colors.headingColor;
  }

  // Variable declaration for category list table
  const dt_category_list_table = $(".datatables-category-list");

  //select2 for dropdowns in offcanvas

  const select2 = $(".select2");
  if (select2.length) {
    select2.each(function () {
      const $this = $(this);
      $this.wrap('<div class="position-relative"></div>').select2({
        dropdownParent: $this.parent(),
        placeholder: $this.data("placeholder"), //for dynamic placeholder
      });
    });
  }

  // Customers List Datatable

  if (dt_category_list_table.length) {
    const dt_category = dt_category_list_table.DataTable({
      ajax: `${assetsPath}json/ecommerce-category-list.json`, // JSON file to add data
      columns: [
        // columns according to JSON
        { data: "" },
        { data: "id" },
        { data: "categories" },
        { data: "total_products" },
        { data: "total_earnings" },
        { data: "" },
      ],
      columnDefs: [
        {
          // For Responsive
          className: "control",
          searchable: false,
          orderable: false,
          responsivePriority: 1,
          targets: 0,
          render: (data, type, full, meta) => "",
        },
        {
          // For Checkboxes
          targets: 1,
          orderable: false,
          searchable: false,
          responsivePriority: 4,
          render: () =>
            '<input type="checkbox" class="dt-checkboxes form-check-input">',
          checkboxes: {
            selectAllRender: '<input type="checkbox" class="form-check-input">',
          },
        },
        {
          // Categories and Category Detail
          targets: 2,
          responsivePriority: 2,
          render: (data, type, full, meta) => {
            const $name = full.categories;
            const $category_detail = full.category_detail;
            const $image = full.cat_image;
            const $id = full.id;
            if ($image) {
              // For Product image
              const $output = `<img src="${assetsPath}img/ecommerce-images/${$image}" alt="Product-${$id}" class="rounded-2">`;
            } else {
              // For Product badge
              const stateNum = Math.floor(Math.random() * 6);
              const states = [
                "success",
                "danger",
                "warning",
                "info",
                "dark",
                "primary",
                "secondary",
              ];
              const $state = states[stateNum];
              const $name = full.category_detail;
              let $initials = $name.match(/\b\w/g) || [];
              $initials = (
                ($initials.shift() || "") + ($initials.pop() || "")
              ).toUpperCase();
              $output = `<span class="avatar-initial rounded-2 bg-label-${$state}">${$initials}</span>`;
            }
            // Creates full output for Categories and Category Detail
            const $row_output = `<div class="d-flex align-items-center"><div class="avatar-wrapper me-2 rounded-2 bg-label-secondary"><div class="avatar">${$output}</div></div><div class="d-flex flex-column justify-content-center"><span class="text-body text-wrap fw-medium">${$name}</span><span class="text-muted text-truncate mb-0 d-none d-sm-block"><small>${$category_detail}</small></span></div></div>`;
            return $row_output;
          },
        },
        {
          // Total products
          targets: 3,
          responsivePriority: 3,
          render: (data, type, full, meta) => {
            const $total_products = full.total_products;
            return `<div class="text-sm-end">${$total_products}</div>`;
          },
        },
        {
          // Total Earnings
          targets: 4,
          orderable: false,
          render: (data, type, full, meta) => {
            const $total_earnings = full.total_earnings;
            return `<div class='h6 mb-0 text-sm-end'>${$total_earnings}</div`;
          },
        },
        {
          // Actions
          targets: -1,
          title: "Actions",
          searchable: false,
          orderable: false,
          render: (data, type, full, meta) =>
            '<div class="d-flex align-items-sm-center justify-content-sm-center">' +
            '<button class="btn btn-sm btn-icon delete-record me-2"><i class="ti ti-trash"></i></button>' +
            '<button class="btn btn-sm btn-icon"><i class="ti ti-edit"></i></button>' +
            "</div>",
        },
      ],
      order: [2, "desc"], //set any columns order asc/desc
      dom:
        '<"card-header d-flex flex-wrap pb-2"' +
        "<f>" +
        '<"d-flex justify-content-center justify-content-md-end align-items-baseline"<"dt-action-buttons d-flex justify-content-center flex-md-row mb-3 mb-md-0 ps-1 ms-1 align-items-baseline"lB>>' +
        ">t" +
        '<"row mx-2"' +
        '<"col-sm-12 col-md-6"i>' +
        '<"col-sm-12 col-md-6"p>' +
        ">",
      lengthMenu: [7, 10, 20, 50, 70, 100], //for length of menu
      language: {
        sLengthMenu: "_MENU_",
        search: "",
        searchPlaceholder: "Search Category",
      },
      // Button for offcanvas
      buttons: [
        {
          text: '<i class="ti ti-plus ti-xs me-0 me-sm-2"></i><span class="d-none d-sm-inline-block">Add Category</span>',
          className: "add-new btn btn-primary ms-2 waves-effect waves-light",
          attr: {
            "data-bs-toggle": "offcanvas",
            "data-bs-target": "#offcanvasEcommerceCategoryList",
          },
        },
      ],
      // For responsive popup
      responsive: {
        details: {
          display: $.fn.dataTable.Responsive.display.modal({
            header: (row) => {
              const data = row.data();
              return `Details of ${data.categories}`;
            },
          }),
          type: "column",
          renderer: (api, rowIdx, columns) => {
            const data = $.map(columns, (col, i) =>
              col.title !== "" // ? Do not show row in modal popup if title is blank (for check box)
                ? `<tr data-dt-row="${col.rowIndex}" data-dt-column="${col.columnIndex}"><td> ${col.title}:</td> <td class="ps-0">${col.data}</td></tr>`
                : "",
            ).join("");

            return data
              ? $('<table class="table"/><tbody />').append(data)
              : false;
          },
        },
      },
    });
    $(".dt-action-buttons").addClass("pt-0");
    $(".dataTables_filter").addClass("me-3 ps-0");
  }

  // Delete Record
  $(".datatables-category-list tbody").on(
    "click",
    ".delete-record",
    function () {
      dt_category.row($(this).parents("tr")).remove().draw();
    },
  );

  // Filter form control to default size
  // ? setTimeout used for multilingual table initialization
  setTimeout(() => {
    $(".dataTables_filter .form-control").removeClass("form-control-sm");
    $(".dataTables_length .form-select").removeClass("form-select-sm");
  }, 300);
});

//For form validation
(() => {
  const eCommerceCategoryListForm = document.getElementById(
    "eCommerceCategoryListForm",
  );

  //Add New customer Form Validation
  const fv = FormValidation.formValidation(eCommerceCategoryListForm, {
    fields: {
      categoryTitle: {
        validators: {
          notEmpty: {
            message: "Please enter category title",
          },
        },
      },
      slug: {
        validators: {
          notEmpty: {
            message: "Please enter slug",
          },
        },
      },
    },
    plugins: {
      trigger: new FormValidation.plugins.Trigger(),
      bootstrap5: new FormValidation.plugins.Bootstrap5({
        // Use this for enabling/changing valid/invalid class
        eleValidClass: "is-valid",
        rowSelector: (field, ele) => {
          // field is the field name & ele is the field element
          return ".mb-3";
        },
      }),
      submitButton: new FormValidation.plugins.SubmitButton(),
      // Submit the form when all fields are valid
      // defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
      autoFocus: new FormValidation.plugins.AutoFocus(),
    },
  });
})();
