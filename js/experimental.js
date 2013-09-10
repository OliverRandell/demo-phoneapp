$(document).ready(function(){
	$("#tab-bar a").click(function(e){
		    e.preventDefault();
		    var nextPage = $(e.target.hash);
		    transition(nextPage, 'fade');
		    $("#tab-bar").attr("className", e.target.hash.slice(1));
		});
	});
});