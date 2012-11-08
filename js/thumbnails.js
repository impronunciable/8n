;(function(global, document, $, undefined){

  "use strict";

  var $thumbs = $('.thumbnails');

  $.getJSON('photos.json', function(tweets){

    $.each(tweets, function(index, tweet){
      var media = tweet.entities.media;

      for(var i = 0; i < media.length; i++) {
        if(media[i].type === "photo") {
          $thumbs.prepend('<li class="span3"><a href="#" class="thumbnail"><img src="' + media[i].media_url_https + '"></a></li>');
        }
      }  
  
    });

  });
       

})(window, document, jQuery);
