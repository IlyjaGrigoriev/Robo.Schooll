jQuery(document).ready(function () {

    //teachers
    $('.teachers-slider').slick({
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
                }
              },
          ]
    });

    //reviews
    $('.reviews-slider').slick();


    // tooltip
    $(function () {
        $("[data-tooltip]").mousemove(function (eventObject) {
            $data_tooltip = $(this).attr("data-tooltip");
            $("#tooltip").html($data_tooltip)
                .css({
                    "top": eventObject.pageY + 5,
                    "left": eventObject.pageX + 5
                })
                .show();
        }).mouseout(function () {
            $("#tooltip").hide()
                .html("")
                .css({
                    "top": 0,
                    "left": 0
                });
        });
    });

    //fixed header
    $(function () { });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('header').addClass('fixed');
        }
        else {
            $("header").removeClass("fixed");
        }
    })

    /* Бургер меню */
    function burgerMenu(selector) {
        let menu = $(selector);
        let button = menu.find('.burger-menu__button');
        let links = menu.find('.burger-menu__link');

        button.on('click', (e) => {
            e.preventDefault();
            toggleMenu();
        });
        links.on('click', () => toggleMenu());
        function toggleMenu() {
            menu.toggleClass('burger-menu_active');

            if (menu.hasClass('burger-menu_active')) {
                $('body').css('overflow', 'hidden');
            } else {
                $('body').css('overflow', 'visible');
            }
        }
    }
    burgerMenu('.burger-menu');

    $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            columnWidth: '.grid-sizer'
        }
    });



    function isInViewport(element) {
        let rect = element[0].getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= $(window).height() &&
          rect.right <= $(window).width()
        );
      }
      
      $(window).scroll(function() {
        $('.fishka1, .fishka2, .fishka3, .fishka4').each(function() {
          if (isInViewport($(this)) && !$(this).hasClass('animated')) {
            $(this).addClass('animated').animateNumber({
              number: parseFloat($(this).text()),
            }, 1000);
          }
        });
      });
  

});


//modal
const modal = document.querySelector('.modal'),
    open = document.querySelectorAll('.cta-btn'),
    close = document.querySelector('#close');

open.forEach((elem) => {
    elem.addEventListener('click', () => {
        modal.classList.add('modal_active');
        close.addEventListener('click', () => {
            event.preventDefault()
            modal.classList.remove('modal_active')
        })
    })

});


