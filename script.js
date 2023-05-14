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
    movies:{},
    actors: {},
    genres: [],
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

// 3.1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
// 4) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
// возвращаем пользователя к вопросам опять

let a,b;
for (let i = 0; i < 2; i++) {
    a = prompt (" One of the last movies did you watch?", " ");
    b = +prompt (" How much would you rate it", " ");
    personalMovieDB.movies[a] = b;
}


// 5) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

if (personalMovieDB.count < 10 || personalMovieDB.count > 0) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 || personalMovieDB.count < 30 ) {
    console.log("Вы класический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    document.write('Произошла ошибка');
} 







console.log(personalMovieDB);