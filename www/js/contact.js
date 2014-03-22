$(function() {
	$('#name').bind('change keyup', function() {
	    if($('#contactForm').valid()) {
	        $('#submitButton').attr('disabled', false);
	    } else {
	        $('#submitButton').attr('disabled', true);
	    }
	});
	$("#contactForm").validate({
		rules: {
			name: {
				required: true
			},
			email:{
				required: true,
				email: true
			},
			subject:{
				required: true
			},
			message:{
				required: true
			}
		},
		submitHandler: function(form) {
			$.ajax({
				type: "POST",
				url: "contact.php",
				data: $(form).serialize(),
				success: function(data, textStatus, jqXH){
					$("#contactFeedback").text(data);
					$("#contactFeedback").removeCLass('hide');

				}
			});
		}
	});
});