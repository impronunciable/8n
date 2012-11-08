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
          var span = document.createElement('span');
          var a = document.createElement('a');
    
          a.appendChild(img);
          a.href = '#';
          a.target = '_blank';
          a.appendChild(img);
          a.className = 'thumbnail';
          span.className = 'item';
          span.appendChild(a);
          img.src = media[i].media_url_https;
          img.width = 220;
          img.onload = function(){
            $thumbs.prepend(span);
            wall.reload();
          };

        }
      }
    });


  });
       

})(window, document, jQuery);
