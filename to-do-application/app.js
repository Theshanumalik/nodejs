// ElEMENTS
const tasks = [];
const openWinBtn = document.getElementById("openWinBtn");
const closeWinBtn = document.getElementById("closeWinBtn");
const cardContainer = document.querySelector(".card-container");
const myWindow = document.querySelector(".window");
const taskTitle = document.getElementById("task-title");
const taskDesc = document.getElementById("task-desc");
const form = document.getElementById("task-add-form");

// Event Listeners
openWinBtn.addEventListener("click", openWin);
closeWinBtn.addEventListener("click", closeWin);
form.addEventListener("submit", addTask);

// functions
function addTask(event) {
  event.preventDefault();
  const title = taskTitle.value;
  const description = taskDesc.value;
  const taskObj = {
    title: title,
    description: description,
  };
  tasks.push(taskObj);
  addToBody();
  form.reset();
  closeWin();
}

function openWin() {
  myWindow.classList.remove("closeWindow");
}

function closeWin() {
  myWindow.classList.add("closeWindow");
}

function addToBody() {
  cardContainer.innerHTML = "";
  if (tasks.length === 0) {
    cardContainer.innerHTML = "<h3>No task to show.</h3>";
  }
  for (let i = 0; i < tasks.length; i++) {
    const element = tasks[i];
    const html = `
    <div class="card">
    <h3 class="card-heading">${element.title}</h3>
    <p class="card-content">${element.description}</p>
    <div class="card-action">
      <button class="edit"><i class="fa fas fa-edit"></i></button>
      <button class="delete"><i class="fa fas fa-trash"></i>       </button>
    </div>
    `;
    cardContainer.innerHTML = cardContainer.innerHTML + html;
  }
}

addToBody();
