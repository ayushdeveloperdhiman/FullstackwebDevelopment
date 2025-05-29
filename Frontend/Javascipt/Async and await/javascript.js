const fetchDataBtn = document.getElementById("fetch-data");
const outputDiv = document.getElementById("output");

function appendToOutput(content) {
  const p = document.createElement("p");
  p.textContent = content;
  outputDiv.appendChild(p);
}

async function fetchUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }
  return await response.json();
}

async function fetchPost(userId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}/posts`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return await response.json();
}

async function fetchComment(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch comments");
  }
  return await response.json();
}

async function fetchUserData() {
  try {
    const user = await fetchUser();
    appendToOutput(`User: ${user.name}`);

    const posts = await fetchPost(user.id);
    appendToOutput(`User's first post title: ${posts[0].title}`);

    const comments = await fetchComment(posts[0].id);
    appendToOutput(`Comment: ${comments[0].body}`);
  } catch (error) {
    appendToOutput(`Error: ${error.message}`);
  }
}

fetchDataBtn.addEventListener("click", fetchUserData);
