// JavaScript Document

$(function(){
	
	var processor_price=0;
	var memory_price=0;
	var geforce_price=0;
	var power_price=0;
	var sum=0;
	var one_price =0;
	var total=0;
	var number_val =Number($("input[name=number_value]").val());
	
	$(".reset_basic_goods").click(function(){
		$(".goods_detail3_list_con_menu2 span").text(" ");
		$(".goods_detail3_list_con_price span").text(""); 
	});
	
	$("iframe").attr("src","http://www.icoda.co.kr/goods/blank_tmp.php?get_item_num=351729");
	
	$("#processor").change(function(){
		processor_price =Number($(this).val());  // 1번해결!
		sum = processor_price + memory_price + geforce_price + power_price ;
		one_price = 645000 + sum ;
		total = one_price * number_val;
		$("#chg_value span").text(sum); //2번해결 //변경금액...부뷴..
		$("#chg_value2 span").text(one_price); //1대당값나오는부분
		$("#chg_value3 span").text(total);
		$("#processor_value span").text(processor_price);//선택한값
			
		if (processor_price==0){
			$("iframe").attr("src","http://www.icoda.co.kr/goods/blank_tmp.php?get_item_num=333270");
		}
		else if (processor_price==66700){
			$("iframe").attr("src","http://www.icoda.co.kr/goods/blank_tmp.php?get_item_num=332375");
		}
		else if(processor_price==83700){
			$("iframe").attr("src","http://www.icoda.co.kr/goods/blank_tmp.php?get_item_num=332377");
		}
		else if(processor_price==115000){
			$("iframe").attr("src","http://www.icoda.co.kr/goods/blank_tmp.php?get_item_num=332379");
		}
		else if(processor_price==211000){
			$("iframe").attr("src","http://www.icoda.co.kr/goods/blank_tmp.php?get_item_num=333678");
		}
		
	});	
	$("#memory").change(function(){
		memory_price =Number($(this).val());  // 1번해결!
		sum = processor_price + memory_price + geforce_price + power_price ;
		one_price = 645000 + sum ;
		total = one_price * number_val;
		$("#chg_value span").text(sum); //2번해결 //변경금액...부뷴..
		$("#chg_value2 span").text(one_price); //1대당값나오는부분
		$("#chg_value3 span").text(total);
		$("#memory_value span").text(memory_price);//선택한값
		
		if (memory_price==0){
			$("iframe").attr("src","http://www.icoda.co.kr/goods/blank_tmp.php?get_item_num=346413");
		}
		else if (memory_price==107000){
			$("iframe").attr("src","http://www.icoda.co.kr/goods/blank_tmp.php?get_item_num=333654");
		}
		else if(memory_price==10000){
			$("iframe").attr("src","http://www.icoda.co.kr/goods/blank_tmp.php?get_item_num=323837");
		}
		else if(memory_price==97000){
			$("iframe").attr("src","http://www.icoda.co.kr/goods/blank_tmp.php?get_item_num=346442");
		}
		
	});	
	$("#geforce").change(function(){
		geforce_price =Number($(this).val());  // 1번해결!
		sum = processor_price + memory_price + geforce_price + power_price ;
		one_price = 645000 + sum ;
		total = one_price * number_val;
		$("#chg_value span").text(sum); //2번해결 //변경금액...부뷴..
		$("#chg_value2 span").text(one_price); //1대당값나오는부분
		$("#chg_value3 span").text(total);
		$("#geforce_value span").text(geforce_price);//선택한값
		
		if (geforce_price==0){
			$("iframe").attr("src","http://www.icoda.co.kr/goods/blank_tmp.php?get_item_num=328596");
		}
		else if (geforce_price==403100){
			$("iframe").attr("src","http://www.icoda.co.kr/goods/blank_tmp.php?get_item_num=341842");
		}
		else if(geforce_price==-172900){
			$("iframe").attr("src","http://www.icoda.co.kr/goods/blank_tmp.php?get_item_num=0");
		}
		
	});	
	$("#power").change(function(){
		power_price =Number($(this).val());  // 1번해결!
		sum = processor_price + memory_price + geforce_price + power_price ;
		one_price = 645000 + sum ;
		total = one_price * number_val;
		$("#chg_value span").text(sum); //2번해결 //변경금액...부뷴..
		$("#chg_value2 span").text(one_price); //1대당값나오는부분
		$("#chg_value3 span").text(total);
		$("#power_value span").text(power_price);//선택한값
		
		if (power_price==0){
			$("iframe").attr("src","http://www.icoda.co.kr/goods/blank_tmp.php?get_item_num=313398");
		}
		else if (power_price==4360){
			$("iframe").attr("src","http://www.icoda.co.kr/goods/blank_tmp.php?get_item_num=313394");
		}
		
	});	
	
	
	
	
	$("#goods_detail_slider").bxSlider({
				slideWidth:370,
				auto:true, /*슬라이더를 자동/수동*/
				/* true : 자동실행 / false : 수동실행*/
				pager:true,
				pagerCustom:"#goods_detail_pager",
				controls: false,
				speed:1000,	
				/* 자동 슬라이드 시간 1초*/
				});


});

