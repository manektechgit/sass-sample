$(document).ready(function(){
    $("header .navbar-toggler").click(function(){
        $(this).toggleClass('active');
        $(".navbar").toggleClass("show");
        $("body").toggleClass("overflow_body");
    });

    $('.navbar').on('hide.bs.dropdown', function (e) {
        if (e.clickEvent) {
          e.preventDefault();
        }
    });
    
    if ($(window).width() > 991) {  
      $('nav li.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
        $('body').addClass('overly-menu');
      }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
        $('body').removeClass('overly-menu');
      });
    }

    // stickyHeader
    $(function () {
        var shrinkHeader = 100;
        $(window).scroll(function () {
            var scroll = getCurrentScroll();
            if (scroll >= shrinkHeader) {
                $('header').addClass('sticky');
            } else {
                $('header').removeClass('sticky');
            }
        });
        function getCurrentScroll() {
            return window.pageYOffset || document.documentElement.scrollTop;
        }
    });

    // hero-slder
    var swiper = new Swiper('.hero-slder', {
        speed: 2000,
        loop: true,
        autoplay: {	
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });

    // testimonial
    var swiper = new Swiper('.testimonial', {
      autoplay: {	
          delay: 2000,
          disableOnInteraction: false,
      },
      loop: true,
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
    });

    // client-brand-slder
    var swiper = new Swiper('.client-brand-slder', {
        slidesPerView: 6,
        spaceBetween: 24,
        loop: true,
        speed: 1000,
        autoplay: {	
            delay: 2000,
            disableOnInteraction: false,
        },
           breakpoints: {
            300: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 60,
            },
        }
   });

    // counter scroll
    var a = 0;
    $(window).scroll(function() {
    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');
        $({
            countNum: $this.text()
        }).animate({
            countNum: countTo
            },
            {
            duration: 7000,
            easing: 'swing',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
                //alert('finished');
            }

            });
        });
        a = 1;
    }
    });

});   