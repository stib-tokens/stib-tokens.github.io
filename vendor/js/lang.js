$(document).ready(function (){
    var btnEng = document.getElementById('en-lang');
    var btnVn = document.getElementById('vn-lang');
    $('.show-current-lang').click(function(event){
        event.preventDefault();
        $('.lang-choice').toggleClass('active');
        $('.img-lang-current').toggleClass('active');
        // console.log($('.show-current-lang span').text());
    })
    for (let index = 0; index < $('.lang-select').length; index++) {
        $('.lang-select').eq(index).click(function(event){
            event.preventDefault();
            // style change
            if($('.lang-choice').hasClass('active')){$('.lang-choice').removeClass('active');}
            if($('.img-lang-current').hasClass('active')){$('.lang-choice').removeClass('active');}

            for (let j = 0; j < $('.lang-select').length; j++) {
                if($('.lang-select').eq(j).hasClass('active')){ $('.lang-select').removeClass('active') }
            }
            $('.lang-select').eq(index).addClass('active');

            $('.show-current-lang span').text($('.lang-select').eq(index).text());
        });
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

            // "title1col1": "Amount of Sti tokens bought",
            // "title1col2": "Monthly bonus (Stis)",
            // "title1col3": "	Total bonus in 6 months (Stis)",

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

            // "title3col1row1": "Timeline",
            // "title3col1row3": "By 2022",
            // "title3col1row4": "By 2024",
            // "title3col1row5": "Beyond 2025",

            // "title3col2row1": "Phases",
            // "title3col2row2": "StiB P2P = Trades+Loans",

            // "title3col3row1": "Team",

            // "title3col4row1": "Global Reach",


            // "title4col1row1": "What we offer",
            // "title4col1row2": "Commissions Free",
            // "title4col1row3": "Legal Protections",
            // "title4col1row4": "Share profits to all",
            // "title4col1row5": "Unbanked & Financial Inclusions",

            // "title4col3row1": "Others",
            // "title4col3row3": "Nothing",
            // "title4col3row4": "Airdrops",
            // "title4col3row5": "Some",

            // "title4col4row1": "They offer",
            // "title4col4row2": "High Fees",
            // "title4col4row3": "You’re on your own",
            // "title4col4row4": "Profits not for you",
            // "title4col4row5 ": "PR only no vision",
        },
        // monetize [3]
        {
            "title1": "Use of funds",
            "title2": "How StiB Monetize ?",
            "text1": "THROUGH StiB RESERVES WITH INSTANT SETTLEMENTS ON FIATS-CRYPTOS & CRYPTOS-CRYPTOS FOR BOTH TRADING + LENDING.",
            "text2": "$10-$100 ON EACH VERIFIED ACCOUNT WITH 10-100 ETH (1-10 BTC EARLY NEXT YEAR)\nTOTAL WILL BE $6M AT THE IEO PRICE OR 15% TOTAL SUPPLY."
        }
    ];
    // ////////////////////////////////////////////////////////////
    const langVn = [
        // banner [0]
        {
            "title": 'HƯỚNG ĐI CỦA StiB',
            "description": "Chúng tôi hướng đến những điều tích cực!",
            "tooltip": "Xem ảnh lớn"
        },
        // menu[1]
        {
            "title1": "HƯỚNG ĐI",
            "title2": "StiB TOKENS",
            "title3": "TẠO LỢI NHUẬN"
        },
        // tokens [2]
        {
            "tab1": "Kế hoạch Airdrop",
            "tab2": "Token Tiện Ích",
            "tab3": "Kế hoạch của StiB",
            "tab4": "Nét độc nhất của StiB",

            "title1col1": "Số lượng Token Sti bán ra",
            "title1col2": "Thưởng mỗi tháng (Stis)",
            "title1col3": "Tổng thưởng trong 6 tháng (Stis)",

            "title2col1row1": "Tên Token",
            "title2col1row2": "Loại Token",
            "title2col1row3": "Giá Token",
            "title2col1row4": "Tổng lượng Token tối đa",
            "title2col1row5": "Vốn huy động",
            "title2col1row6": "Huy động vốn cá nhân",
            "title2col1row7": "Ngày bán ra",
            "title2col1row8": "Ngày lên sàn giao dịch",
            "title2col1row9": "Số lượng trả ban đầu",
            
            "title2col2row6": "Quý 4 2019 - Bắt đầu huy động vốn\nQuý 1 2020 - Kết thúc huy động vốn",
            "title2col2row7": "Chưa quyết định ngày",
            "title2col2row8": "Chưa quyết định ngày",
            "title2col2row9": "1.5% trên tổng vốn đầu tư",

            "title3col1row1": "Mốc thời gian",
            "title3col1row3": "Từ 2022",
            "title3col1row4": "Từ 2024",
            "title3col1row5": "Sau 2025",

            "title3col2row1": "Giai đoạn",
            "title3col2row2": "StiB P2P = Giao dịch+Vay mượn",

            "title3col3row1": "Nhóm",

            "title3col4row1": "Người dùng",


            "title4col1row1": "StiB có",
            "title4col1row2": "Không phí giao dịch",
            "title4col1row3": "Bảo vệ pháp lý",
            "title4col1row4": "Chia sẻ lợi nhuận",
            "title4col1row5": "Không có ngân hàng & Không tiếp cận kênh tài chính",

            "title4col3row1": "Nơi khác",
            "title4col3row3": "Không",
            "title4col3row4": "Tiền khuyến mãi",
            "title4col3row5": "Có thể",

            "title4col4row1": "Họ có",
            "title4col4row2": "Phí cao",
            "title4col4row3": "Tự làm tự chịu",
            "title4col4row4": "Không chia sẻ",
            "title4col4row5": "Quảng cáo không rõ ràng",
        },
        // monetize [3]
        {
            "title1": "Nguồn vốn sử dụng",
            "title2": "StiB tạo lợi nhuận như thế nào ?",
            "text1": "VỚI QUỸ DỰ TRỮ StiB RESERVES, KHÁCH HÀNG CÓ THỂ GIAO DỊCH HOẶC VAY MƯỢN NGAY VỚI CÔNG TY NHANH CHÓNG BẰNG TIỀN MẶT HOẶC TIỀN ĐIỆN TỬ ",
            "text2": "$10-$100 với mỗi tài khoản đã được xác minh 10-100 ETH (1-10 BTC vào đầu năm sau)\nTổng vốn sẽ là $6M tại sàn IEO hoặc 15% tổng vốn đầu tư."
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
})