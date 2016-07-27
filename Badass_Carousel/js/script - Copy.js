// JavaScript Document

$(document).ready(function(){

		var pictures = ["images/download1.jpg","images/download2.jpg","images/download3.jpg","images/download4.jpg","images/download5.jpg","images/download6.jpg","images/download7.jpg"];
		var len = pictures.length;
		
		
	for (i = 0; i < len; i++) {
		var next_image = "<img src='" + pictures[i] + "' class='gallery_image'>";
		$('#gallery').append(next_image);
	}

	$(document).on('click','.gallery_image',function(){
		var image_src = $(this).attr('src');
		$('#main_image').attr('src',image_src);
	});
	alert("new alert?");


});