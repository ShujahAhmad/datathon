var x = [];
for (var i = 0; i < 500; i ++) {
	x[i] = Math.random();
}

var trace = {
    x: x,
    type: 'histogram',
  };
var data = [trace];
Plotly.newPlot('myDiv', data, {}, {showSendToCloud: true});

function updateGraph(count) {
var zone = document.getElementById("zoneSelect");
          var temp = document.getElementById("myDiv");
          if (count % 2 == 0) {
            if (zone.value == "1") {
              var x = [];
              for (var i = 0; i < 10; i++) {
                x[i] = Math.random();


                var trace = {
                  x: x,
                  type: 'histogram',
                };
                var data = [trace];
                Plotly.newPlot(temp, data, {}, {
                  showSendToCloud: true
                });
              }
            } else if (zone.value = "0") {
              var x = [];
              for (var i = 0; i < 1000; i++) {
                x[i] = Math.random();
              }

              var trace = {
                x: x,
                type: 'histogram',
              };
              var data = [trace];
              Plotly.newPlot(temp, data, {}, {
                showSendToCloud: true
              });
            } else if (zone.value = "2") {
              var x = [];
              for (var i = 0; i < 1000; i++) {
                x[i] = Math.random();
              }

              var trace = {
                x: x,
                type: 'histogram',
              };
              var data = [trace];
              Plotly.newPlot(temp, data, {}, {
                showSendToCloud: true
              });
            } else if (zone.value = "3") {
              var x = [];
              for (var i = 0; i < 1000; i++) {
                x[i] = Math.random();
              }

              var trace = {
                x: x,
                type: 'histogram',
              };
              var data = [trace];
              Plotly.newPlot(temp, data, {}, {
                showSendToCloud: true
              });
            } else if (zone.value = "4") {
              var x = [];
              for (var i = 0; i < 1000; i++) {
                x[i] = Math.random();
              }

              var trace = {
                x: x,
                type: 'histogram',
              };
              var data = [trace];
              Plotly.newPlot(temp, data, {}, {
                showSendToCloud: true
              });
            } else if (zone.value = "5") {
              var x = [];
              for (var i = 0; i < 1000; i++) {
                x[i] = Math.random();
              }

              var trace = {
                x: x,
                type: 'histogram',
              };
              var data = [trace];
              Plotly.newPlot(temp, data, {}, {
                showSendToCloud: true
              });
            }
            count = 0;
          }
        }