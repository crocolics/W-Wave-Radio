//Search
const searchBtn = document.querySelector('.header__main-nav__search__btn--main');
const searchForm = document.querySelector('.header__main-nav__search__form');
const searchInput = document.querySelector('.header__main-nav__search__form__input')
const body = document.querySelector('body')

searchBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    searchForm.classList.add('header__main-nav__search__form--active');
    searchBtn.classList.add('header__main-nav__search__btn--inactive');
});

searchInput.addEventListener('click', function (e) {
    e.stopPropagation();
    searchForm.classList.add('header__main-nav__search__form--active');
    searchBtn.classList.add('header__main-nav__search__btn--inactive');
});

body.addEventListener('click', function () {
    searchForm.classList.remove('header__main-nav__search__form--active');
    searchBtn.classList.remove('header__main-nav__search__btn--inactive');
})

// Login modal
const modalOverlay = document.querySelector('.header__main-nav__overlay');
const loginBTN = document.querySelector('.header__main-nav__nav__in');
const modalClose = document.querySelector('.header__main-nav__overlay__modal-in__btn-close');
loginBTN.addEventListener('click', function () {
    document.body.classList.add('stop-scroll');
    modalOverlay.classList.add('header__main-nav__overlay--active');
});
modalClose.addEventListener('click', () => {
    modalOverlay.classList.remove('header__main-nav__overlay--active');
    document.body.classList.remove('stop-scroll');
});
modalOverlay.addEventListener('click', function (em) {
    if (em.target == modalOverlay) {
        modalOverlay.classList.remove('header__main-nav__overlay--active');
        document.body.classList.remove('stop-scroll');
    }

});

// Burger
const burgerMenu = document.querySelector('.header__main-nav__burger');
const burgerList = document.querySelector('.header__main-nav__nav__list');
const headerContainer = document.querySelector('.header__site-nav__container');
burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('header__main-nav__burger--close');
    burgerList.classList.toggle('header__main-nav__nav__list--active');
    document.body.classList.toggle('stop-scroll');
    document.querySelector('.header__site-nav__nav__list').classList.toggle('header__site-nav__nav__list--active')

});
burgerList.addEventListener('click', function () {
    burgerMenu.classList.remove('header__main-nav__burger--close');
    burgerList.classList.remove('header__main-nav__nav__list--active');
    document.querySelector('.header__site-nav__nav__list').classList.remove('header__site-nav__nav__list--active')
    document.body.classList.remove('stop-scroll');

});
document.querySelector('.header__site-nav__nav__list').addEventListener('click', function () {
    burgerMenu.classList.remove('header__main-nav__burger--close');
    burgerList.classList.remove('header__main-nav__nav__list--active');
    document.querySelector('.header__site-nav__nav__list').classList.remove('header__site-nav__nav__list--active')
    document.body.classList.remove('stop-scroll');

});

// Что еще в эфире
new Accordion('.header__site-nav__accordion', {
    elementClass: 'header__site-nav__accordion__wrapper', //Блок аккардиона с кнопкой и контентом
    triggerClass: 'header__site-nav__accordion__wrapper__btn', //Кнопка, по нажатию которой происходит разворачивание аккардиона
    panelClass: 'header__site-nav__accordion__wrapper__content', //Контент аккардиона
    activeClass: 'header__site-nav__accordion--active' //Класс активного аккардиона
});

// More btn
const showMore = document.querySelector('.podcasts__btn');
const itemsLength = document.querySelectorAll('.podcasts__list__item').length;
let items;
if (window.innerWidth >= 680) {
    items = 8;
}
else {
    items = 4;
};

showMore.addEventListener('click', () => {
    items += 4;
    const array = Array.from(document.querySelector('.podcasts__list').children);
    const visItems = array.slice(0, items);
    visItems.forEach(el => el.classList.add('is-vsbl'))
    if (visItems.length === itemsLength) {
        showMore.style.display = 'none';
    }
})

// Choices
const element = document.querySelector('#broadcasts__select-div__select');
const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
});


