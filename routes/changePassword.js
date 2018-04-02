var express = require('express');
var changePassword = express.Router();
var user = require('../models/user');

changePassword.route('/')
.get(function(req, res) {
    res.render('pages/change_password/change_password')
})

//search for username email
.post(function(req, res) {
    user.findById(req.user._id, function (err, user) {
        if (err) {
            res.status(500).send(err);
        } else {
          console.log('hello')
        }
    });
})

module.exports = changePassword;