$(document).ready(function () {
    // window.onload = function () {
    //     $('#phi-img').addClass('move-up');
    //     $('#ani-title-wrapper').addClass('fade-in');
    //     $('#ani-title').addClass('move-left-in');
    //     $('#ani-text').addClass('move-right-in');
    // }

    $(window).scroll(function(event){
        var vitrihientai = window.pageYOffset;
        console.log(vitrihientai);
        // if (vitrihientai > 0) {
        //     $('.navbar').addClass('navbar-bg');
        // }
        // else {
        //     $('.navbar').removeClass('navbar-bg');
        // }
        if(vitrihientai > $('#tokens').offset().top - 600){
            $('.title-tokens').addClass('up-active');
        }
        if(vitrihientai > $('#airdrop').offset().top - 600){
            $('.title-airdrop').addClass('up-active');
        }
        if(vitrihientai > $('#unique').offset().top - 600){
            $('.title-unique').addClass('up-active');
        }
    })

    $('.n1').click(function (event) {
        event.preventDefault();
        $('body,html').animate({ scrollTop: $('#tokens').offset().top - 100}, 500);
        if ($('#collapsibleNavId').hasClass('active')) {
            $('#collapsibleNavId').removeClass('active');
        }
    });
    $('.n2').click(function (event) {
        event.preventDefault();
        if ($('#collapsibleNavId').hasClass('active')) {
            $('#collapsibleNavId').removeClass('active');
        }
        $('body,html').animate({ scrollTop: $('#airdrop').offset().top - 100}, 500);
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
        $('body,html').animate({ scrollTop: $('#unique').offset().top - 100}, 500);
    });
    $('.n6').click(function (event) {
        event.preventDefault();
        if ($('#collapsibleNavId').hasClass('active')) {
            $('#collapsibleNavId').removeClass('active');
        }
        $('body,html').animate({ scrollTop: $('#contact').offset().top }, 500);
    });

    $('.navbar-toggler').click(function(event){
        event.preventDefault();
        $('#collapsibleNavId').addClass('active');
    })
    $('.navbar-toggler-close').click(function(event){
        event.preventDefault();
        $('#collapsibleNavId').removeClass('active');
    })


    $('.wrapper-img-roadmap').click(function(event){
        event.preventDefault();
        $('#modal').removeClass('zoom-out');
        $('#modal').addClass('zoom-in');
    })

    $('.img-toggler-close').click(function(event){
        event.preventDefault();
        $('#modal').addClass('zoom-out');
        $('#modal').removeClass('zoom-in');
    })
    $('.img-toggler-icon-phi').click(function(event){
        event.preventDefault();

        $('#modalPhi').addClass('zoom-out');
        $('#modalPhi').removeClass('zoom-in');
    })
    $('#phi-img').click(function(event){
        event.preventDefault();
        $('#modalPhi').removeClass('zoom-out');
        $('#modalPhi').addClass('zoom-in');
    })

    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);
    $(window).resize(function(){
        google.charts.setOnLoadCallback(drawChart);
    })
    
    
    // Draw the chart and set the chart values
    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Tokens', 'Hours per Day'],
            ['Locked for futures', 50],
            ['Private Sales/IEO', 13.7],
            ['Airdrop/Charity', 21.3],
            ['StiB Team', 15]
        ]);
        // Load google charts
        var options = { 
            'chartArea': {
                width: '94%' // width inside chart !important 
            },
            'width': '100%', 
            'height': '100%',
            'backgroundColor': 'transparent',
            'titleTextStyle': {
                color: '#f38320',
                fontSize: 16,
            },
            'fontSize': 14,
            'chartArea.left': 0,
            'chartArea.top': 0,
            'legend': {
                position: 'right',
                textStyle: {
                    color: '#fff',
                    fontSize: 12,
                },
                alignment: 'center'
            },
            'tooltip': {
                textStyle: {
                    fontSize: 11
                }
            }
        };
        var chart = new google.visualization.PieChart(document.getElementById('piechart-tokens'));
        chart.draw(data, options);
    }

    ///////////////////////////////////////////////

    for (let index = 0; index < $('.q-li').length; index++) {
        $('.q-li').eq(index).click(function(event){
            event.preventDefault();
            for (let j = 0; j < $('.q-li').length; j++) {
                if($('.q-li').eq(j).hasClass('active')){
                    $('.q-li').eq(j).removeClass('active');
                }
            }
            
            for (let k = 0; k < $('.q-li').length; k++) {
                if($('.answers-p').eq(k).hasClass('move-left-in')){
                    $('.answers-p').eq(k).removeClass('move-left-in');
                }
            }

            $('.q-li').eq(index).addClass('active');
            $('.answers-p').eq(index).addClass('move-left-in');
        })
    }
    $('.owl-1').owlCarousel({
		loop:true,
		margin:20,
		autoplay:3000,
		responsive:{
			0:{
				items:1
			},
			// 768:{
			// 	items:1
			// },
		}
    });


    $('.show-current-lang').click(function(event){
        event.preventDefault();
        $('.lang-choice').toggleClass('active');
        $('.img-lang-current').toggleClass('active');
    })
    for (let index = 0; index < $('.lang-select').length; index++) {
        
    }
})