const express = require('express');
// require controllers later
const app = express.Router();

app.get('/', (req, res) => {
  res.render('index');
});

module.exports = app;
