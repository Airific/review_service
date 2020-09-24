const express = require('express');
const { getReviewsById } = require('../db/index.js');

const app = express();
const PORT = 3003;

app.get('/listings/reviews/:id', (req, res) => {
  const { id } = req.params;
  getReviewsById(id, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.listen(PORT, () => {
  console.log('Server listening on port: ', PORT);
});
