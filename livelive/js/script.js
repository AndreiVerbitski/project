"use strict";

const numberOfFilms = +prompt("How many movies have you senn?", "");

const personalMovieDataBase = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("What lasts movies have you seen?", ""),
    b = prompt("What`s rate you give it?", ""),
    c = prompt("What lasts movies have you seen?", ""),
    d = prompt("What`s rate you give it?", "");

personalMovieDataBase.movies[a] = b;
personalMovieDataBase.movies[c] = d;

console.log(personalMovieDataBase);

