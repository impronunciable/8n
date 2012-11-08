;(function(global, document, $, undefined){

    "use strict";

    var App = global.hhba = global.hhba || {},
        $win = $(global),
        $doc = $(document),
        $body = $('body');
 
    App.init = function () {
        // something
        $.getJSON('tweets.json', function(tweets){
            hhba.tweets = tweets;
            console.log(tweets);
        }); 
    };

    // onDocumentReady
    $(App.init);

})(window, document, jQuery);
