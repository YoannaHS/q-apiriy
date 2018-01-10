
$(document).ready(function() {
  var distrito = Object.keys(data);           
  var $rests = $('#container-places');
  var $section = $('#contact-social');
  var $friendcl = $('#friendcl');
  var datauser = Object.keys(data["user"]);
  var amigos = Object.keys(data["user"][datauser[2]][0]);

 for(var i=0;i<data["user"][datauser[2]].length;i++){

    var amigos = Object.keys(data["user"][datauser[2]][i]);
    var $ancor = $('<a href="userChat.html"></a>'),$container = $('<div class="container line"></div>'),
        $contact = $('<div class="row contact"></div>'),$card = $('<div class="col s12"></div>'),
        $col = $('<div class="col s12"></div>'),
        $img = $('<img class="contact-img circle responsive-img avatar">'),
        $spaname = $('<span class="align-left"></span>'),$spanfollow = $('<span class="follow"><button class="follow-btn modal-trigger" data-target="modal-sm">siguiendo</button><button class="hidden unfollow-btn">seguir</button></span>') ;
     
    console.log(data["user"][datauser[2]][i].name);
    console.log(data["user"][datauser[2]][i].photo);
     
     $section.append($ancor);
     $ancor.append($container);
     $container.append($contact);
     $contact.append($card);
     $card.append($col);
     $img.attr('src','../assets/img/'+ data["user"][datauser[2]][i].photo);
     $col.append($img);     
     $col.append($spaname);
     $spaname.append(data["user"][datauser[2]][i].name);
     $col.append($spanfollow);

     

    


    /* for(var j=0;j<amigos.length ;j++){      
    console.log(data["user"][datauser[2]][i][amigos[j]]);
    <a class="messagesContent" role="button" href="https://www.facebook.com/messages/t/1821087749"> 
      <div class="container">
      <div class="row contact">
      <div class="card col s12">
       <div class="col s12">
          <img class="contact-img circle responsive-img avatar" src="../assets/img/tumbes.png">
          <span class="align-left">Roxana Quispe Ccanto</span>
          <span class="follow"><button>siguiendo</button></span>
      </div>
      </div>
      </div>
      </div>
    </a> 
    //
     }*/
 }
$('.modal').modal();
$imgfriend = $('<img class="contact-img circle responsive-img avatar">')
var $buttons = $('button.follow-btn');
//var $ubuttons = $('button.unfollow-btn'); 
    
    var $arrbuttons = $.makeArray($buttons);

    $.each($arrbuttons, function(j, val) {
         
        $buttons.eq(j).on('click', function(event) {
    
          event.preventDefault();
              $friendcl.empty();
             localStorage.setItem('image',data["user"][datauser[2]][j].photo); 
             localStorage.setItem('i',j);         
             var $imgmodal = $('<img class="contact-imgmodal  responsive-img avatar">');
             var imagemodal = localStorage.getItem("image");
             var countmodal = localStorage.getItem("i");         
             $imgmodal.attr('src','../assets/img/'+ imagemodal);
             $friendcl.append($imgmodal);
                 
                         
                   //   var $buttonmodal =$(this).parent().parent().parent().parent().parent().parent().parent().parent().siblings().eq(2).children().eq(0).children().eq(0).children().eq(0).siblings().eq(0).children().eq(0).siblings().children().eq(0).children().eq(0);  
          var $buttonmodal = $('button.follow-friend'); 
           $buttonmodal.on('click',function(event){
               event.preventDefault();
                   
                  $buttons.eq(j).hide();
                  console.log(countmodal);
                 //$(this).parent().parent().parent().parent().parent().parent().siblings().eq(2).children().eq(0).children().eq(j).children().eq(0).children().eq(0).children().eq(0).children().eq(0).children().eq(2).children().eq(0).hide();
                  $ubuttons.eq(j).show();                  
                  $('#modal-sm').modal('close');
                //$(this).parent().parent().parent().parent().parent().parent().siblings().eq(2).children().eq(0).children().eq(j).children().eq(0).children().eq(0).children().eq(0).children().eq(0).children().eq(2).children().eq(0).next().show();
                });
          /* $ubuttons.eq(j).on('click',function(){
             $(this).hide();
             $(this).parent().children(':first-child').show();   
                  });*/
          
       });
    }); 
 


 var $ubuttons = $('button.unfollow-btn'); 
  var $arrubuttons = $.makeArray($ubuttons);
  $.each($arrubuttons, function(i, val) {
      $ubuttons.eq(i).on('click', function(event) {
        event.preventDefault();
        localStorage.setItem('k',i);
         $(this).hide();
         $(this).parent().children(':first-child').show();
      });
   }); 

 
   

/*  var $buttons = $('button.follow-btn'); 
  var $arrbuttons = $.makeArray($buttons);
  $.each($arrbuttons, function(i, val) {
      $buttons.eq(i).on('mouseover', function() {
        $buttons.eq(i).parent().siblings().eq(1).slideToggle();
      });

      $linksRestaurant.eq(i).on('mouseout', function() {
        $linksRestaurant.eq(i).parent().siblings().eq(1).slideToggle();

      });
  });       




/*  for(i=0 ; i<distrito.length; i++){
   var categoria = Object.keys(data[distrito[i]]);

    for(k=0; k<categoria.length;k++){  
     var restaurantes =data[distrito[i]][categoria[k]]["restaurants"];                   
       
          
      for (j=0; j<restaurantes.length;j++ ){ 
       var imagenes = Object.keys(restaurantes[j]); 
    
            var $ancor =  $('<a class="list-datos modal-trigger" href="#modal-food"></a>'); 
            var $ancorc =  $('<a class="list-others" href="#"></a>'); 
            var $span1 =$('<span ></span>'); 
            var $spanTitle =$('<span class="food"><span>');
            var $span2 =$('<span></span>');
            var $span21 =$('<span class="list2"></span>'); 
            var $span_names=$('<span class="names-rests"></span>'); 
            var $span_address =$('<span class="adresses"><i class="material-icons prefix">home</i></span>');
            var $img = $('<img class="list-img">');
            var $span22 =$('<span class="list-precios"></span>');
            var $span_fromcost=$('<span class="from-costs"></span>'); 
            var $span_tocost =$('<span class="to_costs"></span>'); 
            var $div_reserve =$('<div class="reserve"><a href="dishes.html" id="show-dishes" type="submit" class="dishes-content btn">reservar</a></div>');
            $img.attr('src','../assets/img/'+ restaurantes[j][imagenes[2]]);
            
         
           $rests.append($ancor);
           $ancor.append($span1);                         
           $span1.append($img);
           $span1.append($spanTitle);
           $spanTitle.append(categoria[k]);

           $ancor.append($span2);
           $span2.append($span21);
           $span21.append($span_names);
           $span21.append($span_address);
           $span_names.append(restaurantes[j][imagenes[0]]);
           $span_address.append(restaurantes[j][imagenes[1]]);
           $ancor.append('<div class="divmouse hidden"><img src="../assets/img/cupon.png"></div>');
         //  $span21.append('<span>'+restaurantes[j][imagenes[1]+'</span>');
           $rests.append($ancorc); 
           $ancorc.append($span22);
           $span22.append($span_fromcost);
           $span22.append($span_tocost);
           $span_fromcost.append(restaurantes[j][imagenes[3]]);
           $span_tocost.append(restaurantes[j][imagenes[4]]);
           $ancorc.append($div_reserve);
            
         var $input_district   = $('<input id="district" type="hidden"></input>');
         var $input_category   = $('<input id="category" type="hidden"></input>');
         var $input_restaurant = $('<input id="restaurant" type="hidden"></input>');
          $ancorc.append($input_district);
          $input_district.append(i);
          $ancorc.append($input_category);
          $input_category.append(k);
          $ancorc.append($input_restaurant);
          $input_restaurant.append(j);
      //    $input_category.append(k);
     
                 
        }
         
   }
}
 
 
  var $buttonDishes = $('a.dishes-content');
  var $arrButton = $.makeArray($buttonDishes);
  $.each($arrButton, function(i, val) {
      $buttonDishes.eq(i).on('click', function() {
       // $buttonDishes.eq(i)[0];
        var did = $buttonDishes.eq(i).parent().parent().children().eq(2).text();
        var cid = $buttonDishes.eq(i).parent().parent().children().eq(3).text();
        var rid = $buttonDishes.eq(i).parent().parent().children().eq(4).text();
       //var did = parseInt($a1.parent().parent().children().eq(2).text());
        console.log(did +'soy del button:' + i );
        localStorage.setItem('distrito',did);
        localStorage.setItem('categoria',cid); 
        localStorage.setItem('restaurante',rid);  
       // $img.attr('src', rutaLocal + arrImagenes[i].url);
       });
  });  

  var $linksRestaurant = $('img.list-img'); 
  var $arrLinks = $.makeArray($linksRestaurant);
  $.each($arrLinks, function(i, val) {
      $linksRestaurant.eq(i).on('mouseover', function() {
        $linksRestaurant.eq(i).parent().siblings().eq(1).slideToggle();
       });

      $linksRestaurant.eq(i).on('mouseout', function() {
        $linksRestaurant.eq(i).parent().siblings().eq(1).slideToggle();

       });
  });       


  var $ancor =  $('<a>link</a>'); 
  var $span =$('<span>hi</span>');
 
 
 $('#add').click(function() {
    var name = $('.name').val();
    $('.name').val('');
    var phone = $('.phone').val();
    $('.phone').val('');
    var contenedor = $('#cont');
    contenedor.append('<div class="container contacto"><ul class="collection"><li class="collection-item avatar"><h5>' + name + '</h5><p>' + phone + '</p><a href="#!" class="secondary-content"><i class="material-icons basura">delete_forever</i></a></li></ul></div>');
     deleteContact();
  });
  
  function rm_accent(str) {
   var letter={'À':'A','Á':'A','È':'E','É':'E','Ì':'I','Í':'I','Ñ':'N','Ò':'O','Ó':'O','Ù':'U','Ú':'U','à':'a','á':'a','è':'e','é':'e','ì':'i','í':'i','ñ':'n','ò':'o','ó':'o','ù':'u','ú':'u','ý':'y'};
   var res='';
   for (var i=0;i<str.length;i++)
    {c=str.charAt(i);res+=letter[c]||c;}
   return res;}
  


  function deleteContact() {
    $('.basura').click(function() {
       $(this).parent().parent().parent().parent().remove();
    });
  }
  $('#search').keyup(function() {
    var nombre = rm_accent($.trim($(this).eq(0).val().toUpperCase()));
    $('.list-datos').hide();
     $('.list-datos').next().hide(); // otros datos  
       $('.list-datos').each(function() {
         var search = rm_accent($.trim($(this).text().toUpperCase()));
         if (search.indexOf(nombre) !== -1) {
                  $(this).show();
                  $(this).next().show();
           }
     });
      
    });
     */




});
