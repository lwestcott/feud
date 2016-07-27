// JavaScript Document

$(document).ready(function(){

		var pictures = [{
			src: "images/download1.jpg",
			caption: "This is a motocross race."
		},{
			src: "images/download2.jpg",
			caption: "This is a baseball game."
		},{
			src: "images/download3.jpg",
			caption: "This is abstract art."
		},{
			src: "images/download4.jpg",
			caption: "This is a coffee dispensary."
		},{
			src: "images/download5.jpg",
			caption: "This is a TV screen."
		},{
			src: "images/download6.jpg",
			caption: "This is Times Square"
		},{
			src: "images/download7.jpg"
			caption: "This is the Sydney Opera House"
		}];
		
		var len = pictures.length;
		
  //building out the original HTML		
	for (i = 0; i < len; i++) {
		
		var next_image = "'<div class="gallery img">' + pictures[i].src + '<div class "caption"> + pictures[i].caption + '</div>' + '</div>'";
		$('#gallery').append(next_image);
	});

	$(document).on('click','.gallery_image',function(){
		var image_src = $(this).attr('src');
		$('#main_image').attr('src',image_src);
	});
});