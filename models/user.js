const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userSchema = new Schema({
  nom: {
    type: String,
  },
 
  password: {
    type: String,
  },
  role: {
    type: String,
  },

},
{
  timestamps: true
});

module.exports = mongoose.model("User", userSchema);