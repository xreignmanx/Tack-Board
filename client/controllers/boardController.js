const db = require("../models");

// Defining methods for the BoardController
module.exports = {
  findAll: function(req, res) {
    db.Board.find(req.query)
      .then(dbBoard => res.json(dbBoard))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Board.findById(req.params.id)
      .then(dbBoard => res.json(dbBoard))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Board.create(req.body)
      .then(dbBoard => res.json(dbBoard))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Board.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbBoard => res.json(dbBoard))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Board.findById(req.params.id)
      .then(dbBoard => dbBoard.remove())
      .then(dbBoard => res.json(dbBoard))
      .catch(err => res.status(422).json(err));
  }
};
