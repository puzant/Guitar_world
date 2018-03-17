var express = require('express');
var nodemailer   = require('nodemailer');
var smtpTransport= require('nodemailer-smtp-transport');
var xoauth2      = require('xoauth2');
var emailRoute = express.Router();

emailRoute.route('/')
.post(function(req, res) {
    // using node mailer
    var transport = nodemailer.createTransport({
        service:'gmail',
        auth : {
            user: 'puzant24@gmail.com',
            pass: 'puzant462442'
    }
});
    var mailOptions = {
        from : 'puzant24@gmail.com',
        to: 'PBAKJEJIAN@hotmail.com',
        subject: '5th nodemailer tests',
        html:'<p>testing with post request:)</p>'
        // html:'<div>tab name: '+ req.query.tabName +'</div><div>Composer: '+ req.query.composerName +'</div><div>Genre: '+ req.query.genreName +'</div><div>Img Url: '+ req.query.imageURL +'</div>'  

    };

    transport.sendMail(mailOptions, function(error, info) {
        if(error) res.send(eror);
        else res.send("sent");
    })
})

module.exports = emailRoute;