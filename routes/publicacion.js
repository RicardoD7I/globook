var express = require('express');
var router = express.Router();

/* GET users listing. */
//router.get('/', function(req, res) {
//  res.send('respond with a resource');
//  require
//});
app.get('/publicaciones', require('./routes/publicacion/publicacionGet'));


router.post('/', require("./publicacion/publicacion"));

//routes.get('/');

module.exports = router;
