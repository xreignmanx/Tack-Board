var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth2').Strategy;

var User = require('../models/userTable');
var config = require('../_config');
var init = require('./init');

passport.use(new GoogleStrategy({
    clientID: config.google.clientID,
    clientSecret: config.google.clientSecret,
    callbackURL: config.google.callbackURL,
    passReqToCallback: true
}, 
function(request, accessToken, refreshToken, profile, done) {

    var searchQuery = {
        name: profile.displayName
    };

    var updates = {
        name: profile.displayName,
        someID: profile.id
    };

    var options = {
        upsert: true
    };

    User.findOrCreate({ googleId: profile.id}, function(err,user) {
        return done(err, user);
    });
}));

init();

module.exports = passport;