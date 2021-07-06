function testWebP(callback) {

    let webP = new Image();
    webP.onload = webP.onerror = function() {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function(support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});
new Swiper('.intro', {

    slidesPerView: 1,
    watchOverflow: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },


});
new Swiper('.promotions-container', {

    navigation: {
        nextEl: '.next-arrow',
        prevEl: '.prev-arrow'
    },
    autoplay: {
        delay: 5000,
    },
    slidesPerView: 4,
    watchOverflow: true,
    spaceBetween: 31,
    breakpoints: {
        480: {
            slidesPerView: 2
        },
        955: {
            slidesPerView: 4
        }

    }
});

new Swiper('.stuff-container', {

    navigation: {
        nextEl: '.next-arrow',
        prevEl: '.prev-arrow'
    },
    autoplay: {
        delay: 5000,
    },
    slidesPerView: 3,
    watchOverflow: true,
    spaceBetween: 31,

});

$(document).ready(function() {
    $('.accordion').click(function() {
        $(this).toggleClass('active').next().slideToggle(300);
    });

});

let btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    this.classList.toggle('active', true);
});

function playVideo() {
    let popup = document.getElementById("myPopup");
    popup.classList.toggle("show");


    if (popup.paused || popup.addEventListener != 'ended') {
        popup.play();
    } else {
        popup.pause();
    }

}