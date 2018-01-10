$(document).ready(function() {
var input = $('#image_uploads');
var preview = $('.preview');
input.hide();

input.on('change', function() {
 updateImageDisplay(); 
 deletePhoto();
});

function deletePhoto() {
    $('.delete-file').click(function() {
    $(this).parent().parent().remove();
   });
 }

function updateImageDisplay() {
 /* while(preview.children().eq(0).text();) {
    preview.children().eq(0).remove();;
  }*/ //con esto actualizo
  
  var curFiles = input[0].files;
  if(curFiles.length !== 0) {
 
    var list =$('<ol class="col s6 m4 l3" ></ol>');
    preview.append(list);
   for(var i = 0; i < curFiles.length; i++) {

    var listItem = $('<li ></li>');
    var deleteimg = $('<a href="#!" class="secondary-content"><i class="material-icons delete-file">cancel</i></a>');
     list.append(deleteimg);
    var para = $('<p></p>');

      if(validFileType(curFiles[i])) {
        para.eq(0).text(curFiles[i].name);
        var image = $('<img>'); 
        var divpics =$('<div class="pics"></div>');
        var video = $('<img class="imgframe">');
        video.attr('src', window.URL.createObjectURL(curFiles[i]));
       
         listItem.append(divpics);
         divpics.append(video); 

      } else {
    
        para.eq(0).text('File name ' + curFiles[i].name + ': Not a valid file type. Update your selection.');
        listItem.append(para);

      }
      
      list.append(listItem); 
     
    }
  }
}
    var fileTypes = [
      'image/jpeg',
      'image/pjpeg',
      'image/png',
      'video/mp4',
      'video/mp3'
    ]

    function validFileType(file) {
      for(var i = 0; i < fileTypes.length; i++) {
        if(file.type === fileTypes[i]) {
          return true;
        }
      }

      return false;
    }
});