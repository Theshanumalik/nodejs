console.log("CallBack Functions");

// function sayHello(name, fun) {
//   console.log("Hii, " + name);
//   fun();
// }

// sayHello("Shanu Malik", function () {
//   console.log("Hey Main");
// });

const btn = document.getElementById("btn");
// let count = 0;

// btn.addEventListener("click", function () {
//   count++;
//   console.log(count);
// });

// let arr = [1, 2, 3, 4, 5, 6];

// for (i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// function printArray(arr, func) {
//   for (i = 0; i < arr.length; i++) {
//     func(arr[i]);
//   }
// }

// const newArray = ["ali", "wasim", "lokesh", "manish"];

// printArray(newArray, function (a) {
//   console.log(a);
// });

// INTERVAL AND TIMEOUT
let count;
if (localStorage.getItem("count")) {
  count = localStorage.getItem("count");
} else {
  count = 0;
}
// setInterval(function () {
//   console.log(count++);
// }, 2000);

// setTimeout(function () {
//   console.log("Hello world");
// }, 5000);
const countDiv = document.querySelector(".count");
countDiv.innerText = count;
let isPause = true;
let interval;

btn.addEventListener("click", function () {
  if (isPause) {
    interval = setInterval(function () {
      count++;
      countDiv.innerText = count;
      localStorage.setItem("count", count);
    }, 50);
    isPause = false;
  } else {
    clearInterval(interval);
    isPause = true;
  }
});
