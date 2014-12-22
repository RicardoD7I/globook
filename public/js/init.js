$( document ).ready(function() {
	$.ajax({
		 type: "POST",
		 url: "publish", 
	}).done(function( data ) {
	   	amplify.publish( "readyAjaxPublicaciones", data );
	});

	$.ajax({
		 type: "POST",
		 url: "username",
	}).done(function( data ) {
	   	amplify.publish( "readyAjaxUsuario", data );
	});
  
});


