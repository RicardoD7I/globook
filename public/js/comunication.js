var readyUserData = false;
var readyPub = false;

amplify.subscribe("onUserReady", function () {
    if (readyPub) {
        amplify.publish("pageLoaded");
    } else {
        readyUserData = true;
    }
});

amplify.subscribe("onPubReady", function () {
    if (readyUserData) {
        amplify.publish("pageLoaded");
    } else {
        readyPub = true;
    }
});