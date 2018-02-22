var express = require('express');
var tabsRoutes = express.Router();

//model schema for tabs
var tab = require('../models/tabs');

var test = 'hello';

tabsRoutes.route('/')
.post(function(req, res) {
    var newTabs = new tab(req.body);
    newTabs.save(function(err, tab) {
        if(err) res.status(500).send(err);
        else res.send(tab);
    })
})

//update a document
.put(function(req, res) {
    tab.findByIdAndUpdate(req.params.id,req.body,{new:true},function(err, tab) {
        if(err) res.status(500).send(err);
        else res.send(tab);
    })
})

.get(function(req, res,next) {
    tab.find(function(err, tab) {
        if(err) res.status(500).send(err);
        else {
        res.render('pages/tabs_library/tabs_library',{tabs: tab} );
        }
    });
});

module.exports = tabsRoutes;