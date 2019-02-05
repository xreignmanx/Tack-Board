const router = require("express").Router();
const passport = require('passport');
const userController = require("../../controllers/userController");
const User = require('../../models/userTable.js');

router.route("/")
  .get(userController.getUser);

router.post('/register')
//  User.register(new User{ where: {email: req.body.UserName } }), req.body.password, (err, User) => {
//    if (err) {
//      return res.status(500).send
//    }
//  }.then(function(
//     found) {
//       if (found)
//     }
//   ))

// })
  .post(userController.register);

router.route('/login')
  .post(passport.authenticate('local', {failureRedirect: '/?error=LoginError'}), userController.login); 

router.route('/ping')
  .get(userController.test);


module.exports = router;