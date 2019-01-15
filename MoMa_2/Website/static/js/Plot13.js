// You can reproduce this figure in plotly.js with the following code!

// Learn more about plotly.js here: https://plot.ly/javascript/getting-started

/* Here's an example minimal HTML template
 *
 * <!DOCTYPE html>
 *   <head>
 *     <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
 *   </head>
 *   <body>
 *   <!-- Plotly chart will be drawn inside this div -->
 *   <div id="plotly-div"></div>
 *     <script>
 *     // JAVASCRIPT CODE GOES HERE
 *     </script>
 *   </body>
 * </html>
 */

trace1 = {
  labels: ['American', 'German', 'French', 'British', 'Italian', 'Japanese', 'Swiss', 'Dutch', 'Country unknown', 'Austrian'], 
  labelssrc: 'DaveG28:12:3ba353', 
  type: 'pie', 
  values: ['41.63', '7.45', '6.72', '6.69', '4.25', '3.99', '2.24', '2.12', '2.04', '1.95'], 
  valuessrc: 'DaveG28:12:2ff7db'
};
trace2 = {
  labelssrc: 'DaveG28:12:0f71be', 
  type: 'pie', 
  valuessrc: 'DaveG28:12:9b239f'
};
data = [trace1, trace2];
layout = {
  autosize: true, 
  legend: {
    x: 0.9, 
    y: 1.09
  }, 
  title: 'Origin of Artworks', 
  xaxis: {
    autorange: true, 
    range: [-0.5, 64.5], 
    type: 'category'
  }, 
  yaxis: {
    autorange: true, 
    range: [0, 43.82], 
    type: 'linear'
  }
};
Plotly.plot('plotly-div', {
  data: data,
  layout: layout
});