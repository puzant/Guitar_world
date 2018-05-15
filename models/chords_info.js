var mongoose = require('mongoose');

var Chords_info = mongoose.Schema ({
    name: String,
    Description: {
        type:String,
        required: true
    },
    image: {
        type:String,
        required: true
    }
});

module.exports = mongoose.model("Chords", Chords_info);