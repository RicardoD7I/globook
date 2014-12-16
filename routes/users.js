var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res) {
	console.log('dentro del archivo users.js');
	res.send('loguear usuario');
});

/* POST loguear */
module.exports = router;