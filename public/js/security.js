
 $(document).ready(function(){
  
  

  // encontrar un parametro de la url
  var pass = "";
  var user = "";
  // usar ajax
    $.ajax({
      url:  "/authenticate"
    })
    .done(function(data  ) {

        var passwordEsValido = data.isValid;

      
      // mostrar el div de comentarios
      if (passwordEsValido) {
        $("#formulario").show();
      }


    });


 





});