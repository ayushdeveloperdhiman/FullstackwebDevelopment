// https://jsonplaceholder.typicode.com/users

const fetchUserBtn = document.getElementById("fetch-users");
const userList = document.getElementById("user-list");

function getUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status code is ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      userList.innerHTML = ``;
      data.forEach((user) => {
        const li = document.createElement("li");
        li.textContent = user.name;
        userList.appendChild(li);
      });
    })
    .catch((errr) => {
      console.log("There was an error fetching the data: ", errr);
      userList.innerHTML = `<li>Error fetching users data: ${errr.message}</li>`;
    });
}

fetchUserBtn.addEventListener("click", getUsers);
