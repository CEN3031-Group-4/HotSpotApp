const mongoose = require('mongoose');
const nuclideSchema = new mongoose.Schema({
    'Nuclide':{type: String},
    'Half-life':{type: Number}
},{'collection':'nuclides'});

const icrpSchema = new mongoose.Schema({
    'Nuclide':{type: String},
    'ICRP':{type: String}
},{'collection':'icrp'});

const lungSchema = new mongoose.Schema({
    'Nuclide':{type: String},
    'Age':{type: Number},
    'LungClass':{type: String},
    'Dose':{type: Number}
},{'collection':'lungclasses'});



var nuclides = mongoose.model('nuclides', nuclideSchema);

var lungClasses = mongoose.model('lungclasses', lungSchema);

var icrp = mongoose.model('icrp', icrpSchema);

module.exports = {nuclides,icrp,lungClasses};