(() => {
  const cardEl = document.getElementById("sortable-cards");
  const pendingTasks = document.getElementById("pending-tasks");
  const completedTasks = document.getElementById("completed-tasks");
  const cloneSource1 = document.getElementById("clone-source-1");
  const cloneSource2 = document.getElementById("clone-source-2");
  const handleList1 = document.getElementById("handle-list-1");
  const handleList2 = document.getElementById("handle-list-2");
  const imageList1 = document.getElementById("image-list-1");
  const imageList2 = document.getElementById("image-list-2");

  // Cards
  // --------------------------------------------------------------------
  if (cardEl) {
    Sortable.create(cardEl);
  }

  // Images
  // --------------------------------------------------------------------
  if (imageList1) {
    Sortable.create(imageList1, {
      animation: 150,
      group: "imgList",
    });
  }
  if (imageList2) {
    Sortable.create(imageList2, {
      animation: 150,
      group: "imgList",
    });
  }

  // Cloning
  // --------------------------------------------------------------------
  if (cloneSource1) {
    Sortable.create(cloneSource1, {
      animation: 150,
      group: {
        name: "cloneList",
        pull: "clone",
        revertClone: true,
      },
    });
  }
  if (cloneSource2) {
    Sortable.create(cloneSource2, {
      animation: 150,
      group: {
        name: "cloneList",
        pull: "clone",
        revertClone: true,
      },
    });
  }

  // Multiple
  // --------------------------------------------------------------------
  if (pendingTasks) {
    Sortable.create(pendingTasks, {
      animation: 150,
      group: "taskList",
    });
  }
  if (completedTasks) {
    Sortable.create(completedTasks, {
      animation: 150,
      group: "taskList",
    });
  }

  // Handles
  // --------------------------------------------------------------------
  if (handleList1) {
    Sortable.create(handleList1, {
      animation: 150,
      group: "handleList",
      handle: ".drag-handle",
    });
  }
  if (handleList2) {
    Sortable.create(handleList2, {
      animation: 150,
      group: "handleList",
      handle: ".drag-handle",
    });
  }
})();
