;(function(global, document, $, undefined){

    "use strict";

    var App = global.hhba = global.hhba || {},
        $win = $(global),
        $doc = $(document),
        $body = $('body');

    App.widgets = {
        _container: null,
        _list: {},
        _count: 0,
        add: function(obj) {
            var key = 'widget-' + (this._count++);
            this._list[key] = this.parse(obj);
            this._list[key].appendTo(this._container);
        },
        remove: function() {

        },
        /**
         * @param obj Contains information (array/object) and type (string) keys.
         * @return jQuery div.widget
         */
        parse: function(obj) {
            var widget = $('<div class="widget"></div>');
            // do something!
            // TODO: remove next line (it's for testing purposes only)
            widget.text(obj.type);

            return widget;
        }
    };
 
    App.init = function () {
        // something
        App.widgets._container = $('.widgets-container');

        App.widgets.add({
            type: 'piechart',
            information: {}
        });

        $.getJSON('tweets.json', function(tweets){
            hhba.tweets = tweets;
            console.log(tweets);
        }); 
    };

    // onDocumentReady
    $(App.init);

})(window, document, jQuery);
