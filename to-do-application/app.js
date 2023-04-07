// ElEMENTS
const tasks = [
  {
    title: "task1",
    description: "task1 desc ",
  },
  {
    title: "task2",
    description: "task2 desc ",
  },
  {
    title: "task3",
    description: "task3 desc ",
  },
  {
    title: "task4",
    description: "task4 desc ",
  },
];
const openWinBtn = document.getElementById("openWinBtn");
const closeWinBtn = document.getElementById("closeWinBtn");
const cardContainer = document.querySelector(".card-container");
const myWindow = document.querySelector(".window");
const taskTitle = document.getElementById("task-title");
const taskDesc = document.getElementById("task-desc");
const form = document.getElementById("task-add-form");
const searchBar = document.getElementById("searchBar");

// Event Listeners
openWinBtn.addEventListener("click", openWin);
closeWinBtn.addEventListener("click", closeWin);
form.addEventListener("submit", addTask);
searchBar.addEventListener("keyup", searchTask);

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
    <div class="card" id="${i}">
    <h3 class="card-heading">${element.title}</h3>
    <p class="card-content">${element.description}</p>
    <div class="card-action">
      <button class="edit"><i class="fa fas fa-edit"></i></button>
      <button class="delete" onclick="deleteTask(${i})" ><i class="fa fas fa-trash"></i></button>
    </div>
    `;
    cardContainer.innerHTML = cardContainer.innerHTML + html;
  }
}

// Calling the function for the firstTime
addToBody();

function deleteTask(index) {
  let confirmDelete = window.confirm(
    "Are you sure? you want to delete the task"
  );
  if (confirmDelete) {
    tasks.splice(index, 1);
    addToBody();
  }
}

function searchTask(event) {
  let keyword = event.target.value;
  // Search Keyword in the array
  tasks.forEach(function (element, index) {
    let isInclude =
      element.title.includes(keyword) || element.description.includes(keyword);
    let currentElement = document.getElementById(index);
    if (isInclude) {
      currentElement.style.display = "block";
    } else {
      currentElement.style.display = "none";
    }
  });
}
