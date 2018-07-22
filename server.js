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
var serveStatic  = require('serve-static');
var bcrypt       = require('bcrypt-nodejs');
var request      = require('request');
var cheerio      = require('cheerio');
var crypto       = require('crypto');
var backup       = require('mongodb-backup');

require('dotenv').config()
//requiring the config file
var configDB     = require('./config/database.js');

// connect to the MLAB database via username and password
var conn =  mongoose.connect(configDB.database, function(err) {
    if(err) throw err;
    console.log('connected to the remote MLAB database!');
})

require('./config/passport')(passport); //  passport for configuration
app.use(express.static(__dirname + '/views'));
app.use(favicon(__dirname + '/download.png'));

app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms
app.use(bodyParser.urlencoded({extended:true}));


//ejs view engine
app.set("view engine", "ejs");

app.use(session({ secret: 'justthetwoofus' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

require('./routes/routes')(app,passport);
app.use('/contactUs', require('./routes/sendEmailRoute'));
app.use('/tabsLibrary', require('./routes/tabsRoutes'));
app.use('/changePassword', require('./routes/changePassword'));
// app.use('/uploadImages', require('./routes/uploadImages'));

app.get('/backup', function(req, res) {    //route to download mongodb collection
    res.writeHead(200, {
        'Content-Type': 'application/x-tar' // force header for tar download
      });

    backup({
        uri: 'mongodb://puzant:puzant462442@ds235388.mlab.com:35388/guitar_world_db',
        collections:['tabs'],
        stream:res
    })
    
})

var port = process.env.PORT || 8080;
app.listen(port);