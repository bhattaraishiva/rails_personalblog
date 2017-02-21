$(document).ready(function () {
	var count = 0;
	var array_images = ["images/main-bg.jpg","images/main-bg1.jpg","images/main-bg2.jpg","images/main-bg3.jpg"];
	var image = $(".fader");
		
	image.css("background-image", "url("+array_images[count]+")");	
	setInterval(function(){
		image.fadeOut(500, function () {
			image.css("background-image", "url("+array_images[count++]+")");
			image.fadeIn(500);
		});
		if (count == array_images.length) {
			count = 0;
		}
	},5000);
	
});
// ===== Scroll to Top ==== 
/*
$(document).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('.gototop').fadeIn(200);    // Fade in the arrow
    } else {
        $('.gototop').fadeOut(200);   // Else fade out the arrow
    }
});
$('.gototop').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});
*/

		$(document).ready(function() {
			/*
			var defaults = {
	  			containerID: 'toTop', // fading element id
				containerHoverID: 'toTopHover', // fading element hover id
				scrollSpeed: 1200,
				easingType: 'linear' 
	 		};
			*/
			
			$().UItoTop({ easingType: 'easeOutQuart' });
			
		});
   

//---------form validaiton -----------
/*
$(document).ready(function () {
	$("#contactform").validate({
		rules: {
			name: "required",
			email: {
				required: true,
				email: true
			}
		},
		messages:{
			name: "Name required!",
			email: "Email required!"			
		},
		sumitHandler: function (form) {
			form.submit();
		}
	});
});
*/

$(document).ready(function () {
	$("#submit").click(function () {
		var name = $('input[name=name]');
		var email = $('input[name=email]');
		var regx = /^([a-z0-9_\-\.])+\@([a-z0-9_\-\.])+\.([a-z]{2,4})$/i;
		var phone = $('input[name=phone]');
		var comment = $('input[name=comment]');
		var returnError = false;
		
		if (name.val() == '') {
			name.addClass('error');
			returnError = true;
		}else {
			name.removeClass('error');
		}
		
		if (email.val() == '') {
			email.addClass('error');
			returnError = true;
		}else {
			email.removeClass('error');
		}
		
		if (!regx.test(email.val())) {
			email.addClass('error');
			returnError = true;
		}else{
			email.removeClass('error');
		}	
		
		if (phone.val() == '') {
			phone.addClass('error');
			returnError = true;
		}else {
			phone.removeClass('error');
		}	
		
		if (comment.val() == '') {
			comment.addClass('error');
			returnError = true;
		}else {
			comment.removeClass('error');
		}

		
		if (returnError == true) {
			return false;
		}
		
	});
});

