$( document ).ready(function() {

	var username = $("body").data("username");

	$.ajax({
		 type: "GET",
		 url: "/publicacion/"  + username, 
	}).done(function( data ) {
	   	amplify.publish( "readyAjaxPublicaciones", data );
	});

	$.ajax({
		 type: "GET",
		 url: "/users/info/" + username,
	}).done(function( data ) {
	   	amplify.publish( "readyAjaxUsuario", data );
	});
  
});


