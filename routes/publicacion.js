var express = require('express');
var router = express.Router();

/* GET users listing. */
app.get('/Publicaciones',
 require('./routes/publicacion/publicacionGet'));
//routes.get('/');

module.exports = router;
