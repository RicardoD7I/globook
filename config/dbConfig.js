var mongoose = require('mongoose');

//String connection
var connectionString = 'mongodb://globook:1234567@dogen.mongohq.com:10042/node_globook';

moongose.connect(connectionString);

mongoose.connection.on('connected', function(){
	console.log('Coneccion hecha a ' + connectionString);
});

mongoose.connection.on('error', function(){
	console.log('No se pudo establecer la coneccion a ' + connectionString);
});

mongoose.connection.on('disconnected', function(){
	console.log('Coneccion terminada a ' + connectionString);
});

mongoose.connection.on('SIGINT', function(){
	mongoose.connection.close(function(){
		console.log('Coneccion a la base de datos cerrada. Fin de la ejecucion de la aplicacion');
	});
});