var randomData = [], opts, cobj;
$(document).ready(function(){
  d3.csv("exampleData_Nile.csv", function(data) {
    randomData = data.map(function(i){
      return parseInt(i.Nile)
    })
    opts = {data: randomData, bins: 20, barWidthRatio: 1}
    cobj = new histChart(opts)
  })
})
