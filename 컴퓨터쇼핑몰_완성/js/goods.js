// JavaScript Document


$(function(){
		

	
	$("#goods_top_menu1 #menu").mouseover(function(){
		$(".menu_1_2").css({"display":"block"});	
	});
	$("#goods_top_menu1 #menu").mouseout(function(){
		$(".menu_1_2").toggle();
				
	});
	
	
	
	
	$("#up_item1").click(function(){
		
		//id가 up_item1인($("#up_item1")) 요소를
		// 클릭( .click)했을때 fucntion()다음에 나오는{}사이의
		//모든 명령들을 수행 해라
			if ($("#sub2").css("display")=="block" || 
			    $("#sub3").css("display")=="block"||
				$("#sub4").css("display")=="block"||
				$("#sub5").css("display")=="block"){
		//만약 두번째 메뉴를 클릭했을때 첫번째 서브메뉴나
		//또는 세번째 서브메뉴가 보이고 있을때는 둘다 보이
		//지 않게 하고 원래 메뉴를 보이게 한다.    		
					$("#item_down").show();
					$("#sub2").hide();
					$("#sub3").hide();
					$("#sub4").hide();
					$("#sub5").hide();
			}
					
			$("#item_down").toggle()
			//toggle=>첫번째 함수상황일때 -> 두번째 
			//함수상황으로 바뀌고->두번째 상황일때는
			//->첫번째로 바뀐다=>두가지 함수를 서로 
			//번갈아 가면서 실행
			$("#sub1").toggle(); 
		});
		
		$("#up_item2").click(function(){
			if ($("#sub1").css("display")=="block" || 
			    $("#sub3").css("display")=="block"||
				$("#sub4").css("display")=="block"||
				$("#sub5").css("display")=="block"){   		
					$("#item_down").show();
					$("#sub1").hide();
					$("#sub3").hide();
					$("#sub4").hide();
					$("#sub5").hide();
			}
			$("#item_down").toggle();
			$("#sub2").toggle(); 
		});
		
		$("#up_item3").click(function(){
			if ($("#sub1").css("display")=="block" || 
			    $("#sub2").css("display")=="block"||
				$("#sub4").css("display")=="block"||
				$("#sub5").css("display")=="block"){ 		
					$("#item_down").show();
					$("#sub1").hide();
					$("#sub2").hide();
					$("#sub4").hide();
					$("#sub5").hide();
			}
			$("#item_down").toggle();
			$("#sub3").toggle(); 
		
		});
		$("#up_item4").click(function(){
			if ($("#sub1").css("display")=="block" || 
			    $("#sub2").css("display")=="block"||
				$("#sub3").css("display")=="block"||
				$("#sub5").css("display")=="block"){ 		
					$("#item_down").show();
					$("#sub1").hide();
					$("#sub2").hide();
					$("#sub3").hide();
					$("#sub5").hide();
			}
			$("#item_down").toggle();
			$("#sub4").toggle(); 
		
		});
		$("#up_item5").click(function(){
			if ($("#sub1").css("display")=="block" || 
			    $("#sub2").css("display")=="block"||
				$("#sub3").css("display")=="block"||
				$("#sub4").css("display")=="block"){ 		
					$("#item_down").show();
					$("#sub1").hide();
					$("#sub2").hide();
					$("#sub3").hide();
					$("#sub4").hide();
			}
			$("#item_down").toggle();
			$("#sub5").toggle(); 
		
		});
			
		$("#serch_box2 img").click(function(){
			$(".goods_serch_menu_box").toggle();	
		});
		
		
		$(".g_s_m_box2_top_2 img").click(function(){
			$(".goods_serch_menu_box").css({"display":"none"});	
		});
		
		$(".list_button").click(function(){
			$(".goods_con_1").removeClass("goods_con_hor").addClass("goods_con_ver");
			//리무브클레스뒤엔 .안찍음
		});
		$(".gallery_button").click(function(){
			$(".goods_con_1").removeClass("goods_con_ver").addClass("goods_con_hor");
			//리무브클레스뒤엔 .안찍음
		});
		
});