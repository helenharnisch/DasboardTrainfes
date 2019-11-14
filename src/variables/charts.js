// javascript library for creating charts

var Chartist = require("chartist");
require('chartist-plugin-tooltips')

// variables used to create animation on charts

var delays = 80,
  durations = 500;
var delays2 = 80,
  durations2 = 500;


const pie = {
  data: {
    series: [10, 20]
  },
  options: {
    donut: true,
    donutWidth: 20,
    donutSolid: true,
    startAngle: 270,
    showLabel: false
  },

};

//tooltip plugin
const stepsChartTwo = {
  data: {
    labels:  [1, 2, 3],
    series: [
    [
      {meta: 'description', value: 1 },
      {meta: 'description', value: 5},
      {meta: 'description', value: 3}

  ],
    [
      {meta: 'other description', value: 2},
      {meta: 'other description', value: 4},
      {meta: 'other description', value: 2}

    ]
  ]
  },
    options: {
    low: 0,
    high: 8,
    fullWidth: true,
    plugins: [
      Chartist.plugins.tooltip()
    ],
  },

  animation: {
    draw: function(data) {
      if (data.type === 'point') {
        // We are creating a new path SVG element that draws a triangle around the point coordinates

        var circle = new Chartist.Svg('circle', {
          cx: [data.x],
          cy: [data.y],
          r: [5],
          'ct:value': data.value.y,
          'ct:meta': data.meta,
          class: 'my-cool-point',
        }, 'ct-area');

        // With data.element we get the Chartist SVG wrapper and we can replace the original point drawn by Chartist with our newly created triangle
        data.element.replace(circle);
      }
    }
  }


};

//Gráfico linea area animación
const levelStepsChart = {
  data: {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    series: [
      [1, 5, 2, 5, 4, 9,5,4,6,10,2,9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]



    ]
  },
  options: {
    low: 0,
    showArea: true


  },
  // for animation
  animation: {
    draw: function(data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 2000 * data.index,
            dur: 2000,
            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      }
    }
  }

};

//Gráfico Lineas
const stepsChart = {
  data: {
    labels: ["8:00 hrs.", "8:00 hrs", "8:00 hrs", "8:00 hrs", "8:00 hrs", "8:00 hrs", "8:00 hrs", "8:00 hrs", "8:00 hrs", "8:00 hrs", "8:00 hrs", "8:00 hrs"],
    series: [[12, 17, 7, 17, 23, 18, 38, 7, 17, 23, 18, 38]]
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: 0,
    high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  },
  // for animation
  animation: {
    draw: function (data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === "point") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};


//Gráfico de barras
const emailsSubscriptionChart = {
  data: {
    labels: [
      "E",
      "F",
      "M",
      "A",
      "M",
      "J",
      "J",
      "A",
      "S",
      "O",
      "N",
      "D"
    ],
    series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]]
  },
  options: {
    axisX: {
      showGrid: false
    },
    low: 0,
    high: 1000,
    chartPadding: {
      top: 0,
      right: 5,
      bottom: 0,
      left: 0
    }
  },
  responsiveOptions: [
    [
      "screen and (max-width: 640px)",
      {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }
    ]
  ],
  animation: {
    draw: function (data) {
      if (data.type === "bar") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays2,
            dur: durations2,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};


//Gráfico Barras
const completedTasksChart = {
  data: {
    labels: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
    series: [[20, 80, 70, 40, 20, 130, 40]]
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: 0,
    high: 150, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  },
  animation: {
    draw: function (data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === "point") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};



module.exports = {
  levelStepsChart,
  pie,
  stepsChart,
  emailsSubscriptionChart,
  completedTasksChart,
  pie
};
