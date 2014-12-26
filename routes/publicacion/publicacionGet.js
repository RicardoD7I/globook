var express = require('express');
var router = express.Router();

module.exports = function(req, res) {

   Publicacion.find(function(err, pub){
       if(!err){
           res.render('/publicacion/publicacionGet', {
           title: 'Publicaciones',
           pub: pub
       });
       }
       else{
       	    res.json({estado : "ERROR: 404"})
       }

   });


}
