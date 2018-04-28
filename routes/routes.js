//route.js
module.exports = function(app, passport) {
    let tab = require('../models/tabs')
    app.get('/', function(req, res) {
        res.render("pages/index");
    });

    //route for uploading images
    app.get('/upload', function(req, res) {
        tab.find(function(err, tab) {
            if(err) res.status(500).sned(err)
            else 
            res.render("pages/custom_CMS-2/index", {tabs:tab});
        })
    })

    //special get request to retrive data to to updata them from the custom-CMS
    // app.get('/getData', function(req, res) {
    //     tabs.find(function(err, tabs) {
    //         if(err) throw err;
    //         else res.send(tabs);
        
    //     })
    // })
    //************************************************* */


    app.get('/about', function(req, res) {
        res.render('pages/about');
    })

    app.get('/guitar_videos', function(req, res) {
        res.render('pages/guitar_videos/index')
    })

    app.get('/login', function(req, res) {
        res.render('pages/login/loginPage', { message: req.flash('loginMessage') });
    });

    app.get('/signup', function(req,res) {
        res.render('pages/signup/signupPage', { message:req.flash('signupMessage')})
    });

    app.get('/user_home_page', isLoggedIn, function(req, res) {
        res.render('pages/user_home_page/user_home_page', {
            user:req.user
        });
    });

    //user profile-info
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('pages/user_profile/profile', {
            user:req.user
        });
    })

    //facebook routes to send and retrive the informaiton
    app.get('/auth/facebook', passport.authenticate('facebook', {
        scope : ['public_profile', 'email']
    }));

    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect : '/user_home_page',
            failureRedirect : '/'
    }));

    //google+ routes to send and retrive the information
    app.get('/auth/google', passport.authenticate('google', {scope : ['profile', 'email']}));

    app.get('/auth/google/callback', passport.authenticate('google', {
        successRedirect : '/user_home_page',
        failureRedirect: '/'
    }));

    //twitter auth routes
    app.get('/auth/twitter', passport.authenticate('twitter'));

    app.get('/auth/twitter/callback', passport.authenticate('twitter', {
        successRedirect : '/user_home_page',
        failureRedirect : '/'
    }));

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/')
    });

    //the post section
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/user_home_page', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/user_home_page',
        failureRedirect : '/login',
        failureFlash : true
    }));

} 


function isLoggedIn(req, res, next) {
    if(req.isAuthenticated())
     return next();
     //else
     res.redirect('/');
}