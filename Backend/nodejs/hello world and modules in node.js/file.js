const { error } = require("console");
const fs = require("fs");
// 1. Read from file
// Asynchronous read
// fs.readFile("./example.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log("Error reading the data: ", err);
//     return;
//   }
//   console.log("File Content: " + data);

// });

// Synchronous readconst content = "\n Appending new content to our output.txt file"
// const result = fs.readFileSync("./example.txt", "utf-8");
// console.log("result:" + result);

// 2. Writing in a files
// Asynchronous write
// const content = "Hello node.js";
// fs.writeFile("output.txt", content, (err) => {
//   if (err) {
//     console.error("Error while writing to a file", err);
//     return;
//   }
//   console.log("File written successfully!!");
// });

// Synchronous
// const content = "Hello node.js";
// try {
//   fs.writeFileSync("output.txt", content);
//   console.log("File written successfully!!");
// } catch (error) {
//   console.error("Error while writing to a file ", error);
// }

//  3. Appending to the file
// Asynchronous way
const content = "\nAppending new content to our output.txt file";
// fs.appendFile("output.txt", content, (error) => {
//   if (error) {
//     console.error("Error while appendin to a file: " + error);
//     return;
//   }
//   console.log("Appending to a file is successfull");
// });

// sync

// try {
//   const content = "\nAppending new content to our output.txt file";
//   fs.appendFileSync("output.txt", content);
//   console.log("Appending to a file is successfull");
// } catch (error) {
//   console.error("Error while appendin to a file: " + error);
// }

// 4. Deleting files
// Async

// fs.unlink("output.txt", (error) => {
//   if (error) {
//     console.error("Error while deleting a file: " + error);
//     return;
//   }
//   console.log("Deleting successfull");
// });

// sync
// try {
//   fs.unlinkSync("example.txt");
//   console.log("Deleting successfull");
// } catch (error) {
//   console.error("Error while deleting a file: " + error);
// }

// 5. Renaming/moving files:
// async
// fs.rename("oldFile.txt", "newFile.txt", (error) => {
//   if (error) {
//     console.error("Error while renaming a file: ", error);
//     return;
//   }
//   console.log("Renaming Successfully");
// });

// sync

// try {
//   fs.renameSync("newFile.txt", "newNewFile.txt");
//   console.log("Renaming Successfully");
// } catch (error) {
//   console.error("Error while renaming a file: ", error);
// }

// 6. Checking file/directory existence

// if (fs.existsSync("newNewFile.txt")) {
//   console.log("File exists");
// } else {
//   console.log("File dose not exists");
// }

// 7. Creating and reading directory
// Creating a directory

// fs.mkdir("newDirectory", (error) => {
//   if (error) {
//     console.error("Error creating a directory: ", error);
//     return;
//   }
//   console.log("Directory created successfully.");
// });

// 8. Reading Directory

// fs.readdir(".", (error, file) => {
//   if (error) {
//     console.error("Error reading a directory: ", error);
//     return;
//   }
//   console.log("Directory Content successfully.", file);
// });

// Example of sync operation
// console.log("1");
// const result = fs.readFileSync("newNewFile.txt", "utf8");
// console.log(result);

// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");

// Example of async operation

console.log("1");
const result = fs.readFile("newNewFile.txt", "utf8", (err, data) => {
  console.log(data);
});
console.log("2");
console.log("3");
console.log("4");
console.log("5");
