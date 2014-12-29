var express = require('express');
var router = express.Router();
var User = require('../model/user');

var loginUser = function(req, res){

	console.log('POST method /authenticate');

	var username = req.param("username");
	var password = req.param("password");

	User.findOne({userName: username, password: password},function(err, userlogged){
		
		if (err) {
			res.json({
				"error" : "ERROR!"
			});
		} else {
			  var  response = {
			  	isValid : false,
			  	token: ""
			  }

			  if (userlogged) {
			  	var token = Math.floor((Math.random() * 10000000) + 1);
					response.isValid = true;
					response.token = token;

					//Modificacion del token
					userlogged.token = token;

					//Guardado de las modificaciones en la base de datos
					userlogged.save(function(err){
						if(err){
							res.json({
								"error" : "ERROR! No se pudo guardar el token"
							});
						}
					});
			   }

			   res.json(response);
			}
	});	

};


var getUserData = function(req, res){

	console.log('GET method /getUserData');

	var userName = req.param("userName");

	User.findOne({userName: userName}, function(err, userLogged) {
		console.log("ACA")
		if (err) {
			console.log('ERROR: Hubo un problema al consultar el usuario en la BBDD');
			res.json({
				"error" : "ERROR: Error al intentar recuperar el usuario de la base de datos."
			});
		} else {
			res.json(userLogged); 
		}
	});

}

router.post('/authenticate', loginUser);
router.get('/:userName', getUserData);

module.exports = router;