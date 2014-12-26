var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({

	name: String,
	userName: String,
	password: String,
	token: String,
	img: String

});

module.exports = mongoose.model('User', userSchema);