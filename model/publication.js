var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require("./user.js");

var publicacionSchema = new Schema({

	title: String,
	text: String,
	date: Date,
	creator: [{ type: Schema.Types.ObjectId, ref: 'User' }]
	
});

module.exports = mongoose.model('Publication', publicacionSchema);