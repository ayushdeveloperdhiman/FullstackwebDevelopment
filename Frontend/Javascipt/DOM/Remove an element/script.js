const itemsList = document.getElementById("item-list");
const addNewItemBtn = document.getElementById("add-item-btn");

function removeItem(event) {
  const item = event.target;
  item.removeEventListener("click", removeItem);

  itemsList.removeChild(item);
}

console.log(itemsList);

function addItem() {
  const newItem = document.createElement("li");

  newItem.textContent = `Item ${itemsList.children.length + 1}`;
  newItem.classList.add("item");

  newItem.addEventListener("click", removeItem);

  itemsList.appendChild(newItem);
}
addNewItemBtn.addEventListener("click", addItem);
