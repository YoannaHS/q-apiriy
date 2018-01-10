$(document).ready(function() {
 var myphoto = localStorage.getItem('imgprofile');
 var $ancor = $('#root');
 var $img = $('<img>');
 
 $ancor.append($img);
//  $img.attr('src', myphoto);
$img.attr('src', myphoto);
});