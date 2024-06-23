// Datatable (jquery)
$(() => {
  // Variable declaration for table
  const dt_customer_order = $('.datatables-customer-order');
  const order_details = `${baseUrl}app/ecommerce/order/details`;
  const statusObj = {
    1: { title: 'Ready to  Pickup', class: 'bg-label-info' },
    2: { title: 'Dispatched', class: 'bg-label-warning' },
    3: { title: 'Delivered', class: 'bg-label-success' },
    4: { title: 'Out for delivery', class: 'bg-label-primary' },
  };

  // orders datatable
  if (dt_customer_order.length) {
    const dt_order = dt_customer_order.DataTable({
      ajax: `${assetsPath}json/ecommerce-customer-order.json`, // JSON file to add data
      columns: [
        // columns according to JSON
        { data: '' },
        { data: 'id' },
        { data: 'order' },
        { data: 'date' },
        { data: 'status' },
        { data: 'spent' },
        { data: ' ' },
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
          // order order number
          targets: 2,
          responsivePriority: 4,
          render: (data, type, full, meta) => {
            const $id = full.order;

            return `<a href='${order_details}' class='fw-medium'><span>#${$id}</span></a>`;
          },
        },
        {
          // date
          targets: 3,
          render: (data, type, full, meta) => {
            const date = new Date(full.date); // convert the date string to a Date object
            const formattedDate = date.toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            });
            return `<span class="text-nowrap">${formattedDate}</span > `;
          },
        },
        {
          // status
          targets: 4,
          render: (data, type, full, meta) => {
            const $status = full.status;

            return `<span class="badge ${statusObj[$status].class}" text-capitalized>${statusObj[$status].title}</span>`;
          },
        },
        {
          // spent
          targets: 5,
          render: (data, type, full, meta) => {
            const $spent = full.spent;

            return `<span >${$spent}</span>`;
          },
        },
        {
          // Actions
          targets: -1,
          title: 'Actions',
          searchable: false,
          orderable: false,
          render: (data, type, full, meta) =>
            '<div class="text-xxl-center">' +
            '<button class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="ti ti-dots-vertical"></i></button>' +
            '<div class="dropdown-menu dropdown-menu-end m-0">' +
            '<a href="javascript:;" class="dropdown-item">View</a>' +
            '<a href="javascript:;" class="dropdown-item  delete-record">Delete</a>' +
            '</div>' +
            '</div>',
        },
      ],
      order: [[2, 'desc']],
      dom:
        '<"card-header flex-column flex-md-row py-2"<"head-label text-center pt-2 pt-md-0">f' +
        '>t' +
        '<"row mx-4"' +
        '<"col-md-12 col-xl-6 text-center text-xl-start pb-2 pb-lg-0 pe-0"i>' +
        '<"col-md-12 col-xl-6 d-flex justify-content-center justify-content-xl-end"p>' +
        '>',
      lengthMenu: [6, 30, 50, 70, 100],
      language: {
        sLengthMenu: '_MENU_',
        search: '',
        searchPlaceholder: 'Search order',
      },
      // Buttons with Dropdown

      // For responsive popup
      responsive: {
        details: {
          display: $.fn.dataTable.Responsive.display.modal({
            header: (row) => {
              const data = row.data();
              return `Details of ${data.order}`;
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
    $('div.head-label').html(
      '<h5 class="card-title mb-0 text-nowrap">Orders placed</h5>',
    );
  }

  // Delete Record
  $('.datatables-orders tbody').on('click', '.delete-record', function () {
    dt_order.row($(this).parents('tr')).remove().draw();
  });

  // Filter form control to default size
  // ? setTimeout used for multilingual table initialization
  setTimeout(() => {
    $('.dataTables_filter .form-control').removeClass('form-control-sm');
    $('.dataTables_length .form-select').removeClass('form-select-sm');
  }, 300);
});

// Validation & Phone mask
