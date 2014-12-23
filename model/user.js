var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	userName: String,
	password: String,
	token: String
});

var User = mongoose.model('User', userSchema);

//var User = mongoose.model('node_globook.usercollection');