////////////////////////////////////////////////////
//Read more in .project
////////////////////////////////////////////////////
$('.project .description').expander({
	slicePoint: 300,
	expandText: 'read more',
	userCollapseText: 'read less',
	expandEffect: 'fadeIn',
	collapseEffect: 'fadeOut',
	expandSpeed: 800,
	collapseSpeed: 800
});

////////////////////////////////////////////////////
//Contact validation
////////////////////////////////////////////////////
jQuery.extend(jQuery.validator.messages, {
	required: "This is a required field.",
	email: "Is this really your email?",
});