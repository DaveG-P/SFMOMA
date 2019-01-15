
trace1 = {
  labels: ['Gelatin silver print', 'Lithograph', 'Albumen silver print', 'Lithograph, printed in color', 'Etching', 'Chromogenic color print', 'Lithograph, printed in black', 'Pencil on paper', 'Letterpress', 'Ink on paper', 'Oil on canvas', 'Drypoint', 'Video (color, sound)', 'Offset lithograph', 'Woodcut'],
  labelssrc: 'DaveG28:16:696f7b',
  type: 'pie',
  values: ['13551', '6364', '2970', '1796', '1469', '1451', '1449', '1441', '1356', '1260', '1063', '1024', '960', '901', '840'],
  valuessrc: 'DaveG28:16:4b5b73'
};
data = [trace1];
layout = {
  autosize: true,
  xaxis: {
    autorange: true,
    range: [-0.5, 14.5], 
    type: 'category'
  },
  yaxis: {
    autorange: true,
    range: [0, 14264.2105263],
    type: 'linear'
  }
};
Plotly.plot('plotly-div', {
  data: data,
  layout: layout
});
