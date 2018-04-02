var express = require('express');
var nodemailer   = require('nodemailer');
var smtpTransport= require('nodemailer-smtp-transport');
var xoauth2      = require('xoauth2');
var emailRoute = express.Router();

emailRoute.route('/')
.get(function(req,res) {
    res.render('pages/contact_us/index.ejs')
})

.post(function(req, res) {
    // using node mailer
    var transport = nodemailer.createTransport({
        service:'gmail',
        host:"smtp.gmail.com",
        auth : {
            user: 'puzant24@gmail.com',
            pass: 'puzant462442'
    }
});
    var mailOptions = {
        from : req.body.email,
        to: 'PBAKJEJIAN@hotmail.com',
        subject: req.body.subject,
        html: req.body.message

    };

    transport.sendMail(mailOptions, function(error, info) {
        if(error) res.send(error);
        else console.log("sent");
    })
})

module.exports = emailRoute;