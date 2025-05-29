const itemsList = document.getElementById("item-list");
const addNewItemBtn = document.getElementById("add-item-btn");

console.log(itemsList);

addNewItemBtn.addEventListener("click", () => {
  const newItem = document.createElement("li");

  newItem.textContent = `Item ${itemsList.children.length + 1}`;
  newItem.classList.add("item");

  itemsList.appendChild(newItem);
});
