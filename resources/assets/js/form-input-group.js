(() => {
  const speechToText = $(".speech-to-text"); // ! jQuery dependency for speech to text

  // Speech To Text
  if (speechToText.length) {
    SpeechRecognition = SpeechRecognition ?? webkitSpeechRecognition;
    if (SpeechRecognition !== undefined && SpeechRecognition !== null) {
      const recognition = new SpeechRecognition();
      let listening = false;
      speechToText.on("click", function () {
        const $this = $(this);
        recognition.onspeechstart = () => {
          listening = true;
        };
        if (listening === false) {
          recognition.start();
        }
        recognition.onerror = (event) => {
          listening = false;
        };
        recognition.onresult = (event) => {
          $this
            .closest(".form-send-message")
            .find(".message-input")
            .val(event.results[0][0].transcript);
        };
        recognition.onspeechend = (event) => {
          listening = false;
          recognition.stop();
        };
      });
    }
  }
})();
