const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var preinscriptionSchema = new Schema({
  nom: {
    type: String,
  },
  prenoms: {
    type: String,
  },
  filiere: {
    type: String,
  },
  numero: {
    type: String,
  },
  email: {
    type: String,
  },
  tel: {
    type: String,
  },
  annee: {
    type: String,
  },
  diplome: {
    type: String,
  },
  decisionType: {
    type: String,
  },
  decisionDiplome: {
    type: String,
  },
  decisionObservation: {
    type: String,
  },
  whatsapp: {
    type: String,
  },
});

module.exports = mongoose.model("Preinscription", preinscriptionSchema);