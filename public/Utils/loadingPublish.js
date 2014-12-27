
var publicar= true;

	amplify.subscribe("pageLoaded",function(){
					$("#loader").plug(publicar);
					
	});
