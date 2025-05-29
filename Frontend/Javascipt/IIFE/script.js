(function (a, b) {
  console.log(a + b);
})(2, 4);

const user = (function () {
  const userData = {
    userName: "John",
    userAge: 20,
  };

  function getName() {
    console.log(userData.userName);
  }

  function updateAge(age) {
    console.log(userData.userAge + age);
  }
  return { getName, updateAge };
})();

// console.log(user.getName);
// console.log(user.updateAge);

user.getName();
user.updateAge(20);
