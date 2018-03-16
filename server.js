var express      = require("express");
var app          = express();
var mongoose     = require('mongoose');
var passport     = require('passport');
var flash        = require('connect-flash');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

//requiring the config file
var configDB     = require('./config/database.js');

// connect to the MLAB database via username and password
mongoose.connect(configDB.database, function(err) {
    if(err) throw err;
    console.log('connected to the remote MLAB database!');
})

require('./config/passport')(passport); //  passport for configuration
app.use(express.static(__dirname + '/views'));


app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

//ejs view engine
app.set("view engine", "ejs");

app.use(session({ secret: 'justthetwoofus' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

require('./routes/routes')(app,passport);
app.use('/emailRoutes', require('./routes/sendEmailRoute'));
app.use('/tabsLibrary', require('./routes/tabsRoutes'));
// app.use('/changePasswords', require('./routes/changePassword'));

app.listen(8080);
console.log('server is online on port 8080');
