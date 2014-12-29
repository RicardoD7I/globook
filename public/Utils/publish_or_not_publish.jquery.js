;(function($, window, undefined) {
	
	

	$.fn.plug= function(publicar){
		
		if(publicar==true){
 			$(this).fadeOut(1000,'linear');
 			//console.log("publico");
 		}
 		else{
 			//console.log("no publico");
 		}
	}


})(jQuery, window);








