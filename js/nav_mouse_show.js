$(function(){
 //中英文
  $("nav a").mouseenter(function(){
      $(this).children(".en").hide();$(this).children(".cn").show();
  }).mouseleave(function(){
  $(this).children(".cn").hide();$(this).children(".en").show();
  });
  $(".prolist li:even").css('margin-right','10%');   

  // 鼠标移上去图片效果
   $(".imgEffect").mouseenter(function(){
      $(this).children(".opacity_show").fadeIn();
  }).mouseleave(function(){
  	$(this).children(".opacity_show").fadeOut();
  });
});