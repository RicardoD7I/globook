amplify.subscribe("onUserReady", function (data) {

	// amplify.publish("onUserReady", {name : "Mariela", "img" : "mblanco.png"})
	if (data) {
		$("#userNameAndSurname").html(data.name);
		$("#userImg").attr("src", "/uploads/" + data.img);		
	}

});
