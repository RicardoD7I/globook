var express = require('express');
var router = express.Router();
var User = require('../model/user');


var populate = function(req, res){

	console.log('POST method /saveUser');


var users = [{
	    name: 'Tomas Campodonico',
		userName: 'tomas.campodonico',
		password: 'globook',
		token: '',
		img: 'tomas.campodonico.jpg'
    },
    {
	    name: 'Matias Inchauspe',
		userName: 'matias.inchauspe',
		password: 'globook',
		token: '',
		img: 'matias.inchauspe.jpg'
    },
    {
	    name: 'Ricardo D. Vella',
		userName: 'ricardo.vella',
		password: 'globook',
		token: '',
		img: 'ricardo.vella.jpg'
    },
    {
	    name: 'Ignacio Siri',
		userName: 'ignacio.siri',
		password: 'globook',
		token: '',
		img: 'ignaciosiri.jpg'
    },
    {
	    name: 'Mariela Blanco',
		userName: 'mariela.blanco',
		password: 'globook',
		token: '',
		img: 'mblanco.jpg'
    },
    {
	    name: 'Federico Crespo',
		userName: 'federico.crespo',
		password: 'globook',
		token: '',
		img: 'fede_crespo_pic.jpg'
    },
    {
	    name: 'Ignacio Diaz',
		userName: 'ignacio.diaz',
		password: 'globook',
		token: '',
		img: 'Nacho.png'
    },
    {
	    name: 'Federico Maza',
		userName: 'federico.maza',
		password: 'globook',
		token: '',
		img: 'fmaza.JPG'
    },
    {
	    name: 'Rut Cortes',
		userName: 'rut.cortes',
		password: 'globook',
		token: '',
		img: 'rutc.png'
    },
   {
	    name: 'Sebastian Marco',
		userName: 'sebastian.marco',
		password: 'globook',
		token: '',
		img: 'smarco.jpg'
    },
   {
	    name: 'Emmanuel Ludueña',
		userName: 'emmanuel Luduena',
		password: 'globook',
		token: '',
		img: 'Emma.jpg'
    }

    


];

res.json({"ok" : true})
for (i = 0; i < users.length; i++) { 
  
   	var Usuario = new User( users[i]);

   	console.log(users[i])

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

}

};

router.get('/populateUsers', populate);

module.exports = router;