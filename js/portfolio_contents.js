$(function(){ 


    var visual=$('.css_contents>.css_contents_wrap>li'); // 슬라이드 이미지
    var button=$('.buttonList01>li');	 // 버튼

    var current=0 // 현재 보이는 이미지
    
    //버튼을 클릭 했을 때
    button.on({click:function(){
        var tg=$(this);
        var i=tg.index(); // 선택한 버튼의 인덱스 번호
        
        button.removeClass('on'); // 현재 활성화된 'on'이 두 번 생기는 일을 방지
        tg.addClass('on'); // 선택한 버튼에 'on' 활성화
        
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
        
});

$(function(){ 


    var visual=$('.jquery_contents>.jquery_contents_wrap>li'); // 슬라이드 이미지
    var button=$('.buttonList02>li');	 // 버튼

    var current=0 // 현재 보이는 이미지
    
    //버튼을 클릭 했을 때
    button.on({click:function(){
        var tg=$(this);
        var i=tg.index(); // 선택한 버튼의 인덱스 번호
        
        button.removeClass('on'); // 현재 활성화된 'on'이 두 번 생기는 일을 방지
        tg.addClass('on'); // 선택한 버튼에 'on' 활성화
        
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
        
});

$(function(){ 


    var visual=$('.responsive_contents>.responsive_contents_wrap>li'); // 슬라이드 이미지
    var button=$('.buttonList03>li');	 // 버튼

    var current=0 // 현재 보이는 이미지
    
    //버튼을 클릭 했을 때
    button.on({click:function(){
        var tg=$(this);
        var i=tg.index(); // 선택한 버튼의 인덱스 번호
        
        button.removeClass('on'); // 현재 활성화된 'on'이 두 번 생기는 일을 방지
        tg.addClass('on'); // 선택한 버튼에 'on' 활성화
        
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
        
});

$(function(){ 


    var visual=$('.mobile_contents>.mobile_contents_wrap>li'); // 슬라이드 이미지
    var button=$('.buttonList04>li');	 // 버튼

    var current=0 // 현재 보이는 이미지
    
    //버튼을 클릭 했을 때
    button.on({click:function(){
        var tg=$(this);
        var i=tg.index(); // 선택한 버튼의 인덱스 번호
        
        button.removeClass('on'); // 현재 활성화된 'on'이 두 번 생기는 일을 방지
        tg.addClass('on'); // 선택한 버튼에 'on' 활성화
        
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
        
});