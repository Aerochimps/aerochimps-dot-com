////////////////////////////////////////////////////
//Read more in .project
////////////////////////////////////////////////////
$('.project .description').expander({
	slicePoint: 300,
	expandText: 'sehen mehr',
	userCollapseText: 'weniger sehen',
	expandEffect: 'fadeIn',
	collapseEffect: 'fadeOut',
	expandSpeed: 800,
	collapseSpeed: 800
});

////////////////////////////////////////////////////
//Contact validation
////////////////////////////////////////////////////
jQuery.extend(jQuery.validator.messages, {
	required: "Pflichtfeld",
	email: "Ist das wirklich Ihre E-Mail?",
});