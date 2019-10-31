$(document).ready(function () {
    // set default language
    var langChoice;
    $.get("https://ipinfo.io", function (response) {
        langChoice = localStorage.getItem("language");
        if (langChoice == null || langChoice == undefined) {
            console.log("nulllll");
            if (response.country == "VN") {
                localStorage.setItem("language", "VN");
            }
            else {
                localStorage.setItem("language", "EN");
            }
        }
        langChoice = localStorage.getItem("language");
        console.log(langChoice);// work!
        if (langChoice !== null) {
            if (langChoice == "EN") {
                $('.lang-select').eq(0).addClass('active'); // set default
                switchLang(langEng);
            }
            else {
                $('.lang-select').eq(1).addClass('active'); // set default
                switchLang(langVn);
            }
        }
        $('.show-current-lang span').text(langChoice); // set default
        clickContent();
        console.log(langChoice);
        loadContent();

    }, "jsonp")
        .fail(function () {
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

    function clickContent() {
        $('.show-current-lang').click(function (event) {
            event.preventDefault();
            $('.lang-choice').toggleClass('active');
            $('.img-lang-current').toggleClass('active');
        });
        $(document).mouseup(e => {
            if (!$('.lang-choice').is(e.target) // if the target of the click isn't the container...
                && $('.lang-choice').has(e.target).length === 0) // ... nor a descendant of the container
            {
                $('.lang-choice').removeClass('active');
                $('.img-lang-current').removeClass('active');
            }
        });
        // click ul
        for (let index = 0; index < $('.lang-select').length; index++) {
            $('.lang-select').eq(index).click(function (event) {
                event.preventDefault();
                // style change
                if ($('.lang-choice').hasClass('active')) { $('.lang-choice').removeClass('active'); }
                if ($('.img-lang-current').hasClass('active')) { $('.lang-choice').removeClass('active'); }

                for (let j = 0; j < $('.lang-select').length; j++) {
                    $('.lang-select').eq(j).removeClass('active');
                }
                $('.lang-select').eq(index).addClass('active');

                if (index == 0) { // EN
                    localStorage.setItem("language", "EN");
                    langChoice = localStorage.getItem("language");
                    location.reload();
                    // switchLang(langEng);
                }
                else if (index == 1) { // VN
                    localStorage.setItem("language", "VN");
                    langChoice = localStorage.getItem("language");
                    location.reload();
                    // switchLang(langVn);
                }
                else {
                    localStorage.setItem("language", "EN");
                    langChoice = localStorage.getItem("language");
                    switchLang(langEng);
                }
                langChoice = localStorage.getItem("language");
                $('.show-current-lang span').text(langChoice);
            });
        }
    }
    function loadContent() {
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
                [langChoice == 'VN' ? 'Vốn tương lai' : 'Locked for futures', 50],
                [langChoice == 'VN' ? 'Huy động vốn' : 'Private Sales/IEO', 13.7],
                [langChoice == 'VN' ? 'Airdrop/Từ thiện' : 'Airdrop/Charity', 21.3],
                [langChoice == 'VN' ? 'Đội StiB' : 'StiB Team', 15]
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
            "tooltip": "Fullscreen View",
            "imgSrc": "images/philosophy.png",
            "imgSrcMobile": "images/philosophy_mobile.png"
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
            "description": "'sti' is our utility token within StiB’s ecosystem and token holders will benefit from projects, services and products in the future.",

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
            "text23": " Date - January 15, 2020 (tentative)",
            "title24": "Initial Circulating Supply:",
            "text24": " 3.7% of total Supply",

            "invest": "INVEST NOW",
            "link": "https://docs.google.com/forms/d/e/1FAIpQLSe2eiS61bGtIT5fuPQZoamsMti3pdAAcTUX1NxEJT6h089ehQ/viewform"
        },
        // intro [3]
        {
            "ques1": "WHO ARE WE?",
            "ques2": "StiB TOKENS?",
            "ques3": "HOW StiB MONETIZES?",

            "ans1": "We decentralize and leave no one behind!",
            "ans2": "Using a smart queue so StiB token holders can each earn a chance at investing instead of Lottery or gaming to be who has the fastest finger or bot.",
            "ans3": "Through StiB Reserves with instant settlements on fiats-cryptos & Cryptos-Cryptos for both Trading + Lending."
        },
        // download[4]
        {
            "title": "StiB P2P is available now for Trading/Lending on iOS and Android!",
            "button": "Try it now"
        },
        // airdrop[5]
        {
            "title": "Airdrop Scheme",
            "description": "Monthly rewards dates in 2020: ",
            "descriptionTime": "January 15, Feb 15, March 15, April 15, May 15, June 15.",
            "theadTh1": "Amount of Sti tokens bought",
            "theadTh2": "Monthly bonus (STIs)",
            "theadTh3": "Total bonus in 6 months (STIs)",
        },
        // roadmap[6]
        {
            "tooltip": "Fullscreen View",
            "title": "Road Map",
            "imgSrc": "images/roadmap.png",
            "imgSrcMobile": "images/roadmap.png",
            "description": "The goal is to develop one Smart Contract at a time to build the best runway for Cryptos to take off with the community in mind.",
            "description2": "Our ultimate goal is to design a decentralized exchange/wallet for all to trade, invest, insure and/or lend, pay, etc... within the palm of your hands with the focused mission of bringing Cryptos to the mainstream.",
        },
        // team[7]
        {
            "title": "Our Team",
            "slogan": "\"We decentralize with everyone in mind!\"",
            "teamName1": "StiB Team",
            "teamDescription1": "StiB Team at StiB's Special Event.",
            "teamName2": "StiB Team",
            "teamDescription2": "StiB Team at Saigon, Vietnam."
        },
        // unique[8]
        {
            "title": "StiB DIFFERS",
            "titleSlogan": "StiB is unique and we differentiate.",
            "theadTh1": "What we offer",
            "theadTh2": "StiB",
            "theadTh3": "Others",
            "theadTh4": "They offer",

            "tbodyTd11": "Commissions Free",
            "tbodyTd12": "0%",
            "tbodyTd13": "0.5-1%",
            "tbodyTd14": "High Fees",

            "tbodyTd21": "Legal Protections",
            "tbodyTd22": "StiB Legals",
            "tbodyTd23": "Nothing",
            "tbodyTd24": "You’re on your own",

            "tbodyTd31": "Share profits to all",
            "tbodyTd32": "StiB Reserves",
            "tbodyTd33": "Airdrops",
            "tbodyTd34": "Profits not for you",

            "tbodyTd41": "Unbanked & Financial Inclusions",
            "tbodyTd42": "StiB Charity/Universal",
            "tbodyTd43": "Some",
            "tbodyTd44": "PR only no vision",
        },
        // contact[9]
        {
            "title": "Contact Us",
            "phone": "(+1)(617) 863−7286"
        },
        // footer [10]
        {
            "link": "https://t.me/StiBenglish",
            "terms": "TERMS",
            "privacy": "PRIVACY"
        }
    ];
    // ////////////////////////////////////////////////////////////
    const langVn = [
        // banner [0]
        {
            "title": 'HƯỚNG ĐI CỦA StiB',
            "description": "Chúng tôi hướng đến những điều tích cực!",
            "tooltip": "Xem ảnh lớn",
            "imgSrc": "images/philosophy-vn.png",
            "imgSrcMobile": "images/philosophy_mobile-vn.png"
        },
        // menu[1]
        {
            "title1": "StiB TOKENS",
            "title2": "KẾ HOẠCH AIRDROP",
            "title3": "LỘ TRÌNH",
            "title4": "ĐỘI NGŨ",
            "title5": "ĐIỂM KHÁC BIỆT",
            "title6": "LIÊN HỆ"
        },
        // tokens [2]
        {
            "description": "'Sti' là tên của Token trong hệ sinh thái của StiB và người giữ token sẽ có quyền lợi trong nghiên cứu, dịch vụ và các sản phẩm trong tương lai.",

            "text1": "Tên Token: Sti",
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
            "text23": "15/01/2020 (dự kiến)",
            "title24": "Số lượng trả ban đầu:",
            "text24": " 3.7% trên tổng vốn đầu tư",

            "invest": "ĐẦU TƯ NGAY",
            "link": "https://docs.google.com/forms/d/e/1FAIpQLSezsmT_B6xgfGE626N7HkWMWx61pGRrRcDOPra6DJ2IkRjCtA/viewform"
        },
        // intro [3]
        {
            "ques1": "CHÚNG TÔI LÀ StiB",
            "ques2": "StiB TOKENS?",
            "ques3": "LỢI NHUẬN StiB?",

            "ans1": "We decentralize and leave no one behind!",
            "ans2": "Sử dụng nhiều phương pháp thông minh hơn, chủ sở hữu StiB Tokens đều có cơ hội đầu tư thay vì bị quyết định theo phương thức quay số truyền thống hoặc phải tham gia vào trò chơi may rủi mà người thắng cuộc là người nhanh tay nhất.",
            "ans3": "Với quỹ dự trữ StiB Reserves, khách hàng có thể giao dịch (mua bán/cho vay, mượn) với công ty nhanh chóng bằng tiền tệ hoặc tiền điện tử."
        },
        // download[4]
        {
            "title": "Tải ngay ứng dụng StiB P2P trên iOS/Android để giao dịch (mua/bán + cho vay/mượn)",
            "button": "Tải ngay!"
        },
        // airdrop[5]
        {
            "title": "KẾ HOẠCH Airdrop",
            "description": "Ngày thưởng mỗi tháng trong năm 2020: ",
            "descriptionTime": "Ngày 15 tháng 10, ngày 15 tháng 2, ngày 15 tháng 3, ngày 15 tháng 4, ngày 15 tháng 5, ngày 15 tháng 6.",
            "theadTh1": "Số lượng Token Sti bán ra",
            "theadTh2": "Thưởng mỗi tháng (STIs)",
            "theadTh3": "Tổng thưởng trong 6 tháng (STIs)",
        },
        // roadmap[6]
        {
            "tooltip": "Xem ảnh lớn",
            "title": "Tầm nhìn và Hướng đi",
            "imgSrc": "images/roadmap-vn.png",
            "imgSrcMobile": "images/roadmap-vn.png",
            "description": "Mục đích là mang tiền điện tử đến mọi người.",
            "description2": "Mục tiêu cao nhất của chúng tôi là tạo nên một hệ sinh thái mở dành cho tất cả mọi người để giao dịch, đầu tư và thanh toán,... với sứ mệnh mang tiền điện tử đến gần hơn với công chúng. Quyền tự quyết nằm trong lòng bàn tay của bạn.",
        },
        // team[7]
        {
            "title": "Đội ngũ",
            "slogan": "\"We decentralize with everyone in mind!\"",
            "teamName1": "Đội ngũ StiB",
            "teamDescription1": "Đội ngũ StiB tại sự kiện.",
            "teamName2": "Đội ngũ StiB",
            "teamDescription2": "Đội ngũ StiB ở Saigon, Vietnam."
        },
        // unique[8]
        {
            "title": "ĐIỂM KHÁC BIỆT",
            "titleSlogan": "StiB độc đáo và khác biệt.",
            "theadTh1": "StiB có",
            "theadTh2": "StiB",
            "theadTh3": "Nơi khác",
            "theadTh4": "Họ có",

            "tbodyTd11": "Không phí giao dịch",
            "tbodyTd12": "0%",
            "tbodyTd13": "0.5-1%",
            "tbodyTd14": "Phí cao",

            "tbodyTd21": "Bảo vệ pháp lý",
            "tbodyTd22": "StiB Legals",
            "tbodyTd23": "Không có",
            "tbodyTd24": "Tự làm tự chịu",

            "tbodyTd31": "Chia sẻ lợi nhuận",
            "tbodyTd32": "StiB Reserves",
            "tbodyTd33": "Airdrops",
            "tbodyTd34": "Không chia sẻ",

            "tbodyTd41": "Không có ngân hàng & kênh tài chính",
            "tbodyTd42": "StiB Charity/Universal",
            "tbodyTd43": "Có thể",
            "tbodyTd44": "Quảng cáo không rõ ràng",
        },
        // contact[9]
        {
            "title": "Liên hệ",
            "phone": "(+84) 90 609 7525"
        },
        // footer [10]
        {
            "link": "https://t.me/StiBvietnam",
            "terms": "Điều khoản",
            "privacy": "Bảo mật"
        }
    ];

    function switchLang(lang) {
        // console.log("da chuyen sang" + langChoice); // work!
        // banner [0]
        $('#ani-title').text(lang[0].title);
        $('#ani-text').text(lang[0].description);
        $('.tooltip-phi').text(lang[0].tooltip);
        $('#img-philosophy').attr("src", lang[0].imgSrc);
        $('#img-philosophy-mobile').attr("src", lang[0].imgSrcMobile);
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
        $('#tokens .grid-2 .token-utility li:nth-child(1) span:last-child').html($('#tokens .grid-2 .token-utility li:nth-child(1) span:last-child').html().replace(/\n/g, '<br/>'));

        $('#tokens .grid-2 .token-utility li:nth-child(2) span.utility-title').text(lang[2].title22);
        $('#tokens .grid-2 .token-utility li:nth-child(2) span:last-child').text(lang[2].text22);

        $('#tokens .grid-2 .token-utility li:nth-child(3) span.utility-title').text(lang[2].title23);
        $('#tokens .grid-2 .token-utility li:nth-child(3) span:last-child').text(lang[2].text23);

        $('#tokens .grid-2 .token-utility li:nth-child(4) span.utility-title').text(lang[2].title24);
        $('#tokens .grid-2 .token-utility li:nth-child(4) span:last-child').text(lang[2].text24);

        $('.wrapper-invest a span').text(lang[2].invest);
        $('#invest .wrapper-invest a').attr('href', lang[2].link);
        // intro[3]
        $('.wrapper-questions li.q-li:nth-child(1) h3').text(lang[3].ques1);
        $('.wrapper-questions li.q-li:nth-child(2) h3').text(lang[3].ques2);
        $('.wrapper-questions li.q-li:nth-child(3) h3').text(lang[3].ques3);

        $('.wrapper-answers p.answers-p:nth-child(1) span.answers').text(lang[3].ans1);
        $('.wrapper-answers p.answers-p:nth-child(2) span.answers').text(lang[3].ans2);
        $('.wrapper-answers p.answers-p:nth-child(3) span.answers').text(lang[3].ans3);
        // download[4]
        $('.title-download h1').text(lang[4].title);
        $('.gg-play-btn a span').text(lang[4].button);
        // airdrop[5]
        $('.title-airdrop h1').text(lang[5].title);
        $('#airdrop .description p span:first-child').text(lang[5].description);
        $('#airdrop .description p span:last-child').text(lang[5].descriptionTime);

        $('#airdrop table.table thead tr th:nth-child(1)').text(lang[5].theadTh1);
        $('#airdrop table.table thead tr th:nth-child(2)').text(lang[5].theadTh2);
        $('#airdrop table.table thead tr th:nth-child(3)').text(lang[5].theadTh3);
        // roadmap[6]
        $('.tooltip').text(lang[6].tooltip);
        $('.title-roadmap h1').text(lang[6].title);
        $('#img-roadmap').attr("src", lang[6].imgSrc);
        $('#img-roadmap-mobile').attr("src", lang[6].imgSrcMobile);
        $('.description-roadmap p').text(lang[6].description);
        $('.description-2 p').text(lang[6].description2);
        // team[7]
        $('.title-team h1').text(lang[7].title);
        $('.title-team p').text(lang[7].slogan);
        $('#team .item:nth-child(1) .title-team-name h4').text(lang[7].teamName1);
        $('#team .item:nth-child(1) .description-team p').text(lang[7].teamDescription1);
        $('#team .item:nth-child(2) .title-team-name h4').text(lang[7].teamName2);
        $('#team .item:nth-child(2) .description-team p').text(lang[7].teamDescription2);
        // unique[8]
        $('.title-unique h1').text(lang[8].title);
        $('#unique .description p').text(lang[8].titleSlogan);
        $('#unique table.table thead tr th:nth-child(1)').text(lang[8].theadTh1);
        $('#unique table.table thead tr th:nth-child(2)').text(lang[8].theadTh2);
        $('#unique table.table thead tr th:nth-child(3)').text(lang[8].theadTh3);
        $('#unique table.table thead tr th:nth-child(4)').text(lang[8].theadTh4);

        $('#unique table.table tbody tr:nth-child(1) td:nth-child(1)').text(lang[8].tbodyTd11);
        $('#unique table.table tbody tr:nth-child(1) td:nth-child(2)').text(lang[8].tbodyTd12);
        $('#unique table.table tbody tr:nth-child(1) td:nth-child(3)').text(lang[8].tbodyTd13);
        $('#unique table.table tbody tr:nth-child(1) td:nth-child(4)').text(lang[8].tbodyTd14);

        $('#unique table.table tbody tr:nth-child(2) td:nth-child(1)').text(lang[8].tbodyTd21);
        $('#unique table.table tbody tr:nth-child(2) td:nth-child(2)').text(lang[8].tbodyTd22);
        $('#unique table.table tbody tr:nth-child(2) td:nth-child(3)').text(lang[8].tbodyTd23);
        $('#unique table.table tbody tr:nth-child(2) td:nth-child(4)').text(lang[8].tbodyTd24);

        $('#unique table.table tbody tr:nth-child(3) td:nth-child(1)').text(lang[8].tbodyTd31);
        $('#unique table.table tbody tr:nth-child(3) td:nth-child(2)').text(lang[8].tbodyTd32);
        $('#unique table.table tbody tr:nth-child(3) td:nth-child(3)').text(lang[8].tbodyTd33);
        $('#unique table.table tbody tr:nth-child(3) td:nth-child(4)').text(lang[8].tbodyTd34);

        $('#unique table.table tbody tr:nth-child(4) td:nth-child(1)').text(lang[8].tbodyTd41);
        $('#unique table.table tbody tr:nth-child(4) td:nth-child(2)').text(lang[8].tbodyTd42);
        $('#unique table.table tbody tr:nth-child(4) td:nth-child(3)').text(lang[8].tbodyTd43);
        $('#unique table.table tbody tr:nth-child(4) td:nth-child(4)').text(lang[8].tbodyTd44);
        // contact[9]
        $('.title-contact h1').text(lang[9].title);
        $('#phone-number').text(lang[9].phone);
        // footer[10]
        $('#link-telegram').attr("href", lang[10].link);
        $('.link_ToS').text(lang[10].terms);
        $('.link_Pri').text(lang[10].privacy);
    }
})