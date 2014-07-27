////////////////////////////////////////////////////
//Read more in .project
////////////////////////////////////////////////////
$('.project .description').expander({
	slicePoint: 300,
	expandText: 'ver mais',
	userCollapseText: 'ver menos',
	expandEffect: 'fadeIn',
	collapseEffect: 'fadeOut',
	expandSpeed: 800,
	collapseSpeed: 800
});

////////////////////////////////////////////////////
//Contact validation
////////////////////////////////////////////////////
jQuery.extend(jQuery.validator.messages, {
	required: "Esse campo é obrigatório.",
	email: "Esse é mesmo o seu email?",
});