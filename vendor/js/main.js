$(document).ready(function () {

    $(window).scroll(function (event) {
        var vitrihientai = window.pageYOffset;
        if (vitrihientai > $('#tokens').offset().top - 600) {
            $('.title-tokens').addClass('up-active');
        }
        if (vitrihientai > $('#airdrop').offset().top - 600) {
            $('.title-airdrop').addClass('up-active');
        }
        if (vitrihientai > $('#unique').offset().top - 600) {
            $('.title-unique').addClass('up-active');
        }
    })

    $('.n1').click(function (event) {
        event.preventDefault();
        $('body,html').animate({ scrollTop: $('#tokens').offset().top - 100 }, 500);
        if ($('#collapsibleNavId').hasClass('active')) {
            $('#collapsibleNavId').removeClass('active');
        }
    });
    $('.n2').click(function (event) {
        event.preventDefault();
        if ($('#collapsibleNavId').hasClass('active')) {
            $('#collapsibleNavId').removeClass('active');
        }
        $('body,html').animate({ scrollTop: $('#airdrop').offset().top - 100 }, 500);
    });
    $('.n3').click(function (event) {
        event.preventDefault();
        if ($('#collapsibleNavId').hasClass('active')) {
            $('#collapsibleNavId').removeClass('active');
        }
        $('body,html').animate({ scrollTop: $('#roadmap').offset().top }, 500);
    });
    $('.n4').click(function (event) {
        event.preventDefault();
        if ($('#collapsibleNavId').hasClass('active')) {
            $('#collapsibleNavId').removeClass('active');
        }
        $('body,html').animate({ scrollTop: $('#team').offset().top }, 500);
    });
    $('.n5').click(function (event) {
        event.preventDefault();
        if ($('#collapsibleNavId').hasClass('active')) {
            $('#collapsibleNavId').removeClass('active');
        }
        $('body,html').animate({ scrollTop: $('#unique').offset().top - 100 }, 500);
    });
    $('.n6').click(function (event) {
        event.preventDefault();
        if ($('#collapsibleNavId').hasClass('active')) {
            $('#collapsibleNavId').removeClass('active');
        }
        $('body,html').animate({ scrollTop: $('#contact').offset().top }, 500);
    });

    $('.navbar-toggler').click(function (event) {
        event.preventDefault();
        $('#collapsibleNavId').addClass('active');
    })
    $('.navbar-toggler-close').click(function (event) {
        event.preventDefault();
        $('#collapsibleNavId').removeClass('active');
    })


    $('.wrapper-img-roadmap').click(function (event) {
        event.preventDefault();
        $('#modal').removeClass('zoom-out');
        $('#modal').addClass('zoom-in');
    })

    $('.img-toggler-close').click(function (event) {
        event.preventDefault();
        $('#modal').addClass('zoom-out');
        $('#modal').removeClass('zoom-in');
    })
    $('.img-toggler-icon-phi').click(function (event) {
        event.preventDefault();

        $('#modalPhi').addClass('zoom-out');
        $('#modalPhi').removeClass('zoom-in');
    })
    $('#phi-img').click(function (event) {
        event.preventDefault();
        $('#modalPhi').removeClass('zoom-out');
        $('#modalPhi').addClass('zoom-in');
    });


    

    for (let index = 0; index < $('.q-li').length; index++) {
        $('.q-li').eq(index).click(function (event) {
            event.preventDefault();
            for (let j = 0; j < $('.q-li').length; j++) {
                if ($('.q-li').eq(j).hasClass('active')) {
                    $('.q-li').eq(j).removeClass('active');
                }
            }

            for (let k = 0; k < $('.q-li').length; k++) {
                if ($('.answers-p').eq(k).hasClass('move-left-in')) {
                    $('.answers-p').eq(k).removeClass('move-left-in');
                }
            }

            $('.q-li').eq(index).addClass('active');
            $('.answers-p').eq(index).addClass('move-left-in');
        })
    }
    $('.owl-1').owlCarousel({
        loop: true,
        margin: 20,
        autoplay: 3000,
        responsive: {
            0: {
                items: 1
            },
            // 768:{
            // 	items:1
            // },
        }
    });
    // console.log($('#airdrop .wrapper-table-item').offset().left);
    $('#airdrop .wrapper-table').scroll(function(){
        // console.log($('#airdrop .wrapper-table-item').offset().left);
        if($('#airdrop .wrapper-table-item').offset().left < 0){
            $('.guide-table').addClass('deactive');
        }
        else{
            $('.guide-table').removeClass('deactive');
        }
    })
    $('#unique .wrapper-table').scroll(function(){
        if($('#unique .wrapper-table-item').offset().left < 0){
            $('.guide-table').addClass('deactive');
        }
        else{
            $('.guide-table').removeClass('deactive');
        }
    })
})