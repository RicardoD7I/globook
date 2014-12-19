
 $(document).ready(function(){

  var isLogged =   (amplify.store("userToken") != null && typeof amplify.store("userToken") != "undefined") ;

  if(!isLogged) {
    $("#logoutButton").hide();
    $("#loginForm").show();
  } else {
    $("#logoutButton").show();
    $("#loginForm").hide();
  }
  
  $("#loginButton").on("click", function(evt){

    evt.preventDefault();

 
  // encontrar campos y sus valores
    var pass = $("#passwordInput").val();
    var user =  $("#usernameInput").val();

    // usar ajax
      $.ajax({
        url:  "/users/authenticate",
        type : "POST",
        data : {
          username : user,
          password : pass
        }
      })
      .fail(function() {
         alert( "Problema en el servicio authenticate" );
       })
      .done(function(data) {

        var passwordEsValido = data.isValid;
        
        // mostrar el div de comentarios
        if (passwordEsValido) {
          amplify.store("userToken", data.token)
          
           $("#formulario").removeClass("hidden");
        } else {
          amplify.store("userToken", null)
        }


      });


  });

  

 





});