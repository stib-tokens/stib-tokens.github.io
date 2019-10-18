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
                switchLang(langEng);
            }
            else{
                $('.lang-select').eq(1).addClass('active'); // set default
                switchLang(langVn);
            }
        }
        $('.show-current-lang span').text(langChoice); // set default
        clickContent();
        console.log(langChoice); // work!
        loadContent();
        
    }, "jsonp")
    .fail(function(){
        // console.log("1111111111111111111111111"); // work!
        alert("Your browers is not supported for other languages!");
        $('.show-current-lang span').text("EN");
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
                    location.reload();
                    // switchLang(langEng);
                }
                else if(index == 1){ // VN
                    localStorage.setItem("language", "VN");
                    langChoice = localStorage.getItem("language");
                    location.reload();
                    // switchLang(langVn);
                }
                else{
                    localStorage.setItem("language", "EN");
                    langChoice = localStorage.getItem("language");
                    switchLang(langEng);
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
                [langChoice == 'VN' ? 'Vốn tương lai': 'Locked for futures', 50],
                [langChoice == 'VN' ? 'Huy động vốn': 'Private Sales/IEO', 13.7],
                [langChoice == 'VN' ? 'Airdrop/Từ thiện': 'Airdrop/Charity', 21.3],
                [langChoice == 'VN' ? 'Đội StiB': 'StiB Team', 15]
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
            "text21": " Q4 2019 - Seed round soft Cap ($1,000,000)\nQ1 2020 - Pre-listing soft Cap ($3,480,000)",
            "title22": "Public sale Date:",
            "text22": " Date - October 15",
            "title23": "Primary Exchange Listing:",
            "text23": " Date - Listing on TBD",
            "title24": "Initial Circulating Supply:",
            "text24": " 3.7% of total Supply",
        },
        // intro [3]
        {
            "ques1": "WHO WE ARE?",
            "ques2": "StiB TOKENS?",
            "ques3": "HOW StiB MONETIZES?",

            "ans1": "We decentralize and leave no one behind!",
            "ans2": "Using a smart queue so StiB token holders can each earn a chance at investing instead of Lottery or gaming to be who has the fastest finger or bot.",
            "ans3": "Through StiB Reserves with instant settlements on fiats-cryptos & Cryptos-Cryptos for both Trading + Lending."
        },
        // download[4]
        {
            "title": "StiB P2P is available now for trading/Lending on iOS and Android!",
            "button": "Try it now on StiB P2P"
        },
        // airdrop[5]
        {
            "title": "Airdrop Scheme",
            
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
            "description": "'sti' là tên của Token trong hệ sinh thái của StiB và người giữ token sẽ có quyền lợi trong nghiên cứu, dịch vụ và các sản phẩm trong tương lai.",

            "text1": "Tên Token: sti",
            "text2": "Loại Token: ERC-20",
            "text3": "Tổng Token: 8,000,000,000 STIs",
            "text4": "Vốn huy động: $5,480,000",
            "text5": "Tổng giá tr: $40M",
            "text6": "GIÁ TOKENS",

            "title21": "Huy động vốn:",
            "text21": " Quý 4 2019 - Bắt đầu huy động vốn ($1,000,000) \n Quý 1 2020 - Kết thúc huy động vốn ($3,480,000)",
            "title22": "Ngày bán ra:",
            "text22": " Date - Ngày 15 tháng 10",
            "title23": "Ngày lên sàn giao dịch:",
            "text23": " Chưa có",
            "title24": "Số lượng trả ban đầu:",
            "text24": " 3.7% trên tổng vốn đầu tư",
        },

    ];

    function switchLang(lang){
        // console.log("da chuyen sang" + langChoice); // work!
        // banner [0]
        $('#ani-title').text(lang[0].title);
        $('#ani-text').text(lang[0].description);
        $('.tooltip-phi').text(lang[0].tooltip);
        // menu[1]
        $('.n1').text(lang[1].title1);
        $('.n2').text(lang[1].title2);
        $('.n3').text(lang[1].title3);
        $('.n4').text(lang[1].title4);
        $('.n5').text(lang[1].title5);
        $('.n6').text(lang[1].title6);
        // tokens [2]
        $('#tokens .description p').text(lang[2].description);
        $('#tokens .grid-1 .token-utility li:nth-child(1) span').text(lang[2].text1);
        $('#tokens .grid-1 .token-utility li:nth-child(2) span').text(lang[2].text2);
        $('#tokens .grid-1 .token-utility li:nth-child(3) span').text(lang[2].text3);
        $('#tokens .grid-1 .token-utility li:nth-child(4) span').text(lang[2].text4);
        $('#tokens .grid-1 .token-utility li:nth-child(5) span').text(lang[2].text5);
        $('#tokens .grid-1 .token-utility li:nth-child(6) span.utility-price-title').text(lang[2].text6);

        $('#tokens .grid-2 .token-utility li:nth-child(1) span.utility-title').text(lang[2].title21);
        $('#tokens .grid-2 .token-utility li:nth-child(1) span:last-child').text(lang[2].text21);
        $('#tokens .grid-2 .token-utility li:nth-child(1) span:last-child').html($('#tokens .grid-2 .token-utility li:nth-child(1) span:last-child').html().replace(/\n/g,'<br/>'));

        $('#tokens .grid-2 .token-utility li:nth-child(2) span.utility-title').text(lang[2].title22);
        $('#tokens .grid-2 .token-utility li:nth-child(2) span:last-child').text(lang[2].text22);

        $('#tokens .grid-2 .token-utility li:nth-child(3) span.utility-title').text(lang[2].title23);
        $('#tokens .grid-2 .token-utility li:nth-child(3) span:last-child').text(lang[2].text23);

        $('#tokens .grid-2 .token-utility li:nth-child(4) span.utility-title').text(lang[2].title24);
        $('#tokens .grid-2 .token-utility li:nth-child(4) span:last-child').text(lang[2].text24);
    }
})