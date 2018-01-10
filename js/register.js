$(document).ready(function() {
//    Login mediante google 
  var provider = new firebase.auth.GoogleAuthProvider();
  $('#google').on('click', function() {
    firebase.auth().signInWithPopup(provider).then(function(result) {
      console.log(result.user);
      window.location.href = '../views/view-profile.html';
      $('#root').append("<img src='"+result.user.photoURL+"' />");
    });
    // var provider = new firebase.auth.FacebookAuthProvider();
    // $('#facebook').on('click', function() {
    //   firebase.auth().signInWithPopup(provider).then(function(result) {
    //     console.log(result.user);
    //   });
    // });
  });
});