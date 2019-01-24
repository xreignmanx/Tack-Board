const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boardSchema = new Schema({
    board_ID: { type: Number, required: true },
    board_name: {type: String, required: true},
    host_ID: { type: Number, required: true },
    client_IDs: { type: [String], required: true,},
    boardSettings: { type: [String], required: true },
    tackData: { type: [String], required: true, index:{unique: true}},
     });

  
  const Board = mongoose.model("Board", boardSchema);
  
  module.exports = Board;