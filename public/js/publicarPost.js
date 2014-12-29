
 $(document).ready(function(){


  $("#publishPost").on("click", function(evt){

    evt.preventDefault();

    var username = $("body").data("username");

    if (! $("#postText").val() || !  $("#postTitle").val()) {
      alert("Ingrese los datos del formulario")
      return;
    }


     // usar ajax
      $.ajax({
        url:  "/publicacion/" + username,
        type : "POST",
        data : {
          token : amplify.store("userToken"),
          text : $("#postText").val(),
          title : $("#postTitle").val()

        }
      })
      .fail(function() {
         alert( "Problema en el servicio publish post" );
       })
      .done(function(data) {  
        var d = new Date();
        var n = d.toISOString();

        // agregar post en la pagina
        amplify.publish("onPubReady",[{
          text: $("#postText").val(),
          title: $("#postTitle").val(),
          date : n
        }])

        // limpiar campos
        $("#postText").val("");
        $("#postTitle").val("");

      });


  });



});