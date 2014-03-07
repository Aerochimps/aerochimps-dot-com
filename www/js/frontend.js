$(document).ready(function() {

	$('.viewNav').click(function(){
		$('.mainNav').toggleClass('close');
	});

	$('.mainNav li a').click(function(){
		$(this).closest('.mainNav').toggleClass('close');
	});

	$('.project .description').expander({
		slicePoint: 300,
		expandText: 'ver mais',
		userCollapseText: 'ver menos'
	});

//Fim do Document Ready
});