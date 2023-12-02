console.log("Hello world");

// document.head.innerHTML = "<title>Hello world</title>";

// document.body.innerHTML = "Hello world";

// createElement
const h1Element = document.createElement("h1");

h1Element.innerHTML = "Hello world";

console.log(h1Element);

// Image Element
const imageElement = document.createElement("img");

// img is a self closing
// imageElement.setAttribute(
//   "src",
//   "https://upload.wikimedia.org/wikipedia/en/thumb/7/75/Leo_%282023_Indian_film%29.jpg/220px-Leo_%282023_Indian_film%29.jpg"
// );

imageElement.src =
  "https://upload.wikimedia.org/wikipedia/en/thumb/7/75/Leo_%282023_Indian_film%29.jpg/220px-Leo_%282023_Indian_film%29.jpg";

imageElement.alt = "Leo Poster";

console.log(imageElement);

// anchor element
const anchorElement = document.createElement("a");

anchorElement.href = "https://www.google.com";

anchorElement.target = "_blank";

anchorElement.innerHTML = "Click here to Google";

console.log(anchorElement);

// appending the created elements one at a time
// document.body.appendChild(h1Element);
// document.body.appendChild(imageElement);
// document.body.appendChild(anchorElement);

// para tag
const paraTag = document.createElement("p");

// paraTag.innerText = "Hi Hello This is the content";
// paraTag.innerHTML = "Hi Hello This is the <b>content</b>";
paraTag.innerText = "Hi Hello This is the <b>content</b>";

// appending all the elements at once
document.body.append(h1Element, imageElement, anchorElement, paraTag);

// Creating List  using OL / UL
const list = ["Coffe", "Tea", "Sugar", "Biscuit", "Sweets"];

const olElement = document.createElement("ol");

// const li1 = document.createElement("li");
// li1.innerText = list[0];
// const li2 = document.createElement("li");
// li2.innerText = list[1];
// const li3 = document.createElement("li");
// li3.innerText = list[2];
// const li4 = document.createElement("li");
// li4.innerText = list[3];
// olElement.append(li1, li2, li3, li4);

list.forEach((item) => {
  const liElement = document.createElement("li");
  liElement.innerText = item;
  olElement.appendChild(liElement);
});

// inline styling
// olElement.setAttribute("style", "color: red; font-size: 24px; background-color: yellow;");

// olElement.style.color = "red";
// olElement.style.fontSize = "24px"; // camelcase
// olElement.style.backgroundColor = "yellow";

// using class or id
// olElement.className = "styled-ol bg-yellow";
olElement.classList.add("styled-ol");
olElement.classList.add("bg-yellow");

// olElement.classList.remove("styled-ol");

const highlightElement = () => {
  olElement.classList.toggle("bg-yellow");
};

// olElement.id = "styled-ol";

document.body.append(olElement);

// Element/Node Selections
// getElementById
// const divOne = document.getElementById("sample-div-2");

// divOne.style.color = "green";

// console.log(divOne);

//getElementsByClassName
const elements = document.getElementsByClassName("div-sample");

// converting to array of elements
Array.from(elements).forEach((element) => {
  element.style.color = "green";
});

console.log(elements);

// querySelection
const element = document.querySelector("div");
console.log(element);

const divElements = document.querySelectorAll("div");
console.log(divElements);

const elem = document.querySelector("#sample-div > *");
console.log(elem);

const elems = document.querySelectorAll("#sample-div > *");
console.log(elems);
