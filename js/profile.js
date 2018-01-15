$(document).ready(function() {
  // Funcionalidad de Materialize para que links del navbar se conviertan en menu hamburguesa
  $('.button-collapse').sideNav();
  $('.parallax').parallax();


  // Funcionalidad para que podamos hacer nuevas publicaciones en nuestro perfil
  var textArea = $('#text-area');
  textArea.on('keyup', function(e) {
    // console.log(event.target);
    // console.log($(this).val());
    // console.log($(this).val().length);
    if ($(this).val().length > 5) {
      $(this).css('color', 'teal');
      $('#post-btn').attr('disabled', false);
    }
  });

  $('#post-btn').on('click', function(e) {
    event.preventDefault();
    var textValue = textArea.val();
    $('.profile-posts-container').prepend('<div class="profile-post2">' + textValue + '</div>');
    textArea.val('');
  });


  // Funcionalidad para que el botón follow se active en los perfiles de amigos
  $('#follow-btn').on('click', function(e) {
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

  $('#follow-btn').hover(function(e) {
    $button = $(this);
    if ($button.hasClass('following')) {
      $button.addClass('unfollow');
      $button.val('Dejar de seguir');
    }
  }, function(e) {
    if ($button.hasClass('following')) {
      $button.removeClass('unfollow');
      $button.val('Siguiendo');
    }
  });


  // Agregamos la imagen de perfil
  var myphoto = localStorage.getItem('imgprofile');
  var $imgid = $('                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               #imgprofile');
  $imgid.attr('src', myphoto);
});