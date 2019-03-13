// const express = require("express");
// const path = require("path");
// var session = require('express-session');
// var passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy;
// const mongoose = require('mongoose');
// var logger = require('morgan');
// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
// const routes = require("./routes");
// var flash = require('connect-flash');

// const PORT = process.env.PORT || 3001;
// const app = express();

// //Required middleware:
// app.use(logger('dev'));
// app.use(express.urlencoded({extended:true}));
// app.use(express.json());
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json());
// app.use(cookieParser());
// app.use(session({
//   secret: 'Shark Dad',
//   resave: true,
//   saveUninitialized: true
// }));
// app.use(passport.initialize());
// app.use(flash());

// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// };

// /* === Express 404 error handler === */
// app.use(function(req, res, next) {
//   var err = new Error('404 in Server.js, route Not Found');
//   err.status = 404;
//   next(err);
// });

// /* === Server-Side Authentication w/passport.js on our Model === */
// const Account = require('./models/account');
// passport.use(new LocalStrategy(Account.authenticate()));
// passport.serializeUser(Account.serializeUser());
// passport.deserializeUser(Account.deserializeUser());

// // Configure body parsing for AJAX requests
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // Serve up static assets

// // Add routes
// app.use(routes);
 
// //Mongoose connection
// mongoose.connect('mongodb://localhost/tackboardDB',
//   {useNewUrlParser: true}
//   );

// /* === Error Handling === */

// /* Development error handler will print stacktrace */
// if (app.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//       res.status(err.status || 500);
//       res.json({
//           message: err.message,
//           error: err
//       });
//   });
// }

// /* Production error handler no stacktraces leaked to user */
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.json({
//       message: err.message,
//       error: {}
//   });
// });

// app.listen(PORT, function() {
//   console.log(`🌎 ==> API server now on PORT ${PORT}!`);
// });

const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const Data = require("./data");

const API_PORT = 3001;
const app = express();
const router = express.Router();

// this is our MongoDB database
const dbRoute = "mongodb://localhost/tackboardDB";


// connects our back end code with the database
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

// this is our get method
// this method fetches all available data in our database
router.get("/getData", (req, res) => {
  Data.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

// this is our update method
// this method overwrites existing data in our database
router.post("/updateData", (req, res) => {
  const { id, update } = req.body;
  Data.findOneAndUpdate(id, update, err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// this is our delete method
// this method removes existing data in our database
router.delete("/deleteData", (req, res) => {
  const { id } = req.body;
  Data.findOneAndDelete(id, err => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});

// this is our create methid
// this method adds new data in our database
router.post("/putData", (req, res) => {
  let data = new Data();

  const { id, message } = req.body;

  if ((!id && id !== 0) || !message) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }
  data.message = message;
  data.id = id;
  data.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// append /api for our http requests
app.use("/api", router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
