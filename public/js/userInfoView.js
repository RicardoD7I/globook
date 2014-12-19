amplify.subscribe("onUserReady", function (data) {

	// amplify.publish("onUserReady", {name : "Mariela", "image" : "mblanco.png"})
	if (data) {
		$("#userNameAndSurname").html(data.name);
		$("#userImg").attr("src", "/uploads/" + data.image);		
	}

});
