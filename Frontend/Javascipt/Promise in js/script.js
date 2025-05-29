function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve({
          name: "John",
          age: 30,
          occupation: "Developer",
        });
      } else {
        reject("Error: Unable to fetch data.");
      }
    }, 2000);
  });
}

const fetchDataBtn = document.getElementById("fetch-data");
const outPutDiv = document.getElementById("output");

fetchDataBtn.addEventListener("click", () => {
  outPutDiv.textContent = "Fetching Data...";
  fetchData()
    .then((user) => {
      outPutDiv.innerHTML = `<strong>Name: </strong> ${user.name} <br>
    <strong>Age: </strong> ${user.age} <br>
    <strong>Occupation: </strong> ${user.occupation}`;
    })
    .catch((error) => {
      outPutDiv.textContent = error;
    })
    .finally(() => {
      console.log("Data fetch attempt completed");
    });
});
