/*
PIE CHART
================================================ */
var pieData = {
  labels: ['TVCM撮影', '広告撮影', '配信', '雑誌撮影'],
  series: [10, 9, 8, 6]
};

var pieOptions = {
  width: '100%',
  height: '440px'
};

new Chartist.Pie('.pie-chart', pieData, pieOptions);

/*
BAR CHART
================================================ */
var barData = {
  labels: ['2023年', '2024年', '2025年'],
  series: [[1, 4, 8]]
};

var barOptions = {
    axisY: {
        offset: 60,
        scaleMinSpace: 50,
        labelInterpolationFnc: function(value) {
          return value + ' 人'
        }
    },
    width: '100%',
    height: '400px'
};

new Chartist.Bar('.bar-chart', barData, barOptions);

/* Fadeup Animation AOS */
// AOS.init();
AOS.init({
  duration: 1000
});