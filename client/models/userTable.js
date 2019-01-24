const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    User_ID: { type: Number, required: true },
    UserName: { type: String, required: true,},
    UserPassword: { type: String, required: true },
    Email: { type: String, required: true, index:{unique: true}},
    HostedBoards: { type: [String], required: true },
    JoinedBoards: { type: [String], required: true, unique: true }
  });
  
  const User = mongoose.model("User", userSchema);
  
  module.exports = User;