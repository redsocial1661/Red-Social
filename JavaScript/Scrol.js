$(document).ready(function(){
    $('#nos').click(function(){
		$('body, html').animate({
			scrollTop:$('#nosotros').offset().top,
            
		},500);
       $('header').css("background-color",'rgba(32, 49, 83, 0.9)');
     
	});
    $('#uplogo').click(function(){
		$('body, html').animate({
			scrollTop:0
            
		},500);
       $('header').css("background-color",'rgba(32, 49, 83, 0.6)');
     
	});
    
});