var express = require('express');
var router = express.Router();

module.exports = function(req, res) {
   Usuario.finById(req.params.userName, function(err, user){
   
       if(!err){
       	    if(user.token == req.body.token){    
       	            Publicacion.find(function(err, pub){
                    res.render('/publicacion/publicacionGet', {
                    title: 'Publicaciones',
                    pub: pub
                    });
                    pub.save(function(err) {
                       if(!err) {
                           res.json({ estado : 'EXITO'});
                       }else{
                           res.json({estado : "ERROR: 404"})
                       }
                   });
            }else{
               res.json({estado : "ERROR: 403"}) //Si el usuario no existe o no tiene permisos
           }
       }
       else{
       	    res.json({estado : "ERROR: 404"})
       }

   });


}
