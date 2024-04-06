(() => {
  const textarea = document.querySelector("#autosize-demo");
  const creditCard = document.querySelector(".credit-card-mask");
  const phoneMask = document.querySelector(".phone-number-mask");
  const dateMask = document.querySelector(".date-mask");
  const timeMask = document.querySelector(".time-mask");
  const numeralMask = document.querySelector(".numeral-mask");
  const blockMask = document.querySelector(".block-mask");
  const delimiterMask = document.querySelector(".delimiter-mask");
  const customDelimiter = document.querySelector(".custom-delimiter-mask");
  const prefixMask = document.querySelector(".prefix-mask");

  // Autosize
  // --------------------------------------------------------------------
  if (textarea) {
    autosize(textarea);
  }

  // Cleave JS Input Mask
  // --------------------------------------------------------------------

  // Credit Card
  if (creditCard) {
    new Cleave(creditCard, {
      creditCard: true,
      onCreditCardTypeChanged: (type) => {
        if (type !== "" && type !== "unknown") {
          document.querySelector(".card-type").innerHTML =
            `<img src="${assetsPath}img/icons/payments/${type}-cc.png" height="28"/>`;
        } else {
          document.querySelector(".card-type").innerHTML = "";
        }
      },
    });
  }

  // Phone Number
  if (phoneMask) {
    new Cleave(phoneMask, {
      phone: true,
      phoneRegionCode: "US",
    });
  }

  // Date
  if (dateMask) {
    new Cleave(dateMask, {
      date: true,
      delimiter: "-",
      datePattern: ["Y", "m", "d"],
    });
  }

  // Time
  if (timeMask) {
    new Cleave(timeMask, {
      time: true,
      timePattern: ["h", "m", "s"],
    });
  }

  //Numeral
  if (numeralMask) {
    new Cleave(numeralMask, {
      numeral: true,
      numeralThousandsGroupStyle: "thousand",
    });
  }

  //Block
  if (blockMask) {
    new Cleave(blockMask, {
      blocks: [4, 3, 3],
      uppercase: true,
    });
  }

  // Delimiter
  if (delimiterMask) {
    new Cleave(delimiterMask, {
      delimiter: "·",
      blocks: [3, 3, 3],
      uppercase: true,
    });
  }

  // Custom Delimiter
  if (customDelimiter) {
    new Cleave(customDelimiter, {
      delimiters: [".", ".", "-"],
      blocks: [3, 3, 3, 2],
      uppercase: true,
    });
  }

  // Prefix
  if (prefixMask) {
    new Cleave(prefixMask, {
      prefix: "+63",
      blocks: [3, 3, 3, 4],
      uppercase: true,
    });
  }
})();

// bootstrap-maxlength & repeater (jquery)
$(() => {
  const maxlengthInput = $(".bootstrap-maxlength-example");
  const formRepeater = $(".form-repeater");

  // Bootstrap Max Length
  // --------------------------------------------------------------------
  if (maxlengthInput.length) {
    maxlengthInput.each(function () {
      $(this).maxlength({
        warningClass: "label label-success bg-success text-white",
        limitReachedClass: "label label-danger",
        separator: " out of ",
        preText: "You typed ",
        postText: " chars available.",
        validate: true,
        threshold: +this.getAttribute("maxlength"),
      });
    });
  }

  // Form Repeater
  // ! Using jQuery each loop to add dynamic id and class for inputs. You may need to improve it based on form fields.
  // -----------------------------------------------------------------------------------------------------------------

  if (formRepeater.length) {
    let row = 2;
    let col = 1;
    formRepeater.on("submit", (e) => {
      e.preventDefault();
    });
    formRepeater.repeater({
      show: function () {
        const fromControl = $(this).find(".form-control, .form-select");
        const formLabel = $(this).find(".form-label");

        fromControl.each((i) => {
          const id = `form-repeater-${row}-${col}`;
          $(fromControl[i]).attr("id", id);
          $(formLabel[i]).attr("for", id);
          col++;
        });

        row++;

        $(this).slideDown();
      },
      hide: function (e) {
        confirm("Are you sure you want to delete this element?") &&
          $(this).slideUp(e);
      },
    });
  }
});
