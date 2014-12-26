var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:userName', function(req, res) {

	res.render('index', { 
		userName: req.param("userName") 
	});
});

module.exports = router;
