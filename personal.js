$(document).ready(function(){
	$('.menu-toggler').click(function(){
		$(this).toggleClass('open');
		$('.top-nav').toggleClass('open');
	});
});
$(window).scroll(function() {
var theta = $(window).scrollTop() / 200 % Math.PI;
$('.icon').css({ transform: 'rotate(' + theta + 'rad)' });
$('.icon i').css({transform: 'rotate(-' + theta + 'rad)'});
});