// Object literals

const movie = {
  title: "The Avengers",
  year: 2012,
  genre: "Action, Sci-Fi, thriller",
  cast: {
    main_lead: "Robert",
    other: "Chris",
  },
  getDetails() {
    console.log(
      `Title: ${this.title}\nYear: ${this.year},\nGenre: ${this.genre}`
    );
  },
  getMovieDetails: function (detail) {
    console.log(movie[detail]);
  },
};

movie.getDetails();
console.log(movie.title);

const detail = "cast";
movie.getMovieDetails(detail);
