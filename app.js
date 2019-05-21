var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');


/* 
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
 */

 /*
    I was able to find an organization method for express which allowed
    me to understand how Express.js nests various files.  Essentially, 
    I can point this route object to the routes sub-folder which then
    looks for an index.js file which subsequently allows you to point to 
    further nested subfolders and/or *.js files which allow you to 
    process various sub-routes. 

    require() returns the exported function in ./routes/index.js
*/
 const routes = require('./routes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


 /*
    Let's attach the primary route function to "/api".  
    Everything branches off from this point.
 */
 app.use('/api', routes);


module.exports = app;
