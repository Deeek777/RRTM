var usersModel = require('../models/usersModel');


/*
    This works, but the latest standard is to use async and await
    instead of JS Promises. 
*/

function getUsers(req, res, next) {

    if (Object.keys(req.params).length == 0) {
        usersModel.usersModel()
        .then( function(users) {
            // console.log("getUsers | users : ");
            // console.log(users);

            res.jsonp(users);
        });
    }
    else {
        
    }
};

module.exports = getUsers;

