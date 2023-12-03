$(document).ready(function(){       
	
	//변수 ims에 따움표만 넣어 빈 문자열을 생성
	var imgs=' ';
	
	//for문을 이용하여 변수 i를  0부터 199까지 증가시키기
	for(var i=0; i<200; i++){
		
		//변수 imgs에 대입연산자를 이용하여 다음의 태그를 계속해서 200개가 될때까지 추가
		imgs+="<img src='img/pic"+i+".jpg'/>"
	}

	//.html() 구문에 조금전 태그를 반복하며 생성해둔 변수 imgs를 넣어 다시 section영역 안에 추가
	$("section").html(imgs);
	
	
	//마우스 무브 시, 안쪽의 구문 실행
	$("body").on("mousemove",function(e){
		//변수 wid에 현재 브라우저의 넓이 값 저장
		var wid = $(window).width();
		//변수 posX에 화면상에 마우스 커서의 위치 저장
		var posX = e.pageX;
		//변수 percent에 200까지의 백분율 수치 저장
		var percent = Math.floor((posX/wid)*200);
		//해당 변수 값을 h3에 출력
		$("h3").text(percent);
		
		//모든 img 태그를 숨김 처리
		$("section>img").hide();
		//현재 마우스 커서의 위치에 해당하는 이미지 순서만 보임 처리
		$("section>img").eq(percent).show();
	});
});















