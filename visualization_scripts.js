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


function updateImg(count) {
  //console.log("Clicked");
  var zone = document.getElementById("zoneSelect");
            var img = new Image();
            var div = document.getElementById('results2');
            if (count % 2 == 0) {
              if (zone.value == "0") {
                
                if (div.hasChildNodes()){
                  div.removeChild(div.childNodes[0])
                }else{
                  console.log("no init image located");
                }
                img.onload = function(){
                  div.appendChild(img);
                }

                img.src = "https://github.com/ShujahAhmad/datathon/blob/master/DataPNG.png?raw=true";

              } else if (zone.value == "1") {
                console.log("1");
                var img = new Image();
                var div = document.getElementById('results2');
                if (div.hasChildNodes()){
                  div.removeChild(div.childNodes[0])
                }else{
                  console.log("no init image located");
                }

                var para = document.createElement("P");
                para.innerText = "KNN Model initially reach .5670 accuracy";
                div.appendChild(para);
               

              } else if (zone.value == "2") {
                console.log("2");
                if (div.hasChildNodes()){
                  div.removeChild(div.childNodes[0])
                }else{
                  console.log("no init image located");
                }
                var para = document.createElement("P");
                para.innerText = "Decision Tree Regression Accuracy: .98995";
                div.appendChild(para);
               

              } else if (zone.value == "3") {
                console.log("3");
                if (div.hasChildNodes()){
                  div.removeChild(div.childNodes[0])
                }else{
                  console.log("no init image located");
                }

                var para = document.createElement("P");
                para.innerText = "Linear Regression Results: .9888";
                div.appendChild(para);

              } else if (zone.value == "4") {
                console.log("4");
                if (div.hasChildNodes()){
                  div.removeChild(div.childNodes[0])
                }else{
                  console.log("no init image located");
                }
                var para = document.createElement("P");
                para.innerText = "Decision Tree Classifier: .99276";
                div.appendChild(para);

              } else if (zone.value == "5") {
                console.log("5");
                if (div.hasChildNodes()){
                  div.removeChild(div.childNodes[0])
                }else{
                  console.log("no init image located");
                }

                var para = document.createElement("P");
                para.innerText = "Decision Tree Classifier with Adaboost Classafier: .99383.  Link to final kernal: \"https://shujahahmad.github.io/datathon/kernel219822b862.html\"";
                div.appendChild(para);

              }
              count = 0;
            }
          }


function updateGraph(count) {
//console.log("Clicked");
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


