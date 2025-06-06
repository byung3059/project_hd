$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct);
        if (sct > 4) {
            $('#header').addClass('on')
        } else {
            $('#header').removeClass('on')
        }
    })

    // 모바일 메뉴

    $('.mbtn').on('click', function () {
        $(this).toggleClass('on')
    })

    $('#header .inner .util .mbtn').on('click', function () {
        $('#header .gnb').toggleClass('on');
        $('#header').toggleClass('menu_on');
    });

    $('#header .inner .gnb>ul>li>a').on('click', function (e) {
        $(this).parent().siblings().find('.sub').stop().slideUp();   // 메뉴 클릭하면 하나만 나오게

        if ($('#header .inner .gnb').hasClass('on')) {
            e.preventDefault(); // a링크 이벤트 없애기

            $(this).next().stop().slideToggle();
        }
    })

    $('#header .sub>li>a').on('click', function (e) {
        $(this).parent().siblings().find('.sub_list').stop().slideUp();   // 메뉴 클릭하면 하나만 나오게


        if ($('#header .inner .gnb').hasClass('on')) {
            e.preventDefault(); // a링크 이벤트 없애기

            $(this).next().stop().slideToggle();
        } else ($('#header .gnb .sub').removeAttr('style'));

    })


    $('.main_content .content_itm_box .itm').on('click', function () {
        $(this)
            .addClass('on')
            .siblings()
            .removeClass('on');
    });

});