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
        /**
         * Object containing
         * key => widget type
         * value => function to render the widget, returns jQuery or DOM elements
         */
        parsers: {},
        
        /** Create the widget, append it to container and store its reference */
        add: function(obj) {
            var key = 'widget-' + (this._count++);
            this._list[key] = this.parse(obj);
            this._list[key].appendTo(this._container);
        },

        /* TODO */
        remove: function() {

        },

        /**
         * @param obj Contains information (array/object) and type (string) keys.
         * @return jQuery div.widget
         */
        parse: function(obj) {
            var widget = $('<div class="widget"></div>');
            if (typeof this.parsers[obj.type] === 'function') {
                widget.append(this.parsers[obj.type](obj.information));
            } else {
                console.warn(obj.type + ' unhandled widget');
            }
            return widget;
        },
        /**
         * Callback after Google Viz API loaded
         */ 
        run: function() {
            // run the magic!
            console.log('API loaded');
            $doc.trigger('GOOGLE_API_LOADED');
        }
    };

    App.init = function () {
        // something
        App.widgets._container = $('.widgets-container');

        $.getJSON('tweets.json', function(tweets){
            hhba.tweets = tweets;
            console.log(tweets);
        }); 
    };

    // before document ready
    google.load('visualization', '1', {packages: ['corechart']});
    google.setOnLoadCallback(App.widgets.run);

    // onDocumentReady
    $(App.init);

})(window, document, jQuery);