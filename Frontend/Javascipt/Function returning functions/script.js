// Function returnng functions
function greet(message) {
  return function (wishes) {
    console.log(`${wishes}, ${message}`);
  };
}

// function greet(message) {
//   return function wishUser(wishes) {
//     console.log(`${wishes}, ${message}`);
//   };
// }

const greeting = greet("I hope you are doing well.");
console.log(greeting);

greeting("Hello!");

greet("I hope everything is good")("Hello");
