var multer       = require('multer');
var express      = require('express');
var imageUpload  = express.Router();
var path         = require('path')
//set a storage engine for multer
const storage = multer.diskStorage({
    destination:'./public/uploads',
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    fileFilter: function(req, file, cb) {
        checkFileType(file, cb);
    }
}).single('myImage');

function checkFileType(file, cb) {
    const filetypes = /jpeg|jpg|png|gif/;    //regex for validation
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if(mimetype && extname) {
        return cb(null, true);
    } else {
        cb('error:images only');
    }
}

imageUpload.route('/')
.post(function(req, res) {
    upload(req, res, (err) => {
        if(err) {
            res.send('error');
        } else {
            console.log(req.file);
            res.send('test');   //can't use res.render to send the error msg, since the page is beind rendered from another route
        }
    })
})

module.exports = imageUpload;