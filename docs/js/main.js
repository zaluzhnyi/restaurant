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
    watchOverflow: true,
    spaceBetween: 31,
    breakpoints: {

        480: {
            slidesPerView: 1
        },
        767: {
            slidesPerView: 2
        },
        955: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 4
        }

    }
});

new Swiper('.stuff-container', {

    navigation: {
        nextEl: '.next-arrow',
        prevEl: '.prev-arrow'
    },
    pagination: {
        el: ".swiper-pagination-stuff",
        clickable: true,
    },
    autoplay: {
        delay: 5000,
    },
    watchOverflow: true,
    spaceBetween: 31,
    breakpoints: {
        480: {
            slidesPerView: 1
        },
        650: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }

    }

});

new Swiper('.feedback-container', {

    slidesPerView: 1,
    watchOverflow: true,
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: '.next-arrow',
        prevEl: '.prev-arrow'
    },


});

new Swiper('.blog-container', {

    pagination: {
        el: ".swiper-pagination-blog",
        clickable: true,
    },
    navigation: {
        nextEl: '.next-arrow',
        prevEl: '.prev-arrow'
    },
    autoplay: {
        delay: 5000,
    },
    breakpoints: {
        480: {
            slidesPerView: 1
        },
        650: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }

    },
    watchOverflow: true,
    spaceBetween: 31,

});

$(document).ready(function() {
    $('.header-burger').click(function(event) {
        $('.header-burger , .header-nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function() {
    $('.accordion').click(function() {
        $(this).toggleClass('active').next().slideToggle(300);
    });

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
//filter
let btnsContainer = document.querySelector('.filter-menu')

btnsContainer.addEventListener('click', function(e) {
    if (!e.target.closest("button")) return;
    let btn = e.target.closest("button");
    if (btn.classList.contains('active')) return;

    let btns = Array.from(this.querySelectorAll('button'));

    removeClass(btns, 'active');
    btn.classList.add('active');

    let btnId = btn.id;

    let boxs = Array.from(document.querySelectorAll('.menu-card'));
    removeClass(boxs, 'hide');
    if (btnId === 'all') return;

    boxs
        .filter(box => box.dataset.box !== btnId)
        .map(box => box.classList.add('hide'));

});

function removeClass(btnsArr, className) {
    btnsArr
        .filter(item => item.classList.contains(className))
        .map(item => item.classList.remove(className));
}