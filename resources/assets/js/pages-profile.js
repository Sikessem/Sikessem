$(() => {
  //  Projects table
  const dt_projects_table = $('.datatables-projects');

  if (dt_projects_table.length) {
    const dt_project = dt_projects_table.DataTable({
      ajax: `${assetsPath}json/user-profile.json`,
      columns: [
        { data: '' },
        { data: 'id' },
        { data: 'project_name' },
        { data: 'project_leader' },
        { data: '' },
        { data: 'status' },
        { data: '' },
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
          // For Checkboxes
          targets: 1,
          orderable: false,
          searchable: false,
          responsivePriority: 3,
          render: () =>
            '<input type="checkbox" class="dt-checkboxes form-check-input">',
          checkboxes: {
            selectAllRender: '<input type="checkbox" class="form-check-input">',
          },
        },
        {
          // Avatar image/badge, Name and post
          targets: 2,
          responsivePriority: 4,
          render: (data, type, full, meta) => {
            const $user_img = full.project_img;
            const $name = full.project_name;
            const $date = full.date;
            if ($user_img) {
              // For Avatar image
              const $output = `<img src="${assetsPath}img/icons/brands/${$user_img}" alt="Avatar" class="rounded-circle">`;
            } else {
              // For Avatar badge
              const stateNum = Math.floor(Math.random() * 6);
              const states = [
                'success',
                'danger',
                'warning',
                'info',
                'primary',
                'secondary',
              ];
              const $state = states[stateNum];
              const $name = full.project_name;
              let $initials = $name.match(/\b\w/g) || [];
              $initials = (
                ($initials.shift() || '') + ($initials.pop() || '')
              ).toUpperCase();
              $output = `<span class="avatar-initial rounded-circle bg-label-${$state}">${$initials}</span>`;
            }
            // Creates full output for row
            const $row_output = `<div class="d-flex justify-content-left align-items-center"><div class="avatar-wrapper"><div class="avatar me-2">${$output}</div></div><div class="d-flex flex-column"><span class="text-truncate fw-medium">${$name}</span><small class="text-truncate text-muted">${$date}</small></div></div>`;
            return $row_output;
          },
        },
        {
          // Teams
          targets: 4,
          orderable: false,
          searchable: false,
          render: (data, type, full, meta) => {
            const $team = full.team;
            let $output;
            $output = '<div class="d-flex align-items-center avatar-group">';
            for (let i = 0; i < $team.length; i++) {
              $output += `<div class="avatar avatar-sm"><img src="${assetsPath}img/avatars/${$team[i]}" alt="Avatar" class="rounded-circle pull-up"></div>`;
            }
            $output += '</div>';
            return $output;
          },
        },
        {
          // Label
          targets: -2,
          render: (data, type, full, meta) => {
            const $status_number = full.status;
            return `<div class="d-flex align-items-center"><div class="progress w-100 me-3" style="height: 6px;"><div class="progress-bar" style="width: ${$status_number}" aria-valuenow="${$status_number}" aria-valuemin="0" aria-valuemax="100"></div></div><span>${$status_number}</span></div>`;
          },
        },
        {
          // Actions
          targets: -1,
          searchable: false,
          title: 'Actions',
          orderable: false,
          render: (data, type, full, meta) =>
            '<div class="d-inline-block">' +
            '<a href="javascript:;" class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="ti ti-dots-vertical"></i></a>' +
            '<div class="dropdown-menu dropdown-menu-end m-0">' +
            '<a href="javascript:;" class="dropdown-item">Details</a>' +
            '<a href="javascript:;" class="dropdown-item">Archive</a>' +
            '<div class="dropdown-divider"></div>' +
            '<a href="javascript:;" class="dropdown-item text-danger delete-record">Delete</a>' +
            '</div>' +
            '</div>',
        },
      ],
      order: [[2, 'desc']],
      dom: '<"card-header pb-0 pt-sm-0"<"head-label text-center"><"d-flex justify-content-center justify-content-md-end"f>>t<"row mx-2"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
      displayLength: 7,
      lengthMenu: [7, 10, 25, 50, 75, 100],
      responsive: {
        details: {
          display: $.fn.dataTable.Responsive.display.modal({
            header: (row) => {
              const data = row.data();
              return `Details of "${data.project_name}" Project`;
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
    $('div.head-label').html('<h5 class="card-title mb-0">Projects</h5>');
  }

  // Filter form control to default size
  // ? setTimeout used for multilingual table initialization
  setTimeout(() => {
    $('.dataTables_filter .form-control').removeClass('form-control-sm');
    $('.dataTables_length .form-select').removeClass('form-select-sm');
  }, 300);
});
