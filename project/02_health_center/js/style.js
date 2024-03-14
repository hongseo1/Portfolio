$(function (){


/* 메뉴 */

$(function () {
    $('#menu>ul>li').mouseenter(function () {
        $(this).find('.sub_menu').stop().slideDown(500);
    });
    $('#menu>ul>li').mouseleave(function () {
        $(this).find('.sub_menu').stop().slideUp(500);
    });
}); // 지정된 요소만 선택됨. 자식요소는 선택이 안됨.



/* 전체메뉴 보기(햄버거 버튼) */

    
$('#menu #ham_btn #ham_open').click(function(){
    $('#ham_menu').css('display','block');
});

$('.ham_but_close').click(function(){
    $('#ham_menu').css('display','none');
});


/* footer site select */

    /* 01 */
    $(function(){
        $('.site01_but_u>.site_but_u').click(function(){
            $('.site_cont01').stop().slideDown();
        });
        $('.site_tit01>.site_but_d').click(function(){
            $('.site_cont01').stop().slideUp();
        });
    });

    /* 02 */
    $(function(){
        $('.site02_but_u>.site_but_u').click(function(){
            $('.site_cont02').stop().slideDown();
        });
        $('.site_tit02>.site_but_d').click(function(){
            $('.site_cont02').stop().slideUp();
        });
    });

    /* 03 */
    $(function(){
        $('.site03_but_u>.site_but_u').click(function(){
            $('.site_cont03').stop().slideDown();
        });
        $('.site_tit03>.site_but_d').click(function(){
            $('.site_cont03').stop().slideUp();
        });
    });
    
});