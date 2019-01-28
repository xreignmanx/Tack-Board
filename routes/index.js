const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
var passportGoogle = require('../auth/google');

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

router.get('/auth/google', passportGoogle.authenticate('google'));

router.get('/auth/google/callback',
  passportGoogle.authenticate('google',{ failureRedirect: '/login'} ),
  function(req,res) {
    res.json(req.user);
  });


router.get('/login', function(req,res,next) {
  res.send('go back and register');
})
module.exports = router;
