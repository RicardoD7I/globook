var express = require('express');
var router = express.Router();

/* GET perfil. */
router.get('/:userName', function(req, res) {

	res.render('index', { 
		userName: req.param("userName") 
	});
});

/* GET home page. */
router.get('/', function(req, res) {

	res.render('homepage', {
		users: {
			"tomas.campodonico" : "Tomas Campodonico",
			"matias.inchauspe": "Matias Inchauspe",
			'ricardo.vella' : "Ricardo D. Vella",
			"ignacio.siri": "Ignacio Siri",
			"mariela.blanco": "Mariela Blanco",
			"federico.crespo": "Federico Crespo",
			"ignacio.diaz": "Ignacio Diaz",
			"federico.maza": "Federico Maza",
			"rut.cortes": "Rut Cortes",
			"sebastian.marco": "Sebastian Marco",
			"emmanuel%20Luduena": "Emmanuel Ludueña"
		}
	});
});


module.exports = router;
