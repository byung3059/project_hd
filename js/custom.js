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

    $('.main_content .content_itm_box .itm').on('click', function () {

        $(this)
            .addClass('on')
            .siblings()
            .removeClass('on');

    })
    $('.gnb>ul>li>a').on('click', function (e) {
        e.preventDefault();

        // 현재 클릭한 a 태그의 부모 li 안에 있는 .sub만 선택
        $(this).siblings('.sub').toggleClass('on');
    });


});