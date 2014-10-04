var express = require('express');
var path    = require('path');
var config = {
  port: 9000,
  host: '127.0.0.1'
}

var app = express()

app.use( express.static( path.join( __dirname, './client' ) ) );

app.listen(config.port, config.host, function(){
  console.log('Express static server listening at '+config.host+' on port '+config.port);
});

