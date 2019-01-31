const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');


const UserSchema = new Schema({
    User_ID: { type: Number, required: true },
    UserName: { type: String, required: true,},
    UserPassword: { type: String, required: true },
    Email: { type: String, required: true, index:{unique: true}},
    HostedBoards: { type: [String], required: true },
    JoinedBoards: { type: [String], required: true, unique: true }
  });

  UserSchema.plugin(passportLocalMongoose);
  
  const User = mongoose.model("User", UserSchema);
  
  module.exports = User;