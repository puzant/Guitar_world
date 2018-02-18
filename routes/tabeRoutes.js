var express = require('express');
var tabsRoutes = express.router();
var tab = require('../models/tabs'); //model schema for tabs


tabsRoutes.post('/tabsLibrary', function(req, res) {
    var newTabs = new tab(req.body);
    newTabs.save(function(err, tab) {
        if(err) res.status(500).send(err);
        else res.send(tab);
    })
});

tabsRoutes.route('/tabsLibrary')
.get(function(req, res) {
    tab.find(function(err, tab) {
        if(err) res.status(500).send(err);
        else res.send(tab)
    });
});
