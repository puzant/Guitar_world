var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
    local : {
        email: String,
        password: String
    },
    facebook: {
        id: String,
        tokan: String,
        name: String,
        email: String,
    },
    google: {
        id:String,
        tokan: String,
        email: String,
        name: String,
    },
    twitter: {
        id:String,
        tokan: String,
        displayName: String,
        username: String,
        
    }
});

//hash the passwords
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8),null);
};

//check if the password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', userSchema);