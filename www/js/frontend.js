$(document).ready(function() {

	////////////////////////////////////////////////////
	//update browser alert
	////////////////////////////////////////////////////
	var $buoop = {}; 
	$buoop.ol = window.onload; 
	window.onload=function(){ 
		try {if ($buoop.ol) $buoop.ol();}catch (e) {} 
		var e = document.createElement("script"); 
		e.setAttribute("type", "text/javascript"); 
		e.setAttribute("src", "//browser-update.org/update.js"); 
		document.body.appendChild(e); 
	}

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
		$('body').addClass('konami');
		$( ".surprise" ).load( "konami/2048/index.html" );
	})

	////////////////////////////////////////////////////
	//Show/Hide .mainNav
	////////////////////////////////////////////////////
	$('.viewNav').click(function(){
		$('.mainNav').toggleClass('close');
	});
	
	$( window ).resize(function() {
		if ($( window ).width() < 768) {
			$('.mainNav').addClass('close');
		}
	});
	//Hide .mainNav when a item is clicked
	$('.mainNav li').click(function(){
		$(this).closest('.mainNav').toggleClass('close');
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
	});

	////////////////////////////////////////////////////
	//Switch language
	////////////////////////////////////////////////////
	$('.langSwitcher').click(function(){
		$('.main').toggleClass('switcherOn');
		$('.langSelector').toggleClass('active');
	});

	////////////////////////////////////////////////////
	//Scroll to each section
	////////////////////////////////////////////////////
	$('.sectionChimps').click(function(){
		$('.chimps').animatescroll({
			scrollSpeed:2000,
			padding: "56"
		});
	});

	$('.sectionTeam').click(function(){
		$('.team').animatescroll({
			scrollSpeed:2000,
			padding: "56"
		});
	});

	$('.sectionProjects').click(function(){
		$('.projects').animatescroll({
			scrollSpeed:2000,
			padding: "56"
		});
	});

	$('.sectionClients').click(function(){
		$('.clients').animatescroll({
			scrollSpeed:2000,
			padding: "56"
		});
	});

	$('.sectionContact').click(function(){
		$('.contact').animatescroll({
			scrollSpeed:2000,
			padding: "56"
		});
	});

	////////////////////////////////////////////////////
	//Read more in .project
	////////////////////////////////////////////////////
	//Inside of /lang/LANG_FOLDER/js/frontEnd.js

	////////////////////////////////////////////////////
	//Only for Desktop
	////////////////////////////////////////////////////
	if($(window).width() >= 1024){

		////////////////////////////////////////////////////
		//Mouse Parallax
		////////////////////////////////////////////////////
		$('.banner').mousemove(function(e){
			var amountMovedX = (e.pageX * -1 / 10);
			var amountMovedY = (e.pageY * -1 / 10);
			$(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
		});

	//End "only for dektop"
	}

//Fim do Document Ready
});