$(function() { 
	facebookAPI();
});
facebookAPI = function(){
$.ajaxSetup({ cache: true });
		$.getScript('//connect.facebook.net/en_UK/all.js', function(){
			FB.init({
				appId: '604069822972920',
				channelUrl: 'http://localhost/channel.html',
			});

			$('#facebookShare').click(function(){
				FB.login(function(response) {
					if (response.authResponse) {

						FB.ui({
							method: 'feed',
							link: 'http://aerochimps.com/',
							/*picture: 'http://fbrell.com/f8.jpg', */
							name: 'Aerochimps',
							caption: 'Making apps fly.',
							description: 'Aerochimps: rumo à dominação mundial. Eu ajudei, agora só faltam mais 6.998.598.294,42 pessoas.'
						}, function(response){
							if (response && response.post_id) {
								$(".step1").addClass("hide");
								$(".facebookCode").removeClass("hide");
								FB.api('/me', function(response) {
									console.log('Good to see you, ' + response.email + '.');
									//Here we get the code and show to user
									
								});
							} else {
							
							}
						});
					} else {
/* 					console.log('User cancelled login or did not fully authorize.'); */
					}
				}, {scope: 'email'});
		 		return false;
			});
		});

	};	