var express = require('express');
var router = express.Router();

module.exports = function(req, res) {
	// devolver datos
	res.json({})

}
/**
module.exports = function(req, res) {
	Usuario.finById(req.params.userName, function(err, user){
        if(!err){
            if(user.token == req.body.token){    
                    var fechaAct = new Date();
                    var pub = new Publicacion({
                            comentario : req.body.comentario, 
                            fecha : fechaAct
                        });
 
                    pub.save(function(err) {
                        if(!err) {
                            res.json({ estado : 'Alta exitosa'});
                        }else{
                            res.json({estado : "ERROR: 404"})
                        }
                    });
 
            }else{
                res.json({estado : "ERROR: 403"})
            }
 
        }else{
            res.json({estado : "ERROR: 404"})
        }
 
    });
}
**/
