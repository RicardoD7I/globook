var readyUserData = new $.Deferred();
var readyPub = new $.Deferred();

amplify.subscribe("onUserReady", function () {
    readyUserData.resolve();
});

amplify.subscribe("onPubReady", function () {
    readyPub.resolve();
});

$.when(readyUserData, readyPub).done(function () {
    amplify.publish("pageLoaded");
});