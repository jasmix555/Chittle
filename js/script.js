//make hamburger button for responsive screen
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

//when clicked make function
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {

    //when scroll down the bar goes back to normal function
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

}

//make search button page when clicked
document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
}


//make swiper for the main visual page
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});
//make swiper for the review page
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 2,
        },
        830: {
            slidesPerView: 2,
        },
        1050: {
            slidesPerView: 3,
        },
    },
});

function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
    setInterval(loader, 1500);
}

window.onload = fadeOut;

const card = document.querySelectorAll(".card__inner");
for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("click", function (e) {
        card[i].classList.toggle('is-flipped');
    });

    
}
