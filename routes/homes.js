const express = require("express");
const { listePreinscription } = require("../controllers/preinscriptionControlle");
const router = express.Router();

router.get("/", listePreinscription);


module.exports = {routage:router}
