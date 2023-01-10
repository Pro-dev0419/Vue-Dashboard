// Dashboard page start

var owl = $('.owl_summary');
owl.owlCarousel({
    items: 4,
    margin: 10,
    autoplayTimeout: 2000,
    dots: false,
    autoplay: true,
    loop: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 4
        },
        1300: {
            items: 3
        },
        1700: {
            items: 4
        },
    }
});

$('#live_coins').owlCarousel({
    margin: 10,
    items: 10,
    loop: true,
    dots: false,
    autoplay: true,
    autoWidth: true,
    autoplayHoverPause: true,
    autoplayTimeout: 2000,
    //slideTransition: 'linear',
    //autoplayTimeout: 6500,
    //autoplaySpeed: 6500,
    responsive: {
        0: {
            items: 1
        },
        800: {
            items: 2
        },
        1000: {
            items: 3
        },
        1300: {
            items: 4
        },
        1700: {
            items: 5
        },
    }
})

var options = {
    chart: {
      height: 260,
      type: 'line',
      toolbar: {
        show: false,
      },
    },
    colors: ['var(--chart-color1)', 'var(--chart-color5)'],
    series: [{
      name: 'Income',
      type: 'line',
      data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
    }, {
      name: 'Expenses',
      type: 'line',
      data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
    }],
    stroke: {
      width: [2, 2]
    },
    labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
    xaxis: {
      type: 'datetime'
    },
    yaxis: [{
      title: {
        text: 'Income',
      },
    }, {
      opposite: true,
      title: {
        text: 'Expenses'
      }
    }]
  }
  var chart = new ApexCharts(document.querySelector("#apex-AudienceOverview"), options);
  chart.render();
  // Sales by Category
  var options = {
    chart: {
      height: 280,
      type: 'donut',
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'center',
      show: true,
    },
    colors: ['var(--chart-color1)', 'var(--chart-color2)', 'var(--chart-color3)'],
    series: [55, 35, 10],
  }
  var chart = new ApexCharts(document.querySelector("#apex-SalesbyCategory"), options);
  chart.render();
  // Uses of Energy
  $(document).ready(function() {
    var options = {
      chart: {
        height: 335,
        type: 'heatmap',
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false
      },
      grid: {
        padding: {
          right: 0
        }
      },
      colors: ["#ffc122"],
      series: [{
        name: 'Kitchen',
        data: generateHeatmapData(8, {
          min: 0,
          max: 90
        })
      }, {
        name: 'Apple Tv',
        data: generateHeatmapData(8, {
          min: 0,
          max: 90
        })
      }, {
        name: 'Sound Ststem',
        data: generateHeatmapData(8, {
          min: 0,
          max: 90
        })
      }, {
        name: 'Air Conditioner',
        data: generateHeatmapData(8, {
          min: 0,
          max: 90
        })
      }, {
        name: 'Fridge',
        data: generateHeatmapData(8, {
          min: 0,
          max: 90
        })
      }, {
        name: 'Washing Machine',
        data: generateHeatmapData(8, {
          min: 0,
          max: 90
        })
      }, {
        name: 'Bath Room',
        data: generateHeatmapData(8, {
          min: 0,
          max: 90
        })
      }, {
        name: 'Garden',
        data: generateHeatmapData(8, {
          min: 0,
          max: 90
        })
      }, {
        name: 'Store Room',
        data: generateHeatmapData(8, {
          min: 0,
          max: 90
        })
      }],
    }
    var chart = new ApexCharts(document.querySelector("#apex-UsesofEnergy"), options);

    function generateHeatmapData(count, yrange) {
      var i = 0;
      var series = [];
      while (i < count) {
        var x = 'D' + (i + 1).toString();
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        series.push({
          x: x,
          y: y
        });
        i++;
      }
      return series;
    }
    chart.render();
  });

  // Dashboard page end
