// VARIABLES FOR ELEMENTS
const openWinBtn = document.getElementById("openWinBtn");
const closeWinBtn = document.getElementById("closeWinBtn");
const myWindow = document.querySelector(".window");
const cardContainer = document.querySelector(".card-container");
const taskForm = document.getElementById("task-form");
const searchInput = document.getElementById("search-input");
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

updateDom();

openWinBtn.addEventListener("click", openWin);
closeWinBtn.addEventListener("click", closeWin);

// adding tasks
taskForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let title = taskForm.querySelector("input").value.trim();
  let description = taskForm.querySelector("textarea").value.trim();
  tasks.push({ title, description });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  updateDom();
  taskForm.reset();
  closeWin();
});

// search functionality
searchInput.addEventListener("keyup", function (e) {
  console.log("hyy");
  if (!e.target.value) {
    return updateDom();
  }
  searchTask(e.target.value);
});

function openWin() {
  myWindow.classList.remove("closeWindow");
}

function closeWin() {
  myWindow.classList.add("closeWindow");
}

function updateDom() {
  cardContainer.innerHTML = "";
  tasks.forEach((task, index) => {
    cardContainer.innerHTML += createCard(task, index);
  });
}

function deleteTask(index) {
  const isSure = confirm("Are you sure you want to delete the task?");
  if (!isSure) return;
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  updateDom();
}

function createCard({ title, description }, id) {
  title = title.replace(/</g, "&lt;");
  title = title.replace(/>/g, "&gt;");
  description = description.replace(/</g, "&lt;");
  description = description.replace(/>/g, "&gt;");
  return `<div class="card" data-task-id="${id}" >
  <h3 class="card-heading">${title}</h3>
  <p class="card-content">${description}</p>
  <div class="card-action">
    <button class="edit" onclick="editTask(${id})" ><i class="fa fas fa-edit"></i></button>
    <button class="delete" onclick="deleteTask(${id})"><i class="fa fas fa-trash"></i></button>
  </div>
</div>`;
}

function searchTask(query) {
  let keyword = query.toLowerCase();
  Array.from(cardContainer.getElementsByClassName("card")).forEach(
    (element) => {
      let { title, description } = tasks[element.getAttribute("data-task-id")];
      let isRelated =
        title.toLowerCase().includes(keyword) ||
        description.toLowerCase().includes(keyword);
      if (isRelated) {
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    }
  );
}
