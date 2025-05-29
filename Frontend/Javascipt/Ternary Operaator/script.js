// condition? true exp: false exp
let num = 7;
// if (num % 2 === 0) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }
// num % 2 === 0 ? console.log("even") : console.log("odd");

// function with parameter and without parameter

//without parameter
// function greetUser() {
//   console.log("Hello, Welcome to the session!");
// }

// greetUser();

//with parameter
// function greetUser(username) {
//   console.log("Hello, " + username + " Welcome to the session!");
// }
// greetUser("Ayush");

//  Default parameter
// function sum(num1 = 0, num2 = 0) {
//   //   console.log("Sum of the numbers is: " + (num1 + num2));
//   console.log(`Sum of the numbers is: ${num1 + num2}`);
// }

// sum(2, 5);

// Return Statement
function square(number) {
  return number * number;
}

var result = square(5);
console.log(result);
