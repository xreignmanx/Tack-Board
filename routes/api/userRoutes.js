const router = require("express").Router();
const passport = require('passport');
const userController = require("../../controllers/userController");

router.route("/")
  .get(userController.getUser);

router.route('/register')
  .post(userController.register);

router.get('/login')
  .post(passport.authenticate('local'), userController.login); 

router.route('/ping')
  .get(userController.test);


module.exports = router;