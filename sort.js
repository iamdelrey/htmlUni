document.addEventListener("DOMContentLoaded", function () {
    initializeList();
});

  function initializeList() {
    const sortableList = document.getElementById("sortable-list");
    const items = [5, 2, 8, 1, 6]; // Пример массива чисел, который вы можете изменить

    items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      li.draggable = true;
      li.addEventListener("dragstart", handleDragStart);
      sortableList.appendChild(li);
    });
}

  function handleDragStart(e) {
    e.dataTransfer.setData("text/plain", e.target.textContent);
}

  function sortArray() {
    const sortOrder = document.getElementById("sort").value;
    const sortableList = document.getElementById("sortable-list");
    const items = Array.from(sortableList.children);

    items.sort((a, b) => {
      const valueA = parseInt(a.textContent);
      const valueB = parseInt(b.textContent);

      if (sortOrder === "asc") {
        return valueA - valueB;
      } else {
        return valueB - valueA;
      }
    });

    items.forEach((item) => sortableList.appendChild(item));
}