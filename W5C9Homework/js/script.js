$(document).ready(function(){	
	$('#return5th_submit').click(function(){
		var str = $('#return5th_input').val();	
		var sub = str.charAt(4);		
		$('#return5th_display').text(sub);		
	});
	$('#returnLast_submit').click(function(){
		var str = $('#returnLast_input').val();	
		var sub = str.charAt(str.length-2);		
		$('#returnLast_display').text(sub);		
	});
	$('#reverseString_submit').click(function(){
		var str = $('#reverseString_input').val();
		str = str.split('').reverse().join('');
		$('#reverseString_display').text(str);				
	});	
	$('#helloworld_submit').click(function(){
		str = "Hello World";
		$('#helloworld_display').text(str);				
	});
	$('#greet1_submit').click(function(){
		var str = $('#greet1_input').val();
		str = "Hello, " + str + "! Welcome to the website.";
		$('#greet1_display').text(str);				
	});
	$('#greet2_submit').click(function(){
		var str = $('#greet2_input').val();
		if(str == "Alice" || str == "Bob" || str == "Laura"){
			str = "Hello, " + str;
			$('#greet2_display').text(str);		
		}		
	});
	$('#factoral_submit').click(function(){
		var num = $('#factoral_input').val();	
		var ans = 1;
		for(i=1;i<=num;i++){
			ans = ans * i;
		}
		$('#factoral_display').text(ans);		
	});
	$('#star_submit').click(function(){
		var staroutput = "";
		for(i=0;i<5;i++){
			staroutput = staroutput + "*";
			$('#star_display').append(staroutput + "<br>");			
		}			
	});
	});	

