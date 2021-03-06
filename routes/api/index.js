const path = require("path");
const router = require("express").Router();
const userRoutes = require("./userRoutes");
const boardRoutes = require("./boardRoutes");

// User routes
router.use("/userRoutes", userRoutes);

// Board Routes
router.use("/boardRoutes", boardRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;