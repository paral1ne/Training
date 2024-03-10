let numberOfFilms;

function detectPersonalLevel() {
  if (typeof numberOfFilms != "number") {
    alert("Error");
  } else if (numberOfFilms < 10) {
    alert("Malo ti smotrish!");
  } else if (numberOfFilms < 30) {
    alert("You are classic haha");
  } else if (numberOfFilms >= 30) {
    alert("Congratulations you are movieFan");
  }
}
function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
  }
}
function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Последний помотренный фильм"),
      b = prompt("Оцени этот фильм");
    if (a.length != 0 && b.length != 0 && a.length < 50) {
      personalMovieDB.movies[a] = b;
    } else {
      alert("Oshibka!");
      i--;
    }
  }
}
function showMyDB() {
  if (!personalMovieDB.privat) {
    console.log(personalMovieDB);
  }
}

function writeYourGeners() {
  for (let i = 1; i <= 3; i++) {
    let a = prompt(`Любимый жанр под номером ${i}`);
    personalMovieDB.geners[i - 1] = a;
  }
}

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  geners: [],
  privat: false,
};
writeYourGeners();

start();

rememberMyFilms();

detectPersonalLevel();
