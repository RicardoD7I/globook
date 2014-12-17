var express = require('express');
var router = express.Router();

/* GET users listing. */
<<<<<<< HEAD
//router.get('/', function(req, res) {
//  res.send('respond with a resource');
//  require
//});
app.get('/publicaciones', require('./routes/publicacion/publicacionGet'));


=======
router.get('/', function(req, res) {
  res.send('respond with a resource');
  require
});
>>>>>>> 79b23f6da68942916cde4e210f031b22665841b9
router.post('/', require("./publicacion/publicacion"));

//routes.get('/');

module.exports = router;
