amplify.subscribe("readyAjaxPublicaciones", function (data) {
	if (data) {
		$.each(data, function (i, pub) {
			$("section .col_der").append(
				"<article class='well col-xs-12 col-md-12 sombra'>" +
				"<h2>" + pub.title + "</h2>" +
				"<p>" + pub.pub + "</p>" +
				"</article>"
			);
		});
	}
});