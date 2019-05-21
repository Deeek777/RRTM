var express = require('express');
var userController = require('../../controllers/userController');

var router = express.Router();

/*
  Attach the user controler to the /users router
*/

/*
router.get('/u', function (req, res, next) {
  res.send("/u middleware");
});
*/

// console.log("user.js");
// console.log(userController);
router.get('/user/:userID', userController);


/*
router.get('/u', function (req, res, next) {
  res.send("/u middleware");
});
*/





module.exports = router;
