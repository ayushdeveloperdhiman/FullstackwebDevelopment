const fetchDataBtn = document.getElementById("fetch-data");
const outputDiv = document.getElementById("output");

function appendToOutput(content) {
  const p = document.createElement("p");
  p.textContent = content;
  outputDiv.appendChild(p);
}

function fetchUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1").then(
    (respose) => {
      if (!respose.ok) {
        throw new Error("Failed to fetch user");
      }
      return respose.json();
    }
  );
}

function fetchPost(userId) {
  return fetch(
    `https://jsonplaceholder.typicode.com/user/${userId}/posts`
  ).then((reponse) => {
    if (!reponse.ok) {
      throw new Error("Failed to fetch user posts");
    }
    return reponse.json();
  });
}

function fetchComment(postId) {
  return fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments/`
  ).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch user comments");
    }
    return response.json();
  });
}
function fetchUsersData() {
  fetchUser()
    .then((user) => {
      appendToOutput(`User: ${user.name}`);
      return fetchPost(user.id);
    })
    .then((posts) => {
      appendToOutput(`User's first Post title: ${posts[0].title}`);
      return fetchComment(posts[0].id);
    })
    .then((comments) => {
      appendToOutput(`First comment: ${comments[0].body}`);
    })
    .catch((error) => {
      appendToOutput(error.message);
    });
}

fetchDataBtn.addEventListener("click", fetchUsersData);
