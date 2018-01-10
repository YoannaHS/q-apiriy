$(document).ready(function () {

  //Funcionalidad de Materialize para que links del navbar se conviertan en menu hamburguesa
  $(".button-collapse").sideNav();


  //Funcionalidad para que podamos hacer nuevas publicaciones en nuestro perfil
  var textArea = $('#text-area');
  textArea.on('keyup', function (event) {
    //console.log(event.target);
    //console.log($(this).val());
    //console.log($(this).val().length);
    if ($(this).val().length > 10) {
      $(this).css('color', 'teal');
      $('#post-btn').attr('disabled', false);
    }
  });

  $('#post-btn').on('click', function (event) {
    event.preventDefault()
    var textValue = textArea.val();
    $('.profile-posts-container').prepend('<div class="profile-post">' + textValue + '</div>');
    textArea.val('');
  });


  // Funcionalidad para que el botón follow se active en los perfiles de amigos
  $('#follow-btn').on('click', function (e) {
    e.preventDefault();
    $button = $(this);
    if ($button.hasClass('follow')) {
      $button.removeClass('follow');
      $button.removeClass('unfollow');
      $button.val('Siguiendo');
    } else {

      $button.addClass('follow');
      $button.val('Seguir');
    }
  });

  $('#follow-btn').hover(function () {
    $button = $(this);
    if ($button.hasClass('following')) {
      $button.addClass('unfollow');
      $button.val('Dejar de seguir');
    }
  }, function () {
    if ($button.hasClass('following')) {
      $button.removeClass('unfollow');
      $button.val('Siguiendo');
    }
  });


});