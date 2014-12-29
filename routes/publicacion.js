var express = require('express');
var router = express.Router();

// definir rutas
router.get('/:userName', require("./publicacion/publicationGet"));
router.post('/:userName', require("./publicacion/publicationPost"));

// exportarlas
module.exports = router;
