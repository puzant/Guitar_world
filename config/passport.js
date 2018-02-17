//config/passport.js

var localStrategy     = require('passport-local').Strategy
var FacebookStrategy  = require('passport-facebook').Strategy
var googleStrategy    = require('passport-google-oauth').OAuth2Strategy
//the user model
var User         = require('../models/user');
var configAuth   = require('./auth')
module.exports = function(passport) {
    
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });
    
    passport.deserializeUser(function(id,done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });
    //signup user
    passport.use('local-signup', new localStrategy ({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
    function(req, email,password, done) {
        process.nextTick(function() {
            User.findOne({'local.email' : email }, function(err, user) {
                if(err)
                return done(err);
                if(user) {
                    return done(null, false, req.flash('signupMessage', 'that email is already taken'))
                } else {
                    var newUser = new User();
                    newUser.local.email = email;
                    newUser.local.password = newUser.generateHash(password);
                    //save the user
                    newUser.save(function(err) {
                        if(err) throw err;
                        return done(null, newUser);
                    });
                }
            });
        });
    }));

    //login user
    passport.use('local-login', new localStrategy({ 
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true
    },
    function(req, email, password, done) {
        User.findOne({'local.email' : email}, function(err, user) {
            if(err) return done(err);
            if(!user) return done(null, false, req.flash('loginMessage' , 'no user was found'));
            if(!user.validPassword(password))
             return done(null, false, req.flash('loginMessage' , 'wrong paswword buddy!'));
             return done(null, user);
        })
    }));

    //facebook authentication code
    passport.use(new FacebookStrategy ({
        clientID        :   configAuth.facebookAuth.clientID,
        clientSecret    :   configAuth.facebookAuth.clientSecret,
        callbackURL     :   configAuth.facebookAuth.callbackURL,
        profileFields   :   configAuth.facebookAuth.profileFields
    },
    function(token, refreshToken, profile, done) {
        process.nextTick(function() {
            User.findOne({'facebook.id'  :  profile.id}, function(err, user) {
                if(err) return done(err);   //error connecting to the database
                if(user) {
                    return done(null, user) //if user is found
                } else {
                    var newUser = new User();
                    newUser.facebook.id     = profile.id;
                    newUser.facebook.token  = token;
                    newUser.facebook.name   = profile.name.givenName + ' ' + profile.name.familyName;
                    newUser.facebook.email  = profile.emails[0].value;
                    //save the user in the database
                    newUser.save(function(err) {
                        if(err) throw err;
                        return done(null, user);
                    });  
                }
            });
        });
    }));

    //google+ authentication code 
    passport.use(new googleStrategy ({ 
        clientID        :   configAuth.googleAuth.clientID,
        clientSecret    :   configAuth.googleAuth.clientSecret,
        callbackURL     :   configAuth.googleAuth.callbackURL 
    },
    function(token, refreshToken, profile, done) {
        process.nextTick(function() {
            User.findOne({'google.id' : profile.id}, function(err, user) {
                if(err) return done(err);
                if(user) {
                    return done(null, user);
                } else {
                    var newUser = new User();
                    newUser.google.id    = profile.id;
                    newUser.google.token = token;
                    newUser.google.name  = profile.displayName;
                    newUser.google.email = profile.emails[0].value;
                    //save the user
                    newUser.save(function(err) {
                        if(err) throw err;
                        return done(null, newUser);
                    });
                }
            });
        });
    }));

};