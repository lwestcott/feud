$(document).ready(function(){
	$('#movie_form').submit(function(){
		event.preventDefault();
		var term = $('#user_search').val();
		if(term==""){
			return;
		}
		$('#movies_holder').html('');
		$('#user_search').val('');
		var request = $.ajax({
				url:'http://www.omdbapi.com/',
				method : 'GET',
				data:{'s':term}
		});
		request.done(function(d){
				var movies = d.Search;
				for(i=0;i<movies.length;i++){
						var temp = "<img imdb='"+movies[i].imdbID+"' class='movie_year' src='"+movies[i].year+"'/>";
						$('#movies_holder').append(temp);
				}
		});
	});
	$(document).on('click','.movie_year',function(){
		var imdbid = $(this).attr('imdb');
		var request = $.ajax({
				url:'http://www.omdbapi.com/',
				method : 'GET',
				data:{'i':imdbid}
		});
		
		
		request.done(function(d){
			console.log(d);
		});
	});
});