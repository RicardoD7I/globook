var express = require('express');
var router = express.Router();
var User = require('../model/user');

/**
POST: Servicio de autenticacion.
*/


/*/

Desde POSTMAN:

{
  "username": "ricardo",
  "password": "abc"
}

Con url: http://localhost:3000/users/authenticate
Headers: 

Content-Type  application/json

*/


/*

// Codigo para agregar user:
var newUser = new User()
newUser.userName = "admin";
newUser.password = "admin";
newUser.token = "lalala";

newUser.save(
  function(err){
 console.log("SAVED!")
  }
);
*/

var loginUser = function(req, res){

	console.log('POST method /authenticate');

	var username = req.param("username");
	var password = req.param("password");
	// debug: llega "username" y "password"
	console.log(username)
	console.log(password)

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

			  console.log(userlogged)
			  if (userlogged) {
			  	var token = Math.floor((Math.random() * 10000000) + 1);
					response.isValid = true;
					response.token = token;

					// @todo: codigo para save token
					// ...
			   }

			   res.json(response);
			}
	});

	

};

//Cambiado a get para probar con el navegador
router.post('/authenticate', loginUser);

module.exports = router;