;(function(global, document, $, undefined){

  "use strict";

  var mapOptions = {
    center: new google.maps.LatLng(0, 0),
    zoom: 3,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);


  $.getJSON('geo.json', function(tweets){

    $.each(tweets, function(index, tweet){
      var myLatlng = new google.maps.LatLng(tweet.geo.coordinates[0], tweet.geo.coordinates[1]);

      var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: tweet.text
      });

    });

  });
        

})(window, document, jQuery);
