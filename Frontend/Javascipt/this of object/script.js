const movie1 = {
  title: "The Avengers",
  year: 2012,
  genre: "Action, Sci-fi, Thriller",
  cast: {
    main_lead: "Robert Downey",
    other: "Chris Evans",
  },
  getDetails() {
    console.log(`
        Title: ${this.title},
        Year: ${this.year},
        Genre: ${this.genre},
        Cast: ${this.cast.main_lead}
              ${this.cast.other}`);
  },
};

movie1.getDetails();

const movie2 = {
  title: "Movie2",
  year: 2024,
  genre: "Action, Sci-fi, Thriller",
  cast: {
    main_lead: "Robert Downey",
    other: "Chris Evans",
  },
  getDetails() {
    console.log(`
        Title: ${this.title},
        Year: ${this.year},
        Genre: ${this.genre},
        Cast: ${this.cast.main_lead}
              ${this.cast.other}`);
  },
};

movie2.getDetails();
