$(function(){
  		$(".tu").click(function(){
//			console.log("ppp")
  			$(this).children(".zi").css({"color":"#000"});
  			$(this).siblings(".tu").children(".zi").css({"color":"#999"})
  			$(this).children(".hui").hide().siblings(".se").show();
  			$(this).siblings(".tu").children(".hui").show().siblings(".se").hide();
  		})
  	})