// Hamburger

function Burger(burger, menu) {
    this.burger = burger;
    this.menu = menu;
    let self = this;
    this.burger.setAttribute('data-burger', 'data-burger');
    this.menu.setAttribute('data-burger', 'data-burger');
    Array.from(this.burger.querySelectorAll('*')).forEach(el => {
        el.setAttribute('data-burger', 'data-burger')
    });
    Array.from(this.menu.querySelectorAll('*')).forEach(el => {
        el.setAttribute('data-burger', 'data-burger')
    });

    this.burger.onclick = function (e) {
        document.body.classList.toggle('overflow-js');
        self.menu.classList.toggle('active');
        this.classList.toggle('open');
        window.addEventListener('scroll')
    };
    document.onclick = function (e) {
        if (e.target.hasAttribute('data-burger')) {

        } else {
            self.burger.classList.remove('open');
            self.menu.classList.remove('active');
            document.body.classList.remove('overflow-js')
        }
    };
}

let headerBurger = new Burger(
    document.querySelector('.burger'),
    document.querySelector('.header-burger-menu')
);


// Header Scroll & Back To Top

window.addEventListener('scroll', () => {

    //  Nav Scroll

    if ($(window).width() > 767) {
        if ($(window).scrollTop() > 120) {
            $('.header').addClass('js-header-fixed');
        } else {
            $('.header').removeClass('js-header-fixed');
        }
    }

    // Back To Top

    if ($(window).scrollTop() > $('main section:first').offset().top + $('main section:first').height()) {
        $('#back-to-top').fadeIn(300).css('display', 'flex').removeClass('zoomOut').addClass('fadeInUp');
    } else {
        $('#back-to-top').removeClass('fadeInUp').addClass('zoomOut').fadeOut(300);
    }
});

document.querySelector('#back-to-top').addEventListener('click', (e) => {
    $("html, body").animate({scrollTop: 0}, 1000);
    return false;
});


// NavLink Scroll

$('.hero__scroll').on('click', function(event){
    let   id  = $(this).attr('data-scroll'),
        top = $(id).offset().top;
    $('html, body').animate({scrollTop: top - 90}, 1200);
});


// Sliders

let heroSwiper = new Swiper('.hero-swiper__wrap .swiper-container', {
    pagination: {
        el: '.hero-swiper__wrap .swiper-pagination',
        clickable: true,
    },
    slidesPerView: 1,
    effect: 'fade',
    simulateTouch: false,
    allowTouchMove: false,
    autoplay: {
        delay: 3000,
        // stopOnLastSlide: true,
    },
    speed: 1500,
});


// Mobile Swiper

if ($(window).width() <= 767) {


    let partnersMobileSwiper = new Swiper('.partners-swiper .swiper-container', {
        slidesPerView: 2,
        slidesPerColumn: 3,
        pagination: {
            el: '.partners-swiper .swiper-pagination',
        },
    });

    let whatAboutMobileSwiper = new Swiper('.what-about__swiper .swiper-container', {
        slidesPerView: 1,
        pagination: {
            el: '.what-about__swiper .swiper-pagination',
        },
    });

}


// Tooltip

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

// Accordion

// $(function() {
//     const Accordion = function(el, multiple) {
//         this.el = el || {};
//         this.multiple = multiple || false;
//
//         const Accrodionlinks = this.el.find('.accordion-link');
//
//         Accrodionlinks.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
//     };
//
//     Accordion.prototype.dropdown = function(e) {
//         var $el = e.data.el;
//         $this = $(this);
//             $next = $this.next();
//
//         $next.slideToggle();
//         $this.parent().toggleClass('open');
//
//         if (!e.data.multiple) {
//             $el.find('.accordion-submenu').not($next).slideUp().parent().removeClass('open');
//         }
//     };
//
//     let accordion = new Accordion($('.accordion'), false);
// });

$('.accordion-link').click(function(e) {
    e.preventDefault();

    const $this = $(this);

    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(300);
    } else {
        $this.parent().parent().find('li .accordion-inner').removeClass('show');
        $this.parent().parent().find('li .accordion-inner').slideUp(300);
        $this.next().toggleClass('show');
        $this.next().slideToggle(300);
    }
    // if ($('.inner').hasClass('show')){
    //     $('.reference-main-wrapper').addClass('reference-main-wrapper--active');
    // }else {
    //     $('.reference-main-wrapper').removeClass('reference-main-wrapper--active');
    // }

});