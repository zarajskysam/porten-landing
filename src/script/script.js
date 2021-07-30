function mobileOnlySliderBrands() {
    $(document).ready(function(){
        $('.slick-wrppr').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            touchMove:true,
            dots: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 456,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                }
            ]
        });
        $('.recieps_wrppr').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            touchMove:true,
            dots: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 456,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                }
            ]
        })
    });
}



$(document).ready(function(){
    $('.burger').click(function(event) {
        $('.header_bot_nav, .main_title, .main_disc, .burger').toggleClass('active');
        $('body').toggleClass('overflow');
    });
    console.log(document.fullscreenEnabled);
});

if (window.innerWidth <= 991) {
    mobileOnlySliderBrands();
}

$(window).resize(function(){
    if (window.innerWidth <= 991) {
        if($('.slick-wrppr').hasClass('slick-initialized')) {
            return;
        }
        if($('.recieps_wrppr').hasClass('slick-initialized')) {
            return;
        }
        mobileOnlySliderBrands();
    } else {
        if($('.slick-wrppr').hasClass('slick-initialized')) {
            $('.slick-wrppr').slick('unslick');
        } else if($('.recieps_wrppr').hasClass('slick-initialized')) {
            $('.recieps_wrppr').slick('unslick');
        } else {
            return;
        }
    }
});

