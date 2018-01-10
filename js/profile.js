$(document).ready(function() {
 var myphoto = localStorage.getItem('imgprofile');
 var $img = $('<img>');

 $('#root').append($img);
 $img.attr('src', myphoto);
});