module.exports = {
        'facebookAuth' : {
    'clientID'     : '153303268804583',
    'clientSecret' : '3222cc04c7a635bb8d6423e115cf9707',
    'callbackURL'  : 'http://localhost:8080/auth/facebook/callback',
    'profileURL'   : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
    'profileFields' : ['id', 'email', 'name'] // For requesting permissions from Facebook API 
},
'twitterAuth' : {
    'consumerKey'       : 'your-consumer-key-here',
    'consumerSecret'    : 'your-client-secret-here',
    'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
},

'googleAuth' : {
    'clientID'      : '407224589115-mmg7m773tp2tardhp8k2k9foirat1jtq.apps.googleusercontent.com',
    'clientSecret'  : '4gyFknc1LaKAe1UbKx9wK9mf',
    'callbackURL'   : 'http://localhost:8080/auth/google/callback'
 }
}