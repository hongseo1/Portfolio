$(function(){

    /* 세로메뉴 */
    $(function(){

        var active_sub01 = $('.sub01_menu>ul>li>a')

        active_sub01.hover(function(){
            
            var tg1 = $(this); 
            var i1 = tg1.index(); 

            active_sub01.removeClass("active_sub01"); 
            tg1.addClass("active_sub01");

            
        });

    });

    $(function(){

        var active_li = $('.sub01_menu>ul>li')

        active_li.hover(function(){
            
            var tg2 = $(this); 
            var i2 = tg2.index(); 

            active_li.removeClass("active_li"); 
            tg2.addClass("active_li");

            
        });

    });

 

    $('.menu_cont>li').mouseenter(function(){
        
        $('.menu_sub').stop().slideUp(300);
        $(this).find('.menu_sub').stop().slideDown();

    });




    /* 프린트 */
    $('.print').on('click',function(){
        window.print();
        return false;
    });


});