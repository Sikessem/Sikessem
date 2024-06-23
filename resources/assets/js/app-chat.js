document.addEventListener('DOMContentLoaded', () => {
  (() => {
    const chatContactsBody = document.querySelector(
      '.app-chat-contacts .sidebar-body',
    );
    const chatContactListItems = [].slice.call(
      document.querySelectorAll(
        '.chat-contact-list-item:not(.chat-contact-list-item-title)',
      ),
    );
    const chatHistoryBody = document.querySelector('.chat-history-body');
    const chatSidebarLeftBody = document.querySelector(
      '.app-chat-sidebar-left .sidebar-body',
    );
    const chatSidebarRightBody = document.querySelector(
      '.app-chat-sidebar-right .sidebar-body',
    );
    const chatUserStatus = [].slice.call(
      document.querySelectorAll(".form-check-input[name='chat-user-status']"),
    );
    const chatSidebarLeftUserAbout = $('.chat-sidebar-left-user-about');
    const formSendMessage = document.querySelector('.form-send-message');
    const messageInput = document.querySelector('.message-input');
    const searchInput = document.querySelector('.chat-search-input');
    const speechToText = $('.speech-to-text'); // ! jQuery dependency for speech to text
    const userStatusObj = {
      active: 'avatar-online',
      offline: 'avatar-offline',
      away: 'avatar-away',
      busy: 'avatar-busy',
    };

    // Initialize PerfectScrollbar
    // ------------------------------

    // Chat contacts scrollbar
    if (chatContactsBody) {
      new PerfectScrollbar(chatContactsBody, {
        wheelPropagation: false,
        suppressScrollX: true,
      });
    }

    // Chat history scrollbar
    if (chatHistoryBody) {
      new PerfectScrollbar(chatHistoryBody, {
        wheelPropagation: false,
        suppressScrollX: true,
      });
    }

    // Sidebar left scrollbar
    if (chatSidebarLeftBody) {
      new PerfectScrollbar(chatSidebarLeftBody, {
        wheelPropagation: false,
        suppressScrollX: true,
      });
    }

    // Sidebar right scrollbar
    if (chatSidebarRightBody) {
      new PerfectScrollbar(chatSidebarRightBody, {
        wheelPropagation: false,
        suppressScrollX: true,
      });
    }

    // Scroll to bottom function
    function scrollToBottom() {
      chatHistoryBody.scrollTo(0, chatHistoryBody.scrollHeight);
    }
    scrollToBottom();

    // User About Maxlength Init
    if (chatSidebarLeftUserAbout.length) {
      chatSidebarLeftUserAbout.maxlength({
        alwaysShow: true,
        warningClass: 'label label-success bg-success text-white',
        limitReachedClass: 'label label-danger',
        separator: '/',
        validate: true,
        threshold: 120,
      });
    }

    // Update user status
    chatUserStatus.forEach((el) => {
      el.addEventListener('click', (e) => {
        const chatLeftSidebarUserAvatar = document.querySelector(
          '.chat-sidebar-left-user .avatar',
        );
        const value = e.currentTarget.value;
        //Update status in left sidebar user avatar
        chatLeftSidebarUserAvatar.removeAttribute('class');
        Helpers._addClass(
          `avatar avatar-xl ${userStatusObj[value]}`,
          chatLeftSidebarUserAvatar,
        );
        //Update status in contacts sidebar user avatar
        const chatContactsUserAvatar = document.querySelector(
          '.app-chat-contacts .avatar',
        );
        chatContactsUserAvatar.removeAttribute('class');
        Helpers._addClass(
          `flex-shrink-0 avatar ${userStatusObj[value]} me-3`,
          chatContactsUserAvatar,
        );
      });
    });

    // Select chat or contact
    chatContactListItems.forEach((chatContactListItem) => {
      // Bind click event to each chat contact list item
      chatContactListItem.addEventListener('click', (e) => {
        // Remove active class from chat contact list item
        chatContactListItems.forEach((chatContactListItem) => {
          chatContactListItem.classList.remove('active');
        });
        // Add active class to current chat contact list item
        e.currentTarget.classList.add('active');
      });
    });

    // Filter Chats
    if (searchInput) {
      searchInput.addEventListener('keyup', (e) => {
        const searchValue = e.currentTarget.value.toLowerCase();
        const searchChatListItemsCount = 0;
        const searchContactListItemsCount = 0;
        const chatListItem0 = document.querySelector('.chat-list-item-0');
        const contactListItem0 = document.querySelector('.contact-list-item-0');
        const searchChatListItems = [].slice.call(
          document.querySelectorAll(
            '#chat-list li:not(.chat-contact-list-item-title)',
          ),
        );
        const searchContactListItems = [].slice.call(
          document.querySelectorAll(
            '#contact-list li:not(.chat-contact-list-item-title)',
          ),
        );

        // Search in chats
        searchChatContacts(
          searchChatListItems,
          searchChatListItemsCount,
          searchValue,
          chatListItem0,
        );
        // Search in contacts
        searchChatContacts(
          searchContactListItems,
          searchContactListItemsCount,
          searchValue,
          contactListItem0,
        );
      });
    }

    // Search chat and contacts function
    function searchChatContacts(
      searchListItems,
      searchListItemsCount,
      searchValue,
      listItem0,
    ) {
      searchListItems.forEach((searchListItem) => {
        const searchListItemText = searchListItem.textContent.toLowerCase();
        if (searchValue) {
          if (-1 < searchListItemText.indexOf(searchValue)) {
            searchListItem.classList.add('d-flex');
            searchListItem.classList.remove('d-none');
            searchListItemsCount++;
          } else {
            searchListItem.classList.add('d-none');
          }
        } else {
          searchListItem.classList.add('d-flex');
          searchListItem.classList.remove('d-none');
          searchListItemsCount++;
        }
      });
      // Display no search fount if searchListItemsCount == 0
      if (searchListItemsCount === 0) {
        listItem0.classList.remove('d-none');
      } else {
        listItem0.classList.add('d-none');
      }
    }

    // Send Message
    formSendMessage.addEventListener('submit', (e) => {
      e.preventDefault();
      if (messageInput.value) {
        // Create a div and add a class
        const renderMsg = document.createElement('div');
        renderMsg.className = 'chat-message-text mt-2';
        renderMsg.innerHTML = `<p class="mb-0 text-break">${messageInput.value}</p>`;
        document
          .querySelector('li:last-child .chat-message-wrapper')
          .appendChild(renderMsg);
        messageInput.value = '';
        scrollToBottom();
      }
    });

    // on click of chatHistoryHeaderMenu, Remove data-overlay attribute from chatSidebarLeftClose to resolve overlay overlapping issue for two sidebar
    const chatHistoryHeaderMenu = document.querySelector(
      ".chat-history-header [data-target='#app-chat-contacts']",
    );
    const chatSidebarLeftClose = document.querySelector(
      '.app-chat-sidebar-left .close-sidebar',
    );
    chatHistoryHeaderMenu.addEventListener('click', (e) => {
      chatSidebarLeftClose.removeAttribute('data-overlay');
    });
    // }

    // Speech To Text
    if (speechToText.length) {
      SpeechRecognition = SpeechRecognition ?? webkitSpeechRecognition;
      if (SpeechRecognition !== undefined && SpeechRecognition !== null) {
        const recognition = new SpeechRecognition();
        let listening = false;
        speechToText.on('click', function () {
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
              .closest('.form-send-message')
              .find('.message-input')
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
});
