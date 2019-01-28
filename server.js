const express = require("express");
const path = require("path");
var session = require('express-session');
var passport = require('passport');
// Require Mongoose
const mongoose = require('mongoose');
// Require routes
const routes = require("./routes");


const PORT = process.env.PORT || 3000;
const app = express();


//Required middleware:
app.use(session({
  secret: 'Shark Dad',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());


// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API
app.use(routes);
 
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/tackboardDB',
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
  );
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on PORT ${PORT}!`);
});
