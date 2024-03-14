$(document).ready(function(){


/* skill circle-chart */
	activate =0;
	function chartPercent(){
		var $content = $('#content-wrap'),
		$charts = $content.find('.chart');
 		$charts.find('.num').eq(0).text(90);
		$charts.find('.num').eq(1).text(85);
		$charts.find('.num').eq(2).text(95);
		$charts.find('.num').eq(3).text(85);
	};
	
	$(window).on('scroll',$.throttle(1000/15,function() {
		var sct = $(this).scrollTop();

		if(sct >= 1000 && sct < 2000){
			activateScene();
		}else{
			no_activeScene();
		};
	})); 
	
	activateScene();
	
		function activateScene(){
			var $content = $('#content-wrap'),
			$charts = $content.find('.chart');
			$content.stop(true).animate({right: 0}, 1200, 'easeInOutQuint');
			if(activate == 0){
				chartPercent();
				
				$charts.each(function(){
					var $chart = $(this),
					$circleLeft = $chart.find('.Rotate_L .Inside')
						.css({transform:'rotate(0)'}),
					$circleRight = $chart.find('.Rotate_R .Inside')
						.css({transform:'rotate(0)'}),
					$percentNumber = $chart.find('.num'),
					percentData = $percentNumber.text();

					$percentNumber.text(0);
					$({percent: 0}).delay(1000).animate({percent:percentData},{
						duration:1500,
						progress:function(){
							var now = this.percent,
							deg = now * 360 / 100,
							degRight = Math.min(Math.max(deg,0),180);
							degLeft = Math.min(Math.max(deg-180,0),180);
							$circleRight.css({transform:'rotate('+degRight+'deg)'});
							$circleLeft.css({transform:'rotate('+degLeft+'deg)'});
							$percentNumber.text(Math.floor(now));
						}
					});
				});
			};
			activate=1;
		};
		function  no_activeScene(){
			var $content = $('#content-wrap'),
			$charts = $content.find('.chart');
			$content.stop(true).animate({right: '-50%'}, 1200, 'easeInOutQuint');
			activate=0;
			chartPercent();
		}


});
