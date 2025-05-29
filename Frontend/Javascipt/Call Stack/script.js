var username = "Tom";
var userAge = 10;
console.log(`Username: ${username}`);
console.log(`User age: ${userAge}`);

greetUser(username);
function greetUser(name) {
  var greet = `I hope you are doing fine.`;
  console.log(`Hello ${name}, ${greet}`);
  var currentYear = 2030;
  const year = birthYear(currentYear, userAge);
  return `Your Birth Year is: ${year}`;
}

function birthYear(year, age) {
  console.log("Calculating the birth year");
  return year - age;
}

const birthYear = greetUser(username);
console.log(birthYear);
