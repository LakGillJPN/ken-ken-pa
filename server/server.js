const express = require('express')
const path = require('path');

function setupServer() {
  const app = express();

  app.use(express.static(path.resolve(__dirname, '../ken-ken-pa/build')));
  app.use(express.json());

  app.get('/hello', (req, res) => {
    res.send('world');
  })

  return app;
};


module.exports = setupServer;