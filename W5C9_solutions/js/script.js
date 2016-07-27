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
	$('#checkWork_submit').click(function(){
		var par = $('#ps3 p').text();
		var str = $('#checkWork_input').val();	
		var pos = par.search(str);
		var answer = (pos >= 0) ? "YES!" : "NO!";
		$('#checkWork_display').text(answer);		
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
		// NEEDS FIXING
		var str = $('#greet1_input').val();
		str = "Hello " + str;
		$('#greet1_display').text(str);				
	});
	$('#greet2_submit').click(function(){
		var str = $('#greet2_input').val();
		str = str.toLowerCase();
		if(str == "alice" || str == "bob" || str == "tyler"){
			str = "Hello " + str;
			$('#greet2_display').text(str);		
		}		
	});
	$('#integerMax_submit').click(function(){
		var num1 = parseInt($('#integerMax_input1').val());
		var num2 = parseInt($('#integerMax_input2').val());
		if(num1 > num2){
			$('#integerMax_display').text(num1);
		}
		else{
			$('#integerMax_display').text(num2);
		}		
	});
	$('#integerSign_submit').click(function(){
		var num1 = parseInt($('#integerSign_input1').val());
		var num2 = parseInt($('#integerSign_input2').val());
		var num3 = parseInt($('#integerSign_input3').val());
		
		var product = (num1 * num2 * num3);
		if(product >= 0){
			$('#integerSign_display').text("+")
		}
		if(product < 0){
			$('#integerSign_display').text("-");
		}		
	});
	$('#integerSort_submit').click(function(){
	
		var num1 = parseInt($('#integerSort_input1').val());
		var num2 = parseInt($('#integerSort_input2').val());
		var num3 = parseInt($('#integerSort_input3').val());
		
		if(num1 > num2 && num2 > num3){
			var order = num1 + "," + num2 + "," + num3;
		}
		else if(num1 > num3 && num3 > num2){
			var order = num1 + "," + num3 + "," + num2;
		}
		else if(num2 > num1 && num1 > num2){
			var order = num2 + "," + num3 + "," + num1;
		}
		else if(num3 > num1 && num1 > num2){
			var order = num3 + "," + num1 + "," + num2;
		}
		else if(num2 > num3 && num3 > num1){
			var order = num2 + "," + num3 + "," + num1;
		}
		else{
			var order = num3 + "," + num2 + "," + num1;
		}	
		$('#integerSort_display').text(order);
				
	});
	$('#rps_submit').click(function(){
	
		var player1 = $('#rps_player1').val().toLowerCase();
		var player2 = $('#rps_player2').val().toLowerCase();	
			
		var winner = rps(player1,player2);
		if(winner){
			message = winner + " is the winner!";
		}
		else{
			message = "Everyone is a winner! (Tie)";
		}
		$('#rps_winner_display').text(message);
				
	});	
	function rps(p1,p2){
		if(p1 == "rock"){
			if(p2 == "paper"){
				return "Player 2";
			}
			if(p2 == "scissors"){
				return "Player 1";
			}
		}
		if(p1 == "paper"){
			if(p2 == "rock"){
				return "Player 1";
			}
			if(p2 == "scissors"){
				return "Player 2"
			}
		}
		if(p1 == "scissors"){
			if(p2 == "rock"){
				return "Player 2";
			}
			if(p2 == "paper"){
				return "Player 1";
			}
		}
		return false;
	}
	$('#factoral_submit').click(function(){
		var num = $('#factoral_input').val();	
		var answer = 1;
		for(i=1;i<=num;i++){
			answer = answer * i;
		}
		$('#factoral_display').text(answer);		
	});
	$('#star_submit').click(function(){
		var output = "";
		for(i=0;i<5;i++){
			output = output + "*";
			$('#star_display').append(output + "<br>");			
		}			
	});
	$('#base_exp_submit').click(function(){
		var num1 = parseInt($('#base_input').val());
		var num2 = parseInt($('#exp_input').val());
		var answer = 1;
		for(i=0;i<num2;i++){
			answer = answer * num1;
		}		
		$('#base_exp_display').text(answer);
		
		// Why not use built in stuff?
		//$('#base_exp_display').text(Math.pow(num1, num2));
	});
	$('#foobar_submit').click(function(){
		
		for(i=1;i<=100;i++){
			message = "";
			if(i % 3 == 0){
				message += "Foo";
			}
			if(i % 5 == 0){
				message += "Bar"
			}
			if(message == ""){
				message = i;
			}
			$('#foobar_display').append(message + "<br>");	
		}
	});
	
});	
