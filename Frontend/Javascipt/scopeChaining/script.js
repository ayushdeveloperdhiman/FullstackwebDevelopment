var a = 10;
let b = 20;
const c = 30;

function print() {
  var a = "ten";
  let b = "twenty";
  console.log(a, b, c);

  function innerPrint() {
    var a = "inner ten";
    console.log(a, b, c);
  }
  innerPrint();
}

print();

console.log(a, b, c);
