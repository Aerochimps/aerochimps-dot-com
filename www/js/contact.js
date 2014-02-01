$(function() {
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
			}
	  	});
	  }
  });
});