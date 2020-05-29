/*
4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const advertTitle = document.querySelectorAll('.promo__adv-title');
const advert = document.querySelectorAll('.promo__adv img');

advertTitle[0].remove();
advert.forEach(element => {
    element.remove();
});

const bGround = document.querySelector('.promo__bg');
const genreText = bGround.querySelector('.promo__genre');
genreText.textContent = 'драма';
bGround.style.backgroundImage = "url('img/bg.jpg')";

const movieList = document.querySelector('.promo__interactive-list');
movieList.innerHTML = '';

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">
            ${i+1}.
            ${film}
            <div class="delete"></div>
        </li>
    `;
});