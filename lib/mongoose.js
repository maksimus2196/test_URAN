var mongoose = require('mongoose');
var config = require('../config/index');

mongoose.createConnection(config.get('mongoose:uri'), config.get('mongoose:options'));

module.exports = mongoose;