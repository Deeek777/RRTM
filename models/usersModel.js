var MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const dbName = "rrtm";
var response = 0;

/*
    This works, but the latest standard is to use async and await
    instead of JS Promises. 
*/

function usersModel() {
    return MongoClient.connect(url, { useNewUrlParser: true })
    .then( function(client) {
        // Return the dbo object after we load the database
        return client.db(dbName);
    })
    .then( function(dbo) {
        return dbo.collection('rrtm_users').find().toArray();
    })
    .then( function(result) {
        response = result;
        return result;
    })
    .catch (function (error) {
        console.log(error);
    });
};

/*
    Need to flnish this...
*/

function usersModelSearch(searchString) {
    return MongoClient.connect(url, { useNewUrlParser: true })
    .then( function(client) {
        // Return the dbo object after we load the database
        return client.db(dbName);
    })
    .then( function(dbo) {
        return dbo.collection('rrtm_users').find().toArray();
    })
    .then( function(result) {
        response = result;
        return result;
    })
    .catch (function (error) {
        console.log(error);
    });
}

module.exports = {
    usersModel
};

