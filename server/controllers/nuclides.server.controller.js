var mongoose = require('mongoose'),
    Models = require('../models/nuclides.server.model'),
    Nuclides = Models.nuclides,
    ICRP = Models.icrp,
    lungClasses = Models.lungClasses


    exports.list = function(req, res) {
        Nuclides.find({}, 'Nuclide', function(err, data){
          if (err) throw err;
          // console.log(Nuclides.find({}));
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.json(data);
        }).sort({Nuclide: 'ascending'});
      };

    exports.getICRP = function(req, res) {
      ICRP.find({}, function(err, data){
        if (err) throw err;
        // console.log(Nuclides.find({}));
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json(data);
      }).sort({Nuclide: 'ascending'});
    };  

    exports.getClasses = function(req, res) {
      lungClasses.find({}, function(err, data){
        if (err) throw err;
        // console.log(Nuclides.find({}));
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json(data);
      }).sort({Nuclide: 'ascending'});
    };