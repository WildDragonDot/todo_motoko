/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!****************************************!*\
  !*** ./src/todo_frontend/src/index.js ***!
  \****************************************/
document.addEventListener("DOMContentLoaded", function () {
  const addForm = document.querySelector("form.add");
  const ul = document.querySelector("ul.todos");
  const searchFormInput = document.querySelector("form.search input");

  // ADD NEW TODO
  const handleAddItem = (inputValue) => {
      const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${inputValue}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
      ul.innerHTML += html;
  };

  addForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const inputValue = addForm.add.value;
      if (inputValue.length) handleAddItem(inputValue);
      addForm.add.value = "";
  });

  // REMOVE TODO
  ul.addEventListener("click", (e) => {
      if (e.target.classList.contains("delete")) {
          e.target.parentElement.remove();
      }
  });

  // SEARCH AND FILTER TODOS
  const filterItems = (value) => {
      Array.from(ul.children).forEach((li) => {
          if (!li.textContent.toLowerCase().includes(value))
              li.classList.add("filtered");
          else li.classList.remove("filtered");
      });
  };

  searchFormInput.addEventListener("keyup", (e) => {
      const value = searchFormInput.value.toLowerCase().trim();
      filterItems(value);
  });

  // Additional code or functions can go here if needed
});

/******/ })()
;
//# sourceMappingURL=index.js.map