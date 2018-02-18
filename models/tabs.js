var moongoose = requir('mongoose');
var Schema    = mongoose.Schema;

var tabsSchema = new Schema ({
    name : String,
    description : {
        genre : String,
        composer : String,
        required : true
    },
    image: {
        type : String,
        required : true
    }
})

module.exports = moongoose.model("tabs", tabsSchema);