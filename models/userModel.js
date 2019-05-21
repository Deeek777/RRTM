var MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const dbName = "rrtm";
var response = 0;

/*
    This class should model the data as it is in the database

    This isn't currently working
*/
/*
class userModel {
    userID;                 // bigint   
    title;                  // string
    first;                  // string
    last;                   // string
    middle;                 // string
    suffix;                 // string
    classOf;                // smallint
    gender;                 // varchar 1
    school;                 // string
    email1;                 // string
    email2;                 // string
    phone1;                 // int
    phone2;                 // int
    tShirtSize;             // string
    hoodieSize;             // string
    primaryDivisionID;      // int
    secondaryDivisionID;    // int

    constructor() {

    }

    static getUserModel(userID) {
        return getUserModelData(userID);
    }

    userModelEmpty() {
        return "Nothing to see here!";
    }

    // -- INTERNAL METHODS --

    getUserModelData(userID) {
        return MongoClient.connect(url, { useNewUrlParser: true })
        .then( function(client) {
            
            return client.db(dbName);
        })
        .then( function(dbo) {
            
            return dbo.collection('rrtm_users').findOne({"userID": parseInt(userID)});
        })
        .then( function(result) {

            if (result == null) {
                return "We didn't find anything. :(";
            }

            return result;
        })
        .catch (function (error) {
            console.log(error);
        });
    }
};
*/

/*
This works, but the latest standard is to use async and await
instead of JS Promises. Not sure if I should investigate that 
or not.
*/

function userModel(userID) {

    return MongoClient.connect(url, { useNewUrlParser: true })
    .then( function(client) {
        
        return client.db(dbName);
    })
    .then( function(dbo) {
        
        return dbo.collection('rrtm_users').findOne({"userID": parseInt(userID)});
    })
    .then( function(result) {

        if (result == null) {
            return "We didn't find anything. :(";
        }

        return result;
    })
    .catch (function (error) {
        console.log(error);
    });
};


function userModelEmpty() {
    return "Nothing to see here!";
};


module.exports = {
    userModel,
    userModelEmpty
};


//module.exports = userModel;