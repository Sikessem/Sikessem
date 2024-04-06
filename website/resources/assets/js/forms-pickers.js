(() => {
  // Flat Picker
  // --------------------------------------------------------------------
  const flatpickrDate = document.querySelector("#flatpickr-date");
  const flatpickrTime = document.querySelector("#flatpickr-time");
  const flatpickrDateTime = document.querySelector("#flatpickr-datetime");
  const flatpickrMulti = document.querySelector("#flatpickr-multi");
  const flatpickrRange = document.querySelector("#flatpickr-range");
  const flatpickrInline = document.querySelector("#flatpickr-inline");
  const flatpickrFriendly = document.querySelector("#flatpickr-human-friendly");
  const flatpickrDisabledRange = document.querySelector(
    "#flatpickr-disabled-range",
  );

  // Date
  if (flatpickrDate) {
    flatpickrDate.flatpickr({
      monthSelectorType: "static",
    });
  }

  // Time
  if (flatpickrTime) {
    flatpickrTime.flatpickr({
      enableTime: true,
      noCalendar: true,
    });
  }

  // Datetime
  if (flatpickrDateTime) {
    flatpickrDateTime.flatpickr({
      enableTime: true,
      dateFormat: "Y-m-d H:i",
    });
  }

  // Multi Date Select
  if (flatpickrMulti) {
    flatpickrMulti.flatpickr({
      weekNumbers: true,
      enableTime: true,
      mode: "multiple",
      minDate: "today",
    });
  }

  // Range
  if (typeof flatpickrRange !== "undefined") {
    flatpickrRange.flatpickr({
      mode: "range",
    });
  }

  // Inline
  if (flatpickrInline) {
    flatpickrInline.flatpickr({
      inline: true,
      allowInput: false,
      monthSelectorType: "static",
    });
  }

  // Human Friendly
  if (flatpickrFriendly) {
    flatpickrFriendly.flatpickr({
      altInput: true,
      altFormat: "F j, Y",
      dateFormat: "Y-m-d",
    });
  }

  // Disabled Date Range
  if (flatpickrDisabledRange) {
    const fromDate = new Date(Date.now() - 3600 * 1000 * 48);
    const toDate = new Date(Date.now() + 3600 * 1000 * 48);

    flatpickrDisabledRange.flatpickr({
      dateFormat: "Y-m-d",
      disable: [
        {
          from: fromDate.toISOString().split("T")[0],
          to: toDate.toISOString().split("T")[0],
        },
      ],
    });
  }
})();

