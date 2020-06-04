'use strict';

document.addEventListener('DOMContentLoaded', () => {
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

    const advertRemover = (arr) => {
        arr.forEach(element => {
            element.remove();
        });
    };

    const bGround = document.querySelector('.promo__bg');
    const genreText = bGround.querySelector('.promo__genre');

    const makeChanges = () => {
        genreText.textContent = 'драма';
        bGround.style.backgroundImage = "url('img/bg.jpg')";
    };

    const movieList = document.querySelector('.promo__interactive-list');

    const sortArr = (arr) => {
        arr.sort();
    };

    const createMovieList = (films, parent) => {
        parent.innerHTML = '';
        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">
                ${i + 1}.
                ${film}
                <div class="delete"></div>
            </li>
        `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            });
        });
    };

    const addForm = document.querySelector('form.add');
    const addInput = addForm.querySelector('.adding__input');
    const checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log('Добавляем любимый фильм');
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, movieList);
        }

        event.target.reset();
    });

    advertRemover(advert);
    makeChanges();
    createMovieList(movieDB.movies, movieList);

    console.log(movieDB.movies);

});
