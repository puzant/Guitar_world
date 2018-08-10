var mongoose = require('mongoose');

var chordsImages = mongoose.Schema({
    name:String,
    image: {
        type:String,
        required:true
    },
    description: String
});

module.exports = mongoose.model("chords", chordsImages);
