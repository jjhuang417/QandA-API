require('newrelic');
const express = require('express');
const app = express();
const port = 3000;
const router = require('./router.js');
const TOKEN = require('../loaderio.js');


app.use(express.json());

// *************
// Request Handling
// *************
app.use('/qa', router);
app.get(`/${TOKEN}`, (req, res) => {
  res.status(200).send(`${TOKEN}`)
});

// *************
// Server
// *************
  app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
  });

  module.exports = port;