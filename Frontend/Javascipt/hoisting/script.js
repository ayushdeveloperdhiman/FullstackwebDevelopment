console.log(`Username: ${username}`);
console.log(`User age: ${userAge}`);

var username = "Tom";
var userAge = 10;
console.log(`Username: ${username}`);
console.log(`User age: ${userAge}`);

function greetUser(name) {
  var greet = `I hope you are doing fine.`;
  console.log(`Hello ${name}, ${greet}`);
  var currentYear = 2030;
  const year = currentYear - userAge;
  return `Your Birth Year is: ${year}`;
}

const birthYear = greetUser(username);
console.log(birthYear);
