// OTHER EXAMPLE!
// var data_donut1 = google.visualization.arrayToDataTable([
//     ['Type', 'Percent'],
//     ['Email', .7],
//     ['Other', .3]
// ]);
// new google.visualization.PieChart(document.getElementById('donut1')).
// draw(data_donut1, {pieHole: .6,
//         width: 274, height: 274,
//         chartArea:{width:"90%",height:"90%"},
//         legend: 'none', 
//         pieSliceBorderColor: 'none',
//         backgroundColor: backColor,
//         colors: [color5, color5Muted]});
// color5 = '#86aa65',
// color5Muted = '#444e3d',

;(function(global, document, $, undefined){
    
    "use strict";

    var App = global.hhba = global.hhba || {},
        $doc = $(document),

        backColor = '#2f2f2f',
        gridlinesColor = '#3e3e3e',
        axisTitleColor = '#c4c4b5',
        color1 = '#db844e',
        color2 = '#eda637',
        color3 = '#a7a737',
        color4 = '#4bb3d3',

        DEFAULT_STYLE = {
                    width: 480,
                    height: 250,
                    legend: 'none',
                    backgroundColor: backColor,
                    animation: {
                        duration: 500
                    },
                    chartArea: {
                        width: '85%',
                        height: '80%',
                        left: 50,
                        top: '10%'
                    },
                    lineWidth: 3,
                    hAxis: {
                        textStyle: {
                            color: axisTitleColor
                        }
                    },
                    vAxis: {
                        maxValue: 100,
                        gridlines: {
                            count: 5,
                            color: gridlinesColor
                        },
                        baselineColor: gridlinesColor,
                        textStyle: {
                            color: axisTitleColor
                        }
                    },
                    colors: [color1, color2, color3, color4]
                },

        isTweetsLoaded = false,
        isGoogleApiLoaded = false,
        isChartReady = false,

        parseTweetsPerHour = function() {
            console.time('tweetsPerHour');
            var all = hhba.tweets,
                i = 0,
                l = all.length,
                date = null,
                hours = [],
                j;
            for (j = 0; j < 24; j++) {
                hours.push(0);
            }
            for (; i < l; i++) {
                date = new Date(all[i].created_at);
                // only for Nov 8.
                if (date.getDate() === 8) {
                    hours[date.getHours()]++;
                }
            }
            console.timeEnd('tweetsPerHour');
            return hours;
        },

        updateChart = function() {
            if (!isTweetsLoaded || !isChartReady) {
                return false;
            }
            var day1 = parseTweetsPerHour(),
                i = 0,
                l = day1.length,
                data = [],
                label;

            data.push(['Hora',    '8N']);
            for (; i < l; i++) {
                label = (i < 10) ? '0' + i : i+'';
                data.push([label, day1[i]]);
            }

            DEFAULT_STYLE.vAxis.maxValue = Math.max.apply(null, day1);

            google.visualization.events.removeAllListeners(chart);
            chart.draw(google.visualization.arrayToDataTable(data), DEFAULT_STYLE);
        },

        chart = null;

    App.widgets.parsers.LineChart = function(info) {
        var $widget = $('<div class="widget" style="margin: 20px"></div>');
        chart = new google.visualization.LineChart($widget[0]);
        google.visualization.events.addListener(chart, 'ready', function() {
            isChartReady = true;
            updateChart();
        });
        chart.draw(info.data, info.style);
        return $widget;
    };

    $doc.bind('TWEETS_LOADED', function() {
        isTweetsLoaded = true;
        updateChart();
    });
    $doc.bind('GOOGLE_API_LOADED', function() {
        isGoogleApiLoaded = true;
        var i = 0,
            data = [];

        data.push(['Hora', '8N']);
        for (; i < 24; i++) {
            data.push([((i < 10) ? '0' + i : i+''), 0]);
        }
        
        App.widgets.add({
            type: 'LineChart',
            information: {
                title: 'Tweets per hour',
                data: google.visualization.arrayToDataTable(data),
                style: DEFAULT_STYLE
            }
        });
    });


})(window, document, jQuery);