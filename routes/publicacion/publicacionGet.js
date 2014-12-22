var express = require('express');
var router = express.Router();

module.exports = function(req, res) {
	// devolver datos
	res.json({});
	
	// llamada a mongoDB con res.json({}); adentro:
/*
   publicacion.find(function(err, pub){
       res.json({});
   });
*/

}
