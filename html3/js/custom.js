$(document).ready(function(){

	//btnMenu버튼 클릭 시 실행될 모션
	$(".btnMenu").on("click",function(){
		$(this).fadeOut();
		$("section").addClass("on");
		$("nav").addClass("on");
		
	});

	//nav 영역안의 메뉴 선택시 실행될 모션
	
	$("nav li").on("click",function(){
		$(".btnMenu").fadeIn();
		$("section").removeClass("on");
		$("nav").removeClass("on");
		
		//nav 영역 안의 버튼 클릭시, 실행 모션
		var i =$(this).index();
		$("section>div").removeClass("on");
		$("section>div").eq(i).addClass("on");
	});	
	
	

	

	
	
	
});















