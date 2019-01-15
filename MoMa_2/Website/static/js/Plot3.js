
trace3 = {
  x: ['Photograph', 'Print', 'Illustrated Book', 'Drawing', 'Design', 'Architecture', 'Painting', 'Video', 'Sculpture', 'Film', 'Mies van der Rohe Archive', 'Multiple', 'Installation', 'Audio', 'Periodical' ],
  y: ['26543', '25638', '16695', '11367', '9585', '2758', '2253', '2009', '1557', '977', '858', '830', '434', '417', '353'],
  orientation: 'v',
  type: 'bar',
  xsrc: 'DaveG28:8:8dd614',
  ysrc: 'DaveG28:8:f00cd9'
};
data = [trace3];
layout = {
  autosize: true,
  polar: {radialaxis: {
      autorange: true,
      range: [0, 1]
    }},
  scene: {
    aspectmode: 'auto',
    aspectratio: {
      x: 1,
      y: 1,
      z: 1
    }
  },
  title: 'Medium',
  xaxis: {
    autorange: true,
    range: [-0.5, 26.5],
    type: 'category'
  },
  yaxis: {
    autorange: true,
    range: [0, 27940],
    type: 'linear'
  }
};
Plotly.plot('Mediums', {
  data: data,
  layout: layout
});
