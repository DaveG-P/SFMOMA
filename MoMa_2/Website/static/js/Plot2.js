
trace2 = {
  labels: ['American', 'German', 'French', 'British', 'Italian', 'Japanese', 'Swiss', 'Dutch', 'Country unknown', 'Austrian', 'Canadian', 'Russian', 'Brazilian', 'Spanish', 'Argentine'],
  type: 'pie',
  values: ['41.63', '7.45', '6.72', '6.69', '4.25', '3.99', '2.24', '2.12', '2.04', '1.95', '1.57', '1.51', '1.24', '1.23', '1.11'],

};
data = [trace2];
layout = {
  autosize: true,
  legend: {
    x: 0.90,
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
Plotly.plot('Countries', {
  data: data,
  layout: layout
});
