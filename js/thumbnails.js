;(function(global, document, $, undefined){

  "use strict";

  var $thumbs = $('.thumbnails');

  var wall = new Masonry( document.getElementById("thumbnails"), {
    columnWidth: 220,
    gutterWidth: 20
  });


  $.getJSON('photos.json', function(tweets){

    $.each(tweets, function(index, tweet){
      var media = tweet.entities.media;

      for(var i = 0; i < media.length; i++) {
        if(media[i].type === "photo") {

          var img = document.createElement('img');
          var li = document.createElement('span');
          var a = document.createElement('a');
    
          a.appendChild(img);
          a.href = '#';
          a.className = 'item';
          a.target = '_blank';
          a.appendChild(img);
          li.appendChild(a);
          img.src = media[i].media_url_https;
          img.width = 220;
          img.onload = function(){
            $thumbs.prepend(li);
            wall.reload();
          };

        }
      }
    });


  });
       

})(window, document, jQuery);
