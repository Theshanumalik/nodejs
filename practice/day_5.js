// let fruites = ["banana", "mango", "backberry", "kiwi", "orange"];

// console.log(fruites.splice(1, 2));
// console.log(fruites.slice(1, 4));

// let item = "orange";

// for (let i = 0; i < fruites.length; i++) {
//   if (fruites[i] === item) {
//     document.write("Exist");
//   }
// }

// for (i in fruites) {
//   if (fruites[i] === item) {
//     document.write("Exist");
//   }
// }

// STRINGS

// let name = "shanu malik";
// let givenName = prompt("Enter name");

// if (name.toUpperCase() === givenName.toUpperCase()) {
//   document.write("PASS");
// }

// gives the letter at given index
// console.log(name.charAt(6));

// gives the index of given letter
// console.log(name.indexOf("m"));

// return array by spitting the string
// console.log(name.split("m"));

// console.log(name.replace("sha", "ja"));

// console.log(name.includes("u"));

// let fruites = "mango apple banana orange";

// console.log(fruites.split("a"));

// OBJECTS

// let person = {
//   name: "shanu malik",
//   age: 25,
//   height: 5.7,
// };

// console.log(person);

// let persons = [
//   { name: "shanu malik", age: 18 },
//   { name: "ali", age: 18 },
//   { name: "wasim", age: 22 },
// ];

// console.log(persons);

// let blogs = [
//   {
//     title: "how to make money",
//     content: "blah blah blah",
//     date: "22-2-24",
//     auther: "shanu malik",
//   },
//   {
//     title: "how to make money",
//     content: "blah blah blah",
//     date: "22-2-24",
//     auther: "shanu malik",
//   },
//   {
//     title: "how to make money",
//     content: "blah blah blah",
//     date: "22-2-24",
//     auther: "shanu malik",
//   },
//   {
//     title: "how to make money",
//     content: "blah blah blah",
//     date: "22-2-24",
//     auther: "shanu malik",
//   },
// ];

// for (i = 0; i < blogs.length; i++) {
//   let blog = blogs[i];
//   document.write(`
//     <div>
//       <h3>${blog.title}</h3>
//       <p>${blog.content}</p>
//       <span>${blog.auther} At ${blog.date}</span>
//     </div>
//     <hr/>
//     `);
// }
