const collections = require('express').Router();
var usersController = require('../../controllers/usersController');

collections.get('/users', usersController);

collections.get('/users/:userSearchString', usersController);

console.log("routes/collections/index.js initialized");

module.exports = collections;
