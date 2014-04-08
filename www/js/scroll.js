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
			if (scroll_posicion < 400 && !$('li#sectionChimps').hasClass('active')) {
				unselectMenu();
				selectMenu('li#sectionChimps');
			}

			if (scroll_posicion >= team && scroll_posicion < projects && !$('li#sectionTeam').hasClass('active')) {
				unselectMenu();
				selectMenu('li#sectionTeam');
			}

			if (scroll_posicion >= projects && scroll_posicion < clients && !$('li#sectionProjects').hasClass('active')) {
				unselectMenu();
				selectMenu('li#sectionProjects');
			}

			if (scroll_posicion >= clients && scroll_posicion < contact && !$('li#sectionClients').hasClass('active')) {
				unselectMenu();
				selectMenu('li#sectionClients');
			}

			if (scroll_posicion >= contact && !$('li#sectionClients').hasClass('contact')) {
				unselectMenu();
				selectMenu('li#sectionContact');
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