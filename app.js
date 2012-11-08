
;(function(){

 var hhba = window.hhba = window.hhba || {};


  $.getJSON('tweets.json', function(tweets){
    hhba.tweets = tweets;
    console.log(tweets);
  }); 


})();
