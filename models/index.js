var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/tasklists');

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");
