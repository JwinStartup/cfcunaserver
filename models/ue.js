const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var ueSchema = new Schema({
  nomue: {
    type: String,
  },
 
  niveau: {
    type: String,
  }
 
});

module.exports = mongoose.model("Ue", ueSchema);