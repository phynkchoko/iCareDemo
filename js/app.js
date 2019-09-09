
AOS.init({
   easing: 'ease-out-back',
   once: true,
   disable: 'mobile'
});





$(document).ready(function(){
	
	
});

$(window).scroll(function() {
	  if ($(window).scrollTop() >= 50) {
	  	$("nav.navbar").addClass("animated fadeInDown fixed-top box-shadow").css({
	  		"background":"white",
	  		"height": "60px"
	  	});

	  	$(".tIcon").css("background","#000");

	  	$("a.nav-link").css("color","#000");
	  	$("a#login").css("background","#00bdaa");

	  	$("a.nav-link").hover(function(){
		$(this).css("color","#00bdaa");
	},function(){
		$(this).css("color","#000");
	});

	  } else {
	  	$("nav.navbar").removeClass("animated fadeInDown fixed-top box-shadow").css({
	  		"background":"transparent",
	  		"height": "100px"
	  	});
	  	$("a.nav-link").css("color","#fff");
	  	$("a#login").css("background","transparent");
	  }	
	  if($(window).scrollTop() === 0){
	  	$("a.nav-link").hover(function(){
		$(this).css("color","#00bdaa");
	},function(){
		$(this).css("color","#fff");
	});
	  }   
});
