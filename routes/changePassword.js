var express = require('express');
var changePassword = express.Router();
var user = require('../models/user');
var bcrypt   = require('bcrypt-nodejs');

changePassword.route('/')
.get(function(req, res) {
    res.render('pages/change_password/change_password')
})


// update user password
.post(function(req, res) {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(req.body.password, salt, function(err, hash) {
            // Store the hashed password in the DB
            if(err) throw err;
            else console.log(hash);
        });
    });
    // user.findByIdAndUpdaet(
    //     {id:_id},
    //     {$set:{local:{password:hash}}},
    //     {new:true},
    //     function(err, doc) {
    //         if(err) throw err;
    //         else console.log(doc)
    //     }
    // )
})

module.exports = changePassword;