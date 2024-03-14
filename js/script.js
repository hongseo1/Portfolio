// https://codeday.me/ko/qa/20190307/17224.html  브라우저별 스크롤이벤트참고.

$(function(){
	
	
	var options = {
		'speed': 500,
		'initTop': 250, //초기탭메뉴 위치 top에서 아래로 250
		'alwaysTop':true, //항상따라다니도록, true는 고정
		'default_x':'#wrap' //가로축, 레이아웃이 가운데 정렬 일때 레이어가 붙는 아이디값
	}
	
	$('#floatdiv').Floater(options);  //Jquery floater 레이어를 항상 화면에 떠있거나 따라 다니도록 처리
	
	
	//페이지 위치
	$('#btn01').click(function(){
		$('html, body').animate({scrollTop:$('#intro').offset().top},800); //.offset()은 선택한 요소의 좌표를 가져오거나 특정 좌표로 이동시킵니다.
	});
	$('#btn02').click(function(){
		$('html, body').animate({scrollTop:$('#profile').offset().top},800);
	});
	$('#btn03').click(function(){
		$('html, body').animate({scrollTop:$('#portfolio').offset().top},800);
	});
	$('#btn04').click(function(){
		$('html, body').animate({scrollTop:$('#css').offset().top},800);
	});
	$('#btn05').click(function(){
		$('html, body').animate({scrollTop:$('#jquery').offset().top},800);
	});
	$('#btn06').click(function(){
		$('html, body').animate({scrollTop:$('#responsive').offset().top},800);
	});
	$('#btn07').click(function(){
		$('html, body').animate({scrollTop:$('#mobile').offset().top},800);
	});
	$('#btn08').click(function(){
		$('html, body').animate({scrollTop:$('#all').offset().top},800);
	});


	//메뉴클릭시 페이지 이동
	var menu=$('#nav>ul>li');
	var contents=$('#contents>div');
	var btn=$('#floatdiv ul li');
	
	
	//메뉴클릭시 페이지 이동
	menu.click(function(event){
		event.preventDefault(); //추가로 이벤트를 전파하지 않고 취소
		var tg=$(this); //현재 해당요소를 tg
		var i=tg.index(); //일치하는요소를 i라 하고
		var section=contents.eq(i); //i순번에 해당 컨텐츠를 section에 담아
		var tt=section.offset().top; //section을 top으로 이동한 값을 tt
		$('html,body').stop().animate({scrollTop:tt});  //scrollTop:화면이 시작되자 마자 원하는 위치tt로 스크롤 이동
	});
	
	
	//스크롤 이동시 메뉴와 버튼 활성화
	$(window).scroll(function(){
		var sct=$(window).scrollTop(); //페이지 시작시 윈도우창에 스크롤의 위치를 sct(스크롤탑)으로
		contents.each(function(){ //반복문
		//each는 jQuery를 사용해 배열을 관리하고자 할 때 each() 메서드를 사용(object 와 배열 모두에서 사용할 수 있는 일반적인 반복 함수
		//여기서는 일반 메서드:제이쿼리에 선택자를 넘기면 해당 선택자를 자바스크립트의 반복문과 같이 사용됨.
			var tg=$(this); //현재 해당요소를 tg
			var i=tg.index(); //일치하는요소를 i라 하고
			if(tg.offset().top<=sct){ //스크롤탑의 위치가 top보다 크거나 같다면 tg을 특정좌표로 이동
				menu.removeClass('on'); //메뉴 on취소
				menu.eq(i).addClass('on'); //현재 순번 메뉴 on
				btn.removeClass('active'); //버튼 활성화취소
				btn.eq(i).addClass('active'); //현재 순번 버튼활성화
			}
		});
	});



	//마우스휠 이벤트 : 브라우저 간 마우스 휠 속도 표준화.
	//익스, 크롬, 사파리, 오페라:mousewheel 이라는 이벤트를 사용할 수 있고,파이어폭스 의 경우:DOMMouseScroll 이라는 이벤트를 사용
	//파이어 폭스는 mousewheel 이라는 이벤트가 없기 때문에 mousewheel 과 DOMMouseScroll 이벤트 두개를 동시에 걸어주는 메서드인 .on() 를 사용해야 함.
	
	$("div.mn").each(function () { //개별적으로 휠 이벤트 적용
		$(this).on("mousewheel DOMMouseScroll", function (e) { 
			 // html, body 에 마우스 휠 이벤트와 돔마우스스크롤 이벤트 줌.
			//마우스 휠 이벤트: 마우스휠을 이용하여 스크롤(위,아래(음수)).예:아래-120,위120만큼 이동하도록

			e.preventDefault(); //추가로 이벤트를 전파하지 않고 취소
			var delta = 0; // 변수 delta에 숫자 자료형 0 을 할당

			if (!event) event = window.event; // DOM 이벤트 핸들러가 호출되는 동안에만 사용할 수 있는 마이크로소프트에서 제공하는 인터넷 익스플로러의 프로퍼티.
			//위에서 function (e)의 구문에서 Internet Explorer의 경우 e가 존재하지 않으므로 대신에 window.event를 필요로함.
					
			if (event.wheelDelta) { //wheelDelta:마우스 휠을 '내리게' 되면 -120 을 출력하고 마우스 휠을 '올리게' 되면 120 을 출력.
			//노트북에선 마우스 내릴 때(음수) -150 올릴때 150 으로 표시되는 경우가 있음.
			// https://codeday.me/ko/qa/20190307/17224.html  브라우저별 스크롤이벤트참고.
			
				delta = event.wheelDelta / 120;   /* IE/Chrome/Opera */
				/* if (window.opera) delta = -delta; //만약 오페라 브라우져라면 -delta */

			} else if (event.detail) delta = -event.detail / 3;  
			
			// 또는 /3대신  *(곱하기) -40사용하기도 함. Safari 및 Chrome에서 wheelDelta는 마우스 휠의 경우 120 대신 3
			
			//detail속성은 파이어 폭스에서 적용됨. 익스,크롬에서는 속성이 없음.



			var moveTop = null;  //객체가 없음.
			
			//마우스휠을 위에서 아래로
			if (delta < 0) {
				if ($(this).next() != undefined) { //값을 가지고 있지 않다면
					moveTop = $(this).next().offset().top; //타겟의 다음좌표의
				}
				
			//마우스휠을 아래에서 위로
			} else {
				if ($(this).prev() != undefined) { //값을 가지고 있지 않다면
					moveTop = $(this).prev().offset().top; //타겟의 이전좌표의
				}
			}
			
			//화면이동0.5초
			$("html,body").stop().animate({
				scrollTop: moveTop + 'px'
			}, {
				duration: 500
			});
		});
	});	

	/* pop */
	$(function(){
		$('#pop>button').click(function(){
			$('#pop').toggle();
		});
	});

	/* 타이핌 */
	$(function(){
		$('.type01').typed({
			strings:["HongSeoWon's"+"<br>"+" Portfolio"],
			typeSpeed:150, //타이핑속도
			backDelay:4850, 
			loop: false //false는 한번만 실행
		});
		$('.typed-cursor').css('display', 'none');
	});

	

	$(function (){
		setTimeout(function(){
			$('.type02').typed({
				strings:["많은 가능성을 담고 있는"+"<br>"+"신입 웹퍼블리셔입니다."],
				typeSpeed:150, //타이핑속도
				backDelay:200,
				loop: true //false는 한번만 실행
				// (function(){}, 1000);

			});
		},4250); 
	});
















	
	
	/* mockup */

	/* css */
	$(function(){
		//컴퓨터이미지 호버하면 자동 스크롤
		$('.css_img .main_page01').hover(function(){
			var ah = $(this).find('a').innerHeight();
			var img = $(this).find('img');
			var imgh = $(this).find('img').innerHeight();
	
			img.stop().animate({top:ah-imgh},5000);
	
		},function(){
			var ah = $(this).find('a').innerHeight();
			var img = $(this).find('img');
			var imgh = $(this).find('img').innerHeight();
	
			img.stop().animate({top:0},5000);
		});
		
	});

	/* jquery */
	$(function(){
		//컴퓨터이미지 호버하면 자동 스크롤
		$('.jquery_img .main_page02').hover(function(){
			var ah = $(this).find('a').innerHeight();
			var img = $(this).find('img');
			var imgh = $(this).find('img').innerHeight();
	
			img.stop().animate({top:ah-imgh},5000);
	
		},function(){
			var ah = $(this).find('a').innerHeight();
			var img = $(this).find('img');
			var imgh = $(this).find('img').innerHeight();
	
			img.stop().animate({top:0},5000);
		});
		
	});

	/* responsive */

	/*01*/
	$(function(){ /* pc */
		//컴퓨터이미지 호버하면 자동 스크롤
		$('.pc_mockup01 .main_page03').hover(function(){
			var ah = $(this).find('a').innerHeight();
			var img = $(this).find('img');
			var imgh = $(this).find('img').innerHeight();
	
			img.stop().animate({top:ah-imgh},5000);
	
		},function(){
			var ah = $(this).find('a').innerHeight();
			var img = $(this).find('img');
			var imgh = $(this).find('img').innerHeight();
	
			img.stop().animate({top:0},5000);
		});
		
	});

	$(function(){ /* tablet */
		//컴퓨터이미지 호버하면 자동 스크롤
		$('.tablet_mockup01 .main_page03_1').hover(function(){
			var ah = $(this).find('a').innerHeight();
			var img = $(this).find('img');
			var imgh = $(this).find('img').innerHeight();
	
			img.stop().animate({top:ah-imgh},5000);
	
		},function(){
			var ah = $(this).find('a').innerHeight();
			var img = $(this).find('img');
			var imgh = $(this).find('img').innerHeight();
	
			img.stop().animate({top:0},5000);
		});
		
	});

	$(function(){ /* mobile */
		//컴퓨터이미지 호버하면 자동 스크롤
		$('.mobile_mockup01 .main_page03_2').hover(function(){
			var ah = $(this).find('a').innerHeight();
			var img = $(this).find('img');
			var imgh = $(this).find('img').innerHeight();
	
			img.stop().animate({top:ah-imgh},5000);
	
		},function(){
			var ah = $(this).find('a').innerHeight();
			var img = $(this).find('img');
			var imgh = $(this).find('img').innerHeight();
	
			img.stop().animate({top:0},5000);
		});
		
	});

	/*02*/
	$(function(){ /* pc */
		//컴퓨터이미지 호버하면 자동 스크롤
		$('.pc_mockup02 .main_page03').hover(function(){
			var ah = $(this).find('a').innerHeight();
			var img = $(this).find('img');
			var imgh = $(this).find('img').innerHeight();
	
			img.stop().animate({top:ah-imgh},5000);
	
		},function(){
			var ah = $(this).find('a').innerHeight();
			var img = $(this).find('img');
			var imgh = $(this).find('img').innerHeight();
	
			img.stop().animate({top:0},5000);
		});
		
	});

	$(function(){ /* tablet */
		//컴퓨터이미지 호버하면 자동 스크롤
		$('.tablet_mockup02 .main_page03_1').hover(function(){
			var ah = $(this).find('a').innerHeight();
			var img = $(this).find('img');
			var imgh = $(this).find('img').innerHeight();
	
			img.stop().animate({top:ah-imgh},5000);
	
		},function(){
			var ah = $(this).find('a').innerHeight();
			var img = $(this).find('img');
			var imgh = $(this).find('img').innerHeight();
	
			img.stop().animate({top:0},5000);
		});
		
	});

	$(function(){ /* mobile */
		//컴퓨터이미지 호버하면 자동 스크롤
		$('.mobile_mockup02 .main_page03_2').hover(function(){
			var ah = $(this).find('a').innerHeight();
			var img = $(this).find('img');
			var imgh = $(this).find('img').innerHeight();
	
			img.stop().animate({top:ah-imgh},5000);
	
		},function(){
			var ah = $(this).find('a').innerHeight();
			var img = $(this).find('img');
			var imgh = $(this).find('img').innerHeight();
	
			img.stop().animate({top:0},5000);
		});
		
	});

	/* /*03
	$(function(){ // pc
		//컴퓨터이미지 호버하면 자동 스크롤
		$('.pc_mockup03 .main_page03').hover(function(){
			var ah = $(this).find('a').innerHeight();
			var img = $(this).find('img');
			var imgh = $(this).find('img').innerHeight();
	
			img.stop().animate({top:ah-imgh},5000);
	
		},function(){
			var ah = $(this).find('a').innerHeight();
			var img = $(this).find('img');
			var imgh = $(this).find('img').innerHeight();
	
			img.stop().animate({top:0},5000);
		});
		
	});

	$(function(){ // tablet 
		//컴퓨터이미지 호버하면 자동 스크롤
		$('.tablet_mockup03 .main_page03_1').hover(function(){
			var ah = $(this).find('a').innerHeight();
			var img = $(this).find('img');
			var imgh = $(this).find('img').innerHeight();
	
			img.stop().animate({top:ah-imgh},5000);
	
		},function(){
			var ah = $(this).find('a').innerHeight();
			var img = $(this).find('img');
			var imgh = $(this).find('img').innerHeight();
	
			img.stop().animate({top:0},5000);
		});
		
	});

	$(function(){ //mobile 
		//컴퓨터이미지 호버하면 자동 스크롤
		$('.mobile_mockup03 .main_page03_2').hover(function(){
			var ah = $(this).find('a').innerHeight();
			var img = $(this).find('img');
			var imgh = $(this).find('img').innerHeight();
	
			img.stop().animate({top:ah-imgh},5000);
	
		},function(){
			var ah = $(this).find('a').innerHeight();
			var img = $(this).find('img');
			var imgh = $(this).find('img').innerHeight();
	
			img.stop().animate({top:0},5000);
		});
		
	}); */

	/* mobile */
	$(function(){
		//컴퓨터이미지 호버하면 자동 스크롤
		$('.mobile_img .main_page04').hover(function(){
			var ah = $(this).find('a').innerHeight();
			var img = $(this).find('img');
			var imgh = $(this).find('img').innerHeight();
	
			img.stop().animate({top:ah-imgh},5000);
	
		},function(){
			var ah = $(this).find('a').innerHeight();
			var img = $(this).find('img');
			var imgh = $(this).find('img').innerHeight();
	
			img.stop().animate({top:0},5000);
		});
		
	});



	/* tab */
	$(function(){
		var tab = $(".all_tab>li");
		var content = $(".all_tab_contents>div");

		content.hide().eq(0).show();
		tab.click(function (event) {
			event.preventDefault(); //링크속성을 없애줌
			var tg = $(this); //클릭한 대상을 tg로
			var i = tg.index(); //현재 눌려진 대상을 i로 설정

			tab.removeClass("tab_on"); //초기화
			tg.addClass("tab_on"); //활성화 
			//버튼

			content.css("display", "none");
			content.eq(i).css("display", "block")
			//내용
		});		


	});


	/* Demo purposes only */
	$(".hover").mouseleave(
		function () {
		  $(this).removeClass("hover");
		}
	);


	
});