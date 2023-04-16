console.log("LocalStorage");

// ADD DATA INTO LOCALSTORAGE
localStorage.setItem("name", "ali");
sessionStorage.setItem("name", "ali");

// RETRIVE DATA FROM LOCALSTORAGE
console.log(localStorage.getItem("name"));

// JSON - JAVASCRIPT OBJECT NOTATION

const tasks = [
  { title: "title1", desc: "desc1" },
  { title: "title1", desc: "desc1" },
  { title: "title1", desc: "desc1" },
  { title: "title1", desc: "desc1" },
];

// converting json into a string
let taskString = JSON.stringify(tasks);

// storing taskString into localstorage
localStorage.setItem("task", taskString);

// geting taskstring from localstorage
const myTasks = localStorage.getItem("task");

// converting taskstring into json
console.log(JSON.parse(myTasks));

// clear item from the localstorage
localStorage.clear("task");
