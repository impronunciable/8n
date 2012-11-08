;(function(global, document, $, undefined){
    
    "use strict";

    var App = global.hhba = global.hhba || {};

    $(document).bind('GOOGLE_API_LOADED', function() {

        App.widgets.parsers.piechart = function(info) {
            return $('<span>' + info.title  + '</span>');
        };
        App.widgets.add({
            type: 'piechart',
            information: {
                title: 'Torta!'
            }
        });

    });

})(window, document, jQuery);