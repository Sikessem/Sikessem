// Datatable (jquery)
$(() => {
  // Variable declaration for table
  const dt_user_table = $('.datatables-users');
  const select2 = $('.select2');
  const userView = `${baseUrl}app/user/view/account`;
  const offCanvasForm = $('#offcanvasAddUser');

  if (select2.length) {
    const $this = select2;
    $this.wrap('<div class="position-relative"></div>').select2({
      placeholder: 'Select Country',
      dropdownParent: $this.parent(),
    });
  }

  // ajax setup
  $.ajaxSetup({
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
    },
  });

  // Users datatable
  if (dt_user_table.length) {
    const dt_user = dt_user_table.DataTable({
      processing: true,
      serverSide: true,
      ajax: {
        url: `${baseUrl}user-list`,
      },
      columns: [
        // columns according to JSON
        { data: '' },
        { data: 'id' },
        { data: 'name' },
        { data: 'email' },
        { data: 'email_verified_at' },
        { data: 'action' },
      ],
      columnDefs: [
        {
          // For Responsive
          className: 'control',
          searchable: false,
          orderable: false,
          responsivePriority: 2,
          targets: 0,
          render: (data, type, full, meta) => '',
        },
        {
          searchable: false,
          orderable: false,
          targets: 1,
          render: (data, type, full, meta) => `<span>${full.fake_id}</span>`,
        },
        {
          // User full name
          targets: 2,
          responsivePriority: 4,
          render: (data, type, full, meta) => {
            const $name = full.name;

            // For Avatar badge
            const stateNum = Math.floor(Math.random() * 6);
            const states = [
              'success',
              'danger',
              'warning',
              'info',
              'dark',
              'primary',
              'secondary',
            ];
            const $state = states[stateNum];
            let $initials = $name.match(/\b\w/g) || [];
            $initials = (
              ($initials.shift() || '') + ($initials.pop() || '')
            ).toUpperCase();
            const $output = `<span class="avatar-initial rounded-circle bg-label-${$state}">${$initials}</span>`;

            // Creates full output for row
            const $row_output = `<div class="d-flex justify-content-start align-items-center user-name"><div class="avatar-wrapper"><div class="avatar avatar-sm me-3">${$output}</div></div><div class="d-flex flex-column"><a href="${userView}" class="text-body text-truncate"><span class="fw-medium">${$name}</span></a></div></div>`;
            return $row_output;
          },
        },
        {
          // User email
          targets: 3,
          render: (data, type, full, meta) => {
            const $email = full.email;

            return `<span class="user-email">${$email}</span>`;
          },
        },
        {
          // email verify
          targets: 4,
          className: 'text-center',
          render: (data, type, full, meta) => {
            const $verified = full.email_verified_at;
            return `${
              $verified
                ? '<i class="ti fs-4 ti-shield-check text-success"></i>'
                : '<i class="ti fs-4 ti-shield-x text-danger" ></i>'
            }`;
          },
        },
        {
          // Actions
          targets: -1,
          title: 'Actions',
          searchable: false,
          orderable: false,
          render: (data, type, full, meta) =>
            `<div class="d-inline-block text-nowrap"><button class="btn btn-sm btn-icon edit-record" data-id="${full.id}" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAddUser"><i class="ti ti-edit"></i></button><button class="btn btn-sm btn-icon delete-record" data-id="${full.id}"><i class="ti ti-trash"></i></button><button class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="ti ti-dots-vertical"></i></button><div class="dropdown-menu dropdown-menu-end m-0"><a href="${userView}" class="dropdown-item">View</a><a href="javascript:;" class="dropdown-item">Suspend</a></div></div>`,
        },
      ],
      order: [[2, 'desc']],
      dom:
        '<"row mx-2"' +
        '<"col-md-2"<"me-3"l>>' +
        '<"col-md-10"<"dt-action-buttons text-xl-end text-lg-start text-md-end text-start d-flex align-items-center justify-content-end flex-md-row flex-column mb-3 mb-md-0"fB>>' +
        '>t' +
        '<"row mx-2"' +
        '<"col-sm-12 col-md-6"i>' +
        '<"col-sm-12 col-md-6"p>' +
        '>',
      language: {
        sLengthMenu: '_MENU_',
        search: '',
        searchPlaceholder: 'Search..',
      },
      // Buttons with Dropdown
      buttons: [
        {
          extend: 'collection',
          className:
            'btn btn-label-primary dropdown-toggle mx-3 waves-effect waves-light',
          text: '<i class="ti ti-logout rotate-n90 me-2"></i>Export',
          buttons: [
            {
              extend: 'print',
              title: 'Users',
              text: '<i class="ti ti-printer me-2" ></i>Print',
              className: 'dropdown-item',
              exportOptions: {
                columns: [2, 3],
                // prevent avatar to be print
                format: {
                  body: (inner, coldex, rowdex) => {
                    if (inner.length <= 0) {
                      return inner;
                    }
                    const el = $.parseHTML(inner);
                    let result = '';
                    $.each(el, (index, item) => {
                      if (item.classList?.contains('user-name')) {
                        result = result + item.lastChild.textContent;
                      } else {
                        result = result + item.innerText;
                      }
                    });
                    return result;
                  },
                },
              },
              customize: (win) => {
                //customize print view for dark
                $(win.document.body)
                  .css('color', config.colors.headingColor)
                  .css('border-color', config.colors.borderColor)
                  .css('background-color', config.colors.body);
                $(win.document.body)
                  .find('table')
                  .addClass('compact')
                  .css('color', 'inherit')
                  .css('border-color', 'inherit')
                  .css('background-color', 'inherit');
              },
            },
            {
              extend: 'csv',
              title: 'Users',
              text: '<i class="ti ti-file-text me-2" ></i>Csv',
              className: 'dropdown-item',
              exportOptions: {
                columns: [2, 3],
                // prevent avatar to be print
                format: {
                  body: (inner, coldex, rowdex) => {
                    if (inner.length <= 0) {
                      return inner;
                    }
                    const el = $.parseHTML(inner);
                    let result = '';
                    $.each(el, (index, item) => {
                      if (item.classList.contains('user-name')) {
                        result = result + item.lastChild.textContent;
                      } else {
                        result = result + item.innerText;
                      }
                    });
                    return result;
                  },
                },
              },
            },
            {
              extend: 'excel',
              title: 'Users',
              text: '<i class="ti ti-file-spreadsheet me-2"></i>Excel',
              className: 'dropdown-item',
              exportOptions: {
                columns: [2, 3],
                // prevent avatar to be display
                format: {
                  body: (inner, coldex, rowdex) => {
                    if (inner.length <= 0) {
                      return inner;
                    }
                    const el = $.parseHTML(inner);
                    let result = '';
                    $.each(el, (index, item) => {
                      if (item.classList.contains('user-name')) {
                        result = result + item.lastChild.textContent;
                      } else {
                        result = result + item.innerText;
                      }
                    });
                    return result;
                  },
                },
              },
            },
            {
              extend: 'pdf',
              title: 'Users',
              text: '<i class="ti ti-file-text me-2"></i>Pdf',
              className: 'dropdown-item',
              exportOptions: {
                columns: [2, 3],
                // prevent avatar to be display
                format: {
                  body: (inner, coldex, rowdex) => {
                    if (inner.length <= 0) {
                      return inner;
                    }
                    const el = $.parseHTML(inner);
                    let result = '';
                    $.each(el, (index, item) => {
                      if (item.classList.contains('user-name')) {
                        result = result + item.lastChild.textContent;
                      } else {
                        result = result + item.innerText;
                      }
                    });
                    return result;
                  },
                },
              },
            },
            {
              extend: 'copy',
              title: 'Users',
              text: '<i class="ti ti-copy me-1" ></i>Copy',
              className: 'dropdown-item',
              exportOptions: {
                columns: [2, 3],
                // prevent avatar to be copy
                format: {
                  body: (inner, coldex, rowdex) => {
                    if (inner.length <= 0) {
                      return inner;
                    }
                    const el = $.parseHTML(inner);
                    let result = '';
                    $.each(el, (index, item) => {
                      if (item.classList.contains('user-name')) {
                        result = result + item.lastChild.textContent;
                      } else {
                        result = result + item.innerText;
                      }
                    });
                    return result;
                  },
                },
              },
            },
          ],
        },
        {
          text: '<i class="ti ti-plus me-0 me-sm-1"></i><span class="d-none d-sm-inline-block">Add New User</span>',
          className: 'add-new btn btn-primary waves-effect waves-light',
          attr: {
            'data-bs-toggle': 'offcanvas',
            'data-bs-target': '#offcanvasAddUser',
          },
        },
      ],
      // For responsive popup
      responsive: {
        details: {
          display: $.fn.dataTable.Responsive.display.modal({
            header: (row) => {
              const data = row.data();
              return `Details of ${data.name}`;
            },
          }),
          type: 'column',
          renderer: (api, rowIdx, columns) => {
            const data = $.map(columns, (col, i) =>
              col.title !== '' // ? Do not show row in modal popup if title is blank (for check box)
                ? `<tr data-dt-row="${col.rowIndex}" data-dt-column="${col.columnIndex}"><td>${col.title}:</td> <td>${col.data}</td></tr>`
                : '',
            ).join('');

            return data
              ? $('<table class="table"/><tbody />').append(data)
              : false;
          },
        },
      },
    });
  }

  // Delete Record
  $(document).on('click', '.delete-record', function () {
    const user_id = $(this).data('id');
    const dtrModal = $('.dtr-bs-modal.show');

    // hide responsive modal in small screen
    if (dtrModal.length) {
      dtrModal.modal('hide');
    }

    // sweetalert for confirmation of delete
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      customClass: {
        confirmButton: 'btn btn-primary me-3',
        cancelButton: 'btn btn-label-secondary',
      },
      buttonsStyling: false,
    }).then((result) => {
      if (result.value) {
        // delete the data
        $.ajax({
          type: 'DELETE',
          url: `${baseUrl}user-list/${user_id}`,
          success: () => {
            dt_user.draw();
          },
          error: (error) => {
            console.log(error);
          },
        });

        // success sweetalert
        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: 'The user has been deleted!',
          customClass: {
            confirmButton: 'btn btn-success',
          },
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: 'Cancelled',
          text: 'The User is not deleted!',
          icon: 'error',
          customClass: {
            confirmButton: 'btn btn-success',
          },
        });
      }
    });
  });

  // edit record
  $(document).on('click', '.edit-record', function () {
    const user_id = $(this).data('id');
    const dtrModal = $('.dtr-bs-modal.show');

    // hide responsive modal in small screen
    if (dtrModal.length) {
      dtrModal.modal('hide');
    }

    // changing the title of offcanvas
    $('#offcanvasAddUserLabel').html('Edit User');

    // get data
    $.get(`${baseUrl}user-list\/${user_id}\/edit`, (data) => {
      $('#user_id').val(data.id);
      $('#add-user-fullname').val(data.name);
      $('#add-user-email').val(data.email);
    });
  });

  // changing the title
  $('.add-new').on('click', () => {
    $('#user_id').val(''); //reseting input field
    $('#offcanvasAddUserLabel').html('Add User');
  });

  // Filter form control to default size
  // ? setTimeout used for multilingual table initialization
  setTimeout(() => {
    $('.dataTables_filter .form-control').removeClass('form-control-sm');
    $('.dataTables_length .form-select').removeClass('form-select-sm');
  }, 300);

  // validating form and updating user's data
  const addNewUserForm = document.getElementById('addNewUserForm');

  // user form validation
  const fv = FormValidation.formValidation(addNewUserForm, {
    fields: {
      name: {
        validators: {
          notEmpty: {
            message: 'Please enter fullname',
          },
        },
      },
      email: {
        validators: {
          notEmpty: {
            message: 'Please enter your email',
          },
          emailAddress: {
            message: 'The value is not a valid email address',
          },
        },
      },
      userContact: {
        validators: {
          notEmpty: {
            message: 'Please enter your contact',
          },
        },
      },
      company: {
        validators: {
          notEmpty: {
            message: 'Please enter your company',
          },
        },
      },
    },
    plugins: {
      trigger: new FormValidation.plugins.Trigger(),
      bootstrap5: new FormValidation.plugins.Bootstrap5({
        // Use this for enabling/changing valid/invalid class
        eleValidClass: '',
        rowSelector: (field, ele) => {
          // field is the field name & ele is the field element
          return '.mb-3';
        },
      }),
      submitButton: new FormValidation.plugins.SubmitButton(),
      // Submit the form when all fields are valid
      // defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
      autoFocus: new FormValidation.plugins.AutoFocus(),
    },
  }).on('core.form.valid', () => {
    // adding or updating user when form successfully validate
    $.ajax({
      data: $('#addNewUserForm').serialize(),
      url: `${baseUrl}user-list`,
      type: 'POST',
      success: (status) => {
        dt_user.draw();
        offCanvasForm.offcanvas('hide');

        // sweetalert
        Swal.fire({
          icon: 'success',
          title: `Successfully ${status}!`,
          text: `User ${status} Successfully.`,
          customClass: {
            confirmButton: 'btn btn-success',
          },
        });
      },
      error: (err) => {
        offCanvasForm.offcanvas('hide');
        Swal.fire({
          title: 'Duplicate Entry!',
          text: 'Your email should be unique.',
          icon: 'error',
          customClass: {
            confirmButton: 'btn btn-success',
          },
        });
      },
    });
  });

  // clearing form data when offcanvas hidden
  offCanvasForm.on('hidden.bs.offcanvas', () => {
    fv.resetForm(true);
  });

  const phoneMaskList = document.querySelectorAll('.phone-mask');

  // Phone Number
  if (phoneMaskList) {
    for (const phoneMask of phoneMaskList) {
      new Cleave(phoneMask, {
        phone: true,
        phoneRegionCode: 'US',
      });
    }
  }
});
