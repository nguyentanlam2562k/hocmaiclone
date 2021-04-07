
// SCROLL ZOOM LOGO
function scrollZoomLogo() {
    let elm = document.querySelector('.left__logo');
    window.addEventListener('scroll', () => {
        let posWindow = window.pageYOffset;
        posWindow > 0 ? elm.style.cssText = 'width: 6.5rem; height: 6.5rem' : elm.style.cssText = 'width:10.5rem; height:10.5rem';
    })
}

scrollZoomLogo();

// SHOW NAVIGATION MENU
function toggleNavMenu() {
    let elmNavShow = document.querySelector('.nav-show');
    let elmNavMenu = document.querySelector('.nav-menu');
    let elmBtnClose = document.querySelector('.btn-close');
    elmNavShow.addEventListener('click', (e) => {
        e.preventDefault();
        if (!elmNavMenu.classList.contains('active')) {
            elmNavMenu.classList.add('active');
            elmNavMenu.style.cssText = 'transform: translateX(0)';
        }
    })
    elmBtnClose.addEventListener('click', (e) => {
        e.preventDefault();
        if (elmNavMenu.classList.contains('active')) {
            elmNavMenu.classList.remove('active');
            elmNavMenu.style.cssText = 'transform: translateX(-100%)';
        }
    })
}

// TOGGLE DROPDOWN MENU MOBILE
function dropdownMenuMobile () {
    let elmDropdownMobile = document.querySelector('.dropdown-mobile');
    let elmDropdownContent = document.querySelector('.dropdown-content');


    elmDropdownMobile.addEventListener('click', (e) => {
        e.preventDefault();
        if (elmDropdownContent.classList.contains('active')) {
            elmDropdownContent.classList.remove('active');
            elmDropdownContent.style.cssText = 'display: none';  
        } else {
            elmDropdownContent.classList.add('active');
            elmDropdownContent.style.cssText = 'display: block';        
        }
    })
}

if (window.screen.width <= 1200) {
    toggleNavMenu();
    dropdownMenuMobile();
}




// SHOW HOT-NEWS
var swiper = new Swiper('.swiper-container.hot-news', {
    loop: true,
    autoplay: true,
    allowSlideNext: true,
});



// MENU SLIDER
var swiper = new Swiper('.slider__main-menu', {
    loop: true,
    autoplay: true,
    allowSlideNext: true,
    pagination: {
    el: '.swiper-pagination',
    clickable: true
    },
});

// BACKGROUND SLIDER
function bgSlider() {
    elm = document.querySelector('.swiper-slide-active');
    index = elm.getAttribute('data-swiper-slide-index');
    bgElm = document.querySelector('.main-menu');
    if (index == 0) {
        bgElm.style.background = 'linear-gradient(60deg, #ff95cb, #ffdada, #ff8787)';
    } else if (index == 1) {
        bgElm.style.background = 'linear-gradient(60deg, #ff8759, #ff7689, #ffc0f7)';
    } else if (index == 2) {
        bgElm.style.background = 'linear-gradient(60deg, #ff9e9e, #ffb37d, #fffdc7)';
    } else if (index == 3) {
        bgElm.style.background = 'linear-gradient(60deg, #54ffff, #abb2ff, #8cffff)';
    } else if (index == 4) {
        bgElm.style.background = 'linear-gradient(60deg, #ffe1fe, #64e2ff, #eddfff)';
    } else if (index == 5) {
        bgElm.style.background = 'linear-gradient(60deg, #fd5f5f, #ff9584, #feffcb)';
    } else if (index == 6) {
        bgElm.style.background = 'linear-gradient(60deg, #94c4ff, #ffd7d1, #d3cbff)';
    }
}

setInterval(() => {
    bgSlider();   
}, 500);

// MAIN THPT SLIDER
var swiperMainTHPT = new Swiper('.main-thpt__top-swiper', {
    loop: true,
    autoplay: true,
    allowSlideNext: true,
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
    }
});

var swiperMainTHPT = new Swiper('.main-thpt__bottom-swiper', {
    loop: true,
    allowSlideNext: true,
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
    }
});

// ABOUT SWIPER

var swiper = new Swiper('.about__swiper', {
    loop: true,
    // autoplay: true,
    allowSlideNext: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  });
  

//  FOOTER-TOP
if (window.screen.width <= 1200) {
    let listCaptionFooter = document.querySelectorAll('.list__caption');
    Array.from(listCaptionFooter).forEach((e) => {
        e.addEventListener('click', () => {
            let elm = e.nextElementSibling;
            if (elm.style.height) {
                elm.style.height = null;
                elm.classList.remove('active');
            } else {
                elm.style.height = elm.scrollHeight + 'px';
                elm.classList.add('active');
            }
        })
    })
}