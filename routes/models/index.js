// Going to try to cut out user.js and go directly to the userController in userController.js
// That worked!
const models = require('express').Router();
var userController = require('../../controllers/userController');


/*
    Handle /api/user POST requests
*/  

models.post('/user', userController.postUser);


/*
    Handle /api/user GET requests
*/
models.get('/user', userController.getUser);

/*
    Handle /api/user/userID requests (ie. 
    returning one particular user with the
    supplied userID)
*/
models.get('/user/:userID', userController.getUser);



console.log("routes/models/index.js initialized");

module.exports = models;


