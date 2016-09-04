var path = require('path');
var express = require('express');
var app = express();


app.use(express.static(path.resolve(__dirname, './build')));

app.get('/', function (req, res) {
  res.sendFile( path.resolve(__dirname, './build/index.html'));
});

app.listen(process.env.PORT || 1300, function () {
  console.log('App listening on port 1300!');
});