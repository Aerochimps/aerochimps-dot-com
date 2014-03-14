$(document).ready(function() {

	////////////////////////////////////////////////////
	//Konami Code
	////////////////////////////////////////////////////
	$.fn.konami = function(callback, code) {
		if(code == undefined) code = "38,38,40,40,37,39,37,39,66,65"
		return this.each(function() {
			var kkeys = [];
			$(this).keydown(function(e){
				kkeys.push( e.keyCode );
				if (kkeys.toString().indexOf( code ) >= 0 ){
					$(this).unbind('keydown', arguments.callee);
					callback(e);
				}
			});
		});
	}
	$(window).konami(function(){
		//Do something Cool! :D
	})

	////////////////////////////////////////////////////
	//Paralax
	////////////////////////////////////////////////////
	$('.banner').parallax({ speed: 0.3, axis: 'y' });

	////////////////////////////////////////////////////
	//Show/Hide .mainNav
	////////////////////////////////////////////////////
	$('.viewNav').click(function(){
		$('.mainNav').toggleClass('close');
	});
	
	//Hide .mainNav when a item is clicked
	$('.mainNav li').click(function(){
		$(this).closest('.mainNav').toggleClass('close');
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
	});

	////////////////////////////////////////////////////
	//Scroll to each section
	////////////////////////////////////////////////////
	$('.sectionChimps').click(function(){
		$('.chimps').animatescroll({scrollSpeed:2000});
	});

	$('.sectionTeam').click(function(){
		$('.team').animatescroll({scrollSpeed:2000});
	});

	$('.sectionProjects').click(function(){
		$('.projects').animatescroll({scrollSpeed:2000});
	});

	$('.sectionClients').click(function(){
		$('.clients').animatescroll({scrollSpeed:2000});
	});

	$('.sectionContact').click(function(){
		$('.contact').animatescroll({scrollSpeed:2000});
	});

	////////////////////////////////////////////////////
	//Read more in .project
	////////////////////////////////////////////////////
	$('.project .description').expander({
		slicePoint: 300,
		expandText: 'ver mais',
		userCollapseText: 'ver menos'
	});

//Fim do Document Ready
});