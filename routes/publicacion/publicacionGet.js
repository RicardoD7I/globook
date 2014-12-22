var express = require('express');
var router = express.Router();

module.export = function(req, res) {
   publicacion.find(function(err, pub){
       res.render('/publicaciones', {
           title: 'Publicaciones',
           pub: pub
       });
   });
}
