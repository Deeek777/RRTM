var express = require('express');
var usersController = require('../../controllers/usersController');

var router = express.Router();

/*
  Attach the user controler to the /users router
*/
router.get('/users', usersController);

module.exports = router;
