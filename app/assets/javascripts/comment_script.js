$(function () {
	$.ajax({
		url: '/api/comments',
		type: 'GET',
		success: function (data) {
			var template = $('template').html();
			console.log("data:"+data);
					
			$.each(data, function () {
				var block = template.replace(/{cB}/g, value.blog_comment);
				$('comments-section').prepend(block);
			});
					
		}
	});
});

$('#commentSubmit').click(function () {
	
	var commname = $('#commentByID').val();
   var commmain = $('#commentBodyID').val();
	
	console.log(commname);
	console.log(commmain);
	
	$.ajax({
		url: '/api/comments',
		type: 'POST',
		data : {
			name: commname,
			blog_comment: commmain			
			}, 	
		success: function (data) {
			var template = $('template').html();
			var HBlock = template.replace(/{cB}/g, commmain);
			 $('.comments-section').prepend(HBlock);		
		}		
		
	});
});
