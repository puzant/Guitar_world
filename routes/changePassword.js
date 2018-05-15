var express = require('express');
var changePassword = express.Router();
var user = require('../models/user');
var bcrypt   = require('bcrypt-nodejs');

// update user password
// changePassword.route('/:id')
changePassword.route('/')
.post(function(req, res) {
    console.log(req.body);
    // bcrypt.genSalt(10, function(err, salt) {
    //     bcrypt.hash(req, salt, function(err, hash) {
    //         // Store the hashed password in the DB
    //         if(err) throw err;
    //         else console.log(hash);
    //     });
    // });
})

module.exports = changePassword;