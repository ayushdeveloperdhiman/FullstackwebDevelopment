// Scope in javascipt
//Block

{
  var varNum = 10;
  let letNum = 20;
  const constNum = 30;
}

// Global

// var varNum = 10;
// let letNum = 20;
// const constNum = 30;

console.log(varNum);

// console.log(varNum, letNum, constNum);

// Function

function print() {
  var varLocal = 10;
  let letLocal = 20;
  const constLocal = 30;

  console.log(varNum, letNum, constNum);
  console.log(varLocal, letLocal, constLocal);
}

print();
// console.log(varLocal, letLocal, constLocal);
