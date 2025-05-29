// Pure Function
function calculate(num1, num2) {
  return num1 * num2;
}

console.log(calculate(4, 6));

// Impure Function

let discount = 25;
function calculateDiscount(price) {
  discount = discount - 5;
  return price - discount;
}

console.log(calculateDiscount(100));

//Callback function

function greet(wish) {
  console.log(`${wish()}, welcome to the javascript course.`);
}

function sayHi() {
  return "Hi";
}

function sayHello() {
  return "Hello";
}

function goodMorning() {
  return "Good Morning";
}

greet(sayHi);
greet(sayHello);
greet(goodMorning);
