$(function() {

	windowSize = $(window).scrollTop();
	scrollMenu();
});

var  chimps = 0;
var  team = 400;
var projects = 1479;
var clients = 3243;
var contact = 4027;

scrollMenu = function(){
	$(window).scroll(function() {
			var $window = $(window);
			var scroll_posicion = $window.scrollTop();
			if (scroll_posicion < 400 && !$('li#chimps').hasClass('active')) {
				unselectMenu();
				selectMenu('li#chimps');
			}

			if (scroll_posicion >= team && scroll_posicion < projects && !$('li#team').hasClass('active')) {
				unselectMenu();
				selectMenu('li#team');
			}

			if (scroll_posicion >= projects && scroll_posicion < clients && !$('li#projects').hasClass('active')) {
				unselectMenu();
				selectMenu('li#projects');
			}

			if (scroll_posicion >= clients && scroll_posicion < contact && !$('li#clients').hasClass('active')) {
				unselectMenu();
				selectMenu('li#clients');
			}

			if (scroll_posicion >= contact && !$('li#clients').hasClass('contact')) {
				unselectMenu();
				selectMenu('li#contact');
			}

			// console.log(scroll_posicion);
	});
};

unselectMenu = function(){
	$('ul#menu li.active').removeClass('active');
};

selectMenu = function(menu){
	$(menu).addClass('active');
};