const outputDiv = document.getElementById("output");

function fetchDataWithCallback(callback) {
  setTimeout(() => {
    const data = "Data Fetch via callback!!";
    callback(data);
  }, 5000); //Set 5-second delay
}

function fetchDataWithPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Data Fetch via promise!!";
      resolve(data);
    }, 5000);
  });
}
document.getElementById("fetch-callback").addEventListener("click", () => {
  outputDiv.textContent = "Fetching data using callback....";
  fetchDataWithCallback((data) => {
    outputDiv.textContent = data;
  });
});

document.getElementById("fetch-promise").addEventListener("click", () => {
  outputDiv.textContent = "Fetching data using promise....";
  fetchDataWithPromise()
    .then((data) => {
      outputDiv.textContent = data;
    })
    .catch((error) => {
      outputDiv.textContent = "Error while detching data!";
    });
});
