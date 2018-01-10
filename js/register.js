$(document).ready(function() {
  // Funcion para correr el slider
  $(document).ready(function(){
    $('.slider').slider();
  });
//    Login mediante google 
  var provider = new firebase.auth.GoogleAuthProvider();
  $('#google').on('click', function() {
    firebase.auth().signInWithPopup(provider).then(function(result) {
      console.log(result.user);
      window.location.href = '../views/view-profile.html';
      
      // Almacenamos la imagen de perfil en una variable
      $('#root').append("<img src='"+result.user.photoURL+"' />");
      var imgprofile1 = $('#root').children().eq(0).prop('src');
      localStorage.setItem('imgprofile', imgprofile1 );
    });
  });
});