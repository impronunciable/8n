;(function(global, document, $, undefined){

  "use strict";

  var mapOptions = {
    center: new google.maps.LatLng(0, 0),
    zoom: 3,
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    draggable: false,
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


      var infowindow = new google.maps.InfoWindow({
        content: "<img src='"+tweet.user.profile_image_url+"' style='float:left; padding: 5px;' /><strong>"+tweet.user.screen_name+"</strong>: "+tweet.text
      });

      google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
      });

    });

  });
        

})(window, document, jQuery);
