var express = require('express');
var chordsImages = express.Router();

var chords = require('../models/chords_images');

chordsImages.route('/')
.post(function(req, res) {
    var newChord = new chords(req.body);
    newChord.save(function(err, chords) {
        if(err) res.status(500).send(err);
        else res.status(200).render('partials/upload-success');
    
    })
})



module.exports = chordsImages;