var mongoose = require('mongoose');

var tabsSchema = mongoose.Schema ({
    name : String,
    composer : {
        type:String,
        required: true
    },
    genre : {
        type: String,
        required: true
    },
    image: {
        type : String,
        required : true
    }
});

module.exports = mongoose.model("tabs", tabsSchema);