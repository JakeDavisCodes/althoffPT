const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

// MIDDLE WARE
app.use(morgan('dev'));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../'))); // SERVE CLIENT FILES

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname,'../home.html'));
});
app.get('/home', function(req, res){
  res.sendFile(path.join(__dirname,'../home.html'));
});
app.get('/services', function(req, res){
  res.sendFile(path.join(__dirname,'../services.html'));
});
app.get('/error', function(req, res){
  res.sendFile(path.join(__dirname,'../error.html'));
});

app.use(function(req, res, next) {
  console.log('404')
  res.status(404);

  // respond with html page
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname,'../error.html'));
    return;
  }

  // respond with json
  if (req.accepts('json')) {
    res.json({ error: 'Not found' });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
});

app.listen(3000);
console.log('LISTENING AT PORT: 3000');
