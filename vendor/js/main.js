document.addEventListener('DOMContentLoaded', function () {
    // var scrolltopElement = document.getElementsByClassName('wrapper-scrolltop')[0];
    var footer = document.getElementById('footer');
    var navbar = document.querySelector('.navbar');
    // var tooltipmouse = document.querySelector('.funds-item');
    // var tooltipbox = document.querySelector('.tooltip');
    var iconTitle = document.querySelectorAll('.icon-title');
    var tableItem = document.querySelectorAll('.wrapper-table-item');

    var wrapperMonetize = document.querySelector('.wrapper-monetize');
    // var monetize = document.getElementById('monetize').offsetTop;
    // var tabTable = document.getElementById('tabs-table').offsetTop;
    // var tabTitle = document.querySelector('.tabs-title');

    var slideIndex = 1;
    var prevSlide = document.querySelector('.prev');
    var nextSlide = document.querySelector('.next');
    var btnSlide = document.querySelectorAll('.btn-slide');
    var allSlide = document.querySelectorAll('.slide-tokens');
    var allSlideContent = document.querySelectorAll('.slide-content');

    // var scrollTop = document.getElementById('scrollTop');
    var n1 = document.getElementById('n1');
    var n2 = document.getElementById('n2');
    // var n3 = document.getElementById('n3');
    // var tabsScroll = document.getElementById('tabs-table').offsetTop;
    // var monetizeScroll = document.getElementById('monetize').offsetTop;

    var tooltip = document.querySelectorAll('.tooltip');
    var closeModalImg = document.querySelector('.img-toggler-close');
    var closeModalImgPhi = document.querySelector('.img-toggler-icon-phi');
    var imgFunds = document.querySelector('.img-funds-modal');
    var imgTokens = document.querySelector('.img-tokens-modal');
    var modalImg = document.getElementById('modal');
    var modalImgPhi = document.getElementById('modalPhi');
    var btnImgPhi = document.getElementById('phi-img');

    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarTogglerClose = document.querySelector('.navbar-toggler-close');
    var collapsibleNavId = document.getElementById('collapsibleNavId');

    var wrapperPhiAni = document.getElementById('ani-title-wrapper');
    var titleAni = document.getElementById('ani-title');
    var textAni = document.getElementById('ani-text');

    window.onload = function () {
        btnImgPhi.classList.add('move-up');
        wrapperPhiAni.classList.add('fade-in');
        titleAni.classList.add('move-left-in');
        textAni.classList.add('move-right-in');
    }

    var scrollTo = function (to, duration) {
        const
            element = document.documentElement,
            start = element.scrollTop,
            change = to - start,
            startDate = +new Date(),
            // t = current time
            // b = start value
            // c = change in value
            // d = duration
            easeInOutQuad = function (t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            },
            animateScroll = function () {
                const currentDate = +new Date();
                const currentTime = currentDate - startDate;
                element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
                if (currentTime < duration) {
                    requestAnimationFrame(animateScroll);
                }
                else {
                    element.scrollTop = to;
                }
            };
        animateScroll();
    };

    window.addEventListener('scroll', function () {
        var vitrihientai = window.pageYOffset;

        if (vitrihientai > 0) {
            // scrolltopElement.classList.add('active-visible');
            navbar.classList.add('navbar-bg');
        }
        else {
            // scrolltopElement.classList.remove('active-visible');
            navbar.classList.remove('navbar-bg');
        }
        // if(vitrihientai > tabTable - 500){
        //     tabTitle.classList.add('move-left-in');
        // }
    })
    for (let index = 0; index < iconTitle.length; index++) {
        iconTitle[index].addEventListener('click', function (e) {
            for (let i = 0; i < iconTitle.length; i++) {
                if (iconTitle[i].classList.contains('active')) {
                    iconTitle[i].classList.remove('active');
                }
            }
            for (let j = 0; j < tableItem.length; j++) {
                if (tableItem[j].classList.contains('active')) {
                    tableItem[j].classList.remove('active');
                }
            }
            var x = iconTitle[index].getAttribute('title');
            iconTitle[index].classList.add('active');
            for (let k = 0; k < tableItem.length; k++) {
                if (tableItem[k].getAttribute('title') == x) {
                    tableItem[k].classList.add('active');
                }
            }
        })
    }

    //////////////////////////////////


    // scrollTop.addEventListener('click', function (event) {
    //     event.preventDefault();
    //     scrollTo(0, 0.5);
    // })
    n1.addEventListener('click', function (event) {
        event.preventDefault();
        scrollTo(0, 0.5);
        if (collapsibleNavId.classList.contains('active')) {
            collapsibleNavId.classList.remove('active');
        }
    })
    // n2.addEventListener('click', function (event) {
    //     event.preventDefault();
    //     scrollTo(tabsScroll, 0.5);
    //     if(collapsibleNavId.classList.contains('active')){
    //         collapsibleNavId.classList.remove('active');
    //     }
    // })
    // n3.addEventListener('click', function (event) {
    //     event.preventDefault();
    //     scrollTo(monetizeScroll, 0.5);
    //     if (collapsibleNavId.classList.contains('active')) {
    //         collapsibleNavId.classList.remove('active');
    //     }
    // })
    /////////////





    // function funcSlide() {
    //     if (slideIndex == 1) {
    //         slideIndex = 2;
    //     }
    //     else if (slideIndex == 2) {
    //         slideIndex = 1;
    //     }
    //     for (var i = 0; i < allSlide.length; i++) {
    //         allSlide[i].classList.remove('active');
    //     }
    //     for (let j = 0; j < allSlideContent.length; j++) {
    //         allSlideContent[j].classList.remove('move-left-in');
    //     }
    //     allSlide[slideIndex - 1].classList.add('active');
    //     allSlideContent[slideIndex - 1].classList.add('move-left-in');

    // }

    // var mySlide = setInterval(() => {
    //     funcSlide();
    // }, 3000);


    // set mouse over to stop slide
    // var monetize = document.querySelector('.wrapper-fluid');

    // monetize.addEventListener('mouseover', function () {
    //     clearInterval(mySlide);
    // });
    // monetize.addEventListener('mouseleave', function () {
    //     mySlide = setInterval(() => {
    //         funcSlide();
    //     }, 3000);
    // })


    // for (let index = 0; index < btnSlide.length; index++) {
    //     btnSlide[index].addEventListener('click', function (event) {
    //         event.preventDefault();
    //         funcSlide(event);
    //     });
    // }



    ////////////////


    navbarToggler.addEventListener('click', function (event) {
        event.preventDefault();
        collapsibleNavId.classList.add('active');
    })
    navbarTogglerClose.addEventListener('click', function (event) {
        event.preventDefault();
        collapsibleNavId.classList.remove('active');
    })




    for (let index = 0; index < tooltip.length; index++) {
        tooltip[index].addEventListener('click', function (event) {
            event.preventDefault();
            if (index == 0) {
                imgTokens.classList.add('d-none');
                imgFunds.classList.remove('d-none');
            }
            else if (index == 1) {
                imgFunds.classList.add('d-none');
                imgTokens.classList.remove('d-none');
            }
            modalImg.classList.remove('zoom-out');
            modalImg.classList.add('zoom-in');
        })
    }
    closeModalImg.addEventListener('click', function (event) {
        event.preventDefault();
        modalImg.classList.add('zoom-out');
        modalImg.classList.remove('zoom-in');
    })
    closeModalImgPhi.addEventListener('click', function (event) {
        event.preventDefault();

        modalImgPhi.classList.add('zoom-out');
        modalImgPhi.classList.remove('zoom-in');
    })
    btnImgPhi.addEventListener('click', function (event) {
        event.preventDefault();
        modalImgPhi.classList.remove('zoom-out');
        modalImgPhi.classList.add('zoom-in');
    })

    // Load google charts
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);

    // Draw the chart and set the chart values
    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Tokens', 'Hours per Day'],
            ['Locked for futures', 55],
            ['Private Sales/IEO', 15],
            ['Airdrop/Charity', 15],
            ['StiB Team', 15]
        ]);

        // Optional; add a title and set the width and height of the chart
        var options = { 
            'chartArea': {
                width: '94%' // width inside chart !important 
            },
            'width': 400, 
            'height': 300,
            'backgroundColor': 'transparent',
            'titleTextStyle': {
                color: '#f38320',
                fontSize: 16,
            },
            'fontSize': 16,
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
                // ignoreBounds: true,
                // trigger: 'selection',
                textStyle: {
                    fontSize: 11
                }
            }
        };

        // Display the chart inside the <div> element with id="piechart"
        var chart = new google.visualization.PieChart(document.getElementById('piechart-tokens'));
        chart.draw(data, options);
    }

    ///////////////////////////////////////////////
    var qli = document.getElementsByClassName('q-li');
    var ans = document.getElementsByClassName('answers-p');
    for (let index = 0; index < qli.length; index++) {
        var indexQues = 0;
        qli[index].addEventListener('click', function(event){
            event.preventDefault();
            for (let j = 0; j < qli.length; j++) {
                if(qli[j].classList.contains('active')){
                    qli[j].classList.remove('active');
                }
            }
            
            for (let k = 0; k < qli.length; k++) {
                if(ans[k].classList.contains('move-left-in')){
                    ans[k].classList.remove('move-left-in');
                }
            }

            indexQues = index;
            qli[index].classList.add('active');
            ans[index].classList.add('move-left-in');
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
			768:{
				items:4
			},
		}
	})
});