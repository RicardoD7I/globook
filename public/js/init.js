$( document ).ready(function() {

	var username = $("body").data("username");

	$.ajax({
		 type: "GET",
		 url: "/publicacion/"  + username, 
	}).done(function( data ) {
	   	amplify.publish( "onPubReady", data );
	});

	$.ajax({
		 type: "GET",
		 url: "/users/" + username,
	}).done(function( data ) {
	   	amplify.publish( "onUserReady", data );
	});
  
});


