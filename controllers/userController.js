var userModel = require('../models/userModel');
//var um = new userModel();


function getUser(req, res, next) {
    console.log("getUser | req.params : ");
    console.log(req.params);

    

    //console.log(userModel);
    //console.log(um);

    // check to see if any parameters were passed in
    if (Object.keys(req.params).length == 0) {
        console.log("getUser requested without a param");
        res.send(userModel.userModelEmpty());
    }
    else if (!isNaN(req.params.userID)) {
        // console.log(userModel);
        userModel.userModel(req.params.userID)
        .then( function(user) {
            console.log("getUser | user : ");
            console.log(user);
            console.log("getUser | req.params.userID : ");
            console.log(req.params.userID);

            res.jsonp(user);
        })
        .catch( function(err) {
            console.log(err);
        });
    }
    else {
        console.log("Searching by name");

        res.send("Non-number specified.  Search collections instead");
    }
    //next();
};

function postUser(req, res, next) {
    
};

module.exports = { 
    getUser, 
    postUser 
};