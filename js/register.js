$(document).ready(function () {
  // Funcion para correr el slider
  $(document).ready(function () {
    $('.slider').slider();
  });
  //    Login mediante google 
  var provider = new firebase.auth.GoogleAuthProvider();
  $('#google').on('click', function () {
    firebase.auth().signInWithPopup(provider).then(function (result) {
      console.log(result.user);
      window.location.href = '../views/newsfeed.html';

      // Almacenamos la imagen de perfil en una variable
      $('#root').append('<img src=\'' + result.user.photoURL + '\' />');
      var imgprofile1 = $('#root').children().eq(0).prop('src');
      localStorage.setItem('imgprofile', imgprofile1);
    });
  });

  // Login tradicional
  $("#login").click(function () {
    var email = $("#first_name").val();
    var password = $("#password").val();
    if (email == '' || password == '') {
      alert("Por favor llena todos los datos");
    } else if ((password.length) < 6) {
      alert("La clave no debe ser menor a 6 caracteres");
    } else {
      window.location.href = '../views/newsfeed.html';
    }
  });

});