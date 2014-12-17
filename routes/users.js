var express = require('express');
var router = express.Router();
var user = require('../model/user');

/* GET users listing. */

var loginUser = function(req, res){
	user.findOne({'userName': 'admin', 'password': 'admin'},function(err, userlogged){
		if (err) {
			console.log('ERROR: ' + err);
		} else {
			console.log (userlogged.userName);
		}
	});
};


router.POST('/authenticate', loginUser);

	
});

/* POST loguear */
module.exports = router;