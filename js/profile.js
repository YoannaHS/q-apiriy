$(document).ready(function () {
    $(".button-collapse").sideNav();

    var textArea = $('#text-area');

    textArea.on('keyup', function(event) {
        //console.log(event.target);
        //console.log($(this).val());
        //console.log($(this).val().length);
        if($(this).val().length > 10) {
          $(this).css('color', 'teal');
          $('#post-btn').attr('disabled', false);
        }
      });
    
      $('#post-btn').on('click', function(event) {
        event.preventDefault()
        var textValue = textArea.val();
        $('.profile-posts-container').prepend('<div class="profile-post">'+ textValue +'</div>');
        textArea.val('');
      });
      // Agregamos la imagen de perfil
      var myphoto = localStorage.getItem('imgprofile');
      var $imgid = $('#imgprofile');
      $imgid.attr('src', myphoto);
      

});