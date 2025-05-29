// const http = require("http");

const express = require("express");

const app = express();

// function helper() {
//   const method = req.method;
//   const url = req.url;

//   if (method === "GET" && url === "/") {
//     res.writeHead(200);
//     res.end("Get request to the server");
//   } else if (req.url === "/about") {
//     res.end("This is my about page");
//   } else {
//     res.end("404 - Page not found");
//   }
// }

app.get("/", (req, res) => {
  return res.send("Hello this is homepage");
});

app.post("/", () => {
  return res.send("Hello this request is come from post method");
});
const port = "5000";
app.listen(port, () => {
  console.log(`Server started at: http://localhost:${port}/`);
});
// const myServer = http.createServer(app);

// const myServer = http.createServer((req, res) => {

//   const method = req.method;
//     const url = req.url;

//   if (method === "GET" && url === "/") {
//     res.writeHead(200);
//     res.end("Get request to the server");
//   } else if (req.url === "/about") {
//     res.end("This is my about page");
//   } else {
//     res.end("404 - Page not found");
//   }
// res.end("Hello Node.Js Http server");
// if (req.url === "/") {
//   res.writeHead(200, { "content-type": "text/plain" });
//   res.end("Welcome to the homepage");
// } else if (req.url === "/about") {
//   res.end("This is my about page");
// } else {
//   res.end("404 - Page not found");
// }

//   switch (req.url) {
//     case "/":
//       res.writeHead(200, { "content-type": "text/plain" });
//       res.end("Welcome to the homepage");
//       break;
//     case "/about":
//       res.end("This is my about page");
//       break;
//     default:
//       res.end("404 - Page not found");
//   }
// });

// const port = 8000;

// myServer.listen(port, () => {
//   console.log(`Server started at: http://localhost:${port}/`);
// });
