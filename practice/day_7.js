// DOM - DOCUMENT OBJECT MODEL

// DOM MANIPULATION
const dom = document.getElementById("dom");

// dom.innerText = "<b>Hello world</b>";
// dom.innerHTML = "<b>Hi I am shanu</b>";

// dom.style.backgroundColor = "#fb706f";
// dom.style.color = "black";
// dom.style.width = "500px";
// dom.style.fontSize = "2rem";

// Adding and removing class from an HTML element
function makeCircle() {
  dom.classList.add("circle");
}

// function makeRect() {
//   dom.classList.remove("circle");
// }

// function toggle() {
//   dom.classList.toggle("circle");
// }

// ADDING Attribute to an element
// dom.setAttribute("onclick", "makeCircle()");
// dom.setAttribute("class", "circle");

// https://images.pexels.com/photos/10717311/pexels-photo-10717311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1

// https://images.pexels.com/photos/14467936/pexels-photo-14467936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1

// const btn = document.getElementById("btn");
// const image = document.getElementById("image");

// btn.addEventListener("click", changeImage);

// function changeImage() {
//   image.setAttribute(
//     "src",
//     "https://images.pexels.com/photos/14467936/pexels-photo-14467936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//   );
// }

// console.log("helo wo");

// const posts = [
//   {
//     image:
//       "https://images.pexels.com/photos/14467936/pexels-photo-14467936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     title: "How to make Money",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, veritatis voluptas, numquam cupiditate quia ipsa soluta minus quis sed quam maxime at molestiae voluptate repellendus incidunt non dicta laborum asperiores?",
//     readMoreHref: "github.com",
//   },
//   {
//     image:
//       "https://images.pexels.com/photos/14467936/pexels-photo-14467936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     title: "How to Make Instagram clone",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, veritatis voluptas, numquam cupiditate quia ipsa soluta minus quis sed quam maxime at molestiae voluptate repellendus incidunt non dicta laborum asperiores?",
//     readMoreHref: "github.com",
//   },
//   {
//     image:
//       "https://images.pexels.com/photos/14467936/pexels-photo-14467936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     title: "How to Learn JavaScript",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, veritatis voluptas, numquam cupiditate quia ipsa soluta minus quis sed quam maxime at molestiae voluptate repellendus incidunt non dicta laborum asperiores?",
//     readMoreHref: "github.com",
//   },
// ];

// for (i = 0; i < posts.length; i++) {
//   const element = posts[i];

//   const html = `<div class="post">
//     <img src="${element.image}"/>
//     <h1>${element.title}</h1>
//     <p>${element.content}</p>
//     <a href="${element.readMoreHref}">Read More</a>
//   </div>`;
//   document.write(html);
// }
