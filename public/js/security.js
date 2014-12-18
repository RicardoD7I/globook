
 $(document).ready(function(){
  
  $("#loginButton").on("click", function(){
    
  // encontrar campos y sus valores
    var pass = $("#passwordInput").val();
    var user =  $("#usernameInput").val();

    // usar ajax
      $.ajax({
        url:  "/users/authenticate".
        type : "POST",
        data : {
          username : user,
          password : pass
        }
      })
      .done(function(data  ) {

        var passwordEsValido = data.isValid;
        
        // mostrar el div de comentarios
        if (passwordEsValido) {
          amplify.store("userToken", data.token)
          $("#formulario").show();
        } else {
          amplify.store("userToken", null)
        }


      });


  });

  

 





});