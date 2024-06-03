let direction = "ltr";

if (isRtl) {
  direction = "rtl";
}

document.addEventListener("DOMContentLoaded", () => {
  (() => {
    const calendarEl = document.getElementById("calendar");
    const appCalendarSidebar = document.querySelector(".app-calendar-sidebar");
    const addEventSidebar = document.getElementById("addEventSidebar");
    const appOverlay = document.querySelector(".app-overlay");
    const calendarsColor = {
      Business: "primary",
      Holiday: "success",
      Personal: "danger",
      Family: "warning",
      ETC: "info",
    };
    const offcanvasTitle = document.querySelector(".offcanvas-title");
    const btnToggleSidebar = document.querySelector(".btn-toggle-sidebar");
    const btnSubmit = document.querySelector('button[type="submit"]');
    const btnDeleteEvent = document.querySelector(".btn-delete-event");
    const btnCancel = document.querySelector(".btn-cancel");
    const eventTitle = document.querySelector("#eventTitle");
    const eventStartDate = document.querySelector("#eventStartDate");
    const eventEndDate = document.querySelector("#eventEndDate");
    const eventUrl = document.querySelector("#eventURL");
    const eventLabel = $("#eventLabel"); // ! Using jquery vars due to select2 jQuery dependency
    const eventGuests = $("#eventGuests"); // ! Using jquery vars due to select2 jQuery dependency
    const eventLocation = document.querySelector("#eventLocation");
    const eventDescription = document.querySelector("#eventDescription");
    const allDaySwitch = document.querySelector(".allDay-switch");
    const selectAll = document.querySelector(".select-all");
    const filterInput = [].slice.call(
      document.querySelectorAll(".input-filter"),
    );
    const inlineCalendar = document.querySelector(".inline-calendar");

    let eventToUpdate;
    let currentEvents = events; // Assign app-calendar-events.js file events (assume events from API) to currentEvents (browser store/object) to manage and update calender events
    let isFormValid = false;
    let inlineCalInstance;

    // Init event Offcanvas
    const bsAddEventSidebar = new bootstrap.Offcanvas(addEventSidebar);

    //! TODO: Update Event label and guest code to JS once select removes jQuery dependency
    // Event Label (select2)
    if (eventLabel.length) {
      function renderBadges(option) {
        if (!option.id) {
          return option.text;
        }
        const $badge = `<span class='badge badge-dot bg-${$(
          option.element,
        ).data("label")} me-2'> </span>${option.text}`;

        return $badge;
      }
      eventLabel.wrap('<div class="position-relative"></div>').select2({
        placeholder: "Select value",
        dropdownParent: eventLabel.parent(),
        templateResult: renderBadges,
        templateSelection: renderBadges,
        minimumResultsForSearch: -1,
        escapeMarkup: (es) => es,
      });
    }

    // Event Guests (select2)
    if (eventGuests.length) {
      function renderGuestAvatar(option) {
        if (!option.id) {
          return option.text;
        }
        const $avatar = `<div class='d-flex flex-wrap align-items-center'><div class='avatar avatar-xs me-2'><img src='${assetsPath}img/avatars/${$(
          option.element,
        ).data("avatar")}' alt='avatar' class='rounded-circle' /></div>${
          option.text
        }</div>`;

        return $avatar;
      }
      eventGuests.wrap('<div class="position-relative"></div>').select2({
        placeholder: "Select value",
        dropdownParent: eventGuests.parent(),
        closeOnSelect: false,
        templateResult: renderGuestAvatar,
        templateSelection: renderGuestAvatar,
        escapeMarkup: (es) => es,
      });
    }

    // Event start (flatpicker)
    if (eventStartDate) {
      const start = eventStartDate.flatpickr({
        enableTime: true,
        altFormat: "Y-m-dTH:i:S",
        onReady: (selectedDates, dateStr, instance) => {
          if (instance.isMobile) {
            instance.mobileInput.setAttribute("step", null);
          }
        },
      });
    }

    // Event end (flatpicker)
    if (eventEndDate) {
      const end = eventEndDate.flatpickr({
        enableTime: true,
        altFormat: "Y-m-dTH:i:S",
        onReady: (selectedDates, dateStr, instance) => {
          if (instance.isMobile) {
            instance.mobileInput.setAttribute("step", null);
          }
        },
      });
    }

    // Inline sidebar calendar (flatpicker)
    if (inlineCalendar) {
      inlineCalInstance = inlineCalendar.flatpickr({
        monthSelectorType: "static",
        inline: true,
      });
    }

    // Event click function
    function eventClick(info) {
      eventToUpdate = info.event;
      if (eventToUpdate.url) {
        info.jsEvent.preventDefault();
        window.open(eventToUpdate.url, "_blank");
      }
      bsAddEventSidebar.show();
      // For update event set offcanvas title text: Update Event
      if (offcanvasTitle) {
        offcanvasTitle.innerHTML = "Update Event";
      }
      btnSubmit.innerHTML = "Update";
      btnSubmit.classList.add("btn-update-event");
      btnSubmit.classList.remove("btn-add-event");
      btnDeleteEvent.classList.remove("d-none");

      eventTitle.value = eventToUpdate.title;
      start.setDate(eventToUpdate.start, true, "Y-m-d");
      eventToUpdate.allDay === true
        ? (allDaySwitch.checked = true)
        : (allDaySwitch.checked = false);
      eventToUpdate.end !== null
        ? end.setDate(eventToUpdate.end, true, "Y-m-d")
        : end.setDate(eventToUpdate.start, true, "Y-m-d");
      eventLabel.val(eventToUpdate.extendedProps.calendar).trigger("change");
      eventToUpdate.extendedProps.location !== undefined
        ? (eventLocation.value = eventToUpdate.extendedProps.location)
        : null;
      eventToUpdate.extendedProps.guests !== undefined
        ? eventGuests.val(eventToUpdate.extendedProps.guests).trigger("change")
        : null;
      eventToUpdate.extendedProps.description !== undefined
        ? (eventDescription.value = eventToUpdate.extendedProps.description)
        : null;

      // // Call removeEvent function
      // btnDeleteEvent.addEventListener('click', e => {
      //   removeEvent(parseInt(eventToUpdate.id));
      //   // eventToUpdate.remove();
      //   bsAddEventSidebar.hide();
      // });
    }

    // Modify sidebar toggler
    function modifyToggler() {
      const fcSidebarToggleButton = document.querySelector(
        ".fc-sidebarToggle-button",
      );
      fcSidebarToggleButton.classList.remove("fc-button-primary");
      fcSidebarToggleButton.classList.add(
        "d-lg-none",
        "d-inline-block",
        "ps-0",
      );
      while (fcSidebarToggleButton.firstChild) {
        fcSidebarToggleButton.firstChild.remove();
      }
      fcSidebarToggleButton.setAttribute("data-bs-toggle", "sidebar");
      fcSidebarToggleButton.setAttribute("data-overlay", "");
      fcSidebarToggleButton.setAttribute(
        "data-target",
        "#app-calendar-sidebar",
      );
      fcSidebarToggleButton.insertAdjacentHTML(
        "beforeend",
        '<i class="ti ti-menu-2 ti-sm text-heading"></i>',
      );
    }

    // Filter events by calender
    function selectedCalendars() {
      const selected = [];
      const filterInputChecked = [].slice.call(
        document.querySelectorAll(".input-filter:checked"),
      );

      filterInputChecked.forEach((item) => {
        selected.push(item.getAttribute("data-value"));
      });

      return selected;
    }

    // --------------------------------------------------------------------------------------------------
    // AXIOS: fetchEvents
    // * This will be called by fullCalendar to fetch events. Also this can be used to refetch events.
    // --------------------------------------------------------------------------------------------------
    function fetchEvents(info, successCallback) {
      // Fetch Events from API endpoint reference
      /* $.ajax(
        {
          url: '../../../app-assets/data/app-calendar-events.js',
          type: 'GET',
          success: function (result) {
            // Get requested calendars as Array
            var calendars = selectedCalendars();

            return [result.events.filter(event => calendars.includes(event.extendedProps.calendar))];
          },
          error: function (error) {
            console.log(error);
          }
        }
      ); */

      const calendars = selectedCalendars();
      // We are reading event object from app-calendar-events.js file directly by including that file above app-calendar file.
      // You should make an API call, look into above commented API call for reference
      const selectedEvents = currentEvents.filter((event) => {
        // console.log(event.extendedProps.calendar.toLowerCase());
        return calendars.includes(event.extendedProps.calendar.toLowerCase());
      });
      // if (selectedEvents.length > 0) {
      successCallback(selectedEvents);
      // }
    }

    // Init FullCalendar
    // ------------------------------------------------
    const calendar = new Calendar(calendarEl, {
      initialView: "dayGridMonth",
      events: fetchEvents,
      plugins: [dayGridPlugin, interactionPlugin, listPlugin, timegridPlugin],
      editable: true,
      dragScroll: true,
      dayMaxEvents: 2,
      eventResizableFromStart: true,
      customButtons: {
        sidebarToggle: {
          text: "Sidebar",
        },
      },
      headerToolbar: {
        start: "sidebarToggle, prev,next, title",
        end: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
      },
      direction: direction,
      initialDate: new Date(),
      navLinks: true, // can click day/week names to navigate views
      eventClassNames: ({ event: calendarEvent }) => {
        const colorName =
          calendarsColor[calendarEvent._def.extendedProps.calendar];
        // Background Color
        return [`fc-event-${colorName}`];
      },
      dateClick: (info) => {
        const date = moment(info.date).format("YYYY-MM-DD");
        resetValues();
        bsAddEventSidebar.show();

        // For new event set offcanvas title text: Add Event
        if (offcanvasTitle) {
          offcanvasTitle.innerHTML = "Add Event";
        }
        btnSubmit.innerHTML = "Add";
        btnSubmit.classList.remove("btn-update-event");
        btnSubmit.classList.add("btn-add-event");
        btnDeleteEvent.classList.add("d-none");
        eventStartDate.value = date;
        eventEndDate.value = date;
      },
      eventClick: (info) => {
        eventClick(info);
      },
      datesSet: () => {
        modifyToggler();
      },
      viewDidMount: () => {
        modifyToggler();
      },
    });

    // Render calendar
    calendar.render();
    // Modify sidebar toggler
    modifyToggler();

    const eventForm = document.getElementById("eventForm");
    const fv = FormValidation.formValidation(eventForm, {
      fields: {
        eventTitle: {
          validators: {
            notEmpty: {
              message: "Please enter event title ",
            },
          },
        },
        eventStartDate: {
          validators: {
            notEmpty: {
              message: "Please enter start date ",
            },
          },
        },
        eventEndDate: {
          validators: {
            notEmpty: {
              message: "Please enter end date ",
            },
          },
        },
      },
      plugins: {
        trigger: new FormValidation.plugins.Trigger(),
        bootstrap5: new FormValidation.plugins.Bootstrap5({
          // Use this for enabling/changing valid/invalid class
          eleValidClass: "",
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
    })
      .on("core.form.valid", () => {
        // Jump to the next step when all fields in the current step are valid
        isFormValid = true;
      })
      .on("core.form.invalid", () => {
        // if fields are invalid
        isFormValid = false;
      });

    // Sidebar Toggle Btn
    if (btnToggleSidebar) {
      btnToggleSidebar.addEventListener("click", (e) => {
        btnCancel.classList.remove("d-none");
      });
    }

    // Add Event
    // ------------------------------------------------
    function addEvent(eventData) {
      // ? Add new event data to current events object and refetch it to display on calender
      // ? You can write below code to AJAX call success response

      currentEvents.push(eventData);
      calendar.refetchEvents();

      // ? To add event directly to calender (won't update currentEvents object)
      // calendar.addEvent(eventData);
    }

    // Update Event
    // ------------------------------------------------
    function updateEvent(eventData) {
      // ? Update existing event data to current events object and refetch it to display on calender
      // ? You can write below code to AJAX call success response
      eventData.id = Number.parseInt(eventData.id);
      currentEvents[currentEvents.findIndex((el) => el.id === eventData.id)] =
        eventData; // Update event by id
      calendar.refetchEvents();

      // ? To update event directly to calender (won't update currentEvents object)
      // let propsToUpdate = ['id', 'title', 'url'];
      // let extendedPropsToUpdate = ['calendar', 'guests', 'location', 'description'];

      // updateEventInCalendar(eventData, propsToUpdate, extendedPropsToUpdate);
    }

    // Remove Event
    // ------------------------------------------------

    function removeEvent(eventId) {
      // ? Delete existing event data to current events object and refetch it to display on calender
      // ? You can write below code to AJAX call success response
      currentEvents = currentEvents.filter((event) => event.id !== eventId);
      calendar.refetchEvents();

      // ? To delete event directly to calender (won't update currentEvents object)
      // removeEventInCalendar(eventId);
    }

    // (Update Event In Calendar (UI Only)
    // ------------------------------------------------
    const updateEventInCalendar = (
      updatedEventData,
      propsToUpdate,
      extendedPropsToUpdate,
    ) => {
      const existingEvent = calendar.getEventById(updatedEventData.id);

      // --- Set event properties except date related ----- //
      // ? Docs: https://fullcalendar.io/docs/Event-setProp
      // dateRelatedProps => ['start', 'end', 'allDay']
      // eslint-disable-next-line no-plusplus
      for (let index = 0; index < propsToUpdate.length; index++) {
        const propName = propsToUpdate[index];
        existingEvent.setProp(propName, updatedEventData[propName]);
      }

      // --- Set date related props ----- //
      // ? Docs: https://fullcalendar.io/docs/Event-setDates
      existingEvent.setDates(updatedEventData.start, updatedEventData.end, {
        allDay: updatedEventData.allDay,
      });

      // --- Set event's extendedProps ----- //
      // ? Docs: https://fullcalendar.io/docs/Event-setExtendedProp
      // eslint-disable-next-line no-plusplus
      for (let index = 0; index < extendedPropsToUpdate.length; index++) {
        const propName = extendedPropsToUpdate[index];
        existingEvent.setExtendedProp(
          propName,
          updatedEventData.extendedProps[propName],
        );
      }
    };

    // Remove Event In Calendar (UI Only)
    // ------------------------------------------------
    function removeEventInCalendar(eventId) {
      calendar.getEventById(eventId).remove();
    }

    // Add new event
    // ------------------------------------------------
    btnSubmit.addEventListener("click", (e) => {
      if (btnSubmit.classList.contains("btn-add-event")) {
        if (isFormValid) {
          const newEvent = {
            id: calendar.getEvents().length + 1,
            title: eventTitle.value,
            start: eventStartDate.value,
            end: eventEndDate.value,
            startStr: eventStartDate.value,
            endStr: eventEndDate.value,
            display: "block",
            extendedProps: {
              location: eventLocation.value,
              guests: eventGuests.val(),
              calendar: eventLabel.val(),
              description: eventDescription.value,
            },
          };
          if (eventUrl.value) {
            newEvent.url = eventUrl.value;
          }
          if (allDaySwitch.checked) {
            newEvent.allDay = true;
          }
          addEvent(newEvent);
          bsAddEventSidebar.hide();
        }
      } else {
        // Update event
        // ------------------------------------------------
        if (isFormValid) {
          const eventData = {
            id: eventToUpdate.id,
            title: eventTitle.value,
            start: eventStartDate.value,
            end: eventEndDate.value,
            url: eventUrl.value,
            extendedProps: {
              location: eventLocation.value,
              guests: eventGuests.val(),
              calendar: eventLabel.val(),
              description: eventDescription.value,
            },
            display: "block",
            allDay: !!allDaySwitch.checked,
          };

          updateEvent(eventData);
          bsAddEventSidebar.hide();
        }
      }
    });

    // Call removeEvent function
    btnDeleteEvent.addEventListener("click", (e) => {
      removeEvent(Number.parseInt(eventToUpdate.id));
      // eventToUpdate.remove();
      bsAddEventSidebar.hide();
    });

    // Reset event form inputs values
    // ------------------------------------------------
    function resetValues() {
      eventEndDate.value = "";
      eventUrl.value = "";
      eventStartDate.value = "";
      eventTitle.value = "";
      eventLocation.value = "";
      allDaySwitch.checked = false;
      eventGuests.val("").trigger("change");
      eventDescription.value = "";
    }

    // When modal hides reset input values
    addEventSidebar.addEventListener("hidden.bs.offcanvas", () => {
      resetValues();
    });

    // Hide left sidebar if the right sidebar is open
    btnToggleSidebar.addEventListener("click", (e) => {
      if (offcanvasTitle) {
        offcanvasTitle.innerHTML = "Add Event";
      }
      btnSubmit.innerHTML = "Add";
      btnSubmit.classList.remove("btn-update-event");
      btnSubmit.classList.add("btn-add-event");
      btnDeleteEvent.classList.add("d-none");
      appCalendarSidebar.classList.remove("show");
      appOverlay.classList.remove("show");
    });

    // Calender filter functionality
    // ------------------------------------------------
    if (selectAll) {
      selectAll.addEventListener("click", (e) => {
        if (e.currentTarget.checked) {
          document
            .querySelectorAll(".input-filter")
            .forEach((c) => (c.checked = 1));
        } else {
          document
            .querySelectorAll(".input-filter")
            .forEach((c) => (c.checked = 0));
        }
        calendar.refetchEvents();
      });
    }

    if (filterInput) {
      filterInput.forEach((item) => {
        item.addEventListener("click", () => {
          document.querySelectorAll(".input-filter:checked").length <
          document.querySelectorAll(".input-filter").length
            ? (selectAll.checked = false)
            : (selectAll.checked = true);
          calendar.refetchEvents();
        });
      });
    }

    // Jump to date on sidebar(inline) calendar change
    inlineCalInstance.config.onChange.push((date) => {
      calendar.changeView(
        calendar.view.type,
        moment(date[0]).format("YYYY-MM-DD"),
      );
      modifyToggler();
      appCalendarSidebar.classList.remove("show");
      appOverlay.classList.remove("show");
    });
  })();
});
