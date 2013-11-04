var fs = require('fs');
var http = require('http');

var flash = require('connect-flash');
var express = require('express');
var config = require('./config.js');

var app = express();
var server = http.createServer(app);
var mongoose = require('mongoose');
var crud = require('./lib/crud.js');
var security = require('./lib/security');
var passport = require('passport');
var mongoStore = require('connect-mongo')(express);

require('./lib/routes/static').addRoutes(app, config);

mongoose.connect(config.mongo.dbUrl + config.security.dbName, function (err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  } else {
    console.log('Connected to Database ' + config.mongo.dbUrl + config.security.dbName);
  }
})

app.use(express.logger());                                  // Log requests to the console
app.use(express.bodyParser());                              // Extract the data from the body of the request - this is needed by the LocalStrategy authenticate method
app.use(express.methodOverride());
app.use(express.cookieParser(config.server.cookieSecret));  // Hash cookies with this secret
app.use(express.cookieSession());                           // Store the session in the (secret) cookie
app.use(express.session({
      secret: config.server.cookieSecret,
      store: new mongoStore({
        url: config.mongo.dbUrl + config.security.dbName,
        collection : 'sessions'
      })
    }));

require('./lib/passportStrategy')(passport);

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(app.router);

require('./lib/routes/appFile').addRoutes(app, config);

// A standard error handler - it picks up any left over errors and returns a nicely formatted server 500 error
app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));



require('./lib/routes/api').addRoutes(app, crud);


require('./lib/routes/security').addRoutes(app, security,passport);

app.use(function(req, res, next) {
    res.locals.message = req.flash();
    next();
  });

//routes = require('./lib/routes/api')(app);

// Start up the server on the port specified in the config
server.listen(config.server.listenPort, '0.0.0.0', 511, function() {
  // Once the server is listening we automatically open up a browser
  var open = require('open');
  open('http://localhost:' + config.server.listenPort + '/');
  
});
console.log('Angular App Server - listening on port: ' + config.server.listenPort);
