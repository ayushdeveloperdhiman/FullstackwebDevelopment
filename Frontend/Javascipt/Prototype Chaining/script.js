function Movie(title) {
  this.title = title;
  // this.getDetails = function () {
  //   console.log(`Title: ${this.title}`);
  // };
}
Movie.prototype.getDetails = function () {
  console.log(`Title: ${this.title}`);
};

Movie.prototype.year = 2012;

const movie1 = new Movie("The Avengers");
console.log(movie1);
const movie2 = new Movie("The Avengers");
console.log(movie2);

const movie3 = new Movie("The Avengers");
console.log(movie3.__proto__);
