amplify.subscribe("onUserReady", function (data) {

	// amplify.publish("onUserReady", {name : "Mariela", "image" : "mblanco.png"})
	$("#userNameAndSurname").html(data.name);
	$("#userImg").attr("src", "/uploads/" + data.image);
});
