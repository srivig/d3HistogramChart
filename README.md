# d3HistogramChart
D3 function to draw histogram chart

#### usage

initialise:

```javascript
var randomData = [10,30,33,55,55,33,12,2,3,1], opts, cobj;
//define options
options = {data: randomData, bins: 20, barWidthRatio: 10}
//draw the chart
cobj = new histChart(options)
```

options (default values):

```javascript
var opts = {
  data :[1,2,3,4,5,6,7,8,9,10,6,7,8,9,10,6,7,8,9,10];
  bins: 5,
  width: 1000,
  height: 500,
  padding: 100,
  selctorName: 'body',
  barColor: 'steelblue',
  barWidthRatio: '2'
}
```

Tip:
You can re-draw the chart with different options:

eg.
```javascript
var randomData = [10,30,33,55,55,33,12,2,3,1], opts, cobj;

options = {data: randomData, bins: 20, barWidthRatio: 10}
cobj = new histChart(options)

//change options
cobj.bins = 10;
cobj.barColor = 'red';

//re draw the chart
cobj.draw()

```

TODO
----
- Add labels
- Tool tips
