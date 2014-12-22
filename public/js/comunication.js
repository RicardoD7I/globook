var readyUserData = false;
var readyPub = false;

// usar promises o timer

amplify.subscribe("readyAjaxUsuario", function () {
    if (readyPub) {
        amplify.publish("pageLoaded");
    } else {
        readyUserData = true;
    }
});

amplify.subscribe("readyAjaxPublicaciones", function () {
    if (readyUserData) {
        amplify.publish("pageLoaded");
    } else {
        readyPub = true;
    }
});