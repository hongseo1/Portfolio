$(function (){

/* top_pop */
$(function(){
    $('#but').click(function(){
        $('#top_pop').toggle('slow'); /* 수정 */
    });
});

/* 메인배너 롤링 */
    $(function () {

        //슬라이드 이미지
        var visual = $('.main_bn_img>ul>li'); //슬라이드 이미지
        var button = $('.bn_but_num>ul>li'); //슬라이드 버튼
        var current = 0; //현재상태 초기화
        var setIntervalId; //변수선언

        function move(tg, start, end) { //move함수를 사용해 해당 객체(tg)를 시작(start)과 끝(end)지점으로 이동
            tg.css('left', start).stop().animate({
                left: end
            }, 500); //tg의 css속성의 left의 시작을 start로 하고 애니메이트 속성을 사용하여 left의 끝까지 이동시킴.  (top,left,right,bottom을 이용하여 배너의 흐름을 수정할 수 있다. css에서도 동일하게 수정)
        }

        function timer() { //일정시간 호출하기 위해 타이머를 만듬. 자동재생

            setIntervalId = setInterval(function () { //롤링되는 배너의 반복실행 지정

                var prev = visual.eq(current); //배너이미지의 초기화된 현재 순번을 prev에 담고
                var pn = button.eq(current); //동그란 버튼의 초기화된 현재순번을 pn으로 담고
                move(prev, 0, '-100%'); //이번버튼을 0에서 -100%로 이동

                pn.removeClass('on'); //버튼의 초기화된 현재순번 on 해제
                current++; //현재 상태에서 하나씩 추가

                if (current == visual.size()) {
                    current = 0;
                }
                //비주얼 이미지의 사이즈(크기)가 끝까지 갔다면 current에 담아.(초기화: current++에서 계속 증가하고 있는것을 조건식으로 제어) 

                var next = visual.eq(current); //비주얼 이미지의 초기화시킨 순번을 next에 담고
                var pnn = button.eq(current); //동그란 버튼의 초기화된 순번을 pnn에 담아

                move(next, '100%', 0); //이미지를 100%에서 0으로 이동
                pnn.addClass('on');

            }, 3000)


        }



        timer(); //자동재생.사용자가 직접 정의하여 사용하는 함수(사용자 정의함수)


        //stop,play버튼으로 자동재생 제어하기
        $('.bn_stop').click(function () { //stop버튼을 클릭하면
            clearInterval(setIntervalId); //자동재생 취소
            $('.bn_stop').hide(); //stop버튼 감추기
            $('.bn_play').show(); //start버튼 보이기
        });

        $('.bn_play').click(function () {
            timer(); //자동재생 실행
            $('.bn_stop').show();
            $('.bn_play').hide();
        });


        //동그란버튼
        button.click(function () { //버튼을 클릭시

            var tg = $(this); //클릭되어진 버튼을 tg라 하고
            var i = tg.index(); //클릭한 동그란 버튼tg의 인덱스(0~2)를 i라하고

            button.removeClass('on'); //버튼 활성화된 css를 on 해제하여 초기화 시킨 후

            tg.addClass('on'); //클릭한 버튼에 on 활성화
            movel(i); //버튼을 누르면 현재 화면에서 재생되도록하기 위해

        });

        function movel(i) { //현재 화면에서 재생시키기 위한 함수

            if (current == i) {
                return
            } //i가 현재화면과 같다면 함수 실행을 종료하고, 주어진 값을 함수 호출 지점으로 반환

            var currentEl = visual.eq(current); //비주얼이미지의 현재 순번이미지를 currentEl담고
            var nextEl = visual.eq(i); // 다음에 보여질 비주얼 이미지를 nextEl담고

            currentEl.css({
                left: 0
            }).stop().animate({
                left: '-100%'
            }, 500);
            nextEl.css({
                left: '100%'
            }).stop().animate({
                left: 0
            }, 500);

            current = i; //i는 현재상태 (호출)

        }


    });


/* 배너 하단 아이콘 */
    $(function(){

        var slide=$('.bn_icon>ul'); //슬라이드 이미지1
        var slideWidth=slide.width();


        //슬라이드 이미지를 감싸는 li
        var slideList=$('.bn_icon>ul>li');
        var slideListWidth=$('.bn_icon>ul>li').width();//상단 슬라이드 배너 리스트영역

        function mainSlide(){

            slide1.stop().animate({left:-slideListWidth1},500,function(){
                $('.bn_icon>ul>li:first').insertAfter('.bn_icon>ul>li:last'); 
                //슬라이드 다음이미지 삽입하기
                slide1.css('left',0);
            });

        }	

        function but_prev(){
            $('.bn_icon>ul>li:last').insertBefore('.bn_icon>ul>li:first');  //슬라이드 이전이미지 삽입하기
            slide1.css('left',-slideListWidth1);
            slide1.animate({left:0},500);
        }
        function but_next(){
            $('.bn_icon>ul>li:first').insertBefore('.bn_icon>ul>li:last');  //슬라이드 이전이미지 삽입하기
            slide1.css('left',-slideListWidth1);
            slide1.animate({left:0},500);
        }
        
        $('.but_prev').click(function(){
            but_prev();
        });
        $('.but_next').click(function(){
            but_next();
        }); // slide1
    });

/* 공지사항, 자료실 탭메뉴 */

    var tab = $(".notice_tab>li");
    var content = $(".notice_contents>div");

    content.hide().eq(0).show();
    tab.click(function (event) {
        event.preventDefault(); //링크속성을 없애줌
        var tg = $(this); //클릭한 대상을 tg로
        var i = tg.index(); //현재 눌려진 대상을 i로 설정

        tab.removeClass("active"); //초기화
        tg.addClass("active"); //활성화 
        //버튼

        content.css("display", "none");
        content.eq(i).css("display", "block")
        //내용
    });


/* pop_bn */
$(function(){ 


    var visual=$('.pop_bn_img>ul>li'); // 슬라이드 이미지
	var button=$('.pop_bn_num>ul>li');	 // 버튼
	var leftBtn=$('.arrow_but .arrow_left');
	var rightBtn=$('.arrow_but .arrow_right');
	var current=0; // 현재 보이는 이미지
	var setIntervalId; // clearInterval을 쓰기 위해 변수명이 필요함
	
	
	timer();
	function timer(){
		setIntervalId=setInterval(function(){
			var prev=visual.eq(current);
			var pn=button.eq(current);
			move(prev, 0, '-100%');
			pn.removeClass('pop_on');
		
			current++;
			
			if(current == visual.size()) current=0;
			
			var next=visual.eq(current);
			var pnn=button.eq(current);
			move(next, '100%',0);
			pnn.addClass('pop_on');
		}, 3000);
	};
	
	function move(tg, start, end){
		tg.css('left', start).stop().animate({left:end},{duration:500, ease:'easeOutCubic'}); //점점빨라지게
	}  
	
	
	
	
	//버튼을 클릭 했을 때
	button.on({click:function(){
		var tg=$(this);
		var i=tg.index(); // 선택한 버튼의 인덱스 번호
		
		button.removeClass('pop_on'); // 현재 활성화된 'on'이 두 번 생기는 일을 방지
		tg.addClass('pop_on'); // 선택한 버튼에 'on' 활성화
		
		move1(i); 
		}
	});
	
	function move1(i){
		if(current == i) return // 현재 보이는 이미지가 i랑 같으면 종료
		
		var currentEl=visual.eq(current);
		var nextEl=visual.eq(i)
		
		currentEl.css({left: 0}).stop().animate({left: '-100%'}, 500); // 현재 보이는 이미지 이동, %가 붙어서 ''안에 작성
		nextEl.css({left: '100%'}).stop().animate({left: 0}, 500); // 이미지 이동
		
		current=i;
	}
	
	
	
	//호버시 멈추게 하는 기능
	$('#pop_bn').on({
		mouseover:function(){
			clearInterval(setIntervalId);
		}, mouseout:function(){
			timer();
		}
	});

	
	
	/* 화살표클릭 */
	rightBtn.click(function(){
			var prev=visual.eq(current);
			var pn=button.eq(current);
        	move(prev, 0, '-100%');
			pn.removeClass('pop_on');
			
			
        	current++;

        	if(current == visual.size()) current=0;

        	var next=visual.eq(current);
			var pnn=button.eq(current);
        	move(next,'100%', 0);
			pnn.addClass('pop_on');
			return false;
		});	
	
	leftBtn.click(function(){
			var prev=visual.eq(current);
			var pn=button.eq(current);
        	move(prev, 0, '100%');
			pn.removeClass('pop_on');
			
        	current--;
			

        	if(current == -visual.size()) current=0;

        	var next=visual.eq(current);
			var pnn=button.eq(current);
        	move(next,'-100%', 0);
			pnn.addClass('pop_on');
			return false;
		});	
		
		
	});

    /* 지도 */
    /* 탭메뉴 */
    $(function(){
        var tab = $(".area_tab>li");
        var content = $(".map_wrap>div");

        content.hide().eq(0).show();
        tab.click(function (event) {
            event.preventDefault(); //링크속성을 없애줌
            var tg = $(this); //클릭한 대상을 tg로
            var i = tg.index(); //현재 눌려진 대상을 i로 설정

            tab.removeClass("active01"); //초기화
            tg.addClass("active01"); //활성화 
            //버튼

            content.css("display", "none");
            content.eq(i).css("display", "block")
            //내용
        });
    });


});