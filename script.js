"use strict";

// 1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
// 'Сколько фильмов вы уже посмотрели?'

let numbersOfFilms = +prompt ("How many films did you watch?", " ");

// 2) Создать объект personalMovieDB и в него поместить такие свойства:
//     - count - сюда передается ответ на первый вопрос
//     - movies - в это свойство поместить пустой объект
//     - actors - тоже поместить пустой объект
//     - genres - сюда поместить пустой массив
//     - privat - в это свойство поместить boolean(логическое) значение false


let personalMovieDB = {
    count: numbersOfFilms,
    movies:" ",
    actors: " ",
    genres: " ",
    privat: false
};

// 3) Задайте пользователю по два раза вопросы:
//     - 'Один из последних просмотренных фильмов?'
//     - 'На сколько оцените его?'
// Ответы стоит поместить в отдельные переменные
// Записать ответы в объект movies в формате: 
//     movies: {
//         'logan': '8.1'
//     }


let nameOfFilm = prompt (" One of the last movies did you watch?", " ");
let nameOfFilm1 = prompt (" One of the last movies did you watch?", " ");
                
let gradeForFilm = +prompt (" How much would you rate it", " ");
let gradeForFilm1 = +prompt (" How much would you rate it", " ");
                    
personalMovieDB.movies =  `${nameOfFilm}: ${gradeForFilm}`;
personalMovieDB.movies =  `${nameOfFilm1}: ${gradeForFilm1}`

// personalMovieDB.movies = nameOfFilm;
// personalMovieDB.movies.nameOfFilm= gradeForFilm;



console.log(personalMovieDB);