"use strict";


let personalMovieDB = {
    count: 0,
    movies:{},
    actors: {},
    genres: [],
    privat: false, 
    start: function() {
            personalMovieDB.count = +prompt ("How many films did you watch?", " ");
        
            while (personalMovieDB.count == ' ' || personalMovieDB.count == null || isNaN (personalMovieDB.count)) {
                personalMovieDB.count = +prompt ("How many films did you watch?", " ");
            }
        },

    rememberMyFilms: function() {
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
},

    detectPersonalLevel: function() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
        console.log("Вы класический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        document.write('Произошла ошибка');
    } 
},
    showMyDB: function (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    } else {
        alert("Access closed");
    }
},
    toggleVisibleMyDB:  function(){
        if (personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
    for (let i = 1; i < 4; i++) {
        let genre = prompt (`Ваш любимый жанр под номером ${i}`);
        
        if(genre === '' || genre === null){
            console.log('Вы ввели некорректные данные или не ввели их вообще');
           i--; 
        } else {
            personalMovieDB.genres[i - 1] = genre;
        }

        // Другой метод
// let genres = prompt (`Введите ваши любимые жанры через запятую`);
//  if (genres === " " || genres === null) {
//  console.log('Не корректно);
// } else {
//  personalMovieDB.genres = genres.split(' , ');
//  personalMovieDB.genres.sort();
// }
    } 
    personalMovieDB.genres.forEach((item, i) => {
        console.log(`Любимый жанр ${i + 1} - это ${item}`)
    });
    }
};



// console.log(personalMovieDB);