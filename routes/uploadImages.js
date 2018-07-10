const express = require('express');
const uploadRoute = express.Router();
const multer  = require('multer');

const chordsImages = require('../models/chords_images');



module.exports = upload;