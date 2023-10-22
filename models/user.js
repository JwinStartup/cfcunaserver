const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userSchema = new Schema({
  nom: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
  },
  contact: {
    type: String,
  },

});

module.exports = mongoose.model("User", userSchema);