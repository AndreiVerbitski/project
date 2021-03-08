"use strict";

const numberOfFilms = +prompt("How many movies have you senn?", "");

const personalMovieDataBase = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


console.log(personalMovieDataBase);

for (let i = 0; i < 2; i++) {

    const a = prompt("What lasts movies have you seen?", ""),
        b = prompt("What`s rate you give it?", "");
    
    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDataBase.movies[a] = b;
        console.log("done");
    } else {
        console.log("Error");
        i--;
    }
        
}

if (personalMovieDataBase.count < 10) {
    console.log("its a low");
} else if (personalMovieDataBase.count >= 10 && personalMovieDataBase.count < 30) {
    console.log("Its okay");
} else if (personalMovieDataBase.count >= 30) {
    console.log("You are like films");
} else {
    console.log("Error");
}
console.log(personalMovieDataBase)
let nn = 0;
while (n < 2) {
    
}