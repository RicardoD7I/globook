var mongoose = require('mongoose');
var config = require('./configDb');

var connectionString = config.dbString;

require("../model/user.js");
require("../model/publication.js");

mongoose.connect(connectionString);

mongoose.connection.on('connected', function(){
	console.log('Coneccion hecha a ' + connectionString);
});

mongoose.connection.on('error', function(error){
	console.log('No se pudo establecer la coneccion a ' + connectionString);
	console.log(error)
});

mongoose.connection.on('disconnected', function(){
	console.log('Coneccion terminada a ' + connectionString);
});

mongoose.connection.on('SIGINT', function(){
	mongoose.connection.close(function(){
		console.log('Coneccion a la base de datos cerrada. Fin de la ejecucion de la aplicacion');
	});
});