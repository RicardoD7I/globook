
 $(document).ready(function(){

  var isLogged =   (amplify.store("userToken") != null && typeof amplify.store("userToken") != "undefined") ;

  if(!isLogged) {
    $("#logoutButton").hide();
    $("#loginForm").show();
  } else {
    $("#loginForm").hide();
    $("#formulario").removeClass("hidden");
    $("#logoutButton").removeClass("hidden");
  }

  // logout
  $("#logoutButton").on("click",function(evt){
    evt.preventDefault();
    amplify.store("userToken", null);
    amplify.store("loggedInUsername", null);
    location.reload();
  })
  
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
          amplify.store("loggedInUsername", user);
          
           $("#formulario").removeClass("hidden");
           $("#logoutButton").removeClass("hidden").show();
           $("#loginForm").hide();
        } else {
          alert("Usuario o contraseña invalida");
          //amplify.store("userToken", null)
        }


      });


  });

  

 





});