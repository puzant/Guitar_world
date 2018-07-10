var mongoose = require('mongoose');

var Chords_images = mongoose.Schema ({
 path: {type:String},
 caption: {type:String}
});

module.exports = mongoose.model("Chords", Chords_images);