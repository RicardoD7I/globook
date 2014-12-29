var express = require('express');
var router = express.Router();
var Publication = require('../../model/publication');
var User = require('../../model/user');

var postPublication = function(req, res) {

	console.log('POST method /publicacionPost');

	var userName = req.params.userName;
	var token = req.param("token");

	User.findOne({userName: userName, token: token}, function(err, userLogged) {
		if (err) {
			console.log('ERROR: Error al intentar recuperar el usuario de la base de datos.');
			return res.json({
				"error" : "ERROR: Error al intentar recuperar el usuario de la base de datos."
			});
		} else {

			var title = req.param('title');
			var text = req.param('text');
			var date = new Date();

			var publication = new Publication({
				title: title,
				text: text,
				date: date,
				creator: userLogged._id
			});

			publication.save(function(err) {
				if (err) {
					return res.json({
						"error" : "Error al intentar guardar la publicacion en la base de datos."
					});
				} else {
					return res.json({
						"result" : true
					});
				}
			});

		}
	});



};

router.post('/:userName', postPublication);

module.exports = router;