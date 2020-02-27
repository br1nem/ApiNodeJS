'use strict'

var mongooaew = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = Schema({
    name: String,
    description: String, 
    category: String, 
    year: Number, 
    langs: [String]
});

module.exports = mongoose.model('Project', ProjectSchema);

