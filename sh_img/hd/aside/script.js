$(function(){
 //$("li a").hover li의 a노드에 마우스 오버, 아웃 했을때 함수 호출
 $(".l_menu_OFF a").hover(
   function(){
    //현재 a태그에 작동되는 애니메이션을 중지하고, [stop() = stop(false,false)]
    //background-color와 텍스트 색상을 설정한다.
    $(this).stop().animate({"background-color":"#636363","color":"#FFF"},300);
   },
   //마우스 아웃이 되면, a태그에 있는 애니메이션을 중지하고 
   //background-color와 텍스트 색상을 설정한다.
   function(){
    $(this).stop().animate({"background-color":"#ededed","color":"#333333"},300);
   });
});