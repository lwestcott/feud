$(document).ready(function(){
	/*var request = $.ajax({
		url:'http://tylerteaching.com/forms/post.html',
		method:"GET",
    		data:{someVar:"hello"}
	});*/
	var request = $.ajax({
		url:'http://api.urbandictionary.com/v0/random',
		method:"GET",
	});
	request.done(function(data){
		console.log(data);
	});
	
});
