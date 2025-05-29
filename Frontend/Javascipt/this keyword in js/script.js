// this keyword in js

"use strict";
console.log(this);

function checkThis() {
  console.log(this);
}

checkThis();

const user1 = {
  userName: "John",
  userAge: 12,
  work: function () {
    console.log(this);
  },
};

user1.work();

const user2 = {
  userName: "Hary",
};

user2.work = user1.work;

user2.work();

const checkThisInArrowFunction = () => {
  //parent env
  console.log(this);
};

checkThisInArrowFunction();
