var mongoose = require('mongoose');
var config = require('../config');
mongoose.connect(config.mongodb);
exports.User = mongoose.model('User', require('./user'));
exports.Message = mongoose.model('Message', require('./message'));
exports.Room = mongoose.model('Room', require('./room'));