const router = require("express").Router();
const boardController = require("../../controllers/boardController");

// Matches with "/api/boards"/
router.route("/")
  .get(boardController.findAll)
  .post(boardController.create);

// Matches with "/api/boards/:id"
router
  .route("/:id")
  .get(boardController.findById)
  .put(boardController.update)
  .delete(boardController.remove);

module.exports = router;