var express = require('express');
var router = express.Router();
var User = require('../model/user');


var populate = function(req, res){

	console.log('POST method /saveUser');

	// debug: llega "username" y "password"

	var Usuario = new User({
	    name: 'Administrador',
		userName: 'admin',
		password: 'admin',
		token: '',
		img: 'sadasd'
    });

	Usuario.save(function(err, userlogged){
		
		if (err) {
			console.log('Hubo un error');
			res.json({
				"error" : "ERROR!"
			});
		} else {
			console.log("Usuario creado");

		}
	});	

};

router.post('/populateUsers', populate);