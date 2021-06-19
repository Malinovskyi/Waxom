//SLider

let slideNow = 1;
let slideCount = $('.header-image__slider-list').children().length;
let navBtnId = 0;
let translateWidth = 0;

$(document).ready(function () {
    $('.slider-btn__next').click(function () {
        nextSlide();
    });
    $('.slider-btn__prev').click(function () {
        prevSlide();
    });
});

function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = 0;
        $('.header-image__slider-list').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('.header-image__slider-wrapper').width() * (slideNow);
        $('.header-image__slider-list').css({
            'transform': 'translate(' + translateWidth + 'px)',
        });
        slideNow++;
    }
}

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('.header-image__slider-wrapper').width() * (slideCount - 1);
        $('.header-image__slider-list').css({
            'transform': 'translate(' + translateWidth + 'px)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('.header-image__slider-wrapper').width() * (slideNow - 2);
        $('.header-image__slider-list').css({
            'transform': 'translate(' + translateWidth + 'px)',
        });
        slideNow--;
    }
}

//Scroll to section
const headerLinks = document.querySelectorAll(".header__list-item--link[data-goto]");
const headerLinks2 = document.querySelectorAll(".sidebar__list-link[data-goto]");

if (headerLinks.length > 0) {
    headerLinks.forEach(headerLink => {
        headerLink.addEventListener("click", onMenuLinkClick);
    })
}

function onMenuLinkClick(e) {
    const headerLink = e.target;
    if (headerLink.dataset.goto && document.querySelector(headerLink.dataset.goto)) {
        const goToBlock = document.querySelector(headerLink.dataset.goto);
        const goToBlockValue = goToBlock.getBoundingClientRect().top + pageYOffset;//- document.querySelector('header').offsetHeight

        window.scrollTo({
            top: goToBlockValue,
            behavior: "smooth"
        });
        e.preventDefault();
    }
}

if (headerLinks2.length > 0) {
    headerLinks2.forEach(headerLink2 => {
        headerLink2.addEventListener("click", onMenuLinkClick2);
    })
}

function onMenuLinkClick2(e) {
    const headerLink2 = e.target;
    if (headerLink2.dataset.goto && document.querySelector(headerLink2.dataset.goto)) {
        const goToBlock2 = document.querySelector(headerLink2.dataset.goto);
        const goToBlockValue2 = goToBlock2.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

        window.scrollTo({
            top: goToBlockValue2,
            behavior: "smooth"
        });
        e.preventDefault();
    }
}


//SIDEBAR
function openMenu() {
    document.getElementById("sidebar").classList.toggle('active');
}




