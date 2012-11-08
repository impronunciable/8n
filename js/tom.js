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
                    chartArea: {
                        width: '85%',
                        height: '80%'
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
                };

    $(document).bind('GOOGLE_API_LOADED', function() {

        App.widgets.parsers.LineChart = function(info) {
            var $pie = $('<div class="pie" style="margin: 20px"></div>');
            new google.visualization.LineChart($pie[0]).draw(info.data, info.style);
            return $pie;
        };

        var data_line = google.visualization.arrayToDataTable([
            ['Year', 'Sales A', 'Sales B', 'Sales C', 'Sales D'],
            ['2005',   50,       15,        8,         72],
            ['2006',   75,       28,        13,        88],
            ['2007',   43,       31,        25,        91],
            ['2008',   82,       11,        43,        57],
            ['2009',   71,       19,        24,        60],
            ['2010',   47,       55,        68,        31],
            ['2011',   28,       62,        86,        42]
        ]);

        App.widgets.add({
            type: 'LineChart',
            information: {
                title: 'progress!',
                data: data_line,
                style: DEFAULT_STYLE
            }
        });

    });

})(window, document, jQuery);