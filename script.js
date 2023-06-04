"use strict";

let numbersOfFilms;

function start () {
    numbersOfFilms = +prompt ("How many films did you watch?", " ");

    while (numbersOfFilms == ' ' || numbersOfFilms == null || isNaN (numbersOfFilms)) {
        numbersOfFilms = +prompt ("How many films did you watch?", " ");
    }
}

start();


let personalMovieDB = {
    count: numbersOfFilms,
    movies:{},
    actors: {},
    genres: [],
    privat: false 
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt (" One of the last movies did you watch?", " "),
            b = +prompt (" How much would you rate it", " ");
    
        if (a != null && b != null && a != ' ' && b != '  ' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done');
        } else {
            console.log("Error");
            i--;
        }      
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
        console.log("Вы класический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        document.write('Произошла ошибка');
    } 
}

detectPersonalLevel();

// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы

function showMyDB () {
    if (personalMovieDB.privat != true) {
        console.log(personalMovieDB)
    } else {
        alert("Access closed")
    }
}

showMyDB ();


// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres

function writeYourGenres () {
    for (let i = 1; i < 4; i++) {
        let a = prompt (`Ваш любимый жанр под номером ${i}`, " ");
        personalMovieDB.genres[i] = a;

    }
}

writeYourGenres();

// console.log(personalMovieDB);