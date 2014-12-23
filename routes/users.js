var express = require('express');
var router = express.Router();
var User = require('../model/user');

/**
POST: Servicio de autenticacion.
*/
var loginUser = function(req, res){

	console.log('POST method /authenticate');

	User.find({userName: 'admin', password: 'admin'},function(err, userlogged){
		if (err) {
			return console.err('ERROR: ' + err);
		} else {
			console.log ('--------------------------------');
			console.log(userlogged);
			console.log ('--------------------------------');
		}
	});

	res.send(User);

};

//Cambiado a get para probar con el navegador
router.post('/authenticate', loginUser);

module.exports = router;