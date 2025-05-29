// 1. Selecting by ID - Change the title text

const title = document.getElementById("main-title");
const changeTitleBtn = document.getElementById("change-title-btn");

changeTitleBtn.addEventListener("click", () => {
  title.textContent = "Title is changed using getElementById!!";
});

//2. Slecting by class - Changing text content for all paragraphs with class "intro-text"

const paragraphs = document.getElementsByClassName("intro-text");
console.log(paragraphs);

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].textContent = `Paragraph ${
    i + 1
  } updated using getElementByClassName`;
}
// for (let i of paragraphs) {
//   i.textContent = "Hi";
// }

// 3. Selecting by Tagname - Logging all <li> items
const listItem = document.getElementsByTagName("li");
console.log("List items using getElementByTagName", listItem);

// 4. Using querySelector to select first paragrph and change its color
// This method selects the first element that matches a css selector.It returns the first matching element.
const firstParagraph = document.querySelector(".intro-text");
// console.log("firstParagraph", firstParagraph);

firstParagraph.style.color = "red";

// 5. Using querySelectorAll to select all <li> items and change their color when button is clicked
// This method selects all elements that match a CSS selector. It returns a static NodeList, which is an array like object.
const changeItemColorBtn = document.getElementById("change-items-btn");
const items = document.querySelectorAll(".item");
console.log(items);

changeItemColorBtn.addEventListener("click", () => {
  items.forEach((item, index) => {
    item.style.color = index % 2 === 0 ? "blue" : "red";
  });
});