// * Pickers with jQuery dependency (jquery)
$(() => {
  // Bootstrap Datepicker
  // --------------------------------------------------------------------
  const bsDatepickerBasic = $("#bs-datepicker-basic");
  const bsDatepickerFormat = $("#bs-datepicker-format");
  const bsDatepickerRange = $("#bs-datepicker-daterange");
  const bsDatepickerDisabledDays = $("#bs-datepicker-disabled-days");
  const bsDatepickerMultidate = $("#bs-datepicker-multidate");
  const bsDatepickerOptions = $("#bs-datepicker-options");
  const bsDatepickerAutoclose = $("#bs-datepicker-autoclose");
  const bsDatepickerInlinedate = $("#bs-datepicker-inline");

  // Basic
  if (bsDatepickerBasic.length) {
    bsDatepickerBasic.datepicker({
      todayHighlight: true,
      orientation: isRtl ? "auto right" : "auto left",
    });
  }

  // Format
  if (bsDatepickerFormat.length) {
    bsDatepickerFormat.datepicker({
      todayHighlight: true,
      format: "dd/mm/yyyy",
      orientation: isRtl ? "auto right" : "auto left",
    });
  }

  // Range
  if (bsDatepickerRange.length) {
    bsDatepickerRange.datepicker({
      todayHighlight: true,
      orientation: isRtl ? "auto right" : "auto left",
    });
  }

  // Disabled Days
  if (bsDatepickerDisabledDays.length) {
    bsDatepickerDisabledDays.datepicker({
      todayHighlight: true,
      daysOfWeekDisabled: [0, 6],
      orientation: isRtl ? "auto right" : "auto left",
    });
  }

  // Multiple
  if (bsDatepickerMultidate.length) {
    bsDatepickerMultidate.datepicker({
      multidate: true,
      todayHighlight: true,
      orientation: isRtl ? "auto right" : "auto left",
    });
  }

  // Options
  if (bsDatepickerOptions.length) {
    bsDatepickerOptions.datepicker({
      calendarWeeks: true,
      clearBtn: true,
      todayHighlight: true,
      orientation: isRtl ? "auto left" : "auto right",
    });
  }

  // Auto close
  if (bsDatepickerAutoclose.length) {
    bsDatepickerAutoclose.datepicker({
      todayHighlight: true,
      autoclose: true,
      orientation: isRtl ? "auto right" : "auto left",
    });
  }

  // Inline picker
  if (bsDatepickerInlinedate.length) {
    bsDatepickerInlinedate.datepicker({
      todayHighlight: true,
    });
  }

  // Bootstrap Daterange Picker
  // --------------------------------------------------------------------
  const bsRangePickerBasic = $("#bs-rangepicker-basic");
  const bsRangePickerSingle = $("#bs-rangepicker-single");
  const bsRangePickerTime = $("#bs-rangepicker-time");
  const bsRangePickerRange = $("#bs-rangepicker-range");
  const bsRangePickerWeekNum = $("#bs-rangepicker-week-num");
  const bsRangePickerDropdown = $("#bs-rangepicker-dropdown");
  const bsRangePickerCancelBtn = document.getElementsByClassName("cancelBtn");

  // Basic
  if (bsRangePickerBasic.length) {
    bsRangePickerBasic.daterangepicker({
      opens: isRtl ? "left" : "right",
    });
  }

  // Single
  if (bsRangePickerSingle.length) {
    bsRangePickerSingle.daterangepicker({
      singleDatePicker: true,
      opens: isRtl ? "left" : "right",
    });
  }

  // Time & Date
  if (bsRangePickerTime.length) {
    bsRangePickerTime.daterangepicker({
      timePicker: true,
      timePickerIncrement: 30,
      locale: {
        format: "MM/DD/YYYY h:mm A",
      },
      opens: isRtl ? "left" : "right",
    });
  }

  if (bsRangePickerRange.length) {
    bsRangePickerRange.daterangepicker({
      ranges: {
        Today: [moment(), moment()],
        Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
        "Last 7 Days": [moment().subtract(6, "days"), moment()],
        "Last 30 Days": [moment().subtract(29, "days"), moment()],
        "This Month": [moment().startOf("month"), moment().endOf("month")],
        "Last Month": [
          moment().subtract(1, "month").startOf("month"),
          moment().subtract(1, "month").endOf("month"),
        ],
      },
      opens: isRtl ? "left" : "right",
    });
  }

  // Week Numbers
  if (bsRangePickerWeekNum.length) {
    bsRangePickerWeekNum.daterangepicker({
      showWeekNumbers: true,
      opens: isRtl ? "left" : "right",
    });
  }
  // Dropdown
  if (bsRangePickerDropdown.length) {
    bsRangePickerDropdown.daterangepicker({
      showDropdowns: true,
      opens: isRtl ? "left" : "right",
    });
  }

  // Adding btn-label-secondary class in cancel btn
  for (let i = 0; i < bsRangePickerCancelBtn.length; i++) {
    bsRangePickerCancelBtn[i].classList.remove("btn-default");
    bsRangePickerCancelBtn[i].classList.add("btn-label-primary");
  }

  // jQuery Timepicker
  // --------------------------------------------------------------------
  const basicTimepicker = $("#timepicker-basic");
  const minMaxTimepicker = $("#timepicker-min-max");
  const disabledTimepicker = $("#timepicker-disabled-times");
  const formatTimepicker = $("#timepicker-format");
  const stepTimepicker = $("#timepicker-step");
  const altHourTimepicker = $("#timepicker-24hours");

  // Basic
  if (basicTimepicker.length) {
    basicTimepicker.timepicker({
      orientation: isRtl ? "r" : "l",
    });
  }

  // Min & Max
  if (minMaxTimepicker.length) {
    minMaxTimepicker.timepicker({
      minTime: "2:00pm",
      maxTime: "7:00pm",
      showDuration: true,
      orientation: isRtl ? "r" : "l",
    });
  }

  // Disabled Picker
  if (disabledTimepicker.length) {
    disabledTimepicker.timepicker({
      disableTimeRanges: [
        ["12am", "3am"],
        ["4am", "4:30am"],
      ],
      orientation: isRtl ? "r" : "l",
    });
  }

  // Format Picker
  if (formatTimepicker.length) {
    formatTimepicker.timepicker({
      timeFormat: "H:i:s",
      orientation: isRtl ? "r" : "l",
    });
  }

  // Steps Picker
  if (stepTimepicker.length) {
    stepTimepicker.timepicker({
      step: 15,
      orientation: isRtl ? "r" : "l",
    });
  }

  // 24 Hours Format
  if (altHourTimepicker.length) {
    altHourTimepicker.timepicker({
      show: "24:00",
      timeFormat: "H:i:s",
      orientation: isRtl ? "r" : "l",
    });
  }
});

// color picker (pickr)
// --------------------------------------------------------------------
(() => {
  const classicPicker = document.querySelector("#color-picker-classic");
  const monolithPicker = document.querySelector("#color-picker-monolith");
  const nanoPicker = document.querySelector("#color-picker-nano");

  // classic
  if (classicPicker) {
    pickr.create({
      el: classicPicker,
      theme: "classic",
      default: "rgba(102, 108, 232, 1)",
      swatches: [
        "rgba(102, 108, 232, 1)",
        "rgba(40, 208, 148, 1)",
        "rgba(255, 73, 97, 1)",
        "rgba(255, 145, 73, 1)",
        "rgba(30, 159, 242, 1)",
      ],
      components: {
        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
          hex: true,
          rgba: true,
          hsla: true,
          hsva: true,
          cmyk: true,
          input: true,
          clear: true,
          save: true,
        },
      },
    });
  }

  // monolith
  if (monolithPicker) {
    pickr.create({
      el: monolithPicker,
      theme: "monolith",
      default: "rgba(40, 208, 148, 1)",
      swatches: [
        "rgba(102, 108, 232, 1)",
        "rgba(40, 208, 148, 1)",
        "rgba(255, 73, 97, 1)",
        "rgba(255, 145, 73, 1)",
        "rgba(30, 159, 242, 1)",
      ],
      components: {
        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
          hex: true,
          rgba: true,
          hsla: true,
          hsva: true,
          cmyk: true,
          input: true,
          clear: true,
          save: true,
        },
      },
    });
  }

  // nano
  if (nanoPicker) {
    pickr.create({
      el: nanoPicker,
      theme: "nano",
      default: "rgba(255, 73, 97, 1)",
      swatches: [
        "rgba(102, 108, 232, 1)",
        "rgba(40, 208, 148, 1)",
        "rgba(255, 73, 97, 1)",
        "rgba(255, 145, 73, 1)",
        "rgba(30, 159, 242, 1)",
      ],
      components: {
        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
          hex: true,
          rgba: true,
          hsla: true,
          hsva: true,
          cmyk: true,
          input: true,
          clear: true,
          save: true,
        },
      },
    });
  }
})();
