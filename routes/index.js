const routes = require('express').Router();

/*
  Load the various sub index.js files which contain further
  router definitions
 */

const models = require('./models');
const collections = require('./collections');
//const views = require('./views');

/*
  Let's route the particular subfolder routes.  
*/
routes.use('/models', models);
routes.use('/collections', collections);
// routes.use('/views', views);  // this has not yet been developed 


/*
  Send back a generic message if someone goes to /api/
*/
routes.get('/', (req, res) => {
  res.send('Nothing here');
});

console.log("routes/index.js initialized");

module.exports = routes;
