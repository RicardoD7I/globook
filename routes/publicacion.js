var express = require('express');
var router = express.Router();

// definir rutas
router.get('/:userName', require("./publicacion/publicacionGet"));
router.post('/:userName', require("./publicacion/publicacionPost"));

// exportarlas
module.exports = router;
