var express      = require("express");
var path         = require('path');
var app          = express();
var mongoose     = require('mongoose');
var passport     = require('passport');
var flash        = require('connect-flash');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var favicon      = require('serve-favicon');
var fs           = require('fs');
var http         = require('http');
var multer       = require('multer');
var upload       = multer()
var os           = require('os');
var serveStatic  = require('serve-static');
var filehandler  = require('filehandler');
var bcrypt       = require('bcrypt-nodejs');

require('dotenv').config()
//requiring the config file
var configDB     = require('./config/database.js');

// connect to the MLAB database via username and password
mongoose.connect(configDB.database, function(err) {
    if(err) throw err;
    console.log('connected to the remote MLAB database!');
})

app.get('/test', function(req, res) {
    res.send('request recived');
})

require('./config/passport')(passport); //  passport for configuration
app.use(express.static(__dirname + '/views'));
app.use(favicon(__dirname + '/download.png'));

app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms
app.use(bodyParser.urlencoded({extended:true}));
app.use(upload.array());

//ejs view engine
app.set("view engine", "ejs");

app.use(session({ secret: 'justthetwoofus' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

require('./routes/routes')(app,passport);
app.use('/emailRoutes', require('./routes/sendEmailRoute'));
app.use('/tabsLibrary', require('./routes/tabsRoutes'));
app.use('/changePassword', require('./routes/changePassword'));

var port = process.env.PORT || 8080;
app.listen(port)