// RETURN KEYWORD IN JS
// function sum(a, b) {
//   let total = a + b;
//   return total;
// }

// sum(25, 50);

// let z = sum(15, 78);
// let x = sum(25, 15);

// console.log(z);
// console.log(x);

// BREAK AND CONTINUE
// let names = ["tosif", "shanu", "ali", "wasim"];

// let givenName = prompt("Enter your name: ");

// for(i in names) {
//     if(names[i]===givenName) {
//         console.log("Exist");
//         break;
//     }
// }

// for (i in names) {
//   if (names[i] === givenName) {
//     continue;
//   }
//   console.log(names[i]);
// }

// AN OBJECT CAN HAVE TWO THINGS
// 1. ATTRIBUTES / PROPERTIES
// 2. METHODS / BEHAVIOR / FUNCTION

// let person = {
//   name: "ali",
//   age: 19,
//   height: 5.6,
//   dob: "16-8-2002",
//   walk: function () {
//     console.log("I am walking");
//   },
//   laugh: function () {
//     console.log("😂😂😂");
//   },
//   speak: function (sentence) {
//     console.log(sentence);
//   },
//   intro: function () {
//     console.log(`Hii, I am ${this.name}. I am ${this.age} year old.`);
//   },
// };

// person.walk();
// person.laugh();
// person.speak("Hii I am ali");
// person.intro();

// WINDOW OBJECT

// window.alert("Hello world");
// window.prompt("Enter your name");
// let isAdult = window.confirm("Are you 18+");
// if (isAdult === true) {
//   document.write("Welcome, to the site.");
// } else {
//   // To Redirect to a diffrent page
//   window.location.href = "http://www.google.com";
// }

// to reload the page
// window.location.reload();
// console.log(window.location.href);
// window.blur();

// console.log(document.body);

// DOCUMENT OBJECT MODEL

// document.getElementById("name").innerText = "Ali Chauhan";
// const obj = {
//   name: "shanu",
//   hello: function () {},
//   age: 58,
// };

// obj.name = "Ali chauhan";
// console.log(obj);

// let div = document.getElementById("name");
// div.innerText = "ali chauhan";

// let div = document.querySelector(".box");
// console.log(div);
// let boxes = document.getElementsByClassName("box");
// console.log(boxes);

// let boxes = document.querySelectorAll(".box");
// console.log(boxes);

// console.log(document.getElementsByTagName("div"));

// EVENT LISTENERS

function sayHello() {
  const name = document.getElementById("name").value;
  window.alert(`Hello ${name}`);
}