// Accordion
new Accordion('.quests__main__accordion__list', {
    elementClass: 'quests__main__accordion__list__item', //Блок аккардиона с кнопкой и контентом
    triggerClass: 'quests__main__accordion__list__item__btn', //Кнопка, по нажатию которой происходит разворачивание аккардиона
    panelClass: 'quests__main__accordion__list__item__content-list', //Контент аккардиона
    activeClass: 'accordion--active' //Класс активного аккардиона
});


// Tabs
let tabsBtn = document.querySelectorAll('.quests__main__accordion__list__item__content-list__item__btn'); //Кнопки, по нажатию на которую происходит переключение таба
let tabsItem = document.querySelectorAll('.quests__main__descr-list__item'); // Блок с контентом таба

tabsBtn.forEach(function (el) {
    el.addEventListener('click', function (e) {
        const path = e.currentTarget.dataset.path;

        tabsBtn.forEach(function (btn) { btn.classList.remove('quests__main__accordion__list__item__content-list__item__btn--active') }); //Удаляем класс активности всем кнопкам таба
        e.currentTarget.classList.add('quests__main__accordion__list__item__content-list__item__btn--active'); //Добавляем класс активности нужной кнопке таба

        tabsItem.forEach(function (elem) { elem.classList.remove('quests__main__descr-list__item--active') }); //Удаляем все классы активности табов
        document.querySelector(`[data-target="${path}"]`).classList.add('quests__main__descr-list__item--active'); //Добавляем класс активности табу в соответствии с нажатой кнопкой

    });
})

// Прокуртка страницы после выбора таба
if (window.screen.width <= '974') {
    const scrlTO = document.querySelector('.quests');
    const tabsBTNs = document.querySelectorAll('.quests__main__accordion__list__item__content-list__item__btn');
    tabsBTNs.forEach(function (elmt) {
        elmt.addEventListener('click', function () {
            scrlTO.scrollIntoView(false);
        });
    });
}

// Swiper
let swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: false,
    spaceBetween: 20,
    breakpoints: {
        680: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1250: {
            slidesPerView: 4,
            spaceBetween: 30,
        }

    }
});

// Validator
//Инициализируем плагин
new JustValidate('.about__form', {
    // Описываем требования к полям
    rules: {
        textarea: {
            required: true,
            minLength: 2,
            maxLength: 1000
        },
        name: {
            required: true,
            minLength: 2,
            maxLength: 30
        },
        mail: {
            required: true,
            email: true
        },
        checkbox: {
            required: true
        },
    },
    //Изменяем текста сообщений для разных событий
    messages: {
        textarea: {
            required: 'Ведите текст сообщения',
            minLength: 'Неужели Вам нечего написать?',
        },
        name: {
            required: 'Вы не ввели имя',
            minLength: 'Слишком короткое имя',
        },
        mail: {
            email: 'Введите корректный email',
            required: 'Вы не ввели email',
        },
        checkbox: {
            required: ' '
        },
    },
    submitHandler: function(thisForm) {
        let formData = new FormData(thisForm);
    
        let xhr = new XMLHttpRequest();
    
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log('Отправлено');
            }
          }
        }
    
        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);
    
        // thisForm.reset();
      }
});


// Swiper for Playlists
function myFunction(y) {
    if (y.matches) { // Если медиа запрос совпадает
        // let plList = document.querySelectorAll('.playlists__genre__list__item');
        // let plUL = document.querySelector('.playlists__genre__list');
        // plUL.classList.add('swiper-wrapper');
        // plList.forEach(el => el.classList.add('swiper-slide'));
        let swiperPl = new Swiper('.swiper-pl', {
            slideClass: 'playlists__genre__list__item',
            wrapperClass: 'playlists__genre__list',
            slidesPerView: 'auto',
            loop: false,
            spaceBetween: 15,

        });
    }
}

var y = window.matchMedia("(max-width: 680px)")
myFunction(y) // Вызов функции прослушивателя во время выполнения
y.addListener(myFunction) // Прикрепить функцию прослушивателя при изменении состояния
