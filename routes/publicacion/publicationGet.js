var express = require('express');
var router = express.Router();
var Publication = require('../../model/publication');
var User = require('../../model/user');

var getPublication = function(req, res) {

	console.log('GET method /publicacionGet');

	var userName = req.params.userName;

	console.log(userName);

	User.findOne({ userName: userName }, function(err, userLogged){
		console.log('dentro del metodo find');
		if (err) {
			console.log('ERROR: Error al intentar recuperar el usuario de la base de datos.');
			return res.json({
				"error" : "ERROR: Error al intentar recuperar el usuario de la base de datos."
			});
		} else {
			Publication.find({ creator: userLogged._id }, function(error, publications){
				if (err) {
					console.log('ERROR: Error al intentar recuperar las publicaciones del usuario.');
					return res.json({
						"error" : "ERROR: Error al intentar recuperar las publicaciones del usuario."
					});
				} else {
					return res.send(publications);
				}
			});
		}
	});



}

router.get('/:userName', getPublication);

module.exports = router;