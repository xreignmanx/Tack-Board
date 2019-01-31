const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require('passport');

router.route("/")
  .get(userController.getUser);

router.route('/register')
  .post(userController.register);

router.get('/login')
  .post(passport.authenticate('local', {failureRedirect: '/?error=LoginError'}), userController.login); 

router.route('/ping')
  .get(userController.test);


module.exports = router;