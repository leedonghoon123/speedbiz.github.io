// top_nav
$(document).ready(function() {	
	$('#top_nav li').hover(function() {
		$('ul', this).slideDown(200);
		$(this).children('a:first').addClass("hov");
	}, function() {
		$('ul', this).slideUp(100);
		$(this).children('a:first').removeClass("hov");		
	});
});


// ie6
$(function(){
	$('.product_list li:first-child').css("border-top","0");  
	$('.tbl_ir.black tr td').css("border-right","0");  
});


