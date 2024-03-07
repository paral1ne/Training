let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  geners: [],
  privat: false,
};
let lastSeenFilm = prompt("Last film?");
let filmRaito = prompt("Rait your last film");
let a = prompt("Last film?");
let b = prompt("Rait your last film");
personalMovieDB.movies[lastSeenFilm] = filmRaito;
personalMovieDB.movies[a] = b;

console.log(personalMovieDB);
