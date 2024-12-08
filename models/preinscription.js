const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var preinscriptionSchema = new Schema({
  nom: {
    type: String,
  },
  ufr: {
    type: String,
  },
  prenoms: {
    type: String,
  },
  filiere: {
    type: String,
  },
  tel: {
    type: String,
  },
  dateNaissance: {
    type: String,
  },
  email: {
    type: String,
  },
  whatshapp: {
    type: String,
  },
  photo: {
    type: String,
  },
  formation: {
    type: String,
  },
 
  niveau: {
    type: String,
  },
  numero: {
    type: String,
  },
 
  diplomePiece: {
    type: String,
  },
  statut:{
    type: String,
  },
  anneeUniversitaire:{
    type: String,
  },
  anneeExclu:{
    type: String,
  },
  lieuNaissance:{
    type: String,
  },
  nationnalite:{
    type: String,
  },
  numeroCarte:{
    type: String,
  },
  numeroTable:{
    type: String,
  },
  parcours:{
    type: String,
  },
  profession:{
    type: String,
  },
  serie:{
    type: String,
  },
  tel:{
    type: String,
  },
  ueArattraper:[{
    type:Schema.Types.ObjectId,
     ref:'Ue' 
  }],
  analyserPar:{
     type:Schema.Types.ObjectId,
     ref:'User'
  }
},{
    timestamps: true
  });

module.exports = mongoose.model("Preinscription", preinscriptionSchema);