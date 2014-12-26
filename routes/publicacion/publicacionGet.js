var express = require('express');
var router = express.Router();

module.exports = function(req, res) {

   Publicacion.find(function(err, pub){
       if(!err){
            
       }
       else{
       	    res.json({estado : "ERROR: 404"})
       }

   });


}
