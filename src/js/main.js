function testWebP(callback) {

    var webP = new Image();
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

$(document).ready(function() {
    $('.block__title').click(function() {
        $(this).toggleClass('active').next().slideToggle(300);
    });
});