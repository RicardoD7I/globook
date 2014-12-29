amplify.subscribe("onPubReady", function (data) {

	if (data) {
		$.each(data, function (i, pub) {
			console.log(pub)
			var dateFormatted = pub.date.split("T")[0];
			$("section.col_der").append(
				"<article class='well col-xs-12 col-md-12 sombra'>" +
				"<h2>" + pub.title + "<small>" + dateFormatted +"</small></h2>" +
				"<p>" + pub.text + "</p>" +
				"</article>"
			);
		});
	}
});