// alert("Heey");
const openWinBtn = document.getElementById("openWinBtn");
const closeWinBtn = document.getElementById("closeWinBtn");

const myWindow = document.querySelector(".window");

openWinBtn.addEventListener("click", openWin);
closeWinBtn.addEventListener("click", closeWin);

function openWin() {
  myWindow.classList.remove("closeWindow");
}

function closeWin() {
  myWindow.classList.add("closeWindow");
}

const tasks = [
  {
    title: "Hello world",
    description: "HI sldf lasdfjals fdlasjdf aslfjsdkfj ",
  },
  {
    title: "Hello world",
    description: "HI sldf lasdfjals fdlasjdf aslfjsdkfj ",
  },
  {
    title: "Hello world",
    description: "HI sldf lasdfjals fdlasjdf aslfjsdkfj ",
  },
];

let task = {
  title: "",
  description: "",
};
