const express = require('express');
const app = express();

app.get('/api/test', (req, res) => {
  console.log('??');
  res.send({data: 'hello wordl'});
});

app.listen(3000, () => {
  console.log('server start port:3000');
});
