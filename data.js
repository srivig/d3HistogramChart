$(document).ready(function(){
  var randomData = [];
  d3.csv("Nile.csv", function(data) {
    randomData = data.map(function(i){
      return parseInt(i.Nile)
    })
  var opts = {data: randomData, bins: 20, barWidthRatio: 10}
  var cobj = new histChart(opts)
  })
})
