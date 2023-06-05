var xValues = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var yValues = [25, 30, 44, 35, 55, 45 ,45];
var barColors = ["green", "green","green","green","green","black","black"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
 
});