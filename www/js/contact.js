$(function() {
	$('#contactForm').bind('change keyup', function() {
		if($('#contactForm').validate().checkForm()) {
			$('#submitButton').removeAttr('disabled');
		} else {
			$('#submitButton').attr('disabled', true);
		}
	});
	$("#contactForm").validate({
		rules: {
			name: {
				required: true
			},
			email: {
				required: true,
				email: true
			},
			subject: {
				required: true
			},
			message: {
				required: true
			}
		},
		submitHandler: function(form) {
			$.ajax({
				type: "POST",
				url: "include/contactForm.php",
				data: $(form).serialize(),
				success: function(data, textStatus, jqXH){
					$("#name,#email,#subject,#message").val('');
					$("#contactFeedback").text(data);
					$("#contactFeedback").removeClass('hide');
					setTimeout(hideFeedback,4000);
				}
			});
		}
	});
});

hideFeedback = function(){
	$("#contactFeedback").addClass('hide');
}