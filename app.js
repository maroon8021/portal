
var express = require("express");
var app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

var server = app.listen(3000, function(){
  console.log("Node.js is listening to PORT:" + server.address().port);
});

app.get('/dom-formatter', function(req, res, next){
  res.render('dom-formatter');
});


