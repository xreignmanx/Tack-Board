const db = require("../models");
const passport = require('passport');
// Defining methods for the UserController
module.exports = {
  getUser: function(req, res) {
    if(req.user) {
      return res.status(200).json({
        user: req.user,
        authenticated: true
      });
    } else {
      return res.status(401).json({
        error: 'User not Authenticated',
        authenticated: false
      });
    }
  },
  register: function(req, res, next) {
    console.log('/register handler', req.body);
    db.User.register(new User({ username: req.body.username }), req.body.password, (err, user) => {
      if(err) {
        return res.status(500).send({ error: err.message });
      }
      passport.authenticate('local')(req,res,() => {
        req.session.save((err) => {
            if (err) {
              return next(err);
            }
            res.status(200).send('OK');
          });
        });
    });

  },
  login: function(req,res,next) {
    console.log('/login handler');
    req.session.save((err) => {
      if(err) {
        return next(err);
      }
      res.status(200).send('Ok');

    });
  },
  logout: function(req,res,next){
    req.logout();
    req.session.save((err)=> {
      if (err) {
        return next(err);
      }
      res.status(200).send('OK');
    });

  },
  test: function(req,res,next){
    console.log('Ping ${req.statusCode}');
      res.status(200).send("More Ping");
  }
};
