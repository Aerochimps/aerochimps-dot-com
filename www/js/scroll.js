$(function() {

	windowSize = $(window).scrollTop();
	scrollMenu();
});

var  chimps = 0;
var  team = 400;
var projects = 1479;
var clients = 3243;
var contact = 4027;
if (isMobile()) {
		team = $('section#team').offset().top;
		projects = $('section#projects').offset().top;
		clients = $('section#clients').offset().top;
		contact = $('section#contact').offset().top ;
};

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

/**
 * @function isMobile
 * detecta se o useragent e um dispositivo mobile
 */
function isMobile()
{
	var userAgent = navigator.userAgent.toLowerCase();
	if( userAgent.search(/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i)!= -1 )
		return true;
}