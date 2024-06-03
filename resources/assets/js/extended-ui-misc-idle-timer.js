$(() => {
  const timerDoc = $("#document-Status");
  const btnPause = $("#document-Pause");
  const btnResume = $("#document-Resume");
  const btnElapsed = $("#document-Elapsed");
  const btnDestroy = $("#document-Destroy");
  const btnInit = $("#document-Init");

  // Document 5 Sec Timeout
  // --------------------------------------------------------------------
  if (timerDoc.length) {
    const docTimeout = 5000;
    // idle/active events
    $(document).on("idle.idleTimer", (event, elem, obj) => {
      timerDoc
        .val((i, value) => `${value}Idle @ ${moment().format()} \n`)
        .removeClass("alert-success")
        .addClass("alert-warning");
    });
    $(document).on("active.idleTimer", (event, elem, obj, e) => {
      timerDoc
        .val(
          (i, value) =>
            `${value}Active [${e.type}] [${
              e.target.nodeName
            }] @ ${moment().format()} \n`,
        )
        .addClass("alert-success")
        .removeClass("alert-warning");
    });

    // button events
    btnPause.on("click", function () {
      // Pause
      $(document).idleTimer("pause");
      timerDoc.val((i, value) => `${value}Paused @ ${moment().format()} \n`);
      $(this).blur();
      return false;
    });
    btnResume.on("click", function () {
      // Resume
      $(document).idleTimer("resume");
      timerDoc.val((i, value) => `${value}Resumed @ ${moment().format()} \n`);
      $(this).blur();
      return false;
    });
    btnElapsed.on("click", function () {
      // Elapsed
      timerDoc.val(
        (i, value) =>
          `${value}Elapsed (since becoming active): ${$(document).idleTimer(
            "getElapsedTime",
          )} \n`,
      );
      $(this).blur();
      return false;
    });
    btnDestroy.on("click", function () {
      // Destroy
      $(document).idleTimer("destroy");
      timerDoc
        .val((i, value) => `${value}Destroyed: @ ${moment().format()} \n`)
        .removeClass("alert-success")
        .removeClass("alert-warning");
      $(this).blur();
      return false;
    });
    btnInit.on("click", function () {
      // Initialize
      // show init with object
      $(document).idleTimer({
        timeout: docTimeout,
      });
      timerDoc.val((i, value) => `${value}Init: @ ${moment().format()} \n`);

      // Apply classes for default state
      if ($(document).idleTimer("isIdle")) {
        timerDoc.removeClass("alert-success").addClass("alert-warning");
      } else {
        timerDoc.addClass("alert-success").removeClass("alert-warning");
      }
      $(this).blur();
      return false;
    });

    // Clear old statuses
    timerDoc.val("");

    // Start timeout, passing no options
    $(document).idleTimer(docTimeout);

    // style based on state
    if ($(document).idleTimer("isIdle")) {
      timerDoc
        .val(
          (i, value) => `${value}Initial Idle State @ ${moment().format()} \n`,
        )
        .removeClass("alert-success")
        .addClass("alert-warning");
    } else {
      timerDoc
        .val(
          (i, value) =>
            `${value}Initial Active State @ ${moment().format()} \n`,
        )
        .addClass("alert-success")
        .removeClass("alert-warning");
    }
  }

  // Element 3 Sec Timeout
  // --------------------------------------------------------------------
  const elementTimer = $("#element-Status");
  const btnReset = $("#element-Reset");
  const btnRemaining = $("#element-Remaining");
  const btnLastActive = $("#element-LastActive");
  const btnState = $("#element-State");
  if (elementTimer.length) {
    const elTimeout = 3000;
    // idle/active events
    elementTimer.on("idle.idleTimer", (event, elem, obj) => {
      event.stopPropagation();

      elementTimer
        .val((i, value) => `${value}Idle @ ${moment().format()} \n`)
        .removeClass("alert-success")
        .addClass("alert-warning");
    });
    elementTimer.on("active.idleTimer", (event) => {
      event.stopPropagation();

      elementTimer
        .val((i, value) => `${value}Active @ ${moment().format()} \n`)
        .addClass("alert-success")
        .removeClass("alert-warning");
    });

    // button events
    btnReset.on("click", function () {
      // Reset
      elementTimer
        .idleTimer("reset")
        .val((i, value) => `${value}Reset @ ${moment().format()} \n`);

      // classes for default state
      if ($("#element-Status").idleTimer("isIdle")) {
        elementTimer.removeClass("alert-success").addClass("alert-warning");
      } else {
        elementTimer.addClass("alert-success").removeClass("alert-warning");
      }
      $(this).blur();
      return false;
    });
    btnRemaining.on("click", function () {
      // Remaining
      elementTimer.val(
        (i, value) =>
          `${value}Remaining: ${elementTimer.idleTimer("getRemainingTime")} \n`,
      );
      $(this).blur();
      return false;
    });
    btnLastActive.on("click", function () {
      // Last Active
      elementTimer.val(
        (i, value) =>
          `${value}LastActive: ${elementTimer.idleTimer(
            "getLastActiveTime",
          )} \n`,
      );
      $(this).blur();
      return false;
    });
    btnState.on("click", function () {
      // State
      elementTimer.val(
        (i, value) =>
          `${value}State: ${
            $("#element-Status").idleTimer("isIdle") ? "idle" : "active"
          } \n`,
      );
      $(this).blur();
      return false;
    });

    // Clear value if cached & start time
    elementTimer.val("").idleTimer(elTimeout);

    // show initial state
    if (elementTimer.idleTimer("isIdle")) {
      elementTimer
        .val((i, value) => `${value}Initial Idle @ ${moment().format()} \n`)
        .removeClass("alert-success")
        .addClass("alert-warning");
    } else {
      elementTimer
        .val((i, value) => `${value}Initial Active @ ${moment().format()} \n`)
        .addClass("alert-success")
        .removeClass("alert-warning");
    }
  }
});
