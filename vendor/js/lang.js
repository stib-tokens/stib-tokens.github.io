$(document).ready(function (){
    // set default language
    var langChoice;
    $.get("https://ipinfo.io", function(response) {
        langChoice = localStorage.getItem("language");
        if(langChoice == null || langChoice == undefined){
            console.log("nulllll");
            if(response.country == "VN"){
                localStorage.setItem("language", "VN");
            }
            else{
                localStorage.setItem("language", "EN");
            }
        }
        langChoice = localStorage.getItem("language");
        console.log(langChoice);// work!
        if(langChoice!==null){
            if(langChoice == "EN"){
                $('.lang-select').eq(0).addClass('active'); // set default
            }
            else{
                $('.lang-select').eq(1).addClass('active'); // set default
            }
        }
        $('.show-current-lang span').text(langChoice); // set default
        clickContent();
        console.log(langChoice); // work!
        loadContent();
        
    }, "jsonp")
    .fail(function(){
        // console.log("1111111111111111111111111"); // work!
        localStorage.setItem("language", "EN");
        langChoice = localStorage.getItem("language");
        $('.lang-select').eq(0).addClass('active'); // set default
        clickContent();
        console.log(langChoice); // work!
        loadContent();
    })

    function clickContent(){
        $('.show-current-lang').click(function(event){
            event.preventDefault();
            $('.lang-choice').toggleClass('active');
            $('.img-lang-current').toggleClass('active');
        })
        // click ul
        for (let index = 0; index < $('.lang-select').length; index++) {
            $('.lang-select').eq(index).click(function(event){
                event.preventDefault();
                // style change
                if($('.lang-choice').hasClass('active')){$('.lang-choice').removeClass('active');}
                if($('.img-lang-current').hasClass('active')){$('.lang-choice').removeClass('active');}
    
                for (let j = 0; j < $('.lang-select').length; j++) {
                    $('.lang-select').eq(j).removeClass('active');
                }
                $('.lang-select').eq(index).addClass('active');

                if(index == 0){ // EN
                    localStorage.setItem("language", "EN");
                    langChoice = localStorage.getItem("language");
                    switchEN();
                }
                else if(index == 1){ // VN
                    localStorage.setItem("language", "VN");
                    langChoice = localStorage.getItem("language");
                    switchVN();
                }
                else{
                    localStorage.setItem("language", "EN");
                    langChoice = localStorage.getItem("language");
                    switchEN();
                }
                langChoice = localStorage.getItem("language");
                $('.show-current-lang span').text(langChoice);
            });
        }
    }
    function loadContent(){
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(() => drawChart());
        
        $(window).resize(function () {
            google.charts.setOnLoadCallback(drawChart);
        })
    
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
                position: 'labeled',
                textStyle: {
                    color: '#fff',
                    fontSize: 12,
                },
                alignment: 'center',
            },
            'tooltip': {
                trigger: 'none'
                // textStyle: {
                //     fontSize: 11
                // }
            }
        };
        // Draw the chart and set the chart values
        function drawChart() {
            var data = google.visualization.arrayToDataTable([
                ['Tokens', 'Tokens part'],
                ['Locked for futures', 50],
                ['Private Sales/IEO', 13.7],
                ['Airdrop/Charity', 21.3],
                ['StiB Team', 15]
            ]);
            // Load google charts
            var chart = new google.visualization.PieChart(document.getElementById('piechart-tokens'));
            chart.draw(data, options);
        }
    
        ///////////////////////////////////////////////
    }

    
    const langEng = [
        // banner [0]
        {
            "title": 'StiB PHILOSOPHY',
            "description": "We focus on positive side of things!",
            "tooltip": "Fullscreen View"
        },
        // menu[1]
        {
            "title1": "StiB TOKENS",
            "title2": "AIRDROP SCHEME",
            "title3": "ROAD MAP",
            "title4": "OUR TEAM",
            "title5": "StiB DIFFERS",
            "title6": "CONTACT"
        },
        // tokens [2]
        {
            "description": "'sti'is our utility token within StiB’s ecosystem and token holders will benefit from projects, services and products in the future.",

            "text1": "Token Name: sti",
            "text2": "Token Type: ERC-20",
            "text3": "Token Supply: 8,000,000,000 STIs",
            "text4": "Hard Cap: $5,480,000",
            "text5": "Market Cap at Circulation: $40M",
            "text6": "Token Price",

            "title21": "Private Sales:",
            "text21": " Q4 2019 - Seed round to reach soft Cap\nQ1 2020 - Pre-listing round to reach hard Cap",
            "title22": "Public sale Date:",
            "text22": " Date - Launch on TBD",
            "title23": "Primary Exchange Listing:",
            "text23": " Date - Listing on TBD",
            "title24": "Initial Circulating Supply:",
            "text24": " 3.7% of total Supply",
        }
    ];
    // ////////////////////////////////////////////////////////////
    const langVn = [
        // banner [0]
        {
            "title": 'HƯỚNG ĐI CỦA StiB',
            "description": "We focus on positive side of things!",
            "tooltip": "Xem ảnh lớn"
        },
        // menu[1]
        {
            "title1": "StiB TOKENS",
            "title2": "BẢNG AIRDROP",
            "title3": "LỘ TRÌNH",
            "title4": "THÀNH VIÊN",
            "title5": "ĐIỂM KHÁC BIỆT",
            "title6": "LIÊN HỆ"
        },
        // tokens [2]
        {
            "description": "'sti'is our utility token within StiB’s ecosystem and token holders will benefit from projects, services and products in the future.",

            "text1": "Tên Token: sti",
            "text2": "Loại Token: ERC-20",
            "text3": "Tổng Token: 8,000,000,000 STIs",
            "text4": "Vốn huy động: $5,480,000",
            "text5": "Market Cap at Circulation: $40M",
            "text6": "Token Price",

            "title21": "Private Sales:",
            "text21": " Q4 2019 - Seed round to reach soft Cap\nQ1 2020 - Pre-listing round to reach hard Cap",
            "title22": "Public sale Date:",
            "text22": " Date - Launch on TBD",
            "title23": "Primary Exchange Listing:",
            "text23": " Date - Listing on TBD",
            "title24": "Initial Circulating Supply:",
            "text24": " 3.7% of total Supply",
        }
    ];

    //////////////////////////////////////////////////////////////
    // var switchLang = document.getElementsByClassName('lang');
    

    // btnEng.addEventListener('click', function(event){
    //     event.preventDefault();
    //     for (let index = 0; index < switchLang.length; index++) {
    //         switchLang[index].classList.remove('lang-active');
    //     }
    //     btnEng.classList.add('lang-active');

    //     // banner [0]
    //     document.getElementById('ani-title').innerHTML = langEng[0].title;
    //     document.getElementById('ani-text').innerHTML = langEng[0].description;
    //     document.getElementsByClassName('tooltip-phi')[0].innerHTML = langEng[0].tooltip;

    //     // menu [1]
    //     document.getElementById('n1').innerHTML = langEng[1].title1;
    //     document.getElementById('n2').innerHTML = langEng[1].title2;
    //     document.getElementById('n3').innerHTML = langEng[1].title3;

    //     // tokens [2]
    //     document.getElementById('tab1').innerHTML = langEng[2].tab1;
    //     document.getElementById('tab2').innerHTML = langEng[2].tab2;
    //     document.getElementById('tab3').innerHTML = langEng[2].tab3;
    //     document.getElementById('tab4').innerHTML = langEng[2].tab4;

    //     document.getElementById('title1col1').innerHTML = langEng[2].title1col1;
    //     document.getElementById('title1col2').innerHTML = langEng[2].title1col2;
    //     document.getElementById('title1col3').innerHTML = langEng[2].title1col3;

    //     document.getElementById('title2col1row1').innerHTML = langEng[2].title2col1row1;
    //     document.getElementById('title2col1row2').innerHTML = langEng[2].title2col1row2;
    //     document.getElementById('title2col1row3').innerHTML = langEng[2].title2col1row3;
    //     document.getElementById('title2col1row4').innerHTML = langEng[2].title2col1row4;
    //     document.getElementById('title2col1row5').innerHTML = langEng[2].title2col1row5;
    //     document.getElementById('title2col1row6').innerHTML = langEng[2].title2col1row6;
    //     document.getElementById('title2col1row7').innerHTML = langEng[2].title2col1row7;
    //     document.getElementById('title2col1row8').innerHTML = langEng[2].title2col1row8;
    //     document.getElementById('title2col1row9').innerHTML = langEng[2].title2col1row9;

    //     document.getElementById('title2col2row6').innerHTML = langEng[2].title2col2row6;
    //     document.getElementById('title2col2row7').innerHTML = langEng[2].title2col2row7;
    //     document.getElementById('title2col2row8').innerHTML = langEng[2].title2col2row8;
    //     document.getElementById('title2col2row9').innerHTML = langEng[2].title2col2row9;

    //     document.getElementById('title3col1row1').innerHTML = langEng[2].title3col1row1;
    //     document.getElementById('title3col1row3').innerHTML = langEng[2].title3col1row3;
    //     document.getElementById('title3col1row4').innerHTML = langEng[2].title3col1row4;
    //     document.getElementById('title3col1row5').innerHTML = langEng[2].title3col1row5;
        
    //     document.getElementById('title3col2row1').innerHTML = langEng[2].title3col2row1;
    //     document.getElementById('title3col2row2').innerHTML = langEng[2].title3col2row2;

    //     document.getElementById('title3col3row1').innerHTML = langEng[2].title3col3row1;

    //     document.getElementById('title3col4row1').innerHTML = langEng[2].title3col4row1;

    //     document.getElementById('title4col1row1').innerHTML = langEng[2].title4col1row1;
    //     document.getElementById('title4col1row2').innerHTML = langEng[2].title4col1row2;
    //     document.getElementById('title4col1row3').innerHTML = langEng[2].title4col1row3;
    //     document.getElementById('title4col1row4').innerHTML = langEng[2].title4col1row4;
    //     document.getElementById('title4col1row5').innerHTML = langEng[2].title4col1row5;

    //     document.getElementById('title4col3row1').innerHTML = langEng[2].title4col3row1;
    //     document.getElementById('title4col3row3').innerHTML = langEng[2].title4col3row3;
    //     document.getElementById('title4col3row4').innerHTML = langEng[2].title4col3row4;
    //     document.getElementById('title4col3row5').innerHTML = langEng[2].title4col3row5;

    //     document.getElementById('title4col4row1').innerHTML = langEng[2].title4col4row1;
    //     document.getElementById('title4col4row2').innerHTML = langEng[2].title4col4row2;
    //     document.getElementById('title4col4row3').innerHTML = langEng[2].title4col4row3;
    //     document.getElementById('title4col4row4').innerHTML = langEng[2].title4col4row4;
    //     document.getElementById('title4col4row5').innerHTML = langEng[2].title4col4row5;

    //     // monetize [3]
    //     document.getElementById('title-monetize').innerHTML = langEng[3].title2;
    //     document.getElementById('content-monetize').innerHTML = langEng[3].text1;
    //     document.getElementById('title-funds').innerHTML = langEng[3].title1;
    //     document.getElementById('content-tokens').innerHTML = langEng[3].text2;

    // });

    // btnVn.addEventListener('click', function(event){
    //     event.preventDefault();
    //     for (let index = 0; index < switchLang.length; index++) {
    //         switchLang[index].classList.remove('lang-active');
    //     }
    //     btnVn.classList.add('lang-active');
        
    //     // banner [0]
    //     document.getElementById('ani-title').innerHTML = langVn[0].title;
    //     document.getElementById('ani-text').innerHTML = langVn[0].description;
    //     document.getElementsByClassName('tooltip-phi')[0].innerHTML = langVn[0].tooltip;

    //     // menu [1]
    //     document.getElementById('n1').innerHTML = langVn[1].title1;
    //     document.getElementById('n2').innerHTML = langVn[1].title2;
    //     document.getElementById('n3').innerHTML = langVn[1].title3;

    //     // tokens [2]
    //     document.getElementById('tab1').innerHTML = langVn[2].tab1;
    //     document.getElementById('tab2').innerHTML = langVn[2].tab2;
    //     document.getElementById('tab3').innerHTML = langVn[2].tab3;
    //     document.getElementById('tab4').innerHTML = langVn[2].tab4;

    //     document.getElementById('title1col1').innerHTML = langVn[2].title1col1;
    //     document.getElementById('title1col2').innerHTML = langVn[2].title1col2;
    //     document.getElementById('title1col3').innerHTML = langVn[2].title1col3;

    //     document.getElementById('title2col1row1').innerHTML = langVn[2].title2col1row1;
    //     document.getElementById('title2col1row2').innerHTML = langVn[2].title2col1row2;
    //     document.getElementById('title2col1row3').innerHTML = langVn[2].title2col1row3;
    //     document.getElementById('title2col1row4').innerHTML = langVn[2].title2col1row4;
    //     document.getElementById('title2col1row5').innerHTML = langVn[2].title2col1row5;
    //     document.getElementById('title2col1row6').innerHTML = langVn[2].title2col1row6;
    //     document.getElementById('title2col1row7').innerHTML = langVn[2].title2col1row7;
    //     document.getElementById('title2col1row8').innerHTML = langVn[2].title2col1row8;
    //     document.getElementById('title2col1row9').innerHTML = langVn[2].title2col1row9;

    //     document.getElementById('title2col2row6').innerHTML = langVn[2].title2col2row6;
    //     document.getElementById('title2col2row7').innerHTML = langVn[2].title2col2row7;
    //     document.getElementById('title2col2row8').innerHTML = langVn[2].title2col2row8;
    //     document.getElementById('title2col2row9').innerHTML = langVn[2].title2col2row9;

    //     document.getElementById('title3col1row1').innerHTML = langVn[2].title3col1row1;
    //     document.getElementById('title3col1row3').innerHTML = langVn[2].title3col1row3;
    //     document.getElementById('title3col1row4').innerHTML = langVn[2].title3col1row4;
    //     document.getElementById('title3col1row5').innerHTML = langVn[2].title3col1row5;
        
    //     document.getElementById('title3col2row1').innerHTML = langVn[2].title3col2row1;
    //     document.getElementById('title3col2row2').innerHTML = langVn[2].title3col2row2;

    //     document.getElementById('title3col3row1').innerHTML = langVn[2].title3col3row1;

    //     document.getElementById('title3col4row1').innerHTML = langVn[2].title3col4row1;

    //     document.getElementById('title4col1row1').innerHTML = langVn[2].title4col1row1;
    //     document.getElementById('title4col1row2').innerHTML = langVn[2].title4col1row2;
    //     document.getElementById('title4col1row3').innerHTML = langVn[2].title4col1row3;
    //     document.getElementById('title4col1row4').innerHTML = langVn[2].title4col1row4;
    //     document.getElementById('title4col1row5').innerHTML = langVn[2].title4col1row5;

    //     document.getElementById('title4col3row1').innerHTML = langVn[2].title4col3row1;
    //     document.getElementById('title4col3row3').innerHTML = langVn[2].title4col3row3;
    //     document.getElementById('title4col3row4').innerHTML = langVn[2].title4col3row4;
    //     document.getElementById('title4col3row5').innerHTML = langVn[2].title4col3row5;

    //     document.getElementById('title4col4row1').innerHTML = langVn[2].title4col4row1;
    //     document.getElementById('title4col4row2').innerHTML = langVn[2].title4col4row2;
    //     document.getElementById('title4col4row3').innerHTML = langVn[2].title4col4row3;
    //     document.getElementById('title4col4row4').innerHTML = langVn[2].title4col4row4;
    //     document.getElementById('title4col4row5').innerHTML = langVn[2].title4col4row5;

    //     // monetize [3]
    //     document.getElementById('title-monetize').innerHTML = langVn[3].title2;
    //     document.getElementById('content-monetize').innerHTML = langVn[3].text1;
    //     document.getElementById('title-funds').innerHTML = langVn[3].title1;
    //     document.getElementById('content-tokens').innerHTML = langVn[3].text2;
    // });




    function switchEN(){
        // console.log("da chuyen sang" + langChoice); // work!
    }
    function switchVN(){
        // console.log("da chuyen sang" + langChoice); // work!
    }
})