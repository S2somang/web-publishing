// JavaScript Document

$(function(){
		$("#goods_con_position_button").hide();
		$(window).scroll(function(){
			//console.log($(this).scrollTop()); //스크롤의 위치를 콘솔화면에 보여주기
			if($(this).scrollTop()>=50){
				$("#goods_con_position_button").show();
			}
			else{
				$("#goods_con_position_button").hide();
			}
		});
		
		//#menu2버튼을 누르면 스크롤바가 제일 위로 올라가게 한다.
		//#menu2버튼을 누르면=>click이벤트
		//scrollTop을 0으로 만든다. 
		$("#goods_con_position_button .top_button").click(function(){
			//$(window).scrollTop(0);
			//window->웹브라우저 창
			$("html").animate(
			//body= 인터넷익스플로어
			//html = 파콕, 크롬...
			{ scrollTop:0 },800);
		});
		
		$("#goods_con_position_button .down_button").click(function(){
			$("html").animate(
				{ scrollTop: $(document).height()},800);
		});

	
	
		$(".menu_2").mouseover(function(){
		$(".side_2").css({"display":"block","border":"1px solid #d8d8d8"});	
		});
		$(".menu_2").mouseout(function(){
			$(".side_2").toggle();
					
		});
		$(".menu_3").mouseover(function(){
		$(".side_3").css({"display":"block","border":"1px solid #d8d8d8"});	
		});
		$(".menu_3").mouseout(function(){
			$(".side_3").toggle();
					
		});
		$(".menu_4").mouseover(function(){
		$(".side_4").css({"display":"block","border":"1px solid #d8d8d8"});	
		});
		$(".menu_4").mouseout(function(){
			$(".side_4").toggle();
					
		});
		$(".menu_5").mouseover(function(){
		$(".side_5").css({"display":"block","border":"1px solid #d8d8d8"});	
		});
		$(".menu_5").mouseout(function(){
			$(".side_5").toggle();
					
		});
		
		



		$("#slider").bxSlider({
			slideWidth:545,
			auto:true, /*슬라이더를 자동/수동*/
			/* true : 자동실행 / false : 수동실행*/
			pager:false,
			/*pagerCustom:"#pager",*/
			captions: true,
			speed:1000,	
			/* 자동 슬라이드 시간 1초*/
			});
		$("#con_silder1").bxSlider({
			slideWidth:466,
			auto:true, 
			pager:false,
			speed:1000,	
			/* 자동 슬라이드 시간 1초*/
			});
		$("#con_silder2").bxSlider({
			mode:"vertical",
			auto:true, /*슬라이더를 자동/수동*/
			/* true : 자동실행 / false : 수동실행*/
			pager:false,
			/*pagerCustom:"#pager",*/
			controls: false,
			speed:1000,	
			/* 자동 슬라이드 시간 1초*/
			});
			
		$("#head_row2_4_slider").bxSlider({
			slideWidth:232,
			mode:"fade",
			auto:true, /*슬라이더를 자동/수동*/
			/* true : 자동실행 / false : 수동실행*/
			pager:true,
			pagerCustom:"#head_row2_4_pager",
			/*captions: true*/
			controls: false,
			speed:1500,	
			/* 자동 슬라이드 시간 1초*/
			});	
			
	    $("#con_s_b_menu_slider #s_b_menu").bxSlider({
			slideWidth:1184,
			auto:false,
			pager:true,
			pagerCustom:"#s_b_menu_pager",
			autoHover:true,
			
			});		
			
			
						
	});
	


	
	
	