//route.js
module.exports = function(app, passport) {
    app.get('/', function(req, res) {
        res.render("pages/index");
    });

    app.get('/about', function(req, res) {
        res.render('pages/about');
    })

    app.get('/login', function(req, res) {
        res.render('pages/login/loginPage', { message: req.flash('loginMessage') });
    });

    app.get('/signup', function(req,res) {
        res.render('pages/signup/signupPage', { message:req.flash('signupMessage')})
    });

    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('pages/profile_page/profile', {
            user:req.user
        });
    });

    //facebook routes to send and retrive the informaiton
    app.get('/auth/facebook', passport.authenticate('facebook', {
        scope : ['public_profile', 'email']
    }));

    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect : '/profile',
            failureRedirect : '/'
    }));

    //google+ routes to send and retrive the information
    app.get('/auth/google', passport.authenticate('google', {scope : ['profile', 'email']}));

    app.get('/auth/google/callback', passport.authenticate('google', {
        successRedirect : '/profile',
        failureRedirect: '/'
    }));

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/')
    });

    //the post section
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/profile',
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